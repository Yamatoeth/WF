import React from 'react';
import { motion } from 'framer-motion';

export default function ContactSection({ formData, handleInputChange, handleSubmit }) {
  return (
    <section id="contact" className="bg-white py-16" role="region" aria-labelledby="contact-heading">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2 
          id="contact-heading"
          initial={{opacity:0, y:30}} 
          whileInView={{opacity:1, y:0}} 
          viewport={{once:true}}
          className="text-3xl font-bold mb-6 text-center"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{opacity:0, y:30}} 
          whileInView={{opacity:1, y:0}} 
          viewport={{once:true}}
          transition={{delay:0.2}}
          className="text-gray-600 text-center mb-8"
        >
          Ready to bring your vision to life? Contact us today for a consultation.
        </motion.p>
        <motion.form 
          onSubmit={handleSubmit}
          initial={{opacity:0, y:30}} 
          whileInView={{opacity:1, y:0}} 
          viewport={{once:true}}
          transition={{delay:0.4}}
          className="space-y-6"
          noValidate
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Name *
            </label>
            <input 
              type="text" 
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your full name" 
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
              required
              aria-required="true"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input 
              type="email" 
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your.email@example.com" 
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
              required
              aria-required="true"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message *
            </label>
            <textarea 
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us about your project..." 
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 resize-vertical"
              rows="5"
              required
              aria-required="true"
            ></textarea>
          </div>
          <button 
            type="submit"
            className="btn-primary w-full"
            aria-label="Send your message to WF Design"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
