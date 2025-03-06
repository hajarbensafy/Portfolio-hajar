import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaSass } from "react-icons/fa"
import { SiLaravel } from "react-icons/si"
import { Images } from '../../../constant';
import AOS from 'aos';
import 'aos/dist/aos.css';

const skills = [
    { name: 'HTML 5', icon: FaHtml5, color: 'bg-orange-500',  },
    { name: 'CSS 3', icon: FaCss3Alt, color: 'bg-blue-500',  },
    { name: 'JavaScript', icon: FaJs, color: 'bg-yellow-400',},
    { name: 'React', icon: FaReact, color: 'bg-blue-400' },
    { name: 'Sass', icon: FaSass, color: 'bg-pink-500',  },
    { name: 'Laravel', icon: SiLaravel, color: 'bg-red-500' }
]

const SkillCard = ({ skill, index }) => {
  const IconComponent = skill.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group"
    >
      <div className="p-6 relative">
        {/* Background pattern */}
        <div className="absolute top-0 right-0 w-15 h-24 opacity-5">
          <IconComponent className="w-full h-full" />
        </div>
        
        <div className="flex items-center mb-4">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className={`w-16 h-16 ${skill.color} rounded-lg flex items-center justify-center mr-4 shadow-lg`}
          >
            <IconComponent className="w-10 h-10 text-white" />
          </motion.div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#f75023] transition-colors duration-300">{skill.name}</h3>
            <p className="text-sm text-gray-500">Professional Level</p>
          </div>
        </div>
        
      
       
        
       
        
        {/* Hover effect - reveal more details */}
        <div className="mt-4 pt-4 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ul className="text-sm text-gray-600 space-y-1">
            <li className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
              <span>Advanced techniques</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
              <span>Best practices</span>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

const Skils = () => {
   
    useEffect(() => {
        AOS.init({
            duration: 2000, 
        });
    }, []);
    
    return (
        <section data-aos="fade-up" className="py-20 px-6 relative bg-gray-50">
            {/* Decorative elements */}
            <div className="hidden md:block absolute top-0 left-0">
                <img src={Images.sklis} alt="" className="text-yellow-300" />
            </div>
            <div className="absolute bottom-0 right-0">
                <img src={Images.sklis1} alt="" className="text-purple-300" />
            </div>
            
            {/* Decorative circles */}
            <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute -top-10 -left-10 w-40 h-40 bg-orange-100 rounded-full opacity-30"
            />
            <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute bottom-10 right-10 w-20 h-20 bg-blue-100 rounded-full opacity-40"
            />
            
            <div className="container mx-auto relative z-10">
                <div className="text-center mb-16">
                   
                    <motion.h2
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-[#f75023] text-3xl font-semibold text-center mb-12"
      >
        My Skills
      </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
                    >
                        I Develop Skills Regularly to Keep Me Update with the Latest Technologies and Best Practices
                    </motion.p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <SkillCard key={skill.name} skill={skill} index={index} />
                    ))}
                </div>
                
                {/* Additional section - skill summary */}
               
            </div>
        </section>
    );
};

export default Skils;