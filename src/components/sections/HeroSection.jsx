import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '../../data/constants';

export default function HeroSection({ scrollToSection }) {
  return (
    <section 
      className="relative bg-cover bg-center h-[80vh] min-h-[500px]" 
      style={{backgroundImage: "url('https://images.unsplash.com/photo-1501594907352-04cda38ebc29')"}}
      role="banner"
      aria-label="Hero section with company tagline"
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="text-center px-4">
          <motion.h2 
            initial={{opacity:0, y:50}} 
            animate={{opacity:1, y:0}} 
            transition={{duration:1}} 
            className="text-white text-3xl sm:text-4xl md:text-6xl font-bold mb-4"
          >
            {COMPANY_INFO.tagline}
          </motion.h2>
          <motion.p
            initial={{opacity:0, y:30}}
            animate={{opacity:1, y:0}}
            transition={{duration:1, delay:0.3}}
            className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90"
          >
            {COMPANY_INFO.description}
          </motion.p>
          <motion.button
            initial={{opacity:0, y:30}}
            animate={{opacity:1, y:0}}
            transition={{duration:1, delay:0.6}}
            onClick={() => scrollToSection('contact')}
            className="btn-secondary"
            aria-label="Get started with WF Design"
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </section>
  );
}
