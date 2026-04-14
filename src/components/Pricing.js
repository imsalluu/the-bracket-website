'use client';

import React from 'react';
import Section from './Section';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "1,499",
      features: ["Single Page App", "Premium UI/UX", "Core SEO", "30 Days Support"],
      isPopular: false,
    },
    {
      name: "Professional",
      price: "3,999",
      features: ["Full Ecosystem", "AI Integration", "Custom CMS", "90 Days Support", "Performance Audit"],
      isPopular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Global Scale", "Dedicated Support", "Full AI Suite", "Lifetime Access", "Priority Dev"],
      isPopular: false,
    },
  ];

  return (
    <Section id="pricing" className="py-20 md:py-40">
      <div className="text-center mb-16 md:mb-24">
        <h2 className="text-yellow text-[10px] md:text-xs font-black tracking-[0.4em] mb-6 uppercase">Investment</h2>
        <h3 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-none">
          FLEXIBLE <br /><span className="text-white/20 italic">SOLUTIONS</span>
        </h3>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto items-center">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            viewport={{ once: true }}
            className={`p-10 md:p-14 rounded-[3rem] border ${plan.isPopular ? 'border-yellow bg-yellow/[0.03] lg:py-20 lg:scale-105 z-10' : 'border-white/5 bg-secondary/10'} relative flex flex-col h-full hover:border-yellow/20 transition-all duration-500 group overflow-hidden`}
          >
            {plan.isPopular && (
              <span className="absolute top-0 right-10 -translate-y-1/2 bg-yellow text-black px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-[0_10px_30px_rgba(255,215,0,0.3)]">
                Most Popular
              </span>
            )}

            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <h4 className="text-lg md:text-xl font-black mb-4 uppercase tracking-[0.2em] text-white/50">{plan.name}</h4>
            <div className="flex items-baseline mb-10">
              <span className="text-5xl md:text-6xl font-black">{plan.price !== "Custom" ? `$${plan.price}` : plan.price}</span>
              {plan.price !== "Custom" && <span className="text-white/20 text-xs font-bold ml-3 uppercase tracking-widest">/ Project</span>}
            </div>

            <div className="space-y-6 mb-12 flex-grow">
              {plan.features.map((feature, j) => (
                <div key={j} className="flex gap-4 items-center">
                  <div className="w-6 h-6 rounded-full bg-yellow/10 flex items-center justify-center shrink-0">
                    <Check size={14} className="text-yellow" strokeWidth={4} />
                  </div>
                  <span className="text-white/40 text-sm md:text-base font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <button className={`w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] transition-all duration-500 ${plan.isPopular ? 'bg-yellow text-black hover:shadow-[0_20px_40px_rgba(255,215,0,0.2)] hover:-translate-y-1' : 'border border-white/10 text-white hover:bg-white hover:text-black'}`}>
              Select Plan
            </button>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Pricing;
