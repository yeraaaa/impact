import Link from "next/link";
import { FaEnvelope, FaPhone, FaTiktok, FaInstagram, FaYoutube, FaLinkedin, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      <div className="flex flex-col items-center px-6 py-4 w-full">
        <div className="flex flex-wrap justify-center gap-4 text-sm md:text-md font-medium">
          <Link href="/privacy-policy">
            <p className="hover:text-[#ff1c19] transition-colors duration-300 ease-in-out">&copy; Privacy Policy</p>
          </Link>
          <a href="tel:+77076229637" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#ff1c19] transition-colors duration-300 ease-in-out">
            <FaPhone size={20} />+7 (707)622-96-37
          </a>
          <a href="mailto:serikyer0204@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#ff1c19] transition-colors duration-300 ease-in-out">
            <FaEnvelope size={20} />info@impact-admissions.com
          </a>
          <a href="https://www.tiktok.com/@impact.admissions" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#ff1c19] transition-colors duration-300 ease-in-out">
            <FaTiktok size={20} />TikTok
          </a>
          <a href="https://www.instagram.com/impact.admissions/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#ff1c19] transition-colors duration-300 ease-in-out">
            <FaInstagram size={20} />Instagram
          </a>
          <a href="https://www.youtube.com/channel/UCINqtYUUNRQaWNHuwmBPLQw" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#ff1c19] transition-colors duration-300 ease-in-out">
            <FaYoutube size={20} />YouTube
          </a>
          <a href="https://kz.linkedin.com/company/impact-admissions" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#ff1c19] transition-colors duration-300 ease-in-out">
            <FaLinkedin size={20} />LinkedIn
          </a>
          <a href="https://www.facebook.com/people/Impact-Admissions/100076521301169/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#ff1c19] transition-colors duration-300 ease-in-out">
            <FaFacebook size={20} />Facebook
          </a>
        </div>
      </div>
    </>
  );
}
