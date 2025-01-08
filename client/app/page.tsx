'use client'

import { ChangeEvent, useState } from "react";
import Image from "next/image";
import NaniAvatar from "@/public/images/avatars/nani_avatar.png";

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
        <input value={prompt} onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setPrompt(e.target.value);
        }} type="text" className=" p-2 w-full outline-none rounded-xl px-6 " />
        <button onClick={handleSend} className="bg-brand-pri p-2 px-6 rounded-xl">Send</button>
      </div>
    </main>
  );
}
