'use client';

import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { Search, PenTool, Code, Zap } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Search,
      title: 'Discovery',
      desc: 'We dive deep into your business, market, and user needs to define clear goals.',
      color: 'bg-blue-500',
    },
    {
      icon: PenTool,
      title: 'Design',
      desc: 'Creating high-fidelity prototypes and seamless user experiences tailored to your brand.',
      color: 'bg-yellow',
    },
    {
      icon: Code,
      title: 'Development',
      desc: 'Building robust, scalable, and high-performance solutions using latest tech.',
      color: 'bg-purple-500',
    },
    {
      icon: Zap,
      title: 'Launch',
      desc: 'Executing a flawless rollout and providing ongoing support for continuous growth.',
      color: 'bg-green-500',
    },
  ];

  return (
    <Section id="process" className="bg-black">
      <div className="flex flex-col lg:flex-row gap-20 items-start">
        <div className="lg:w-1/3 sticky top-32">
          <span className="text-yellow text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">
            How We Work
          </span>
          <h2 className="mb-10 lg:mb-0">
            OUR <br /> <span className="text-outline">CRAFT</span> <br /> PROCESS
          </h2>
          <p className="mt-10 text-white/40">
            A systematic approach to solving complex problems and delivering exceptional digital results.
          </p>
        </div>

        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-10 group hover:border-yellow/30 transition-all duration-500"
            >
              <div className={`w-16 h-16 rounded-2xl ${step.color} bg-opacity-10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                <step.icon className={`text-white transition-colors group-hover:text-yellow`} size={30} />
              </div>
              <h3 className="text-2xl mb-4 group-hover:text-yellow transition-colors">{step.title}</h3>
              <p className="text-sm leading-relaxed">{step.desc}</p>
              <div className="mt-8 text-6xl font-black text-white/[0.03] absolute top-4 right-8 pointer-events-none">
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Process;
