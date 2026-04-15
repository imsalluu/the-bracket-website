'use client';

import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const About = () => {
  const points = [
    { title: "Strategic Thinking", desc: "We align every pixel with your long-term business goals." },
    { title: "Cutting-edge Tech", desc: "Using advanced stacks for peak performance and security." },
    { title: "User-Centric Design", desc: "Crafting digital experiences that feel human and intuitive." },
    { title: "Agile Development", desc: "Rapid iterations backed by transparent communications." },
  ];

  return (
    <Section id="about" className="py-24 md:py-48 overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:w-[55%]"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-yellow/30" />
            <span className="text-yellow text-[10px] font-black uppercase tracking-[0.4em]">
              Inside The Bracket
            </span>
          </div>
          
          <h2 className="mb-10 leading-[0.85] text-5xl md:text-8xl tracking-tighter">
            THE <span className="text-yellow">AGENCY</span> <br /> 
            <span className="text-outline block my-2">ENGINEERING</span>
            THE FUTURE OF <br />
            <span className="relative">
              DIGITAL
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute -bottom-2 left-0 h-1 bg-yellow/20 rounded-full"
              />
            </span>
          </h2>
          
          <p className="text-white/50 leading-relaxed max-w-xl mb-12 text-lg font-medium">
            The Bracket is a forward-thinking digital agency dedicated to bridging the gap between innovative ideas and functional reality. We empower startups and enterprises with smart, scalable digital products.
          </p>
          
          <div className="flex gap-16">
            {[
              { label: "Projects Delivered", value: "50+" },
              { label: "Industry Awards", value: "12" }
            ].map((stat, i) => (
              <div key={i} className="group cursor-default">
                <span className="block text-5xl md:text-6xl font-black mb-2 group-hover:text-yellow transition-colors duration-300">
                  {stat.value}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 group-hover:text-white/60 transition-colors duration-300">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Content - Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-[45%] w-full"
        >
          <div className="glass-card relative p-8 md:p-14 overflow-hidden border-white/5 bg-white/[0.02]">
            {/* Subtle Gradient Glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-yellow/10 blur-[100px] rounded-full" />
            
            <h3 className="text-xl font-black tracking-[0.2em] mb-12 flex items-center gap-4 uppercase">
              <span className="w-2 h-2 bg-yellow rounded-full animate-pulse" />
              Why work with us?
            </h3>
            
            <ul className="space-y-10">
              {points.map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  className="flex gap-8 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-yellow group-hover:border-yellow group-hover:text-black transition-all duration-500 transform group-hover:rotate-6">
                    <Check size={20} strokeWidth={3} />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-bold text-lg mb-2 tracking-tight group-hover:text-yellow transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-white/40 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
