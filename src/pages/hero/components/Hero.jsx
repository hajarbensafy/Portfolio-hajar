import { motion } from "framer-motion"
import React from 'react';
import Typewriter from 'typewriter-effect';
import Lottie from "lottie-react";
import homeAnimation from "../../../animation/home.json"
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import {slideInFromLeft} from "../../../variants"
import { BiLogoGmail } from "react-icons/bi";
import images from '../../../constant/images';



const Hero = () => {
    return (
        <div className='flex justify-center'>
        <div className="flex flex-col md:flex-row mt-[15vh] justify-around items-center h-[90vh] w-full">
          <motion.div
            initial="hidden"
            animate="show"
            variants={slideInFromLeft("right",0.8)} 
          className="md:w-1/2 flex flex-col items-start ps-[13vw]">
            <h2 className="text-2xl font-semibold text-[#f75023] mb-4">Hi, There!</h2>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">I'm Hajar Bensafy</h1>
            <h3 className="text-[#502cac] font-semibold text-2xl mb-8">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  strings: [" full-stack developer"]
                }}
              />
            </h3>
            <p className="text-gray-600 text-md mb-10">I'm full-stack developer based in Moroco, and I'm very passionate and dedicated to my work</p>
           <div className='flex flex-row items-center gap-10 '>
        <a href="#about">
           <button  className="relative inline-flex items-center px-8 py-2 text-md rounded-full shadow-sm text-white border-[#f75023] bg-[#f75023] border-2 focus:outline-none focus:ring-2 focus:ring-offset-2 overflow-hidden group">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
               <a href="#about"> About Me</a>
              </span>
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 bg-[#f8f7f3] group-hover:h-full" />
            </button>
           </a>
            <div
             className='text-3xl text-[#238083] flex flex-row gap-6'>
             <a href="https://www.linkedin.com/in/hajar-bensafy-a2a454335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
              <motion.div
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}>  <FaLinkedinIn /></motion.div></a>
                <a href="mailto:hbensafy@gmail.com" target="_blank">
              <motion.div
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}> <BiLogoGmail /></motion.div></a>
                <a href="https://github.com/hajarbensafy" target="_blank">
              <motion.div
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}>  <IoLogoGithub /></motion.div></a>
          
            </div>
           </div>
         
          </motion.div>
          <motion.div
           initial="hidden"
           animate="show"
           variants={slideInFromLeft("left",0.7)} 
           className="hidden md:flex justify-center items-center md:w-1/2">
          
            {/* <Lottie className='w-[70%] h-[60%]' animationData={homeAnimation} /> */}

        <a className="">
                                       <img src={images.Hajar} alt="Logo" className='w-[40%] h-[40%] ' animationData={homeAnimation} />
                                   </a>
          </motion.div >
        </div>
      </div>
      
    );
};

export default Hero;