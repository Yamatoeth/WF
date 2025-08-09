import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../../data/constants';

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding container-max" role="region" aria-labelledby="services-heading">
      <motion.h2 
        id="services-heading"
        initial={{opacity:0, y:30}} 
        whileInView={{opacity:1, y:0}} 
        viewport={{once:true}}
        className="text-3xl font-bold mb-12 text-center"
      >
        Our Services
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-10">
        {SERVICES.map((service, index) => (
          <motion.article 
            key={service.id} 
            initial={{opacity:0, y:30}} 
            whileInView={{opacity:1, y:0}} 
            viewport={{once:true}}
            transition={{delay: index * 0.2}}
            className="card"
          >
            <div className="text-3xl mb-4" role="img" aria-label={`${service.title} icon`}>
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed">{service.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
