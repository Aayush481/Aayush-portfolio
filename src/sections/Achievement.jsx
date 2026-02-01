import React from 'react';
import officeIcon from "../assets/office.webp";
import hackathonIcon from "../assets/hackathon_icon.png";
import sihIcon from "../assets/Smart-India-Hackathon-2018.png";
import micIcon from "../assets/microPhone.jpg";
import docIcon from "../assets/document.jpg";
import { motion } from 'framer-motion';

const achievements = [
  {
    title: "Selected for SDE Intern at Bluestock Fintech",
    year: "2024",
    description: "Received an offer for Software Development Engineer Internship...",
    image: officeIcon,
  },
  {
    title: "Hackathon Participation",
    year: "2023–2024",
    description: "Actively participated in two hackathons...",
    image: hackathonIcon,
  },
  {
    title: "SIH Internal Hackathon Participation",
    year: "2025",
    description: "Participated in Smart India Hackathon internal rounds...",
    image: sihIcon,
  },
  {
    title: "International AI Seminar Speaker",
    year: "2024",
    description: "Delivered a talk at an international seminar...",
    image: micIcon,
  },
  {
    title: "Research Publication",
    year: "2024",
    description: "Published a research article...",
    image: docIcon,
  },
];

const Achievement = () => {
  return (
    <section className="relative w-full min-h-screen bg-black text-white flex flex-col items-center px-6 py-20">
      <motion.h2
        className="text-4xl sm:text-5xl font-semibold text-center mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{once:true}}
      >
        Achievements
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl mx-auto place-items-stretch">
        {achievements.map((ach, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl flex flex-col justify-between items-center text-center transform transition duration-500 hover:scale-105 hover:rotate-1 p-8 w-full h-full max-w-sm mx-auto"
          >
            <img
              src={ach.image}
              alt={ach.title}
              className="w-20 h-20 border-2 rounded-full border-white/40 object-cover mb-4"
              loading="lazy"
            />
            <h3 className="text-white font-bold text-xl sm:text-2xl mb-2">{ach.title}</h3>
            <p className="text-gray-300 italic text-sm sm:text-base mb-2">{ach.description}</p>
            <p className="text-gray-400 italic text-sm">{ach.year}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievement;