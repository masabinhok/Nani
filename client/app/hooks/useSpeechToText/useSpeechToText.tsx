'use client'
import { useEffect, useRef, useState } from 'react'

interface IOptions {
  interimResults?: boolean;
  lang?: string;
  continuous?: boolean;
}

const useSpeechToText = (options: IOptions) => {
  const [isListening, setIsListening] = useState<boolean>(false)
  const [transcript, setTranscript] = useState<string>('')
  const [error, setError] = useState<string | null>(null);
  const recognitionRef = useRef<SpeechRecognition>(null);

  useEffect(() => {
    if (!('webkitSpeechRecognition' in window)) {
      console.error('Speech recognition is not supported');
      return;
    }

    recognitionRef.current = new window.webkitSpeechRecognition();
    const recognition = recognitionRef.current;
    recognition.interimResults = options.interimResults ?? true;
    recognition.lang = options.lang || 'en-US';
    recognition.continuous = options.continuous || false;

    if ("webkitSpeechGrammarList" in window) {
      const grammar = '#JSGF V1.0; grammar punctuation; public <punctuation> = period | comma | question mark | exclamation mark;';
      const speechRecognitionList = new window.webkitSpeechGrammarList();
      speechRecognitionList.addFromString(grammar, 1);
      recognition.grammars = speechRecognitionList;
    }


    recognition.onresult = (event) => {
      const text = Array.from(event.results)
        .map(result => result[0].transcript)
        .join('');
      setTranscript(text);
    };


    recognition.onerror = (event) => {
      console.error("Speech Recognition Error", event.error)
      setError(`Speech Recognition Error: ${event.error}`);
    }

    recognition.onend = () => {
      setIsListening(false);
      setTranscript('');
    }

    return () => {
      if (recognitionRef.current && isListening) {
        recognitionRef.current.stop();
      }
    };

  }, [JSON.stringify(options)])

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      recognitionRef.current.start()
      setIsListening(true)
    }
  }
  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop()
      setIsListening(false)
    }
  }

  return {
    isListening, startListening, stopListening, transcript, error
  }
}

export default useSpeechToText