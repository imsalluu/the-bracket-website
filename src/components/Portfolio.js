'use client';

import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const projects = [
    { 
      title: "NeoTrade", 
      category: "Fintech App", 
      desc: "A futuristic crypto trading platform with real-time analytics.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "Lumina AI", 
      category: "SaaS Platform", 
      desc: "Cloud-based AI solution for enterprise data management.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4628c9759?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "Pulse Health", 
      category: "Mobile App", 
      desc: "Revolutionizing patient care with smart health tracking.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "EcoGlobal", 
      category: "Web Portal", 
      desc: "Sustainable energy monitoring and reporting system.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "Cipher Cloud", 
      category: "Security Hub", 
      desc: "Industrial-grade encryption for modern cloud infrastructure.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "Nova Retail", 
      category: "E-commerce", 
      desc: "Next-gen shopping experience with AR integration.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800" 
    },
  ];

  return (
    <Section id="portfolio" className="bg-zinc-950/50">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-10">
        <div className="max-w-2xl">
          <h2 className="text-yellow text-[10px] md:text-xs font-black tracking-[0.4em] mb-6 uppercase">Our Work</h2>
          <h3 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-[0.95]">
            SELECTED <br />
            <span className="text-white/20 italic font-medium">SHOWCASE</span>
          </h3>
        </div>
        <button className="btn-secondary px-8 py-4 text-[10px] font-black tracking-[0.2em]">View Archive</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5] bg-zinc-900 mb-8 border border-white/5 transition-all duration-500 group-hover:border-yellow/20 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover grayscale opacity-50 transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-yellow text-[10px] font-black uppercase tracking-[0.2em] mb-3">{project.category}</span>
                <h4 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight">{project.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                  {project.desc}
                </p>
              </div>
              <div className="absolute top-8 right-8 w-12 h-12 bg-yellow rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 delay-200">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Portfolio;
