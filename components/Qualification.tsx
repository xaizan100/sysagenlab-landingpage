import React from 'react';
import { motion } from 'framer-motion';

const Qualification: React.FC = () => {
  const forItems = [
    "Clinics serious about growth and willing to implement systems.",
    "Clinics that value structure over quick hacks or cheap marketing.",
    "Practices willing to invest in revenue infrastructure and track numbers.",
    "Clinics ready to handle a predictable increase in patient demand.",
  ];

  const notForItems = [
    "Clinics looking for quick wins, cheap marketing, or overnight miracles.",
    "Practices unwilling to invest in their internal revenue infrastructure.",
    "Clinics not tracking performance data or not ready to implement.",
    "Owners who want hands-off growth without any operational commitment.",
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
          <span className="section-label">Strategic Qualification</span>
        </div>
        <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-brand-white mb-10 tracking-[-0.05em] leading-[0.85] uppercase">
          Who This Is For — <br /> And Who It's Not.
        </h2>
        <p className="text-brand-grey text-lg md:text-xl max-w-3xl font-light leading-relaxed">
          We're explicit so you can self-qualify. This increases the quality of leads and ensures we only work with clinics where we can create measurable impact.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="editorial-card p-10 md:p-16 flex flex-col"
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-2 bg-brand-accent" />
            <span className="text-[9px] font-black uppercase tracking-[0.5em] text-brand-accent">This Is For</span>
          </div>
          <h3 className="text-3xl font-black text-brand-white mb-12 tracking-tighter uppercase leading-[0.85]">
            Clinics serious about <br /> structured growth.
          </h3>
          <ul className="space-y-8">
            {forItems.map((item, i) => (
              <li key={i} className="flex items-start gap-6">
                <div className="text-[10px] font-black text-brand-accent mt-1">0{i + 1}</div>
                <span className="text-brand-grey text-sm font-light leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="bg-brand-muted border border-brand-border p-10 md:p-16 flex flex-col"
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-2 bg-brand-muted" />
            <span className="text-[9px] font-black uppercase tracking-[0.5em] text-brand-grey">This Is Not For</span>
          </div>
          <h3 className="text-3xl font-black text-brand-white mb-12 tracking-tighter uppercase leading-[0.85]">
            We are not a fit <br /> for every clinic.
          </h3>
          <ul className="space-y-8">
            {notForItems.map((item, i) => (
              <li key={i} className="flex items-start gap-6">
                <div className="text-[10px] font-black text-brand-grey mt-1">0{i + 1}</div>
                <span className="text-brand-grey text-sm font-light leading-relaxed italic">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Qualification;
