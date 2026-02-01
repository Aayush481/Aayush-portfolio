import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useState, useRef, useMemo } from "react";

const experiences = [
  {
    title: "Frontend Developer – Notekr (Notes & Code Sharing App)",
    type: "Academic Project",
    duration: "2024",
    technologies: ["React", "Redux", "TailwindCSS", "Firebase", "localStorage"],
    description:
      "Designed and built a responsive web app for creating, managing, and sharing notes or code snippets online. Implemented authentication, CRUD operations, and sharing functionality with reusable components.",
  },
  {
    title: "Frontend Developer – Weather Web App",
    type: "Academic Project",
    duration: "2024",
    technologies: ["React.js", "API Integration", "CSS"],
    description:
      "Created a dynamic weather application with search functionality to fetch real-time weather data including temperature, humidity, and wind speed. Designed a clean, responsive UI with visual icons.",
  },
  {
    title: "Frontend Developer – AI Chatbot Web Application",
    type: "Academic Project",
    duration: "2024",
    technologies: ["React.js", "TailwindCSS", "Browser APIs"],
    description:
      "Developed a responsive AI chatbot web application with speech recognition and synthesis for voice-based interaction. Implemented 30+ voice commands, animated voice wave visualization, and features like file/image upload.",
  },
];

function ExperienceCard({ exp, index, scrollYProgress, start, end, layout }) {
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const y = useTransform(
    scrollYProgress,
    [start, end],
    [layout === "mobile" ? 40 : index % 2 === 0 ? -40 : 40, 0]
  );

  return (
    <motion.div
      style={{ opacity, y }}
      transition={{ duration: 0.5 }}
      className={
        layout === "mobile"
          ? "flex items-start gap-4"
          : "flex flex-col items-center"
      }
    >
      
      <div className="w-4 h-4 rounded-full bg-white mb-2" />

      
      {layout === "desktop" && (
        <div className="w-[2px] bg-white/40 h-8"></div>
      )}

    
      <div
        className={`bg-gray-900/80 border border-gray-700/70 rounded-xl shadow-lg p-5 
          ${layout === "mobile" ? "w-full max-w-sm" : "w-[280px] mt-4"}`}
      >
        <h3 className="text-white font-semibold">{exp.title}</h3>
        <p className="text-gray-400 text-sm">
          {exp.duration} | {exp.type}
        </p>
        <p className="mt-2 text-gray-400">{exp.description}</p>
        <p className="mt-2 text-gray-400">
          Technologies: {exp.technologies.join(", ")}
        </p>
      </div>
    </motion.div>
  );
}

const Experience = () => {
  const [isMobile, setIsMobile] = useState(false);
  const sceneRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  });

  const lineSize = useTransform(scrollYProgress, (v) => `${v * 100}%`);
  const threshold = useMemo(
    () => experiences.map((_, i) => i / experiences.length),
    []
  );

  return (
    <section id="experience" className="bg-black text-white py-16 sm:py-32 w-full overflow-x-hidden relative">
    <div className="absolute left-[35%] -top-80 w-[70vw] h-[70vw] sm:w-[50vw] sm:h-[50vw] md:w-[40vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-85 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse"></div>
  <div className="container mx-auto px-4 sm:px-6 lg:px-12" ref={sceneRef}>
    <h2 className="text-2xl sm:text-4xl font-semibold text-center mb-8 sm:mb-12">
      Experience
    </h2>

    {!isMobile ? (
      <div className="relative w-full">
        <div className="relative w-full h-[4px] bg-white/20 mt-6 sm:mt-12">
          <motion.div
            className="absolute left-0 top-0 h-[4px] bg-white origin-left"
            style={{ width: lineSize }}
          />
        </div>

        <div className="flex flex-wrap justify-center lg:gap-35 md:gap-20 w-full mt-12">
          {experiences.map((exp, idx) => (
            <ExperienceCard
              key={idx}
              exp={exp}
              index={idx}
              start={idx === 0 ? 0 : threshold[idx - 1]}
              end={threshold[idx]}
              scrollYProgress={scrollYProgress}
              layout="desktop"
              
            />
          ))}
        </div>
      </div>
    ) : (
      <div className="flex flex-col gap-8 mt-10">
        {experiences.map((exp, idx) => (
          <ExperienceCard
            key={idx}
            exp={exp}
            index={idx}
            start={idx === 0 ? 0 : threshold[idx - 1]}
            end={threshold[idx]}
            scrollYProgress={scrollYProgress}
            layout="mobile"
          />
        ))}
      </div>
    )}
  </div>
</section>
  );
};

export default Experience;