
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 text-center overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl aspect-square bg-purple-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-purple-400 mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          AI-Powered Growth Now Live
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
          Scale your business with <br />
          <span className="font-serif italic text-purple-400">intelligent automation.</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Stop chasing leads and manual operations. We build AI-driven systems that generate high-converting leads and scale your revenue while you focus on delivery.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#contact" 
            className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            Get a Free AI Audit
          </a>
          <div className="text-sm text-gray-500 sm:ml-4">
            Join 50+ growing businesses <br /> using SysAgen Lab
          </div>
        </div>

        {/* Dashboard Preview Style */}
        <div className="mt-20 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-[#0d0d0d] border border-white/10 rounded-2xl p-2 sm:p-4 overflow-hidden shadow-2xl">
             <img 
              src="https://picsum.photos/1200/800?grayscale" 
              alt="Dashboard Preview" 
              className="rounded-xl opacity-60 filter brightness-75 group-hover:brightness-90 transition-all duration-700"
            />
            {/* Overlay indicators similar to AI insights */}
            <div className="absolute top-1/4 left-10 md:left-20 bg-black/80 backdrop-blur border border-green-500/50 p-3 rounded-lg text-xs md:text-sm text-left max-w-[200px] animate-float shadow-lg shadow-green-500/10">
              <span className="text-green-400 font-bold block mb-1">✓ Efficiency Boost</span>
              AI Agent automated 84% of customer inquiries in first 30 days.
            </div>
            <div className="absolute bottom-1/4 right-10 md:right-20 bg-black/80 backdrop-blur border border-purple-500/50 p-3 rounded-lg text-xs md:text-sm text-left max-w-[200px] animate-float [animation-delay:2s] shadow-lg shadow-purple-500/10">
              <span className="text-purple-400 font-bold block mb-1">⚡ Revenue Spike</span>
              Lead conversion increased by 42% through behavioral AI targeting.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
