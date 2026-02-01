import React from 'react';
import img3 from '../assets/img3.png';
import { motion } from 'framer-motion';


const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col items-center justify-center max-w-full w-full p-6 space-y-6 bg-black  pb-12   "
    >
      {/* Main Flex Container */}
      <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-10 lg:gap-20">

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className="relative w-40 h-40 sm:w-56 sm:h-56 lg:w-64 lg:h-64 flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#6ae2de] rounded-full blur-3xl opacity-80"></div>
          <div className="relative w-full h-full rounded-full border-4 border-white overflow-hidden">
            <img
              src={img3}
              alt="Profile"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-2 py-1 bg-linear-to-r from-[#8179d7] via-[#00bf8f] to-[#1cd8d2] bg-clip-text text-transparent">
              Aayush
            </h1>
            <p className="text-white mb-2 text-lg sm:text-xl">Frontend Developer</p>
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
              I'm a passionate web developer with a knack for creating dynamic and
              responsive web applications. With a strong foundation in JavaScript,
              React, and Node.js, I enjoy building user-friendly interfaces and
              seamless backend services. When I'm not coding, you can find me
              exploring the latest tech trends or contributing to open-source
              projects.
            </p>
          </div>

          {/* Info Boxes */}
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 py-8">
            <div className="flex flex-col items-center w-auto p-4  border border-white rounded-lg bg-gray-950">
              <p className="opacity-60">Experience</p>
              <p>0 years</p>
            </div>
            <div className="flex flex-col items-center w-auto p-4  border border-white rounded-lg bg-gray-950">
              <p className="opacity-60">Speciality</p>
              <p>Frontend</p>
            </div>
            <div className="flex flex-col items-center w-auto p-4  border border-white rounded-lg bg-gray-950 bg-opacity-0">
              <p className="opacity-60 ">Focus</p>
              <p>Performance, UI & UX</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-4 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a
              href="#projects"
              className="text-white font-bold bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#6ae2de] px-5 py-3 rounded-xl shadow-lg hover:opacity-90 transition-opacity duration-300 hover:transform hover:scale-105"
              
            >
              See My Work
            </a>
            <a
              href="#contact"
             
              className="text-black bg-white px-5 py-3 rounded-xl font-medium shadow-lg hover:opacity-90 transition-opacity duration-300 hover:transform hover:scale-105 "
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="mt-6 text-center lg:text-left px-0">
        <h1 className="text-white text-2xl sm:text-3xl font-extrabold">About me</h1>
        <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-5xl mt-2 mx-auto lg:mx-0">
          I am Aayush, a passionate Web Developer specializing in crafting seamless user experiences and dynamic digital designs. With a strong foundation in HTML, CSS, JavaScript, and modern frameworks like React,
           I bring ideas to life through code. My journey in web development is driven by a love for problem-solving and a commitment to continuous learning. Let's create something extraordinary together!
        </p>
      </div>
    </motion.section>
  );
};

export default About;