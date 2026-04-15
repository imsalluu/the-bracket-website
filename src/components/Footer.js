'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Globe, MessageSquare, Share2, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Work', href: '/portfolio' },
        { name: 'Services', href: '/services' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'Web Design', href: '/services' },
        { name: 'Development', href: '/services' },
        { name: 'UI/UX Design', href: '/services' },
        { name: 'Marketing', href: '/services' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
      ],
    },
  ];

  return (
    <footer className="relative bg-black pt-20 pb-10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          {/* Brand and Newsletter */}
          <div>
            <Link href="/" className="group flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-yellow rounded-xl flex items-center justify-center -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                <span className="text-black font-black text-xl">[ ]</span>
              </div>
              <span className="text-2xl font-black tracking-tighter">THE BRACKET</span>
            </Link>
            
            <p className="text-white/40 max-w-md mb-10 text-lg leading-relaxed">
              We design and build digital products that help brands stand out in a crowded digital landscape. Let's create something extraordinary together.
            </p>

            <div className="flex flex-col gap-4">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-white/20">Newsletter</span>
              <div className="flex max-w-sm relative">
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-yellow transition-colors"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-yellow rounded-xl flex items-center justify-center text-black hover:scale-105 transition-transform">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white/20 mb-8">
                  {section.title}
                </h4>
                <ul className="flex flex-col gap-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href} 
                        className="text-white/60 hover:text-yellow transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-xs font-medium">
            © {currentYear} THE BRACKET. All Rights Reserved.
          </p>
          
          <div className="flex gap-6">
            {[Mail, Globe, MessageSquare, Share2].map((Icon, i) => (
              <Link 
                key={i} 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-yellow hover:border-yellow transition-all duration-300"
              >
                <Icon size={18} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
