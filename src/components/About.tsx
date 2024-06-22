"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

const About = () => {
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        setIsAnimated(true);
    }, []);

    return (
        <div className={`flex justify-center items-center bg-gray-50 h-screen ${isAnimated ? 'animate-slideInFromRight' : ''}`}>
            <div className='flex flex-col justify-center items-center mb-48 text-center'>
                <h1 className='text-6xl mb-12 font-extrabold'>
                    About Us
                </h1>
                <p className='text-lg font-semibold text-gray-600 w-full'>
                    We are the No. 1 company for admission to the best universities in the world
                </p>
                <h4 className='md:text-3xl text-2xl tracking-tight my-5 font-extrabold'>
                    Let&apos;s make your dream come true<br></br>
                    Apply and our manager will contact you
                </h4>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full h-36 mb-10 mt-3 '>
                    <div className='bg-white shadow-md rounded-lg'>
                        <h3 className='text-4xl font-extrabold text-[#ff1c19]'>300+</h3>
                        <p className='text-lg text-gray-600'>Students learning</p>
                    </div>
                    <div className='bg-white shadow-md rounded-lg'>
                        <h3 className='text-4xl font-extrabold text-[#ff1c19]'>2000+</h3>
                        <p className='text-lg text-gray-600'>Happy Students</p>
                    </div>
                    <div className=' bg-white shadow-md rounded-lg'>
                        <h3 className='text-4xl font-extrabold text-[#ff1c19]'>100%</h3>
                        <p className='text-lg text-gray-600'>Guaranteed admission</p>
                    </div>
                </div>
                <Link href='/chat'>
                    <button className='text-[#ff1c19] bg-white border-2 border-[#ff1c19] rounded-md px-6 font-medium py-1 hover:bg-[#ff1c19] hover:text-white transition-colors duration-300'>
                        Apply Now
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default About;
