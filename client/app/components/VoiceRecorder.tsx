'use client'
import React, { useState } from 'react'
import Loader from './Loader'
import Image from 'next/image'
import NaniAvatar from "@/public/images/avatars/nani_avatar.png";
import useSpeechToText from '../hooks/useSpeechToText/useSpeechToText';

const VoiceRecorder = () => {
  const [prompt, setPrompt] = useState<string>("");
  const { isListening, stopListening, error, startListening, transcript } = useSpeechToText({ continuous: true, interimResults: true, lang: 'en-US' });

  const handleListening = () => {
    isListening ? stopVoiceInput() : startListening();
  }

  const stopVoiceInput = () => {
    setPrompt(prevVal => prevVal + (transcript.length ? (prevVal.length ? " " : "") + transcript : ""));
    stopListening();
  }

  const handleSend = () => {
    try {
      if (prompt.length === 0) {
        console.log(prompt);
        throw new Error("Prompt cannot be empty");
      }
      console.log(prompt);
      // Send the prompt to the server
    }
    catch (e) {
      console.error(e);
    } finally {
      setPrompt("");
    }
  }

  return (
    <div className='flex-center flex-col gap-5'>
      <div>
        <Image
          src={NaniAvatar}
          className="h-[400px] w-auto aspect-square object-cover"
          alt="Nani AI avatar image"
        />

      </div>
      <div className="fixed bottom-20 flex-between gap-5 w-full border-2 rounded-xl max-w-[500px]">
        <div>
          <button className='flex-center p-2' onClick={() => handleListening()}>
            {isListening ? <Loader /> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5  text-brand-pri ">
              <path d="M7 4a3 3 0 0 1 6 0v6a3 3 0 1 1-6 0V4Z" />
              <path d="M5.5 9.643a.75.75 0 0 0-1.5 0V10c0 3.06 2.29 5.585 5.25 5.954V17.5h-1.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-1.5v-1.546A6.001 6.001 0 0 0 16 10v-.357a.75.75 0 0 0-1.5 0V10a4.5 4.5 0 0 1-9 0v-.357Z" />
            </svg>
            }
          </button>
        </div>
        <input disabled={isListening} value={isListening ? prompt + (transcript.length ? (prompt.length ? " " : "") + transcript : "") : prompt
        } onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setPrompt(e.target.value);
        }} type="text" className=" p-2 w-full outline-none rounded-xl px-6 bg-white " />
        <button disabled={isListening} style={{
          cursor: isListening ? "not-allowed" : "pointer"
        }} onClick={handleSend} className="text-brand-pri px-4 flex-center rounded-xl"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
            <path d="M3.105 2.288a.75.75 0 0 0-.826.95l1.414 4.926A1.5 1.5 0 0 0 5.135 9.25h6.115a.75.75 0 0 1 0 1.5H5.135a1.5 1.5 0 0 0-1.442 1.086l-1.414 4.926a.75.75 0 0 0 .826.95 28.897 28.897 0 0 0 15.293-7.155.75.75 0 0 0 0-1.114A28.897 28.897 0 0 0 3.105 2.288Z" />
          </svg>
        </button>
      </div>
      {error && <p className='text-red-500 text-sm text-center absolute bottom-10'>{error}</p>}
    </div>

  )
}

export default VoiceRecorder

