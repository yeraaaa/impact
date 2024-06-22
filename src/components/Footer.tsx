import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      <div className="flex px-6 py-4 items-center justify-between w-full backdrop-blur-lg">
        <div className="flex items-center text-center gap-4 md:gap-10">
          <Link href="/" className="font-bold">
            <p>
              <Image width={200} height={100} src="/logo.svg" alt="logo" />
            </p>
          </Link>
          <div className="flex md:gap-8 gap-4 md:text-md text-lg font-medium">
            <Link href="/about">
              <p className="hover:text-[#ff1c19]">&copy; Privacy Policy</p>
            </Link>
            <a href="tel:+77076229637" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff1c19]">
              <FaPhone size={30}/>+7 (707)622-96-37
            </a>
            <a href="mailto:serikyer0204@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff1c19]">
              <FaEnvelope size={30} />info@impact-admissions.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
