
import React from 'react';
import {FaXTwitter,FaLinkedin,FaGithub} from 'react-icons/fa6'
import {motion} from 'framer-motion'


const social = [

  {Icon : FaLinkedin,
   label :"LinkedIn",
   href : "https://www.linkedin.com/in/aayush-b5a1072b0/"},
  {
  Icon : FaXTwitter,
  label : "X",
  href : ""
}, {
  Icon : FaGithub,
  label : "GitHub",
  href : "https://github.com/Aayush481"
},
]

const glowVariants = {
  initial : {
    scale :1,y:0,filter:"drop-shadow(0 0 0 rgba(0,0,0,0))"
  },
  hover : {
    scale :1.2 ,y:-3,
    filter : "drop-shadow(0 0 8px rgba(13,88,204,0.9) drow-shadow(0 0 18px rgba(16,185,129,0.8))",
    transition : {type:"spring",stiffness:300,damping : 15}
  },
  tap :{scale :0.95,y:0,transition:{duration:0.08}}
}


const Footer = () => {
  return (
   <footer className='relative overflow-hidden bg-black'>

      <motion.div 
      initial = {{opacity:0 ,y:30}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.8}}
      className='relative z-10 px-4 sm:px-8 lg:px-10 py-16 md:py-14 flex flex-col items-center text-center space-y-[1px]'
      >
        <h1 className='font-semibold leading-none text-center text-white select-none'
        style={{fontSize :"clamp(3rem,5vw,14rem)",
        letterSpacing:"0.02em",
        lineHeight:0.9,
        padding :"1.5vw",
        whiteSpace:"nowrap",
        textShadow : "0 2px 10px rgba(0,0,0,0.45)"
        }}>Aayush</h1>
        <div className='h-[3px] w-24 md:w-40 rounded-full bg-linear-to-r from-[#0d58cc] via-cyan-300 to-emarald-400'/>
        <div className='flex gap-5 text-2xl md:texxt-3xl mt-8 '>
          {
            social.map(({Icon,label,href})=>(
              <motion.a href={href} key={label}
              aria-label= {label}
              target ="_blank"
              rel='noopner noreferrer'
              variants = {glowVariants}
              initial="initial"
              whileHover="hover"
              whileTap = "tap"
              className='text-gray-300 transition-colors : duration-200 inline-flex items-center justify-center   text-3xl'
              
              ><Icon/></motion.a>
            ))
          }


        </div>

        <p className='text-gray-300 italic max-w-xl text-sm md:text-base mt-5'>
         "Success is when preparation meets opportunity."
        </p>
        <p className='mt-3'>
          &copy; 2026 Aayush. All rights reserved
        </p>

      </motion.div>
    {/* <div className="absolute left-[35%] -bottom-12 w-[70vw] h-[70vw] sm:w-[50vw] sm:h-[50vw] md:w-[40vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-85 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse"></div> */}

   </footer>
  );
}

export default Footer;
