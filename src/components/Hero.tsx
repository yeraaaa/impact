"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero() {
    const [buttonVisible, setButtonVisible] = useState(false);

    useEffect(() => {
        setButtonVisible(true);
    }, []);

    return (
        <>
            <div className='h-screen flex justify-center items-center align-center text-center bg-gray-50'>
                <div className='mb-16'>
                    <h3 className=''>
                        Powered by Fertilitas Team
                    </h3>
                    <h1 className='md:text-5xl text-3xl tracking-tight mt-3 mb-3 font-extrabold'>
                        WITH YOU AT<br></br>
                    </h1>
                    <h1 className='md:text-5xl text-3xl tracking-tight mb-5 font-extrabold'>
                        <span className='text-[#ff1c19]'>EVERY STEP</span> 
                    </h1>
                    <Link href='./chat'>
                        <button className={`text-[#ff1c19] bg-white border-2 border-[#ff1c19] rounded-md px-6 font-medium py-1 hover:bg-[#ff1c19] hover:text-white transition-colors duration-300 ${buttonVisible ? 'animate-slide-in' : ''}`}>
                            Apply
                        </button>
                    </Link>
                </div>
            </div>
            <style jsx>{`
                @keyframes slide-in {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }

                .animate-slide-in {
                    animation: slide-in 1s ease-out forwards;
                }
            `}</style>
        </>
    );
}
