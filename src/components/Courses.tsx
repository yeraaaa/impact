import React from 'react';

interface CourseProps {
  title: string;
  description: string;
  youtubeId: string;
}

const VideoGrid: React.FC<{ videos: string[] }> = ({ videos }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
    {videos.map((video, index) => (
      <div key={index} className="aspect-w-16 aspect-h-9">
        <iframe 
          width="560" 
          height="315" 
          src={`https://www.youtube.com/embed/${video}`} 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen>
        </iframe>
      </div>
    ))}
  </div>
);

const Course: React.FC<CourseProps> = ({ title, description, youtubeId }) => {
  const impactVideos = [
    'bu9yzAmnW5M?si=OuqSzepJxKv7V2EK',
    'tHsn9miwQ9E?si=EU9Af49tFOwL90hx',
    '-amWZWkK9Bs?si=7aBQNMc49raeldlP',
    '7Ns8VP1Uhmg?si=hW4GOydzE1-l4jGP'
  ];

  const courseVideos = [
    'qrmwZdWzfvs?si=X6LvSjK092aB12vz',
    '06A5X87nA_M?si=mCAN_Aq-49El1oX2',
    'l98aa1ShJWs?si=s9ECJAUgWa_CE4Mi',
    '85Xhdt1Ipms?si=LQOfKHsZgLal2ItD'
  ];

  return (
    <div className="border-b border-gray-200 mb-8 pb-8">
      <h2 className="text-3xl font-bold text-red-600">{title}</h2>
      <p className="text-gray-700 mt-2">{description}</p>
      <div className="mt-6">
        <h3 className="text-5xl font-semibold text-red-600 text-center mb-4">Impact Blogs and Interviews</h3>
        <VideoGrid videos={impactVideos} />
        <h3 className="text-5xl font-semibold text-red-600 text-center my-4">Free Courses</h3>
        <VideoGrid videos={courseVideos} />
      </div>
    </div>
  );
};

const Courses: React.FC<{ courses: CourseProps[] }> = ({ courses }) => (
  <div>
    {courses.map((course, index) => (
      <Course key={index} {...course} />
    ))}
  </div>
);

export default Courses;
