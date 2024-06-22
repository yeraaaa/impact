import { FaEnvelope, FaPhone, FaTiktok, FaInstagram, FaYoutube, FaLinkedin, FaFacebook } from 'react-icons/fa';

export default function ContactUs() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 bg-gray-50 text-white">
      <div className="flex flex-col items-center justify-center w-full max-w-4xl px-6 py-8 bg-white text-black shadow-md rounded-md">
        <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
        <div className="flex flex-col items-start gap-4 text-sm md:text-md font-medium w-full mb-8">
          <a href="tel:+77076229637" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#ff1c19] transition-colors duration-300 ease-in-out">
            <FaPhone size={20} />+7 (707)622-96-37
          </a>
          <a href="mailto:serikyer0204@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#ff1c19] transition-colors duration-300 ease-in-out">
            <FaEnvelope size={20} />info@impact-admissions.com
          </a>
          <a href="https://www.tiktok.com/@yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#ff1c19] transition-colors duration-300 ease-in-out">
            <FaTiktok size={20} />TikTok
          </a>
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#ff1c19] transition-colors duration-300 ease-in-out">
            <FaInstagram size={20} />Instagram
          </a>
          <a href="https://www.youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#ff1c19] transition-colors duration-300 ease-in-out">
            <FaYoutube size={20} />YouTube
          </a>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#ff1c19] transition-colors duration-300 ease-in-out">
            <FaLinkedin size={20} />LinkedIn
          </a>
          <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#ff1c19] transition-colors duration-300 ease-in-out">
            <FaFacebook size={20} />Facebook
          </a>
        </div>
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-4 text-center">Send Us a Message</h2>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Your Name" className="p-2 border border-gray-300 rounded-md" />
            <input type="email" placeholder="Your Email" className="p-2 border border-gray-300 rounded-md" />
            <textarea placeholder="Your Message" className="p-2 border border-gray-300 rounded-md h-32"></textarea>
            <button type="submit" className="p-2 bg-white border-2 border-[#ff1c19] text-[#ff1c19] rounded-md hover:bg-[#ff1c19] hover:text-white transition-colors duration-300 ease-in-out font-semibold">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
