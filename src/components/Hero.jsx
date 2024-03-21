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
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 1,
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
    <div className="hero min-h-screen bg-gradient-to-b from-base-100 to-base-300 relative">
      <div className="hero-content flex flex-col text-center lg:text-start">

        {/* MOBILE IMAGE */}
        <div className="lg:hidden flex justify-center w-full lg:w-1/2">
          <img src={Profile2} alt="Norven Profile Image" className="w-full h-full max-w-[360px] max-h-[360px] object-contain" />
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
          <motion.div variants={textVariants} className="flex-col pt-5 justify-center lg:justify-start">
            <motion.button variants={textVariants} className="btn btn-lg btn-outline btn-primary my-2 mx-2">ABOUT ME</motion.button>
            <motion.button variants={textVariants} className="btn btn-lg btn-outline btn-secondary my-2 mx-2">CONTACT ME</motion.button>
          </motion.div>
        </motion.div>
        <motion.div
          className="absolute text-6xl md:text-9xl font-bold bottom-0 right-0 whitespace-nowrap opacity-10"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          Web Developer Graphic Artist
        </motion.div>

        {/* DESKTOP IMAGE */}
        <div className="hidden lg:block h-full lg:absolute lg:pt-20 lg:pr-20 right-0 bottom-0 z-10">
          <img src={Profile} alt="Norven Profile Image" className="w-full h-full object-cover" />
        </div>

      </div>
    </div>
  );
};