"use client";

import { useEffect, useState } from 'react';
import Modal from 'react-modal';

const About = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className={`app-container ${isAnimated ? 'animate-slideInFromRight' : ''}`}>
      <div className='flex flex-col justify-center items-center mb-48 text-center'>
        <h1 className='text-6xl mb-4 font-extrabold'>
          About Us
        </h1>
        <p className='text-lg font-semibold text-gray-600 w-3/4 md:w-1/2'>
          We are the No. 1 organization for admission abroad and preparation for standardized exams. Impact is not just a company, it is a movement that brings together students, and citizens who integrate their families around the world to study abroad.
        </p>
        <h4 className='md:text-4xl text-3xl tracking-tight mt-5 font-bold'>
          Let&apos;s make your dream come true
        </h4>
        <h4 className='md:text-2xl text-xl font-semibold'>
          Apply and our manager will contact you
        </h4>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-3/4 md:w-1/2 h-36 mb-10 mt-3'>
          <div className='bg-white shadow-md rounded-lg flex flex-col justify-center items-center p-4'>
            <h3 className='text-4xl font-extrabold text-[#ff1c19]'>300+</h3>
            <p className='text-lg text-gray-600'>Students learning</p>
          </div>
          <div className='bg-white shadow-md rounded-lg flex flex-col justify-center items-center p-4'>
            <h3 className='text-4xl font-extrabold text-[#ff1c19]'>2000+</h3>
            <p className='text-lg text-gray-600'>Happy Students</p>
          </div>
          <div className='bg-white shadow-md rounded-lg flex flex-col justify-center items-center p-4'>
            <h3 className='text-4xl font-extrabold text-[#ff1c19]'>100%</h3>
            <p className='text-lg text-gray-600'>Guaranteed admission</p>
          </div>
        </div>
        <button
          onClick={openModal}
          className='text-[#ff1c19] bg-white border-2 border-[#ff1c19] rounded-md px-6 font-medium py-1 hover:bg-[#ff1c19] hover:text-white transition-colors duration-300'
        >
          Apply Now
        </button>
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
      </div>
    </div>
  );
};

export default About;
