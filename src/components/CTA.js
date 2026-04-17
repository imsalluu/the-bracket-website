'use client';

import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const CTA = () => {
  return (
    <section id="cta" className="relative py-24 md:py-48 overflow-hidden bg-black flex flex-col items-center w-full">
      {/* Background with Gradient and Blur */}
      <div className="absolute inset-0 bg-yellow/[0.02] -z-10" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-yellow/5 rounded-full blur-[120px] -z-10" />
      
      <div className="relative z-10 w-full max-w-6xl px-6 flex flex-col items-center">
        <div className="glass-card p-12 md:p-24 text-center w-full relative overflow-hidden flex flex-col items-center rounded-[3rem] border border-white/5 bg-white/[0.01]">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow/30 to-transparent" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10 flex flex-col items-center"
          >
            <span className="text-yellow text-[10px] md:text-xs font-black uppercase tracking-[0.4em] mb-10 block leading-none">
              Ready to scale?
            </span>
            <h2 className="mb-10 text-4xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter uppercase">
              LET'S <span className="text-outline">BUILD</span> SOMETHING <br className="hidden md:block" /> 
              <span className="italic">EXTRAORDINARY</span> TOGETHER
            </h2>
            <p className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed">
              Join forces with our team to transform your digital presence and drive measurable results for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link href="/contact" className="btn-primary group">
                Start a Project
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              <Link href="/portfolio" className="text-white/60 font-black text-[10px] uppercase tracking-[0.3em] hover:text-yellow transition-colors duration-300">
                Browse Work
              </Link>
            </div>
          </motion.div>
          
          {/* Large Decorative Text */}
          <div className="absolute -bottom-10 -right-10 text-[clamp(100px,20vw,200px)] font-black text-white/[0.02] pointer-events-none select-none italic tracking-tighter uppercase leading-none">
            BRACKET
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
