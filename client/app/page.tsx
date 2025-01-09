'use client'

import { ChangeEvent, useState } from "react";
import Image from "next/image";
import NaniAvatar from "@/public/images/avatars/nani_avatar.png";
import VoiceRecorder from "./components/VoiceRecorder";

export default function Home() {
  const [prompt, setPrompt] = useState<string>("");
  const handleSend = () => {
    try {
      if (prompt.length === 0) {
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
    <main className="flex-center w-full min-h-[calc(100vh-6rem)]  bg-white">
      <div>
        <Image
          src={NaniAvatar}
          className="h-[400px] w-auto aspect-square object-cover"
          alt="Nani AI avatar image"
        />

      </div>
      <div className="fixed bottom-20 flex-between gap-5 w-full border-2 rounded-xl max-w-[500px]">
        <VoiceRecorder />
        <input value={prompt} onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setPrompt(e.target.value);
        }} type="text" className=" p-2 w-full outline-none rounded-xl px-6 " />
        <button onClick={handleSend} className="text-brand-pri px-4 flex-center rounded-xl"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
          <path d="M3.105 2.288a.75.75 0 0 0-.826.95l1.414 4.926A1.5 1.5 0 0 0 5.135 9.25h6.115a.75.75 0 0 1 0 1.5H5.135a1.5 1.5 0 0 0-1.442 1.086l-1.414 4.926a.75.75 0 0 0 .826.95 28.897 28.897 0 0 0 15.293-7.155.75.75 0 0 0 0-1.114A28.897 28.897 0 0 0 3.105 2.288Z" />
        </svg>
        </button>
      </div>
    </main>
  );
}
