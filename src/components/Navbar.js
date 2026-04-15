'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'navbar-blur py-4' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 md:px-20 flex justify-between items-center">
        <Link href="/" className="group flex items-center gap-2">
          <div className="w-10 h-10 bg-yellow rounded-xl flex items-center justify-center -rotate-12 group-hover:rotate-0 transition-transform duration-500">
            <span className="text-black font-black text-xl">[ ]</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tighter leading-none">THE BRACKET</span>
            <span className="text-[8px] font-bold tracking-[0.4em] text-white/40 uppercase">Digital Agency</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-12">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative group py-2"
              >
                <span className={`text-[11px] font-black uppercase tracking-[0.2em] transition-colors duration-300 ${pathname === link.href ? 'text-yellow' : 'text-white/60 group-hover:text-white'}`}>
                  {link.name}
                </span>
                {pathname === link.href && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-yellow"
                  />
                )}
                <div className={`absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full ${pathname === link.href ? 'hidden' : 'block'}`} />
              </Link>
            ))}
          </div>
          
          <Link href="/contact" className="group relative px-8 py-3 bg-white text-black rounded-full overflow-hidden transition-all duration-500 hover:pr-12">
            <span className="relative z-10 text-[10px] font-black uppercase tracking-widest">Get in Touch</span>
            <div className="absolute top-1/2 -translate-y-1/2 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
              <ArrowUpRight size={16} />
            </div>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white transition-all hover:bg-white/10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 lg:hidden bg-black z-50 flex flex-col p-10"
          >
            <div className="flex justify-between items-center mb-20">
              <span className="text-xl font-black">MENU</span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="flex flex-col gap-10">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                >
                  <Link
                    href={link.href}
                    className={`text-5xl font-black uppercase tracking-tighter ${pathname === link.href ? 'text-yellow' : 'text-outline hover:text-white transition-all'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto">
              <Link
                href="/contact"
                className="w-full btn-primary py-8 rounded-3xl"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
