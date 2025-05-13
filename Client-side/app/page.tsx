/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { io } from "socket.io-client";

export default function Home() {
  const [socket, setSocket] = useState<any>();
  console.log('socket', socket);
  
  const [inbox, setInbox] = useState(["hello", "nice"]);
  const [message, setMessage] = useState("New Test Message");

  const handleSendMessage = ()=>{
    socket.emit('message', message)
  }
  useEffect(() => {
    const socket = io("http://localhost:3000");
    socket.on('message', (msg)=>{
      setInbox([...inbox, msg])
    })
    setSocket(socket)
  }, []);

  return (
    <div className="bg-white text-black flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="">Welcome to the Chat App</h1>

      <div className="border p-6 rounded-lg">
        <div className="border p-1 rounded-lg">{message}</div>
      </div>
      {inbox.map((msg) => (
        <div key={msg}>{msg}</div>
      ))}

      <div>
        <input value={message} onChange={(e)=> setMessage(e.target.value)} type="text" className="border p-1" />
        <button className="" onClick={handleSendMessage}>Send Message</button>
      </div>
    </div>
  );
}
