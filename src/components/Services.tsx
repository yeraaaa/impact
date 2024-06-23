import Image from 'next/image';

export default function Services() {
  return (
    <div className='flex flex-col items-center min-h-screen px-4 py-8 sm:px-6 lg:px-16 bg-gray-50'>
      <h1 className='font-extrabold text-3xl sm:text-5xl lg:text-7xl text-center mb-12 lg:mb-20'>
        Our Special Services
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 w-full justify-items-center'>
        {services.map((service, index) => (
          <div
            key={index}
            className='flex flex-col bg-[#ff1c19] w-full max-w-xs sm:max-w-sm lg:max-w-md p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl'
          >
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold mt-3 text-center text-white'>{service.title}</h2>
            <p className='text-md sm:text-lg lg:text-xl mt-2 mb-4 font-medium text-center text-gray-200'>{service.description}</p>
            <Image className='rounded-lg mx-auto my-4' src={service.imageSrc} width={240} height={180} alt={service.alt} />
            <button className='bg-white text-[#ff1c19] rounded-lg w-full h-12 font-bold mt-auto transition-colors duration-300 hover:bg-[#ff1d1942] hover:text-white'>
              <a href={service.link}>Get Started</a>
            </button>
          </div>
        ))}
      </div>
      <div className='flex flex-col items-center w-full mt-20'>
        <h2 className='font-extrabold text-3xl sm:text-5xl lg:text-6xl text-center mb-8'>
          Road Map
        </h2>
        <Image className='rounded-lg' src='/plan.png' width={960} height={540} alt='Road Map' />
      </div>
    </div>
  );
}

const services = [
  {
    title: 'AI Counselor',
    description: 'AI Powered Technology',
    imageSrc: '/ai.svg',
    alt: 'AI Advisory',
    link: '/chat',
  },
  {
    title: 'Full Maintenance',
    description: 'Complete Support for your admission',
    imageSrc: '/support.svg',
    alt: 'Best Design',
    link: '/about',
  },
  {
    title: 'Best Education',
    description: 'High Quality courses for preparation',
    imageSrc: '/education.svg',
    alt: 'Best Design',
    link: '/courses',
  },
  {
    title: 'Free Consulting',
    description: 'Quick start of your future',
    imageSrc: '/map.svg',
    alt: 'Best Design',
    link: '/about',
  },
];
