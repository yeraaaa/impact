'use client'

import React from 'react';
import { useChat, Message } from "ai/react";

export default function ChatComponent() {
    const { input, handleInputChange, handleSubmit, isLoading, messages } = useChat();

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col justify-between">
            <div className="flex-1 overflow-y-auto">
                {messages.map((message: Message) => (
                    <div className="mx-4 md:mx-20 grid grid-cols-1" key={message.id}>
                        {message.role === 'assistant'
                            ? <h3 className="text-lg font-semibold mt-2 text-[#ff1c19]">AI Counselor</h3>
                            : <h3 className="text-lg font-semibold mt-2 justify-self-end text-[#ff1c19]">You</h3>
                        }
                        {message.content.split("/n").map((currentTextBlocks: string, index: number) => {
                            if (currentTextBlocks === "") {
                                return <p key={message.id + index}>&nbsp;</p>;
                            } else {
                                return (
                                    <div className="w-full grid grid-cols-1" key={message.id + index}>
                                        {message.role === 'user'
                                            ? <p className="text-md justify-self-end flex items-end justify-end mt-2 text-white bg-[#ff1c19] p-2 rounded-lg">{currentTextBlocks}</p>
                                            : <p className="text-md bg-[#ff1c19] justify-self-start mt-2 text-white p-2 rounded-lg">{currentTextBlocks}</p>
                                        }
                                    </div>
                                );
                            }
                        })}
                    </div>
                ))}
            </div>
            <div className="p-4 bg-gray-50">
                <form className="flex flex-col md:flex-row items-center mx-4 md:mx-24 mb-24" onSubmit={handleSubmit}>
                    <input
                        className="rounded-md w-full bg-[#ff1c19] text-white p-2 mb-2 md:mb-0 md:mr-2"
                        placeholder="Ask something..."
                        value={input}
                        onChange={handleInputChange}
                    />
                    <button
                        className="text-[#ff1c19] bg-white border-2 border-[#ff1c19] rounded-md w-full md:w-20 py-2 md:py-1 hover:bg-[#ff1c19] hover:text-white transition-colors duration-300 font-semibold"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}
