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
    <Section id="about" className="py-20 md:py-40">
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        <div className="lg:w-1/2">
          <span className="text-yellow text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">
            Inside The Bracket
          </span>
          <h2 className="mb-10 leading-[0.9] text-5xl md:text-7xl">
            THE <span className="text-yellow">AGENCY</span> <br /> 
            <span className="text-outline">ENGINEERING</span> THE <br />
            FUTURE OF DIGITAL
          </h2>
          <p className="text-white/40 leading-relaxed max-w-xl mb-12 italic">
            The Bracket is a forward-thinking digital agency dedicated to bridging the gap between innovative ideas and functional reality. We empower startups and enterprises with smart, scalable digital products designed for growth.
          </p>
          
          <div className="flex gap-12">
            <div className="border-l-2 border-yellow pl-6">
              <span className="block text-4xl font-black mb-1">50+</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Projects Delivered</span>
            </div>
            <div className="border-l-2 border-yellow pl-6">
              <span className="block text-4xl font-black mb-1">12</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Industry Awards</span>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="glass-card p-10 md:p-12">
            <h3 className="text-xl font-bold tracking-tight mb-10 border-b border-white/10 pb-6 uppercase italic">
              Why work with us?
            </h3>
            <ul className="space-y-8">
              {[
                { title: "Strategic Thinking", desc: "We align every pixel with your long-term business goals." },
                { title: "Cutting-edge Tech", desc: "Using advanced stacks for peak performance and security." },
                { title: "User-Centric Design", desc: "Crafting digital experiences that feel human and intuitive." },
                { title: "Agile Development", desc: "Rapid iterations backed by transparent communications." }
              ].map((item, i) => (
                <li key={i} className="flex gap-6 group">
                  <div className="w-10 h-10 rounded-xl bg-yellow/10 flex items-center justify-center shrink-0 border border-yellow/20 group-hover:bg-yellow group-hover:text-black transition-all">
                    <Check size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 tracking-tight">{item.title}</h4>
                    <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
