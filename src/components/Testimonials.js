'use client';

import React from 'react';
import Section from './Section';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah Jenkins",
      role: "CEO, TechNova",
      content: "The Bracket transformed our vision into a stunning digital reality. Their attention to detail and AI expertise is truly world-class.",
      avatar: "SJ",
    },
    {
      name: "Marcus Thorne",
      role: "Founder, EcoPulse",
      content: "Exceptional design and seamless development. They didn't just build a website; they architected a complete brand experience.",
      avatar: "MT",
    },
    {
      name: "Elena Rodriguez",
      role: "PM, FitScale",
      content: "Working with The Bracket was a game-changer for our startup. Fast, professional, and incredibly creative results.",
      avatar: "ER",
    },
  ];

  return (
    <Section id="testimonials" className="bg-zinc-950/30 py-20 md:py-40">
      <div className="text-center mb-16 md:mb-24">
        <h2 className="text-yellow text-[10px] md:text-xs font-black tracking-[0.4em] mb-6 uppercase">Testimonials</h2>
        <h3 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-none">
          TRUSTED BY <br /><span className="text-white/20 italic">VISIONARIES</span>
        </h3>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto">
        {reviews.map((review, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            viewport={{ once: true }}
            className="p-10 md:p-14 bg-black/40 border border-white/5 rounded-[3rem] relative group hover:border-yellow/20 transition-all duration-500 overflow-hidden"
          >
            <Quote className="text-yellow/5 absolute top-10 right-10 group-hover:text-yellow/10 transition-colors" size={80} />
            
            <div className="flex gap-6 items-center mb-10 relative">
              <div className="w-16 h-16 rounded-[1.5rem] bg-yellow flex items-center justify-center text-black font-black text-lg shadow-[0_10px_20px_rgba(255,215,0,0.2)]">
                {review.avatar}
              </div>
              <div>
                <h4 className="font-black text-xl leading-none mb-2 text-white/90">{review.name}</h4>
                <p className="text-yellow/60 text-[10px] font-bold uppercase tracking-[0.2em]">{review.role}</p>
              </div>
            </div>
            
            <p className="text-white/40 text-base md:text-lg italic leading-relaxed relative">
              "{review.content}"
            </p>

            <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow/20 translate-y-1 group-hover:translate-y-0 transition-transform" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
