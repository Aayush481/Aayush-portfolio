import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiReact } from "react-icons/si";
import { FaGitAlt, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import { DiResponsive, DiJava } from "react-icons/di";
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';

const Skills = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [active, setActive] = useState(false);
  const [direction, setDirection] = useState(-1);

  const x = useMotionValue(0);
  const [contentWidth, setContentWidth] = useState(0);

  const skills = [
    { icon: <AiOutlineHtml5 />, name: 'HTML5' },
    { icon: <FaCss3Alt />, name: 'CSS3' },
    { icon: <TbBrandJavascript />, name: 'JavaScript' },
    { icon: <SiReact />, name: 'React' },
    { icon: <TbBrandRedux />, name: 'Redux' },
    { icon: <RiTailwindCssFill />, name: 'Tailwind CSS' },
    { icon: <FaGitAlt />, name: 'Git' },
    { icon: <FaGithub />, name: 'GitHub' },
    { icon: <DiResponsive />, name: 'Responsive Design' },
    { icon: <DiJava />, name: 'Java' },
  ];

  
  useEffect(() => {
    if (containerRef.current) {
      const totalWidth = containerRef.current.scrollWidth;
      setContentWidth(totalWidth / 3); 
    }
  }, []);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Scroll direction handlers
  useEffect(() => {
    if (active) {
      let touchY = 0;
      const onWheel = (e) => setDirection(e.deltaY > 0 ? -1 : 1);
      const onTouchStart = (e) => { touchY = e.touches[0].clientY; };
      const onTouchMove = (e) => {
        setDirection(touchY - e.touches[0].clientY > 0 ? -1 : 1);
      };

      window.addEventListener("wheel", onWheel, { passive: true });
      window.addEventListener("touchstart", onTouchStart, { passive: true });
      window.addEventListener("touchmove", onTouchMove, { passive: true });

      return () => {
        window.removeEventListener("wheel", onWheel);
        window.removeEventListener("touchstart", onTouchStart);
        window.removeEventListener("touchmove", onTouchMove);
      };
    }
  }, [active]);

  
  useAnimationFrame((t, delta) => {
    if (!active || contentWidth === 0) return;
    const moveBy = direction * 0.1 * delta; // 
    let newX = x.get() + moveBy;

    
    if (newX <= -contentWidth) newX += contentWidth;
    if (newX >= 0) newX -= contentWidth;

    x.set(newX);
  });

  return (
    <div ref={sectionRef} id="skills" className="w-full py-25  bg-black flex flex-col justify-center items-center gap-8 relative">
      {/* Heading */}
      <div className="absolute -left-32 -top-23 w-[13vw] h-[13w] sm:w-[13vw] sm:h-[13vw] md:w-[16vw] md:h-[16vw] max-w-[500px] max-h-[500px] rounded-full 
      bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 
      sm:opacity-20 md:opacity-85 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse"></div>
      <div className="absolute right-0 bottom-0 w-[13vw] h-[13vw] sm:w-[13vw] sm:h-[13vw] md:w-[16vw] md:h-[16vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-70 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse delay-500"></div>
      <div className='flex justify-center items-center flex-col '>
         <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl sm:text-5xl py-2 font-bold bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#00bf8f] bg-clip-text text-transparent"
      >
        My Skills
      </motion.h1>
        <motion.p
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-[20px] sm:text-[24px] mt-2 text-gray-300"
    >
      Modern Applications | Responsive Design | Clean Code | Performance Optimization
    </motion.p>
      </div>
     

      {/* Skills */}
      <div className="relative w-full overflow-hidden mt-20 mb-20 mx-4">
        <motion.div ref={containerRef} style={{ x }} className="flex whitespace-nowrap text-6xl text-[#1cd8d2]">
          
          {[...Array(3)].map((arr, i) => (
            <div key={i} className="flex gap-10">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  aria-label={skill.name}
                  title={skill.name}
                  className="flex flex-col items-center gap-2 min-w-[120px] py-4"
                >
                  <span className="hover:scale-125 transition-transform duration-300">{skill.icon}</span>
                  <span className="text-[16px]">{skill.name}</span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;