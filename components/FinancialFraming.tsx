import React from 'react';
import { motion } from 'framer-motion';

const FinancialFraming: React.FC = () => {
  const points = [
    {
      title: "Small improvements in conversion",
      desc: "A modest increase in lead-to-consultation conversion can translate into a meaningful rise in net profit. You're already paying for demand; capturing more of it doesn't require doubling spend.",
    },
    {
      title: "Reducing no-shows",
      desc: "No-shows drain capacity and revenue. Deposit enforcement and multi-channel reminders don't require miracles—they're systematic. Reducing no-shows by a realistic margin protects practitioner time and clinic capacity.",
    },
    {
      title: "Reactivating old patients",
      desc: "Your dormant database is an asset. Re-engaging even a small percentage of past patients can generate immediate cash flow. No new acquisition cost. We don't promise unrealistic percentages; we focus on structure and consistency.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto section-optimized px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="editorial-card p-10 md:p-24 relative overflow-hidden"
      >
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div>
            <div className="text-left mb-16">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-[1px] bg-brand-accent" />
                <span className="section-label">Financial Framing</span>
              </div>
              <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-brand-white mb-10 tracking-[-0.05em] leading-[0.85] uppercase">
                Small Shifts. <br />
                <span className="text-brand-grey">Significant Impact.</span>
              </h2>
              <p className="text-brand-grey text-lg md:text-xl font-light leading-relaxed max-w-xl">
                Growth doesn't require miracles. It requires optimization. We don't make unrealistic income claims. We explain how small, logical improvements compound into meaningful revenue when the infrastructure is in place.
              </p>
            </div>

            <div className="space-y-14">
              {points.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className="flex gap-10"
                >
                  <div className="text-[10px] font-black text-brand-accent mt-1">0{i + 1}</div>
                  <div>
                    <h4 className="text-brand-white font-black text-lg mb-4 uppercase tracking-tight">{item.title}</h4>
                    <p className="text-brand-grey text-sm leading-relaxed font-light">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-brand-muted p-12 md:p-20 border border-brand-border text-center"
          >
            <p className="text-brand-grey text-[9px] font-black uppercase tracking-[0.5em] mb-10">Revenue Impact</p>
            <p className="text-brand-white text-base md:text-lg font-light leading-relaxed mb-12 max-w-sm mx-auto">
              Exact numbers depend on your clinic. The principle is consistent: better conversion, fewer no-shows, and reactivation create measurable gains when systems are installed and run properly.
            </p>
            <p className="text-brand-grey/60 text-[8px] uppercase tracking-widest mb-12 italic max-w-xs mx-auto">
              We discuss realistic projections on your Revenue Audit call. No hype. No guaranteed percentages.
            </p>
            <a href="#contact" className="btn-editorial w-full">
              Book Revenue Audit
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default FinancialFraming;
