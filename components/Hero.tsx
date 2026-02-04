
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 text-center overflow-hidden">
      {/* Primary Brand Glow - Adjusted to Blue/Purple Blend */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl aspect-square bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-40 left-1/3 -translate-x-1/2 w-full max-w-2xl aspect-square bg-purple-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] md:text-xs font-black text-blue-400 mb-8 animate-fade-in uppercase tracking-[0.2em]">
          AI-Driven Infrastructure
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 leading-[0.9]">
          Eliminate Manual. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Scale Autonomous.</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
          We engineer intelligent systems that handle your lead lifecycle, operations, and fulfillment. Stop trading hours for output—let machines build your scale.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="#contact" 
            className="w-full sm:w-auto bg-white text-black px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-600 hover:text-white transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-blue-500/10"
          >
            Book A 30-Minute Discovery Call
          </a>
          <div className="flex items-center gap-4 text-left">
            <div className="text-xs text-gray-500 font-bold uppercase tracking-tight">
              Average ROI: <span className="text-white">10x in first 90 days</span> <br /> 
              Systems built for <span className="text-white">50+ agencies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
