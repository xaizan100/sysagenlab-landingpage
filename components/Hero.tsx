
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden bg-brand-white">
      {/* Subtle Abstract Structure Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-[-10%] left-[-5%] w-[110%] h-[110%] opacity-[0.03]"
        >
          <svg viewBox="0 0 1000 1000" className="w-full h-full">
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="black" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 text-left">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-4 mb-12"
          >
            <div className="w-12 h-[1px] bg-brand-black"></div>
            <span className="text-[10px] md:text-[11px] font-black text-brand-grey uppercase tracking-[0.5em]">
              Strategic Revenue Infrastructure
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-black tracking-[-0.06em] text-brand-black mb-12 leading-[0.8] uppercase"
          >
            Predictable <br />
            <span className="text-brand-grey">Growth.</span> <br />
            Engineered.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-brand-grey max-w-2xl mb-16 leading-relaxed font-light"
          >
            We build high-performance marketing and AI automation systems exclusively for elite private clinics across the United Kingdom.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-start gap-10"
          >
            <a 
              href="#contact" 
              className="btn-editorial"
            >
              Book Audit
            </a>
            <a 
              href="#infrastructure" 
              className="group relative text-[11px] font-black text-brand-black uppercase tracking-[0.3em] py-4"
            >
              Our Methodology
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-black transition-all duration-300 group-hover:w-full"></span>
            </a>
          </motion.div>
        </div>

        {/* Integrated Visual Element */}
        <div className="lg:col-span-4 relative hidden lg:block">
          <motion.div 
            style={{ y: y2 }}
            className="relative z-10"
          >
            <div className="image-reveal aspect-[3/4] shadow-editorial">
              <img 
                src="https://picsum.photos/seed/clinic-reception/800/1200?grayscale" 
                alt="Modern Clinic Environment" 
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-white/40 to-transparent"></div>
            </div>
            
            {/* Floating UI Mockup Overlay */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute -bottom-12 -left-24 bg-brand-white p-8 shadow-editorial-hover border border-brand-border max-w-[280px]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-brand-black"></div>
                <span className="text-[9px] font-black uppercase tracking-[0.3em]">Revenue Dashboard</span>
              </div>
              <div className="space-y-3">
                <div className="h-1 bg-brand-light w-full"></div>
                <div className="h-1 bg-brand-light w-3/4"></div>
                <div className="h-1 bg-brand-light w-1/2"></div>
              </div>
              <div className="mt-6 flex justify-between items-end">
                <span className="text-2xl font-black tracking-tighter">+42%</span>
                <span className="text-[8px] text-brand-grey uppercase tracking-widest">Growth Rate</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[9px] font-black uppercase tracking-[0.5em] text-brand-grey rotate-90 mb-8">Scroll</span>
        <div className="w-[1px] h-16 bg-brand-light relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 64] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-brand-black"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
