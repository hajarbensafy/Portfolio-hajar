import React, { useEffect, useState } from 'react';
import { Images } from "../../../constant";
import images from '../../../constant/images';
import { MdOutlinePublic } from "react-icons/md";
import { motion } from 'framer-motion';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [images]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-64 overflow-hidden group">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Project image ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
            index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />
      ))}
      
      {/* Navigation dots */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white w-6' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Overlay gradient - visible on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

const Project = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const projects = [

    {
      title: "Leraning En ligne",
      description: "A web platform for academic management, integrating multiple features designed for both students and administrators.",
      images: [Images.shop1, images.shop2, images.shop3],
      category: "Educatif",
      technologies: ["Php", "Tailwind", "MySql"]
    },
    {
      title: "An online shop",
      description: "HR JEWELRY is an e-commerce website specializing in the sale of jewelry.",
      images: [images.social, Images.social1, images.sOcial2, images.social3],
      category: "web",
      technologies: ["Python", "Django", "SqlLite"]
    }
  ];

  const categories = ['all', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      {/* Header with animated elements */}
      <div className="relative mb-16">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute -top-10 -left-10 w-24 h-24 bg-orange-100 rounded-full opacity-70"
        />
        
        <div className="relative text-center">
        
          
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl font-bold mb-6 "
          >
           <h3 className="text-center text-[#f75023] text-3xl font-semibold mb-4">Portfolio</h3>
<h2 className="text-center text-4xl font-bold mb-6">My Amazing Works</h2>

          </motion.h2>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            The most common methods for developing effective websites for desktop include responsive and adaptive techniques. 
            As a developer, it's important to focus on creating flexible layouts and ensuring that content adjusts seamlessly across different screen sizes.
          </motion.p>
        </div>
        
        {/* Category filter buttons */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mt-10"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                category === activeCategory
                  ? "bg-[#f75023] text-white shadow-lg shadow-orange-200"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>
      </div>
      
      {/* Projects grid with staggered animation */}
      <motion.div 
        className="grid md:grid-cols-2 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
            }}
            className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            <ImageCarousel images={project.images} />
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-serif font-semibold text-gray-800 group-hover:text-[#f75023] transition-colors duration-300">
                  {project.title}
                </h3>
                <span className="px-3 py-1 bg-orange-100 text-[#f75023] text-xs font-medium rounded-full">
                  {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-3 mt-2">
                <a 
                  href="#" 
                  className="flex items-center gap-2 text-[#f75023] hover:underline font-medium"
                >
                  <MdOutlinePublic className="text-xl" />
                  View Project
                </a>
                
                <a 
                  href="#" 
                  className="ml-auto flex items-center gap-1 text-gray-700 hover:text-[#f75023] transition-colors duration-300"
                >
                  {/* <span className="text-sm font-medium">Details</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg> */}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* View all projects button */}
      <motion.div 
        className="flex justify-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        {/* <a 
          href="#" 
          className="group flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-gray-800 hover:text-[#f75023]"
        >
          <span>View All Projects</span>
          <span className="w-6 h-6 rounded-full bg-[#f75023] flex items-center justify-center text-white group-hover:translate-x-1 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </a> */}
      </motion.div>
    </div>
  );
};

export default Project;