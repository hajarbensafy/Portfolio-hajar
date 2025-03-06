import React from 'react';
import { motion } from 'framer-motion'
import { IoDiamond } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
const Service = () => {
    return (
        <div  className='flex flex-col mb-12 md:h-[47vh]'>
            <h2 className='text-[#f75023] text-3xl font-semibold text-center mb-14 mt-[5vh]'>At your service !</h2>
         
          <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          
          className='flex flex-col md:flex-row justify-center gap-[4vh] md:gap-[6vw] px-6'>
            <div className='flex flex-col gap-6 items-center'>
           <div className='text-6xl text-[#f75023]'>
           <IoDiamond />
           </div>
           <h3 className='font-bold text-2xl'>Frameworks</h3>
           <p className="text-center text-gray-600  text-lg md:max-w-[16vw]">
           Good experience with the following frameworks (.).
           </p>
            </div>
            <div className='flex flex-col gap-6 items-center'>
           <div className='text-6xl text-[#f75023]'>
           <FaEye />
           </div>
           <h3 className='font-bold text-2xl'>Tech Watch</h3>
           <p className="text-center text-gray-600 text-lg md:max-w-[14vw]">
           Always on the lookout for new technologies.
           </p>
            </div>
            <div className='flex flex-col gap-6 items-center'>
           <div className='text-6xl text-[#f75023]'>
           <FaUsers />
           </div>
           <h3 className='font-bold text-2xl'>Usability</h3>
           <p className="text-center text-gray-600  text-lg  md:max-w-[14vw]">
           Concerned about user experience.
           </p>
            </div>
            <div className='flex flex-col gap-6 items-center'>
           <div className='text-6xl text-[#f75023]'>
           <FaHeart />
           </div>
           <h3 className='font-bold text-2xl'>Passion</h3>
           <p className="text-center text-gray-600  text-lg  md:max-w-[14vw]">Putting a lot of heart into every project.</p>
            </div>

          </motion.div>
        </div>
    );
};

export default Service;