
import React from 'react';
import { motion } from 'framer-motion';

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
    <section className="max-w-7xl mx-auto section-optimized px-6">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-left mb-24"
      >
        <div className="flex items-center gap-4 mb-10">
          <div className="w-10 h-[1px] bg-brand-accent"></div>
          <span className="section-label">Self-Selection</span>
        </div>
        <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-brand-white mb-10 tracking-[-0.05em] leading-[0.85] uppercase">
          The Three Stages of <br /> Clinic Growth.
        </h2>
        <p className="text-brand-grey text-lg md:text-xl max-w-3xl font-light leading-relaxed">
          Identifying your current structural bottleneck is the first step toward engineering a predictable revenue engine.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {types.map((type, idx) => (
          <motion.div 
            key={type.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.8 }}
            className="editorial-card p-10 md:p-12 flex flex-col h-full"
          >
            <h3 className="text-xl font-black mb-16 tracking-tight text-brand-white uppercase leading-tight">
              {type.title}
            </h3>
            
            <div className="space-y-16 flex-grow">
              <div>
                <p className="text-[9px] text-brand-grey font-black uppercase tracking-[0.5em] mb-6">The Situation</p>
                <p className="text-brand-grey text-sm leading-relaxed font-light">{type.situation}</p>
              </div>
              
              <div>
                <p className="text-[9px] text-brand-grey font-black uppercase tracking-[0.5em] mb-6">The Real Issue</p>
                <p className="text-brand-white text-sm leading-relaxed font-black uppercase tracking-tight">{type.realIssue}</p>
              </div>
              
              <div className="pt-12 border-t border-brand-border">
                <p className="text-[9px] font-black uppercase tracking-[0.5em] mb-6 text-brand-accent">The Actual Fix</p>
                <p className="text-brand-grey text-sm leading-relaxed font-light italic">{type.fix}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ClinicTypes;
