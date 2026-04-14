'use client';

import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const points = [
    { title: "Strategic Thinking", desc: "We align every pixel with your long-term business goals." },
    { title: "Cutting-edge Tech", desc: "Using advanced stacks for peak performance and security." },
    { title: "User-Centric Design", desc: "Crafting digital experiences that feel human and intuitive." },
    { title: "Agile Development", desc: "Rapid iterations backed by transparent communications." },
  ];

  return (
    <Section id="about" className="py-20 md:py-40">
      <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-yellow text-[10px] md:text-xs font-black tracking-[0.4em] mb-6 uppercase">The Agency</h2>
          <h3 className="text-4xl sm:text-5xl md:text-7xl font-black mb-10 leading-[0.95] tracking-tight">
            ENGINEERING THE <br />
            <span className="text-white/50 italic">FUTURE OF DIGITAL</span>
          </h3>
          <p className="text-white/60 text-base md:text-xl mb-12 leading-relaxed max-w-xl">
            The Bracket is a forward-thinking digital agency dedicated to bridging the gap between innovative ideas and functional reality. We empower startups and enterprises with smart, scalable digital products designed for growth.
          </p>
          <div className="grid grid-cols-2 gap-10">
            <div className="border-l-4 border-yellow pl-6">
              <h4 className="text-3xl md:text-5xl font-black mb-1">50+</h4>
              <p className="text-white/20 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Projects Delivered</p>
            </div>
            <div className="border-l-4 border-yellow pl-6">
              <h4 className="text-3xl md:text-5xl font-black mb-1">12</h4>
              <p className="text-white/20 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Industry Awards</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 bg-secondary/20 p-8 md:p-12 rounded-[2.5rem] border border-white/5 backdrop-blur-3xl"
        >
          <h4 className="text-2xl font-black mb-8 italic text-white/90">Why Work With Us?</h4>
          {points.map((point, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-yellow/5 flex items-center justify-center shrink-0 group-hover:bg-yellow group-hover:text-black transition-all">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h5 className="font-black text-white text-lg tracking-tight mb-1">{point.title}</h5>
                <p className="text-white/30 text-sm leading-relaxed">{point.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
