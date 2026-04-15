'use client';

import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const CTA = () => {
  return (
    <Section id="cta" className="relative py-20 overflow-hidden">
      {/* Background with Gradient and Blur */}
      <div className="absolute inset-x-0 bottom-0 top-0 bg-yellow/5 -z-10" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-yellow/10 rounded-full blur-[100px] -z-10" />
      
      <div className="glass-card p-12 md:p-24 text-center max-w-6xl mx-auto relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow to-transparent opacity-50" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <span className="text-yellow text-[10px] font-black uppercase tracking-[0.4em] mb-10 block">
            Ready to scale?
          </span>
          <h2 className="mb-10 !leading-[1.1]">
            LET'S <span className="text-outline">BUILD</span> SOMETHING <br /> 
            <span className="italic">EXTRAORDINARY</span> TOGETHER
          </h2>
          <p className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto mb-16">
            Join forces with our team to transform your digital presence and drive measurable results for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Link href="/contact" className="btn-primary group">
              Start a Project
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            <Link href="/portfolio" className="text-white font-black text-[10px] uppercase tracking-[0.3em] hover:text-yellow transition-colors">
              Browse Work
            </Link>
          </div>
        </motion.div>
        
        {/* Large Decorative Text */}
        <div className="absolute -bottom-10 -right-10 text-[200px] font-black text-white/[0.02] pointer-events-none select-none italic">
          BRACKET
        </div>
      </div>
    </Section>
  );
};

export default CTA;
