
import React from 'react';

const SocialProof: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-6 bg-white border-y border-brand-border">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-brand-grey text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] mb-12 md:mb-16">
          Strategic partners to high-performance clinics
        </h3>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-24 opacity-30 grayscale contrast-125">
          {/* Professional Monochrome Logos */}
          <div className="flex items-center gap-3 text-lg md:text-xl font-bold text-brand-black tracking-tighter">
            <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-brand-black"></div> STRATOS
          </div>
          <div className="flex items-center gap-3 text-lg md:text-xl font-bold text-brand-black tracking-tighter">
            <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border-2 border-brand-black"></div> QUANTUM
          </div>
          <div className="flex items-center gap-3 text-lg md:text-xl font-bold text-brand-black tracking-tighter">
            <div className="w-5 h-5 md:w-6 md:h-6 transform rotate-45 border-2 border-brand-black"></div> NEXUS
          </div>
          <div className="flex items-center gap-3 text-lg md:text-xl font-bold text-brand-black tracking-tighter uppercase">
             Apex Advisory
          </div>
          <div className="flex items-center gap-3 text-lg md:text-xl font-bold text-brand-black tracking-tighter">
            <div className="w-5 h-5 md:w-6 md:h-6 border-t-2 border-brand-black"></div> VELOCITY
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
