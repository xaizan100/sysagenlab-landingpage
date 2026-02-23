import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 120]);
  const y2 = useTransform(scrollY, [0, 500], [0, -80]);
  const opacity = useTransform(scrollY, [0, 350], [1, 0]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden bg-brand-charcoal">
      {/* Subtle blueprint-style grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.04]">
        <motion.div style={{ y: y1 }} className="absolute inset-0">
          <svg viewBox="0 0 1000 1000" className="w-full h-full">
            <pattern id="hero-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7 text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-[1px] bg-brand-accent" />
            <span className="section-label tracking-[0.5em]">
              Clinic Revenue Infrastructure
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem] xl:text-[5.5rem] font-black tracking-[-0.04em] text-brand-white mb-8 leading-[0.92] uppercase"
          >
            Predictable <br />
            <span className="text-brand-accent">Growth.</span> <br />
            Engineered.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-lg text-brand-grey max-w-xl mb-12 leading-relaxed font-light"
          >
            We build high-performance marketing and AI automation systems exclusively for elite private clinics across the United Kingdom.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start gap-8"
          >
            <a href="#contact" className="btn-editorial">
              Book Audit
            </a>
            <a
              href="#infrastructure"
              className="group relative text-[11px] font-black text-brand-white uppercase tracking-[0.3em] py-4"
            >
              Our Methodology
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-accent transition-all duration-300 group-hover:w-full" />
            </a>
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative hidden lg:block">
          <motion.div style={{ y: y2 }} className="relative z-10">
            <div className="image-reveal aspect-[4/5] shadow-editorial border border-brand-border overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80"
                alt="Modern clinic environment"
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width={800}
                height={1000}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/60 via-transparent to-transparent pointer-events-none" />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="absolute -bottom-8 -left-8 md:-left-12 bg-brand-surface border border-brand-border p-6 md:p-8 shadow-editorial max-w-[260px]"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 bg-brand-accent" />
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-brand-accent">Revenue Dashboard</span>
              </div>
              <div className="space-y-2">
                <div className="h-1 bg-brand-muted w-full rounded-sm" />
                <div className="h-1 bg-brand-muted w-4/5 rounded-sm" />
                <div className="h-1 bg-brand-muted w-3/5 rounded-sm" />
              </div>
              <div className="mt-5 flex justify-between items-end">
                <span className="text-2xl font-black tracking-tighter text-brand-accent">+42%</span>
                <span className="text-[8px] text-brand-grey uppercase tracking-widest">Growth Rate</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[9px] font-black uppercase tracking-[0.5em] text-brand-grey">Scroll</span>
        <div className="w-[1px] h-14 bg-brand-border relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 56] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 left-0 w-full h-1/2 bg-brand-accent"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
