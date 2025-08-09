import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '../../data/constants';

export default function AboutSection() {
  return (
    <section id="about" className="max-w-5xl mx-auto section-padding" role="region" aria-labelledby="about-heading">
      <div className="text-center">
        <motion.h2 
          id="about-heading"
          initial={{opacity:0, y:30}} 
          whileInView={{opacity:1, y:0}} 
          viewport={{once:true}}
          className="text-3xl font-bold mb-6"
        >
          About Us
        </motion.h2>
        <motion.div
          initial={{opacity:0, y:30}} 
          whileInView={{opacity:1, y:0}} 
          viewport={{once:true}}
          transition={{delay:0.2}}
        >
          <p className="text-gray-600 leading-relaxed text-lg mb-6">
            WF Design is a premier design and construction agency committed to excellence, creativity, and precision. 
            With years of experience and a passion for modern architecture, we transform ideas into functional, beautiful spaces.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {COMPANY_INFO.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
