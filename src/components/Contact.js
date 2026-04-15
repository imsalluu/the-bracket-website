'use client';

import React from 'react';
import Section from './Section';
import { Mail, Globe, MessageSquare, Share2, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <Section id="contact" className="relative py-20 md:py-40">
      <div className="grid lg:grid-cols-2 gap-16 md:gap-32 items-start">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
        >
          <h2 className="text-yellow text-[10px] md:text-xs font-black tracking-[0.4em] mb-8 uppercase">Get In Touch</h2>
          <h3 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight mb-10 italic leading-[0.9]">
            LET'S BUILD <br />
            <span className="text-white/20 not-italic">SOMETHING</span> <br />
            LEGENDARY
          </h3>
          <p className="text-white/40 text-base md:text-xl mb-16 max-w-md leading-relaxed">
            Ready to start your digital transformation? Contact us today and let's create something extraordinary together.
          </p>

          <div className="space-y-10">
            <a href="mailto:hello@thebracket.com" className="flex items-center gap-6 text-white hover:text-yellow transition-all group">
              <div className="w-16 h-16 rounded-[1.5rem] bg-white/5 flex items-center justify-center group-hover:bg-yellow group-hover:text-black group-hover:rotate-6 transition-all duration-500">
                <Mail size={24} />
              </div>
              <span className="text-xl md:text-2xl font-black">hello@thebracket.com</span>
            </a>
            
            <div className="flex gap-6 pt-6">
              {[Globe, MessageSquare, Share2].map((Icon, i) => (
                <a key={i} href="#" className="w-16 h-16 rounded-[1.5rem] bg-white/5 flex items-center justify-center text-white/30 hover:bg-yellow hover:text-black hover:scale-110 hover:-rotate-6 transition-all duration-500 border border-white/5">
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-secondary/10 p-8 md:p-16 rounded-[3rem] border border-white/5 backdrop-blur-3xl space-y-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-yellow/5 rounded-full blur-[60px] translate-x-20 -translate-y-20 -z-10" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-2">Name</label>
              <input type="text" className="w-full bg-white/5 border border-white/5 rounded-2xl px-8 py-5 focus:border-yellow/50 outline-none transition-all placeholder:text-white/10 text-white font-medium" placeholder="John Wick" />
            </div>
            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-2">Email</label>
              <input type="email" className="w-full bg-white/5 border border-white/5 rounded-2xl px-8 py-5 focus:border-yellow/50 outline-none transition-all placeholder:text-white/10 text-white font-medium" placeholder="john@intercontinental.com" />
            </div>
          </div>
          <div className="space-y-4">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-2">Service</label>
            <div className="relative">
              <select className="w-full bg-white/5 border border-white/5 rounded-2xl px-8 py-5 focus:border-yellow/50 outline-none transition-all appearance-none text-white/40 font-medium">
                <option>UI/UX Design</option>
                <option>Web Engineering</option>
                <option>Mobile Solutions</option>
                <option>AI Automation</option>
              </select>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/20">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-2">Brief</label>
            <textarea rows={4} className="w-full bg-white/5 border border-white/5 rounded-2xl px-8 py-5 focus:border-yellow/50 outline-none transition-all placeholder:text-white/10 text-white font-medium" placeholder="Tell us about your mission..." />
          </div>
          <button type="submit" className="btn-primary w-full flex items-center justify-center gap-4 py-6 text-[10px] font-black tracking-[0.2em]">
            Commence Project <Send size={20} />
          </button>
        </motion.form>
      </div>

    </Section>
  );
};

export default Contact;
