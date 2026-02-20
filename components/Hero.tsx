
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
    "Most clinics don't have a lead problem. They have a system problem. We install the predictable revenue infrastructure required to scale your patient base without increasing your overhead.",
    "Stop losing revenue to slow response times and missed follow-ups. Our systems ensure every patient enquiry is captured, nurtured, and converted with professional precision.",
    "We engineer end-to-end patient acquisition and conversion systems that transform manual clinic operations into high-performance revenue growth engines."
  ];

  return (
    <section className="relative pt-32 md:pt-48 pb-20 px-6 text-center overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl aspect-square bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-40 left-1/3 -translate-x-1/2 w-full max-w-2xl aspect-square bg-purple-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] md:text-xs font-black text-purple-400 mb-8 animate-fade-in uppercase tracking-[0.2em]">
          Revenue Infrastructure for Private Clinics
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-8 leading-[1.1] md:leading-[0.95] text-center">
          Predictable Patient <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-purple-600">Revenue Systems.</span>
        </h1>

        <div className="relative h-24 md:h-20 mb-12 overflow-hidden">
          {slides.map((text, index) => (
            <p
              key={index}
              style={{ willChange: 'transform, opacity' }}
              className={`absolute inset-0 text-base md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium transition-all duration-700 ease-in-out transform ${
                activeSlide === index 
                  ? 'translate-y-0 opacity-100' 
                  : index < activeSlide 
                    ? '-translate-y-full opacity-0' 
                    : 'translate-y-full opacity-0'
              }`}
            >
              {text}
            </p>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="#contact" 
            className="w-full sm:w-auto bg-white text-black px-6 py-3 md:px-10 md:py-5 rounded-2xl font-black text-sm md:text-lg hover:bg-purple-600 hover:text-white transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-purple-500/10"
          >
            Book a Revenue Audit
          </a>
          <div className="flex items-center gap-4 text-left">
            <div className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-tight">
              Strategic Growth <br /> 
              <span className="text-white">Not Just Automation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
