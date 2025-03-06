"use client"

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import images from '../../../constant/images';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 620; 
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }

            // Update active link based on scroll position
            const sections = document.querySelectorAll('section[id]');
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    setActiveLink(sectionId || 'home');
                }
            });
        };

        document.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    const handleNavClick = () => {
        setIsOpen(false);
    };

    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#projects", label: "Portfolio" },
        { href: "#service", label: "Service" },
        { href: "#skills", label: "Skills" },
        { href: "#contact", label: "Contact" }
    ];

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? 'bg-white shadow-lg py-1' : 'bg-transparent py-3'
            }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <a href="#home" className="flex-shrink-0 flex items-center">
                                <img src={images.Logo} alt="Logo" className='w-28 h-22' />
                            </a>
                        </div>
                        
                        {/* Desktop Navigation */}
                        <div className="hidden md:flex md:items-center md:space-x-8">
                            {navLinks.map((link) => (
                                <a 
                                    key={link.href}
                                    href={link.href} 
                                    className={`text-lg relative group ${
                                        activeLink === link.href.substring(1) 
                                            ? 'text-[#f75023] font-medium' 
                                            : 'text-gray-800 hover:text-[#f75023]'
                                    }`}
                                >
                                    {link.label}
                                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f75023] transition-all duration-300 ${
                                        activeLink === link.href.substring(1) ? 'w-full' : 'group-hover:w-full'
                                    }`}></span>
                                </a>
                            ))}
                            
                            <a 
                                href="cv.pdf" 
                                download="cv.pdf"
                                className="relative inline-flex items-center px-6 py-2 text-md font-medium rounded-full shadow-sm text-black border-[#f75023] border-2 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f75023] overflow-hidden group"
                            >
                                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                                    Download CV
                                </span>
                                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 bg-[#f75023] group-hover:h-full" />
                            </a>
                        </div>
                        
                        {/* Mobile menu button */}
                        <div className="flex items-center md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300 ${
                                    isOpen 
                                        ? 'bg-gray-100 text-gray-900' 
                                        : 'text-gray-700 hover:text-[#f75023] hover:bg-gray-100'
                                } focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#f75023]`}
                                aria-expanded={isOpen}
                            >
                                <span className="sr-only">Open main menu</span>
                                {isOpen ? (
                                    <X className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <Menu className="block h-6 w-6" aria-hidden="true" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Mobile menu, show/hide based on menu state */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="md:hidden bg-white shadow-lg overflow-hidden"
                        >
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                                className="px-4 pt-4 pb-6 space-y-4"
                            >
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: 0.1 + (index * 0.05) }}
                                    >
                                        <a 
                                            href={link.href} 
                                            onClick={handleNavClick}
                                            className={`block py-2 text-base font-medium border-l-4 pl-3 transition-all duration-200 ${
                                                activeLink === link.href.substring(1)
                                                    ? 'border-[#f75023] text-[#f75023] bg-orange-50'
                                                    : 'border-transparent text-gray-700 hover:text-[#f75023] hover:bg-gray-50 hover:border-orange-200'
                                            }`}
                                        >
                                            {link.label}
                                        </a>
                                    </motion.div>
                                ))}
                                
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.4 }}
                                    className="pt-4 border-t border-gray-200"
                                >
                                    <a 
                                        href="cv.pdf" 
                                        download="cv.pdf"
                                        onClick={handleNavClick}
                                        className="flex items-center justify-center w-full px-4 py-3 text-base font-medium text-white bg-[#f75023] rounded-md shadow-md hover:bg-[#e04a1f] transition-colors duration-300"
                                    >
                                        Download CV
                                        <ChevronDown className="ml-2 h-4 w-4 rotate-270" />
                                    </a>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
            
            {/* Overlay when mobile menu is open */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black bg-opacity-25 z-40 md:hidden"
                        onClick={() => setIsOpen(false)}
                        aria-hidden="true"
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;