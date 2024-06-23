"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="flex px-6 py-4 items-center justify-between w-full backdrop-blur-lg">
        <div className="flex items-center gap-4 md:gap-10">
          <Link href="./" className="font-bold">
            <Image width={100} height={50} src="/logo.png" alt="logo" />
          </Link>
          <div className="hidden md:flex gap-6 text-lg font-medium">
            <Link className="hover:text-[#ff1c19]" href="./about">About</Link>
            <Link className="hover:text-[#ff1c19]" href="./chat">AI Counselor</Link>
            <Link className="hover:text-[#ff1c19]" href="./mentors">Mentors</Link>
            <Link className="hover:text-[#ff1c19]" href="./courses">Courses</Link>
            <Link className="hover:text-[#ff1c19]" href="./contacts">Contacts</Link>
          </div>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={`md:hidden transition-transform duration-300 ease-in-out ${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col gap-4 px-6 py-4 backdrop-blur-lg">
          <Link className="hover:text-[#ff1c19]" href="./about" onClick={toggleMenu}>About</Link>
          <Link className="hover:text-[#ff1c19]" href="./chat" onClick={toggleMenu}>AI Counselor</Link>
          <Link className="hover:text-[#ff1c19]" href="./mentors" onClick={toggleMenu}>Mentors</Link>
          <Link className="hover:text-[#ff1c19]" href="./courses" onClick={toggleMenu}>Courses</Link>
          <Link className="hover:text-[#ff1c19]" href="./contacts" onClick={toggleMenu}>Contacts</Link>
        </div>
      </div>
    </>
  );
}
