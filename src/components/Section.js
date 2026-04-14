'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, children, className = "" }) => {
  return (
    <section 
      id={id} 
      className={`py-24 md:py-32 min-h-[80vh] flex flex-col justify-center ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
        className="container mx-auto px-6 md:px-12"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
