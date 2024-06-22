'use client'

import React from 'react';
import { useChat, Message } from "ai/react";

export default function ChatComponent() {
    const { input, handleInputChange, handleSubmit, isLoading, messages } = useChat();

    return (
        <div className="bg-gray-50 h-screen">
            {messages.map((message: Message) => {
                return (
                    <div className="mx-20 grid grid-cols-1" key={message.id}>
                        {message.role === 'assistant'
                            ? <h3 className="text-lg font-semibold mt-2 text-[#ff1c19]">AI Counselor</h3>
                            : <h3 className="text-lg font-semibold mt-2 justify-self-end text-[#ff1c19]">You</h3>
                        }
                        {message.content.split("/n").map((currentTextBlocks: string, index: number) => {
                            if (currentTextBlocks === "") {
                                return (
                                    <p key={message.id + index}>&nbsp;</p>
                                );
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
                );
            })}
            <div className="h-full p-12">
                <form className="mx-24 mb-4 fixed inset-x-0 bottom-0" onSubmit={handleSubmit}>
                    <input
                        className="rounded-md mt-2 w-full bg-[#ff1c19] text-white p-2"
                        placeholder={'Ask something...'}
                        value={input}
                        onChange={handleInputChange}
                    />
                    <button className='text-[#ff1c19] bg-white border-2 border-[#ff1c19] rounded-md w-16 py-1 hover:bg-[#ff1c19] hover:text-white transition-colors duration-300 mt-2 font-semibold'>
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}
