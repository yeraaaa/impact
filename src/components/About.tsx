"use client";

import { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import Modal from 'react-modal';

const About = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [submissionStatus, setSubmissionStatus] = useState('');

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData); // Optional: handle response
        setSubmissionStatus('Form submitted successfully!');
      } else {
        setSubmissionStatus('Failed to submit form.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionStatus('Error submitting form.');
    }
    closeModal();
  };

  return (
    <div className={`bg-gray-50 min-h-screen flex flex-col items-center justify-center ${isAnimated ? 'animate-slideInFromRight' : ''}`}>
      <div className='flex flex-col justify-center items-center mb-12 md:mb-24 text-center px-4 md:px-0 w-full'>
        <h1 className='text-3xl md:text-5xl mb-4 font-extrabold'>About Us</h1>
        <p className='text-base md:text-lg font-semibold text-gray-600 w-full md:w-3/4 lg:w-1/2'>
          We are the No. 1 organization for admission abroad and preparation for standardized exams. Impact is not just a company, it is a movement that brings together students, and citizens who integrate their families around the world to study abroad.
        </p>
        <h4 className='text-xl md:text-2xl lg:text-3xl tracking-tight mt-5 font-bold'>
          Let&apos;s make your dream come true
        </h4>
        <h4 className='text-lg md:text-xl font-semibold'>Apply and our manager will contact you</h4>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full md:w-3/4 lg:w-1/2 mb-10 mt-3'>
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
          className='apply-button text-[#ff1c19] bg-white border-2 border-[#ff1c19] rounded-md px-4 py-2 font-medium text-base hover:bg-[#ff1c19] hover:text-white transition-colors duration-300'
        >
          Apply Now
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Application Form"
          className="modal"
          overlayClassName="overlay"
        >
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Submit your application</h2>
            <form onSubmit={handleSubmit} className="w-full">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="mb-4 p-2 border rounded w-full"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="+7 (999) 999-99-99"
                value={formData.phone}
                onChange={handleChange}
                className="mb-4 p-2 border rounded w-full"
                required
              />
              <button
                type="submit"
                className='text-[#ff1c19] bg-white border-2 border-[#ff1c19] rounded-md px-6 font-medium py-1 hover:bg-[#ff1c19] hover:text-white transition-colors duration-300'
              >
                Send
              </button>
            </form>
            <p className="text-sm text-gray-600 mt-4">Our managers will contact you soon!</p>
          </div>
        </Modal>
      </div>
      {submissionStatus && (
        <div className="mt-4 text-center">
          <p className="text-sm font-semibold">{submissionStatus}</p>
        </div>
      )}
    </div>
  );
};

export default About;
