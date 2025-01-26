import React, { useContext, useState } from "react";
import { ThemeContext } from "../App";
import AboutSection from "../components/AboutSection";
import SkillCard from "../components/SkillCard";
import TestimonialCard from "../components/TestimonialCard";
import haile from "../assets/haile.jpg";
import lidetu from "../assets/lidetu.jpg";
import abinet from "../assets/abinet.jpg";

const Home = () => {
  const { darkMode } = useContext(ThemeContext);

  const skills = [
    { skill: "React", level: 60 },
    { skill: "TailwindCSS", level: 60 },
    { skill: "JavaScript", level: 60 },
    { skill: "Penetration Testing", level: 50 },
    { skill: "Reverse Engineering", level: 40 },
    { skill: "Metasploit", level: 50 },
    { skill: "Wireshark", level: 50 },
    { skill: "Burp Suite", level: 50 },
    { skill: "Nmap", level: 90 },
    { skill: "Kali Linux", level: 70 },
  ];

  const testimonials = [
    {
      name: "Abinet Degefe, IS student",
      quote: `This guy's got a real passion for cybersecurity and is always on top of the latest challenges. He approaches every problem with determination, and his skills are growing fast. You can always count on him to dive deep and find a solution!`,
      image: abinet,
    },
    {
      name: "Lidetu Tadesse, IS student",
      quote: `Haileamlak is the digital Sherlock Holmes, always sniffing out vulnerabilities and cracking codes (legally, of course!). Witnessing his journey into cybersecurity has been like watching a thrilling tech-noir movie. Keep up the awesome work, hacker extraordinaire!`,
      image: lidetu,
    },
    {
      name: "Third Guy to Comment",
      quote: `This dude is incredibly dedicated and driven. His passion for cybersecurity is unmatched, and I know he'll go far in his career. It's inspiring to see his commitment to learning and growing every day.`,
      image: haile,
    },
    {
      name: "Fourth Guy to Comment",
      quote: `Haileamlak is a dedicated and passionate aspiring cybersecurity professional. His technical skills and commitment to learning set him apart. He has the potential to make a significant impact in the cybersecurity field.`,
      image: haile,
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0); // State to track current testimonial

  const handlePrev = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div
      className={`min-h-screen p-6 ${
        darkMode ? "bg-gray-200 text-black" : "bg-slate-900 text-white"
      }`}
    >
      <AboutSection />
      <div id="skills">
        <h2 className="text-2xl font-bold mt-8 text-center mb-16 italic">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {skills.map((item, index) => (
            <SkillCard key={index} skill={item.skill} level={item.level} />
          ))}
        </div>
      </div>
          {/* Testimonials Section */}
      <div className="mt-32 relative" id="testimonials">
        <h2 className="text-2xl font-bold mt-8 text-center italic mb-6">
          Testimonials
        </h2>
        <div className="relative flex flex-col items-center justify-center min-h-[500px] md:min-h-[300px] px-4 space-y-6">
          {/* Testimonial Card */}
          <div className="w-full md:w-3/4 flex items-center justify-center">
            <TestimonialCard
              key={currentTestimonial}
              name={testimonials[currentTestimonial].name}
              quote={testimonials[currentTestimonial].quote}
              image={testimonials[currentTestimonial].image}
            />
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full hover:bg-gray-800 transition z-10"
          >
            ❮
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full hover:bg-gray-800 transition z-10"
          >
            ❯
          </button>
        </div>
      </div>


    </div>
  );
};

export default Home;
