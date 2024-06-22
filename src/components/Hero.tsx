"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Image from 'next/image';

export default function Hero() {
    const [buttonVisible, setButtonVisible] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        setButtonVisible(true);
    }, []);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <>
            <div className='h-screen flex justify-center items-center text-center bg-gray-50'>
                <div className='flex flex-col md:flex-row justify-between items-center w-full max-w-6xl px-4'>
                    <div className={`mb-16 md:w-1/2 ${buttonVisible ? 'animate-slide-in' : ''}`}>
                        <h3 className=''>
                            Powered by Fertilitas Team
                        </h3>
                        <h1 className='md:text-5xl text-3xl tracking-tight mt-3 mb-3 font-extrabold'>
                            WITH YOU AT<br></br>
                        </h1>
                        <h1 className='md:text-5xl text-3xl tracking-tight mb-5 font-extrabold'>
                            <span className='text-[#ff1c19]'>EVERY STEP</span> 
                        </h1>
                        <button
                            onClick={openModal}
                            className='text-[#ff1c19] bg-white border-2 border-[#ff1c19] rounded-md px-6 font-medium py-1 hover:bg-[#ff1c19] hover:text-white transition-colors duration-300'
                        >
                            Apply Now
                        </button>
                    </div>
                    <div className='md:w-1/2 flex justify-center'>
                        <Image src="/undraw_certificate_re_yadi.svg" alt="Illustration" width={400} height={300} className="mx-auto mb-8" />
                    </div>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Application Form"
                className={`modal ${modalIsOpen ? 'open' : ''}`}
                overlayClassName="overlay"
            >
                <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-full">
                    <h2 className="text-2xl font-bold mb-4">Submit your application</h2>
                    <input type="text" placeholder="Your Name" className="mb-4 p-2 border rounded w-full" />
                    <input type="tel" placeholder="+7 (999) 999-99-99" className="mb-4 p-2 border rounded w-full" />
                    <button
                        onClick={closeModal}
                        className='text-[#ff1c19] bg-white border-2 border-[#ff1c19] rounded-md px-6 font-medium py-1 hover:bg-[#ff1c19] hover:text-white transition-colors duration-300'
                    >
                        Send
                    </button>
                    <p className="text-sm text-gray-600 mt-4">Our managers will contact you soon!</p>
                </div>
            </Modal>
            <style jsx>{`
                @keyframes slide-in {
                    from {
                        transform: translateX(-100%);
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

                .modal {
                    transition: opacity 0.3s ease, transform 0.3s ease;
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%) scale(0.9); /* Initial scale for transition */
                    width: 100%;
                    max-width: 500px; /* Adjust for responsiveness */
                    background: white;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
                    z-index: 1000;
                    opacity: 0; /* Initial opacity for transition */
                }

                .modal.open {
                    transform: translate(-50%, -50%) scale(1); /* Final scale for transition */
                    opacity: 1; /* Final opacity for transition */
                }

                .overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.75);
                    z-index: 999;
                }
            `}</style>
        </>
    );
}
