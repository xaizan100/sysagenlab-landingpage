
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slides = [
    "We build the demand generation and conversion infrastructure required for predictable growth.",
    "Stop relying on referrals. Install a professional system for patient acquisition and retention.",
    "From market demand to booked treatment — we engineer the entire revenue journey."
  ];

  return (
    <section className="relative pt-48 md:pt-64 pb-32 px-6 text-center overflow-hidden bg-white">
      {/* Subtle Architectural Grid - 2% opacity */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '80px 80px' }}></div>
      
      {/* Soft Radial Gradient Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative">
        <div className="inline-flex items-center gap-3 px-5 py-2 bg-brand-surface border border-brand-border text-[10px] md:text-[11px] font-bold text-brand-grey mb-12 animate-fade-in uppercase tracking-[0.4em] shadow-sm">
          Demand Creation + Conversion Infrastructure
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold tracking-[-0.04em] text-brand-black mb-12 leading-[0.9] text-center max-w-5xl mx-auto uppercase">
          More Qualified Patients. Higher Conversion. Structured Revenue.
        </h1>

        <div className="relative h-24 md:h-16 mb-20 overflow-hidden">
          {slides.map((text, index) => (
            <p
              key={index}
              className={`absolute inset-0 text-lg md:text-2xl text-brand-grey max-w-4xl mx-auto leading-relaxed font-light transition-all duration-1000 ease-in-out transform ${
                activeSlide === index 
                  ? 'translate-y-0 opacity-100' 
                  : '-translate-y-8 opacity-0'
              }`}
            >
              {text}
            </p>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
          <a 
            href="#contact" 
            className="w-full sm:w-auto bg-brand-black text-white px-14 py-6 rounded-none font-bold text-sm md:text-base hover:bg-brand-grey hover:scale-[1.02] transition-all uppercase tracking-[0.2em] shadow-premium active:scale-95"
          >
            Book a Revenue Audit
          </a>
          <a 
            href="#infrastructure" 
            className="text-brand-black font-bold text-sm uppercase tracking-[0.2em] hover:opacity-60 transition-opacity flex items-center gap-3 group"
          >
            Our Methodology
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
