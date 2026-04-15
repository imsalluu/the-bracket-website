'use client';

import Link from 'next/link';
import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <Section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden !py-0">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow/20 rounded-full blur-[120px]" 
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-6 py-2 mb-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl"
        >
          <span className="w-2 h-2 rounded-full bg-yellow animate-pulse" />
          <span className="text-[10px] md:text-xs font-black tracking-[0.3em] uppercase text-white/60">
            Next-Gen Digital Experience
          </span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="mb-10 lg:mb-16">
            <span className="block mb-2">CRAFTING</span>
            <span className="text-yellow italic">DIGITAL</span> 
            <span className="text-outline ml-4">LEGACIES</span>
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-white/40 text-lg md:text-2xl max-w-3xl mx-auto mb-16 font-medium leading-relaxed"
        >
          We are a design-driven agency building premium digital products for brands that dare to lead. Elevating the standard of online experience.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-8 justify-center items-center"
        >
          <Link href="/contact" className="btn-primary group">
            Start Your Journey
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
          
          <button className="flex items-center gap-4 text-white hover:text-yellow transition-colors group">
            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:border-yellow transition-colors">
              <Play size={20} fill="currentColor" />
            </div>
            <span className="font-black text-[10px] uppercase tracking-[0.3em]">Watch Reel</span>
          </button>
        </motion.div>
      </div>

      {/* Side Metadata */}
      <div className="absolute bottom-20 left-20 hidden lg:block">
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">Est. 2024</span>
          <span className="text-[10px] font-black text-white uppercase tracking-widest">SYLHET / BD</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30"
      >
        <span className="text-[8px] font-black uppercase tracking-[0.5em] vertical-text">Scroll</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-yellow to-transparent" />
      </motion.div>
    </Section>
  );
};

export default Hero;
