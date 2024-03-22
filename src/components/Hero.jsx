import React from 'react';
import { motion } from "framer-motion";
import Profile from '../assets/profile.png';
import Profile2 from '../assets/profile2.png';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 1,
    y: -50,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 40,
    },
  },
};

export default function Hero() {
  return (
    <div className="hero min-h-screen relative">
      
      {/* Texture Overlay */}
      <div className="texture-v2 min-h-screen absolute top-0 left-0 right-0 z-10 mix-blend-multiply pointer-events-none" />

      {/* Hero Content */}
      <div className="hero-content flex flex-col text-center lg:text-start py-16">

        {/* MOBILE IMAGE */}
        <div className="lg:hidden flex justify-center w-full lg:w-1/2">
          <img src={Profile2} alt="Norven Profile Image" className="w-full h-full max-w-[360px] max-h-[360px] object-contain pointer-events-none" />
        </div>

        {/* CONTENT */}
        <motion.div
          className="lg:pl-20 relative lg:absolute lg:left-0"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1 variants={textVariants} className="text-2xl sm:text-3xl lg:text-4xl tracking-widest font-semibold text-primary">NORVEN <span className="hidden lg:inline">EPHRAIM</span> CARACAS</motion.h1>
          <motion.h2 variants={textVariants} className="text-3xl sm:text-5xl lg:text-7xl font-bold pt-2 lg:pt-5">Web Developer & <span className="block lg:pt-2">Graphic Artist</span></motion.h2>
          <motion.div variants={textVariants} className="flex-col py-5 px-10 sm:px-0 justify-center lg:justify-start">
            <motion.button variants={textVariants} className="btn btn-lg btn-primary btn-outline w-full sm:w-auto text-white font-bold my-2 mx-2">MY PROJECTS</motion.button>
            <motion.button variants={textVariants} className="btn btn-lg btn-secondary btn-outline w-full sm:w-auto text-white font-bold my-2 mx-2">CONTACT ME</motion.button>
          </motion.div>
        </motion.div>
        <motion.div
          className="absolute text-6xl md:text-9xl font-bold bottom-0 right-0 whitespace-nowrap opacity-10 pointer-events-none"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          Web Developer Graphic Artist
        </motion.div>

        {/* DESKTOP IMAGE */}
        <div className="hidden lg:block h-full lg:absolute lg:pt-20 xl:pr-40 right-0 bottom-0 z-20 pointer-events-none">
          <img src={Profile} alt="Norven Profile Image" className="w-full h-full object-cover pointer-events-none" />
        </div>
      </div>

      {/* CURVE DESIGN */}
      <svg className="block self-end text-secondary pointer-events-none" viewBox="0 0 1440 320"><path fill="currentColor" d="M0,256L120,266.7C240,277,480,299,720,256C960,213,1200,107,1320,53.3L1440,0L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>

    </div>
  );
};