
import React from 'react';

const SocialProof: React.FC = () => {
  return (
    <section className="py-10 md:py-16 px-6 bg-brand-white">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex flex-col items-center gap-6 mb-16">
          <div className="w-12 h-[1px] bg-brand-light"></div>
          <h3 className="text-brand-grey text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em]">
            Strategic partners to high-performance clinics across the UK
          </h3>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-32 opacity-20 grayscale">
          {/* Professional Monochrome Logos */}
          <div className="flex items-center gap-3 text-lg md:text-xl font-black text-brand-black tracking-tighter">
            <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-brand-black"></div> Harley Street Clinic
          </div>
          <div className="flex items-center gap-3 text-lg md:text-xl font-black text-brand-black tracking-tighter">
            <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border-2 border-brand-black"></div> London Medical
          </div>
          <div className="flex items-center gap-3 text-lg md:text-xl font-black text-brand-black tracking-tighter">
            <div className="w-5 h-5 md:w-6 md:h-6 transform rotate-45 border-2 border-brand-black"></div> Chelsea Wellness
          </div>
          <div className="flex items-center gap-3 text-lg md:text-xl font-black text-brand-black tracking-tighter uppercase">
             Mayfair Aesthetics
          </div>
          <div className="flex items-center gap-3 text-lg md:text-xl font-black text-brand-black tracking-tighter">
            <div className="w-5 h-5 md:w-6 md:h-6 border-t-2 border-brand-black"></div> Cambridge Health
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
