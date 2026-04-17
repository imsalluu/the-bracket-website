'use client';

import React from 'react';

const Partners = () => {
  const logos = [
    'GOOGLE', 'APPLE', 'META', 'AMAZON', 'NETFLIX', 'MICROSOFT', 'ADOBE', 'SPOTIFY', 'TESLA', 'OPENAI'
  ];

  return (
    <div className="py-20 bg-black border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center w-full">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
          Trusted by Industry Leaders
        </span>
      </div>
      
      <div className="flex overflow-hidden group">
        <div className="animate-marquee whitespace-nowrap flex gap-20 py-4">
          {/* First set of logos */}
          {logos.map((logo, i) => (
            <span key={i} className="text-4xl md:text-6xl font-black text-white/5 hover:text-white/20 transition-colors cursor-default select-none">
              {logo}
            </span>
          ))}
          {/* Second set (duplicated for infinite effect) */}
          {logos.map((logo, i) => (
            <span key={`dup-${i}`} className="text-4xl md:text-6xl font-black text-white/5 hover:text-white/20 transition-colors cursor-default select-none">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
