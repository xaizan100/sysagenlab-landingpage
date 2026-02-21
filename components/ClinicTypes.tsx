
import React from 'react';

const ClinicTypes: React.FC = () => {
  const types = [
    {
      id: "type-1",
      title: "Type 1: High Lead Flow, Poor Conversion",
      situation: "You have the volume, but your systems are breaking. Leads are falling through the cracks, and your team is overwhelmed by manual follow-up.",
      realIssue: "You are leaving six figures on the table in uncaptured revenue due to a lack of conversion infrastructure.",
      fix: "Install automated speed-to-lead and nurture systems to protect and capture existing demand."
    },
    {
      id: "type-2",
      title: "Type 2: Moderate Lead Flow, No Systems",
      situation: "You are stable but stagnant. You rely on a few key channels, but you have no predictable way to scale without increasing overhead.",
      realIssue: "Without infrastructure, scaling will only increase your operational burden without a proportional increase in profit.",
      fix: "Build a dual Demand + Conversion engine to create a scalable, predictable path to growth."
    },
    {
      id: "type-3",
      title: "Type 3: Low Lead Flow, No Marketing",
      situation: "You are invisible to the market and over-reliant on referrals. Your revenue is capped by your local reputation alone.",
      realIssue: "Automation alone will not solve your growth; you lack the fundamental engine required to generate market demand.",
      fix: "Engineer a high-performance Demand Creation system to establish market authority and consistent patient flow."
    }
  ];

  return (
    <section className="max-w-7xl mx-auto section-optimized">
      <div className="text-left mb-24 flex items-start gap-8">
        <div className="w-1 h-32 bg-brand-black hidden md:block"></div>
        <div>
          <div className="inline-block bg-white text-brand-grey font-bold px-5 py-2 text-[10px] uppercase tracking-[0.4em] mb-8 border border-brand-border shadow-sm">
            Self-Selection
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-brand-black mb-8 tracking-tighter leading-[1] uppercase">
            The Three Stages of <br className="hidden md:block" /> Clinic Growth.
          </h2>
          <p className="text-brand-grey text-lg md:text-xl max-w-3xl font-light leading-relaxed">
            Identifying your current structural bottleneck is the first step toward engineering a predictable revenue engine.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {types.map((type) => (
          <div 
            key={type.id}
            className="bg-white border border-brand-border rounded-[20px] p-8 md:p-12 flex flex-col h-full shadow-premium transition-all duration-200 hover:-translate-y-1 hover:shadow-premium-hover group"
          >
            <h3 className="text-xl font-bold mb-12 tracking-tight text-brand-black uppercase">
              {type.title}
            </h3>
            
            <div className="space-y-12 flex-grow">
              <div>
                <p className="text-[10px] text-brand-grey font-bold uppercase tracking-[0.3em] mb-4">The Situation</p>
                <p className="text-brand-grey text-sm leading-relaxed font-light">{type.situation}</p>
              </div>
              
              <div>
                <p className="text-[10px] text-brand-grey font-bold uppercase tracking-[0.3em] mb-4">The Real Issue</p>
                <p className="text-brand-black text-sm leading-relaxed font-bold">{type.realIssue}</p>
              </div>
              
              <div className="pt-10 border-t border-brand-border">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] mb-4 text-brand-black">The Actual Fix</p>
                <p className="text-brand-grey text-sm leading-relaxed font-light">{type.fix}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClinicTypes;
