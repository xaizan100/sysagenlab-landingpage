
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 text-center overflow-hidden">
      {/* Decorative Glow - Reverted to Purple */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl aspect-square bg-purple-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/5 border border-purple-500/20 text-[10px] md:text-xs font-bold text-purple-400 mb-8 animate-fade-in uppercase tracking-widest">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          AI Growth Engine Active
        </div>

        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-6 leading-[0.95]">
          Build the <br />
          <span className="font-serif italic text-purple-400">automated future.</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
          SysAgen Lab engineers high-performance AI ecosystems that capture leads, automate operations, and scale revenue on autopilot.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="#contact" 
            className="w-full sm:w-auto bg-white text-black px-10 py-5 rounded-2xl font-black text-lg hover:bg-purple-50 transition-all hover:scale-105 shadow-[0_20px_40px_rgba(168,85,247,0.15)] active:scale-95"
          >
            Start Free AI Audit
          </a>
          <div className="flex items-center gap-4 text-left">
            <div className="flex -space-x-3">
               {[1,2,3,4].map(i => (
                 <img key={i} src={`https://picsum.photos/100/100?random=${i+10}`} className="w-10 h-10 rounded-full border-2 border-black object-cover" alt="User" />
               ))}
            </div>
            <div className="text-xs text-gray-500 font-bold uppercase tracking-tight">
              Trusted by <span className="text-white">50+ agencies</span> <br /> scaling with SysAgen Lab
            </div>
          </div>
        </div>

        {/* Dashboard Preview Style */}
        <div className="mt-24 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-[#0d0d0d] border border-white/10 rounded-3xl p-2 sm:p-4 overflow-hidden shadow-2xl">
             <img 
              src="https://picsum.photos/1200/800?grayscale&blur=2" 
              alt="Dashboard Preview" 
              className="rounded-2xl opacity-40 filter brightness-50 group-hover:brightness-75 transition-all duration-1000 grayscale hover:grayscale-0"
            />
            {/* Overlay indicators - Reverted to Purple */}
            <div className="absolute top-1/4 left-6 md:left-12 bg-black/60 backdrop-blur-xl border border-purple-500/30 p-4 rounded-2xl text-xs md:text-sm text-left max-w-[220px] animate-float shadow-2xl">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
                <span className="text-purple-400 font-black uppercase tracking-tighter">AI AGENT ACTIVE</span>
              </div>
              <p className="text-gray-300 font-medium">"SDR-1 successfully qualified 12 new prospects in the last hour."</p>
            </div>
            <div className="absolute bottom-1/4 right-6 md:right-12 bg-black/60 backdrop-blur-xl border border-indigo-500/30 p-4 rounded-2xl text-xs md:text-sm text-left max-w-[220px] animate-float [animation-delay:2s] shadow-2xl">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
                <span className="text-indigo-400 font-black uppercase tracking-tighter">REVENUE GROWTH</span>
              </div>
              <p className="text-gray-300 font-medium">Pipeline efficiency increased by <span className="text-white font-bold">127%</span> since deployment.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
