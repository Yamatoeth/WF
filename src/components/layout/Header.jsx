import React from 'react';
import { motion } from 'framer-motion';
import { NAVIGATION_ITEMS, COMPANY_INFO } from '../../data/constants';

export default function Header({ isMenuOpen, setIsMenuOpen, scrollToSection }) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50" role="banner">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-wide text-gray-900"
        >
          {COMPANY_INFO.name}
        </motion.h1>
        
        {/* Navigation desktop */}
        <nav className="space-x-6 hidden md:flex" role="navigation" aria-label="Main navigation">
          {NAVIGATION_ITEMS.map((item, index) => (
            <motion.button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="hover:text-gray-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded px-2 py-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              aria-label={`Navigate to ${item.label} section`}
            >
              {item.label}
            </motion.button>
          ))}
        </nav>

        {/* Menu hamburger mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
          aria-label="Toggle mobile menu"
          aria-expanded={isMenuOpen}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={`block w-5 h-0.5 bg-gray-900 transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
            <span className={`block w-5 h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-5 h-0.5 bg-gray-900 transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
          </div>
        </button>
      </div>

      {/* Menu mobile */}
      <motion.div
        initial={false}
        animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
        className="md:hidden overflow-hidden bg-white border-t"
      >
        <nav className="px-6 py-4 space-y-2" role="navigation" aria-label="Mobile navigation">
          {NAVIGATION_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="block w-full text-left py-2 px-4 hover:bg-gray-50 rounded transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </motion.div>
    </header>
  );
}
