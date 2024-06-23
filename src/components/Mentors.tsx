import Image from 'next/image';
import Link from 'next/link';

const mentorsData = [
  {
    name: 'Alnur',
    title: 'Mentor in strategic planning',
    image: '/alnur.jpg', 
    SAT: 'SAT Subject Math & Phys - 800/700',
    IELTS: 'IELTS - 8.0'
  },
  {
    name: 'Assel',
    title: 'Mentor for internships and interviews',
    image: '/assel.jpg', 
    SAT: 'SAT Subject Math & Phys - 800/800',
    IELTS : 'IELTS - 8.0'
  },
  {
    name: 'Dameli',
    title: 'Mentor for admission to Europe',
    image: '/dameli.png', 
    SAT: 'SAT 1560',
    IELTS : 'IELTS - 7.5'
  },
  {
    name: 'Asem',
    title: 'Mentor for admission to Asian universities',
    image: '/asem.png', 
    SAT: 'SAT Subject Math & Phys - 800/800',
    IELTS : 'IELTS - 8.0'
  },
  {
    name: 'Aruzhan',
    title: 'Mentor for extracurricular activities and achievements',
    image: '/aruzhan.png', 
    SAT: 'SAT Subject Math & Phys - 800/700',
    IELTS : 'IELTS - 8.0'
  },
  {
    name: 'Daulet',
    title: 'Mentor on motivational essays',
    image: '/daulet.png', 
    SAT: 'SAT 1560',
    IELTS : 'IELTS - 7.5'
  },
];

export default function Mentors() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-10">Our Mentors</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentorsData.map((mentor, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  width={150}
                  height={150}
                  className="rounded-full mb-4"
                />
                <h2 className="text-xl font-bold mb-2">{mentor.name}</h2>
                <p className="text-gray-700">{mentor.title}</p>
                <p className="text-gray-600 mt-2">{mentor.SAT}</p>
                <p className="text-gray-600">{mentor.IELTS}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/">
              <p className="text-[#ff1c19] bg-white border-2 border-[#ff1c19] rounded-md px-6 py-2 font-medium hover:bg-[#ff1c19] hover:text-white transition-colors duration-300">Back to Home</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
