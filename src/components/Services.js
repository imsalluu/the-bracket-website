'use client';

import React from 'react';
import Section from './Section';
import { Palette, Code2, Smartphone, Cpu, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: "UI/UX Design",
      desc: "Creating high-fidelity, intuitive interfaces that define your brand's digital presence.",
      icon: <Palette size={48} />,
    },
    {
      title: "Web Engineering",
      desc: "Architecting high-performance, scalable web ecosystems using cutting-edge frameworks.",
      icon: <Code2 size={48} />,
    },
    {
      title: "App Solutions",
      desc: "Native-quality mobile experiences across all platforms, optimized for performance.",
      icon: <Smartphone size={48} />,
    },
    {
      title: "AI Integration",
      desc: "Leveraging state-of-the-art AI to automate complex workflows and drive efficiency.",
      icon: <Cpu size={48} />,
    },
  ];

  return (
    <Section id="services" className="py-20 md:py-40">
      <div className="mb-20">
        <span className="text-yellow text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">
          Core Expertise
        </span>
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.8]">
          WHAT WE <br />
          <span className="text-outline">EXCEL AT</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 max-w-7xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            viewport={{ once: true }}
            className="p-10 md:p-12 bg-secondary/10 border border-white/5 rounded-[2.5rem] hover:border-yellow/20 transition-all duration-500 group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow/5 rounded-full blur-[40px] translate-x-10 -translate-y-10 group-hover:bg-yellow/10 transition-colors" />
            
            <div className="mb-10 text-yellow group-hover:scale-110 transition-transform duration-500">
              {service.icon}
            </div>
            <h4 className="text-2xl font-black mb-4 tracking-tight text-white/90">{service.title}</h4>
            <p className="text-white/30 text-sm leading-relaxed mb-8">
              {service.desc}
            </p>
            <button className="flex items-center gap-3 text-yellow text-[10px] font-black uppercase tracking-[0.2em] group-hover:gap-5 transition-all">
              Explore <ExternalLink size={16} />
            </button>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
