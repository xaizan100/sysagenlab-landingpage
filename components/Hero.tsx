
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 text-center overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl aspect-square bg-purple-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-[10px] md:text-xs font-bold text-red-400 mb-8 animate-fade-in uppercase tracking-widest">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          The Manual Era is Killing Your Margin
        </div>

        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-6 leading-[0.95]">
          Stop trading time <br />
          <span className="font-serif italic text-purple-400">for revenue.</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
          Your business is leaking revenue through manual follow-ups and fragmented apps. SysAgen Lab builds the AI infrastructure to plug the holes and scale exponentially.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="#contact" 
            className="w-full sm:w-auto bg-white text-black px-10 py-5 rounded-2xl font-black text-lg hover:bg-purple-50 transition-all hover:scale-105 shadow-[0_20px_40px_rgba(168,85,247,0.15)] active:scale-95"
          >
            Claim Your Free AI Audit
          </a>
          <div className="flex items-center gap-4 text-left">
            <div className="flex -space-x-3">
               {[1,2,3,4].map(i => (
                 <img key={i} src={`https://picsum.photos/100/100?random=${i+10}`} className="w-10 h-10 rounded-full border-2 border-black object-cover" alt="User" />
               ))}
            </div>
            <div className="text-xs text-gray-500 font-bold uppercase tracking-tight">
              Helping <span className="text-white">50+ founders</span> <br /> escape the manual grind.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
