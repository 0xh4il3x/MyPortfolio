import React, { useContext } from "react";
import { ThemeContext } from "../App";
import AboutSection from "../components/AboutSection";
import SkillCard from "../components/SkillCard";
import TestimonialCard from "../components/TestimonialCard";
import { image } from "framer-motion/client";
import Ryan from "../assets/ryan.jpg";
import Marcus from "../assets/marcus.jpg";


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
    { skill: "Burp Suite", level: 50},
    { skill: "Nmap", level: 90 },
    { skill: "Kali Linux", level: 70 }
];


  const testimonials = [
    { name: "Ryan Montgomery, World's #1 Ethical hacker", quote: `
      Haileamlak Sahle is a motivated and skilled aspiring cybersecurity professional. His enthusiasm for ethical hacking and continuous learning shows his potential to excel in the industry. He is definitely one to watch.
      `, image: Ryan },
    { name: "Marchus Hutchins, The guy who stopped Wannacry in 2017", quote: `Haileamlak Sahle is a dedicated and passionate aspiring cybersecurity professional. His technical skills and commitment to learning set him apart. He has the potential to make a significant impact in the cybersecurity field.`, image: Marcus }
  ];

  return (
    <div className={`min-h-screen p-6 ${darkMode ? "bg-gray-200 text-black" : "bg-slate-900 text-white"}`}>
      <AboutSection />
      <div id="skills">
          <h2 className="text-2xl font-bold mt-8">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {skills.map((item, index) => (
              <SkillCard key={index} skill={item.skill} level={item.level} />
            ))}
          </div>
      </div>
      <div className="mt-32" id="testimonials">
          <h2 className="text-2xl font-bold mt-8">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                quote={testimonial.quote}
                image={testimonial.image}
              />
            ))}
         </div>
      </div>
    </div>
  );
};

export default Home;

