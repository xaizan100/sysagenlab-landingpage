
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 text-center overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl aspect-square bg-purple-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] md:text-xs font-bold text-purple-400 mb-8 animate-fade-in uppercase tracking-widest">
          AI Automation Agency
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 leading-tight">
          Eliminate Manual Tasks. <br />
          <span className="text-purple-500">Automate Your Sales & Ops.</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
          We build AI systems that handle your lead qualification, data entry, and customer outreach. Stop wasting 20+ hours a week on repetitive work that a machine can do faster and without errors.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="#contact" 
            className="w-full sm:w-auto bg-white text-black px-10 py-5 rounded-2xl font-black text-lg hover:bg-purple-500 hover:text-white transition-all hover:scale-105 active:scale-95"
          >
            Book A 15-Minute Audit
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
