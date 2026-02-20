
import React from 'react';

const SocialProof: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-black/20">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-gray-500 text-sm font-bold uppercase tracking-[0.2em] mb-10">
          Powering high-performance clinics and specialist practices
        </h3>
        
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Mock Logos */}
          <div className="flex items-center gap-2 text-2xl font-bold text-white">
            <div className="w-8 h-8 rounded bg-gray-500"></div> STRATOS
          </div>
          <div className="flex items-center gap-2 text-2xl font-bold text-white">
            <div className="w-8 h-8 rounded-full bg-gray-500"></div> QUANTUM
          </div>
          <div className="flex items-center gap-2 text-2xl font-bold text-white">
            <div className="w-8 h-8 transform rotate-45 bg-gray-500"></div> NEXUS
          </div>
          <div className="flex items-center gap-2 text-2xl font-bold text-white">
             APEX
          </div>
          <div className="flex items-center gap-2 text-2xl font-bold text-white">
            <div className="w-8 h-8 rounded-tr-xl bg-gray-500"></div> VELOCITY
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
