import Courses from "@/components/Courses";
import Footer from "@/components/Footer";

export default function Explain() {
  const courseData = [
    {
      title: "Course 1",
      description: "Description for course 1",
      youtubeId: "qrmwZdWzfvs?si=X6LvSjK092aB12vz"
    },
    {
      title: "Course 2",
      description: "Description for course 2",
      youtubeId: "06A5X87nA_M?si=mCAN_Aq-49El1oX2"
    },
  ];

  return (
    <>
      <Courses courses={courseData} />
      <Footer />
    </>
  );
}
