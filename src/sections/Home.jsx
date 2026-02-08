import React, { useEffect, useState, useMemo } from 'react';
import ParticlesBackground from '../components/ParticlesBackground';
import { motion } from 'framer-motion';
import { FaXTwitter, FaLinkedin, FaGithub } from 'react-icons/fa6'
import resume from '../assets/aayushResume.pdf'




const glowVariants = {
  initial: {
    scale: 1, y: 0, filter: "drop-shadow(0 0 0 rgba(0,0,0,0))"
  },
  hover: {
    scale: 1.2, y: -3,
    filter: "drop-shadow(0 0 8px rgba(13,88,204,0.9) drow-shadow(0 0 18px rgba(16,185,129,0.8))",
    transition: { type: "spring", stiffness: 300, damping: 15 }
  },
  tap: { scale: 0.95, y: 0, transition: { duration: 0.08 } }
}

const social = [

  {
    Icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aayush-b5a1072b0/"
  },
  {
    Icon: FaXTwitter,
    label: "X",
    href: ""
  }, {
    Icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/Aayush481"
  },
]

const Home = () => {
  const roles = useMemo(
    () => ["Web Developer", "Frontend Developer", "Software Developer", "React Developer"],
    []
  );
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const TYPING_SPEED = 100;
  const DELETING_SPEED = 50;
  const PAUSE_TIME = 1500;

  useEffect(() => {
    const currentRole = roles[index];
    let timeout;

    if (!deleting && subIndex < currentRole.length) {
      timeout = setTimeout(() => setSubIndex((prev) => prev + 1), TYPING_SPEED);
    } else if (deleting && subIndex > 0) {
      timeout = setTimeout(() => setSubIndex((prev) => prev - 1), DELETING_SPEED);
    } else if (!deleting && subIndex === currentRole.length) {
      timeout = setTimeout(() => setDeleting(true), PAUSE_TIME);
    } else if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, roles]);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col justify-center items-center  bg-black text-white overflow-hidden py-20"
    >
      <ParticlesBackground />

      {/* Background gradients */}
      <div className="absolute inset-0">

        <div className="absolute -left-32 -top-32 w-[70vw] h-[70vw] sm:w-[50vw] sm:h-[50vw] md:w-[40vw] md:h-[40vw]
         max-w-[500px] max-h-[500px] rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
          opacity-30 sm:opacity-20 md:opacity-85 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse"></div>

        <div className="absolute right-0 bottom-0 w-[70vw] h-[70vw] sm:w-[50vw] sm:h-[50vw] md:w-[40vw] md:h-[40vw] 
        max-w-[500px] max-h-[500px] rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] 
        opacity-30 sm:opacity-20 md:opacity-70 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse delay-500"></div>
      </div>

      {/* Content grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-16 items-center">

        {/* Left text */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <div className="w-full mx-auto max-w-2xl lg:max-w-[50rem]">
            {/* Typing effect */}
            <motion.div
              className="mb-2 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold tracking-wide min-h-[1.2em]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span>{roles[index].substring(0, subIndex)}</span>
              <span className="blinking-cursor bg-white mx-1">|</span>
            </motion.div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-7xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-pink-500 via-blue-400 to-blue-800">
              Hello, I'm <span className="text-white block mt-2 md:text-5xl">Aayush</span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl leading-relaxed">
              I am Aayush, a passionate Web Developer specializing in crafting seamless user experiences and dynamic digital designs. Let’s create something extraordinary together!
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <a href="#projects" className="text-white hover:text-gray-300 bg-linear-to-r from-pink-500 to-blue-500 px-5 py-3 rounded-full font-medium shadow-lg hover:opacity-90 transition duration-300">
                View Projects
              </a>
              <a href={resume} target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-block text-black hover:text-gray-300 bg-white px-5 py-3 rounded-full font-medium shadow-lg hover:opacity-90 transition duration-300">
                My Resume
              </a>
            </div>
            {
              social.map(({ Icon, label, href }) => (
                <motion.a href={href} key={label}
                  aria-label={label}
                  target="_blank"
                  rel='noopner noreferrer'
                  variants={glowVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className='text-gray-300 transition-colors : duration-200 inline-flex items-center justify-center mr-4  text-3xl'

                ><Icon /></motion.a>
              ))
            }

          </div>
        </div>

        {/* Right image */}
        <div className="flex justify-center items-center">
          <img
            src="../src/assets/myImage.jpeg"
            alt="Profile"
            className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[400px] object-cover rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;