import Link from "next/link";
import { FaEnvelope, FaPhone, FaTiktok, FaInstagram, FaYoutube, FaLinkedin, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      <div className="flex flex-col items-center px-6 py-4 w-full bg-gray-100">
        <div className="flex flex-wrap justify-center gap-4 text-sm md:text-md font-medium text-center">
          <Link href="/privacy-policy">
            <p className="hover:text-[#ff1c19] transition-colors duration-300 ease-in-out">&copy; Privacy Policy</p>
          </Link>
          <a href="tel:+77076229637" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#ff1c19] transition-colors duration-300 ease-in-out">
            <FaPhone size={20} />+7 (707)622-96-37
          </a>
          <a href="mailto:serikyer0204@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#ff1c19] transition-colors duration-300 ease-in-out">
            <FaEnvelope size={20} />info@impact-admissions.com
          </a>
        </div>
      </div>
    </>
  );
}
