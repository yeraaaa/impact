import Courses from "@/components/Courses";
import Footer from "@/components/Footer";

export default function Explain() {
  const courseData = [
    {
      title: "",
      description: "",
      youtubeId: "qrmwZdWzfvs?si=X6LvSjK092aB12vz"
    },
  ];

  return (
    <>
      <Courses courses={courseData} />
      <Footer />
    </>
  );
}
