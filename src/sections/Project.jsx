import React, { useEffect, useState, useMemo, useRef } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';

import photo1 from '../assets/weatherApp.jpeg';
import photo2 from '../assets/Razorpay_desktop.jpeg';
import photo3 from '../assets/Notekr_desk.jpeg';

import img1 from '../assets/weatherMobile.jpeg';
import img2 from '../assets/photo1.jpeg';
import img3 from '../assets/photo2.jpeg';


const useIsMobile = (query = '(max-width: 673px)') => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' && window.matchMedia(query).matches
  );

  useEffect(() => {
    const media = window.matchMedia(query);
    const handler = () => setIsMobile(media.matches);

    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, [query]);

  return isMobile;
};


const Project = () => {
  const isMobile = useIsMobile();
  const sceneRef = useRef(null);

  const projects = useMemo(
    () => [
      {
        title: 'Weather App',
        link: 'https://github.com/Aayush481/weather-app.git',
        img: isMobile ? img1 : photo1,
        bgColor: '#2e1a47',
      },
      {
        title: 'RazorPay Clone',
        link: 'https://github.com/Aayush481/razorpay-clone-project.git',
        img: isMobile ? img2 : photo2,
        bgColor: '#1e3a5f',
      },
      {
        title: 'NoteKr App',
        link: 'https://github.com/Aayush481/Notekr-web.git',
        img: isMobile ? img3 : photo3,
        
        bgColor : "#22304a"
      },
    ],
    [isMobile]
  );

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ['start start', 'end end'],
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(
      projects.length - 1,
      Math.floor(v * projects.length)
    );
    setActiveIndex(idx);
  });

  return (
    <section
      id="projects"
      ref={sceneRef}
      className="relative w-full text-white"
      style={{
        height: `${projects.length * 100}vh`,
        backgroundColor: activeProject.bgColor,
        transition: 'background-color 400ms ease',
      }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center w-full">
        <h2
          className={`text-3xl text-center font-semibold z-10 ${
            isMobile ? 'mt-4' : 'mt-8'
          }`}
        >
          My Work
        </h2>

        <div
          className={`relative w-full flex-1 flex items-center justify-center ${
            isMobile ? '-mt-4' : 'mt-8'
          }`}
        >
          {projects.map((pr, idx) => (
            <div
              key={idx}
              className={`absolute top-1/2 left-1/2 
                -translate-x-1/2 -translate-y-1/2 
                transition-all duration-500
                ${
                  activeIndex === idx
                    ? 'opacity-100 z-20'
                    : 'opacity-0 z-0 sm:z-10'
                }`}
              style={{
                width: '85%',
                maxWidth: '1200px',
              }}
            >
              <AnimatePresence mode="wait">
                {activeIndex === idx && (
                  <motion.h3
                    key={pr.title}
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className={`
                      block text-center
                      text-[clamp(2rem,5vw,3.5rem)]
                      text-white/95 italic font-semibold
                      sm:absolute sm:-top-15 sm:left-[-3%] lg:left-[-5%]  lg:-top-22 xl:-top-18
                      ${isMobile ? '-mt-14' : ''}
                    `}
                    style={{
                      zIndex: 5,
                      textAlign: isMobile ? 'left' : 'left',
                    }}
                  >
                    {pr.title}
                  </motion.h3>
                )}
              </AnimatePresence>

              <div
                className={`relative w-full overflow-hidden bg-black/20 shadow-2xl  md:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)]
                  rounded-lg sm:rounded-xl h-[62vh] sm:h-[66vh] xl:h-[70vh]
                  ${isMobile ? 'mb-6' : 'mb-10 sm:mb-12 xl:mb-15'}
                `}
                style={{ zIndex: 10,
                  transition : "box-shadow 200ms ease",
                 }}
              >
                <img
                  src={pr.img}
                  alt={pr.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top md:object-center rounded-lg drop-shadow-xl lg:drop-shadow-2xl"
                  style={{
                    zIndex : 10,
                    filter : "drop-shadow(0 16px 40px rgba(0,0,0,0.65))",
                    transition :"filter 250ms ease"
                  }}
                />
              </div>

              <div
                className={`absolute ${
                  isMobile ? '-bottom-10' : '-bottom-8 xl:bottom-1'
                } w-full flex justify-center`}
              >
                <a
                  href={activeProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${activeProject.title}`}
                  className="inline-block px-6 py-3 font-semibold rounded-lg text-black bg-white hover:bg-gray-200 transition-all"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
