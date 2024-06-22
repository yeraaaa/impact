import Image from 'next/image';
import Link from 'next/link';

const mentorsData = [
  {
    name: 'Alnur',
    title: 'Mentor in strategic planning',
    image: '/', 
  },
  {
    name: 'Assel',
    title: 'Mentor for internships and interviews',
    image: '/', 
  },
];

export default function Mentors() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-extrabold text-center mb-10">Our Mentors</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
