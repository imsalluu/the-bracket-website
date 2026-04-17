'use client';

import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Target, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { label: "Projects Delivered", value: "50+", icon: <Zap size={20} /> },
    { label: "Industry Awards", value: "12", icon: <Star size={20} /> },
    { label: "Client Satisfaction", value: "98%", icon: <Users size={20} /> },
    { label: "Years of Excellence", value: "05+", icon: <Target size={20} /> },
  ];

  const services = [
    { title: "UI/UX Design", desc: "Crafting intuitive digital journeys." },
    { title: "Web Engineering", desc: "Scaleable, high-performance web apps." },
    { title: "AI Integration", desc: "Smart automation for modern businesses." },
    { title: "Cloud Solutions", desc: "Robust infrastructure for your products." },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="relative w-full overflow-hidden bg-black text-white flex flex-col items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-yellow/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-yellow/5 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 w-full pt-32 pb-20 md:pt-48 md:pb-32 flex flex-col items-center text-center px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-5xl w-full flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-10">
            <div className="w-10 h-[1px] bg-yellow" />
            <span className="text-yellow text-[10px] md:text-xs font-black uppercase tracking-[0.5em] leading-none">The Agency</span>
            <div className="w-10 h-[1px] bg-yellow" />
          </motion.div>

          <motion.h1 variants={itemVariants} className="mb-12 leading-[0.8] text-[clamp(2.5rem,8vw,8rem)] tracking-tighter uppercase font-black">
            WE ARCHITECT <br />
            <span className="text-outline">DIGITAL</span> <br />
            <span className="text-yellow">DOMINANCE.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-white/50 text-xl md:text-2xl leading-relaxed max-w-3xl font-light mb-16 px-4">
            The Bracket is more than just a digital agency; we are architects of the digital frontier. 
            Born from a passion for precision and a hunger for innovation.
          </motion.p>
          
          <motion.div variants={itemVariants} className="w-full max-w-2xl px-4">
            <div className="p-8 md:p-12 glass-card bg-white/[0.01] border-white/5 border rounded-[2.5rem] flex flex-col items-center">
              <span className="text-white/20 text-[10px] font-black uppercase tracking-[0.4em] mb-6">Our Philosophy</span>
              <h3 className="text-xl md:text-3xl mb-6 italic text-white/90 font-medium normal-case leading-tight">
                "Precision over approximation, <br className="hidden md:block" /> innovation over imitation."
              </h3>
              <p className="text-white/30 text-sm md:text-base leading-relaxed max-w-lg">
                Every line of code we write and every pixel we place is driven by a singular goal: 
                to build digital products that don't just work, but inspire.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 w-full py-24 bg-white/[0.02] border-y border-white/5 flex flex-col items-center">
        <div className="max-w-7xl w-full grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 px-6">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-yellow/10 flex items-center justify-center text-yellow mb-6 group-hover:bg-yellow group-hover:text-black transition-all duration-500 shadow-[0_0_30px_rgba(255,215,0,0.1)]">
                {stat.icon}
              </div>
              <span className="text-5xl md:text-7xl lg:text-8xl font-black text-white group-hover:text-yellow transition-colors duration-500 tracking-tighter">
                {stat.value}
              </span>
              <span className="mt-4 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 w-full py-24 md:py-48 flex flex-col items-center px-6">
        <div className="max-w-6xl w-full flex flex-col items-center text-center">
          <div className="mb-24 flex flex-col items-center">
            <span className="text-yellow text-[10px] font-black uppercase tracking-[0.5em] mb-6 block leading-none">Our Expertise</span>
            <h2 className="text-5xl md:text-8xl mb-8 leading-[0.85] font-black uppercase">WHAT WE <br /> <span className="text-outline">DELIVER</span></h2>
            <p className="text-white/40 text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
              We provide a full-spectrum of digital services, ensuring your brand stands out in an ever-evolving landscape.
            </p>
          </div>
          
          <div className="w-full flex flex-wrap justify-center gap-6 md:gap-8">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] min-w-[280px] p-10 md:p-12 glass-card bg-white/[0.01] border-white/5 hover:border-yellow/20 transition-all duration-500 group relative overflow-hidden flex flex-col items-center rounded-[2.5rem]"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow/5 rounded-full blur-3xl translate-x-16 -translate-y-16 group-hover:bg-yellow/10 transition-colors" />
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-yellow/20 flex items-center justify-center text-yellow mb-10 group-hover:bg-yellow group-hover:text-black transition-all duration-500">
                  <Check size={20} strokeWidth={4} />
                </div>
                <h4 className="text-xl md:text-2xl font-black mb-6 tracking-tight uppercase text-white/90">{service.title}</h4>
                <p className="text-white/30 text-sm md:text-base leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
