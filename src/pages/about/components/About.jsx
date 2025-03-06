import React, { useEffect } from 'react';
import {Images} from "../../../constant"
import Lottie from 'lottie-react';
import aboutAnimation from "../../../animation/about1.json"
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {
  useEffect(() => {
    AOS.init({
        duration: 2000, 
    });
}, []);
    return (
        <div className="relative h-[85vh] bg-white overflow-hidden" data-aos="fade-left">
        <div className=" hidden md:block md:absolute md:top-0 md:left-8 w-24 h-24">
          <img src={Images.top} alt="" className="text-yellow-300  " />
        </div>
        <div className="absolute bottom-0 right-0 w-34 h-34">
          <img src={Images.bas} alt=""  className="text-purple-300" />
        </div>
  
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row items-center">
       
          <div className=" hidden mt-5 md:block  relative w-full lg:w-1/2 mb-10 lg:mb-0">
          <Lottie
            animationData={aboutAnimation}
            className="rounded-lg  w-[75%] h-[85%]"
          />
          </div>
  
          {/* Right side with text content */}
          <div
           className="w-full lg:w-1/2 lg:pl-12">
            <h3 className="text-orange-500 text-xl font-semibold mb-5">I'm a Developer</h3>
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            I Can Develop Anything You Need.
            </h1>
            <p className="text-gray-600 mb-10 text-lg leading-8 ">
            Hello there! I'm a full-stack developer, passionate and dedicated to my work. I have three years of study in computer science and a full-stack development training, equipping me with the skills and knowledge to ensure your project's success. I enjoy every step of the design process, from discussion and collaboration to implementation
            </p>
            <a href="#contact">
            <button className="relative inline-flex items-center px-8 py-2 text-md rounded-full shadow-sm text-white border-[#f75023] bg-[#f75023] border-2 focus:outline-none focus:ring-2 focus:ring-offset-2 overflow-hidden group">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black font-semibold">
                Hire Me
              </span>
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 bg-[#f8f7f3] group-hover:h-full" />
            </button></a>
          </div>
        </div>
      </div>
    );
};

export default About;