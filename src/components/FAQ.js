'use client';

import React, { useState } from 'react';
import Section from './Section';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "A standard project usually takes 4-8 weeks depending on complexity. We prioritize quality and thoroughness at every stage."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "We primarily work with Next.js, React, Tailwind CSS, and Framer Motion for frontend. For backend, we use Node.js, Firebase, and various AI integrations."
    },
    {
      question: "Do you offer post-launch support?",
      answer: "Yes, we providing ongoing maintenance, updates, and performance optimization to ensure your digital product continues to thrive."
    },
    {
      question: "Can you help with AI automation?",
      answer: "Absolutely. We specialize in integrating state-of-the-art AI solutions to streamline business processes and enhance user experiences."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <Section id="faq" className="bg-black">
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/3">
          <span className="text-yellow text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">
            Common Questions
          </span>
          <h2>
            FREQUENTLY <br /> <span className="text-outline">ASKED</span> <br /> QUERIES
          </h2>
          <p className="mt-10 text-white/40">
            Everything you need to know about working with us and how we bring your vision to life.
          </p>
        </div>

        <div className="lg:w-2/3 space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-8 flex justify-between items-center text-left hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-xl font-bold tracking-tight">{faq.question}</span>
                <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center transition-all ${openIndex === i ? 'bg-yellow text-black rotate-180' : 'text-white/30'}`}>
                  {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-white/40 leading-relaxed max-w-2xl">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FAQ;
