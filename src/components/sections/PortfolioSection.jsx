import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_ITEMS } from '../../data/constants';

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-gray-100 py-16" role="region" aria-labelledby="portfolio-heading">
      <div className="container-max">
        <motion.h2 
          id="portfolio-heading"
          initial={{opacity:0, y:30}} 
          whileInView={{opacity:1, y:0}} 
          viewport={{once:true}}
          className="text-3xl font-bold mb-10 text-center"
        >
          Our Portfolio
        </motion.h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <motion.figure 
              key={item.id} 
              initial={{opacity:0, scale:0.9}} 
              whileInView={{opacity:1, scale:1}} 
              transition={{duration:0.5, delay: index * 0.1}} 
              viewport={{once:true}}
              className="group cursor-pointer"
            >
              <img 
                src={`https://source.unsplash.com/600x400/?architecture,design,${item.id}`} 
                alt={item.alt}
                className="rounded-lg shadow-lg w-full h-64 object-cover group-hover:shadow-xl transition-shadow duration-300"
                loading="lazy"
              />
              <figcaption className="sr-only">{item.alt}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
