import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './sections/Home'
 
import './App.css'
import About from './sections/About'
import Skills from './sections/Skills'
import Project from './sections/Project'
import Experience from './sections/Experience'
import Testimonial from './sections/Testimonial'
import Footer from './sections/Footer'
import Contact from './sections/Contact'
import ParticlesBackground from './components/ParticlesBackground'
import CustomCursor from './components/CustomCursor'
import Achievement from './sections/Achievement'

function App() {
  
  return (
   <div className="w-full ">

   <CustomCursor/>
  <Navbar/>
   <Home/>
   <About/>
   <Skills/>
   <Project/>
  <Achievement/>
   <Experience/>
   <Contact/>
   
   <Footer/>
   
    </div>
  )
}

export default App
