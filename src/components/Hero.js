'use client';

import Link from 'next/link';
import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <Section id="home" className="relative !py-0 min-h-[90vh]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-yellow/10 rounded-full blur-[100px] md:blur-[150px] -z-10" />
      
      <div className="text-center max-w-5xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-4 py-1.5 mb-6 md:mb-10 rounded-full border border-yellow/20 bg-yellow/5 text-yellow text-[10px] md:text-xs font-black tracking-[0.3em] uppercase"
        >
          Smart Digital Agency
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-6 md:mb-10 tracking-tight leading-[0.9]"
        >
          WE BUILD <span className="text-yellow italic">SMART</span> <br />
          DIGITAL <span className="text-white/60">SOLUTIONS</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-white/70 text-base md:text-xl max-w-2xl mx-auto mb-10 md:mb-16 font-medium leading-relaxed"
        >
          Elevating brands through intelligent design and cutting-edge technology. 
          Specializing in premium UI/UX, Web, Apps, and AI-driven automation.
</motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center"
        >
          <Link href="/contact" className="btn-primary flex items-center gap-3 group w-full sm:w-auto justify-center py-5 px-10">
            Get Started
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </Link>
          <Link href="/portfolio" className="btn-secondary w-full sm:w-auto justify-center py-5 px-10">
            View Projects
          </Link>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 -left-10 w-40 h-40 border border-yellow/5 rounded-full -z-10 blur-sm hidden lg:block" />
      <div className="absolute bottom-1/4 -right-10 w-60 h-60 border border-yellow/5 rounded-3xl rotate-12 -z-10 blur-sm hidden lg:block" />
    </Section>
  );
};

export default Hero;
