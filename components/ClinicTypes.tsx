import React from 'react';
import { motion } from 'framer-motion';

const ClinicTypes: React.FC = () => {
  const types = [
    {
      id: "type-1",
      title: "Type 1: High Lead Flow, Poor Conversion",
      thinkIssue: "You think you need more leads or better marketing.",
      realIssue: "You have the volume; your conversion infrastructure is broken. Leads fall through the cracks, follow-up is manual or missing, and you have no deposit enforcement. You're leaving significant revenue on the table.",
      fix: "Install speed-to-lead and conversion systems: fast response, structured follow-up, and deposit enforcement. Capture and convert the demand you already have.",
    },
    {
      id: "type-2",
      title: "Type 2: Moderate Lead Flow, No Systems",
      thinkIssue: "You think you need to spend more on ads or hire more staff.",
      realIssue: "You're stable but stagnant. You rely on a few channels and have no predictable way to scale without burning cash or adding overhead. Without infrastructure, growth is chaotic.",
      fix: "Build a dual engine: demand creation plus conversion systems. Create a scalable, predictable path so more leads turn into more booked patients without proportionally more cost.",
    },
    {
      id: "type-3",
      title: "Type 3: Low Lead Flow, No Marketing",
      thinkIssue: "You think automation or a new tool will fix low enquiries.",
      realIssue: "Automation alone will not solve your growth. You lack the fundamental engine to generate market demand. You're invisible to the market or over-reliant on referrals. Revenue is capped by reputation alone.",
      fix: "Demand creation comes first. Build a high-performance demand engine to establish market presence and consistent patient flow. Only then does conversion infrastructure multiply the return.",
    },
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
          <div className="w-10 h-[1px] bg-brand-accent" />
          <span className="section-label">Self-Selection</span>
        </div>
        <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-brand-white mb-10 tracking-[-0.05em] leading-[0.85] uppercase">
          The Three Types <br /> of Clinics.
        </h2>
        <p className="text-brand-grey text-lg md:text-xl max-w-3xl font-light leading-relaxed">
          Identifying your current situation is the first step. Each type has a different real issue and a different fix. We help you see which one you are.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {types.map((type, idx) => (
          <motion.div
            key={type.id}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: idx * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="editorial-card p-10 md:p-12 flex flex-col h-full cursor-default"
          >
            <h3 className="text-xl font-black mb-12 tracking-tight text-brand-white uppercase leading-tight">
              {type.title}
            </h3>

            <div className="space-y-12 flex-grow">
              <div>
                <p className="text-[9px] text-brand-grey font-black uppercase tracking-[0.5em] mb-4">What You Might Think the Issue Is</p>
                <p className="text-brand-grey text-sm leading-relaxed font-light">{type.thinkIssue}</p>
              </div>

              <div>
                <p className="text-[9px] text-brand-grey font-black uppercase tracking-[0.5em] mb-4">The Real Issue</p>
                <p className="text-brand-white text-sm leading-relaxed font-medium">{type.realIssue}</p>
              </div>

              <div className="pt-10 border-t border-brand-border">
                <p className="text-[9px] font-black uppercase tracking-[0.5em] mb-4 text-brand-accent">The Actual Fix</p>
                <p className="text-brand-grey text-sm leading-relaxed font-light">{type.fix}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ClinicTypes;
