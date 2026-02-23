
import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const Qualification: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto section-optimized px-6">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-left mb-24"
      >
        <div className="flex items-center gap-4 mb-10">
          <div className="w-10 h-[1px] bg-brand-black"></div>
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-grey">Strategic Qualification</span>
        </div>
        <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-brand-black mb-10 tracking-[-0.05em] leading-[0.85] uppercase">
          Who This Is For — <br /> And Who It’s Not.
        </h2>
        <p className="text-brand-grey text-lg md:text-xl max-w-3xl font-light leading-relaxed">
          We only partner with clinics where we can guarantee a significant and measurable revenue impact. Our systems require a commitment to professional operations.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* WHO THIS IS FOR */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="editorial-card p-10 md:p-16 flex flex-col"
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-2 bg-brand-black"></div>
            <span className="text-[9px] font-black uppercase tracking-[0.5em] text-brand-black">Ideal Partner</span>
          </div>
          <h3 className="text-3xl font-black text-brand-black mb-12 tracking-tighter uppercase leading-[0.85]">Clinics serious about <br />structured growth.</h3>
          <ul className="space-y-10">
            {[
              "Clinics that want structured growth and value systems over 'hacks'.",
              "Owners who track performance data and are serious about expansion.",
              "Practices with established treatment plans looking to scale predictably.",
              "Clinics that understand growth requires a strategic infrastructure."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-6">
                <div className="text-[10px] font-black text-brand-black mt-1">0{i + 1}</div>
                <span className="text-brand-grey text-sm font-light leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* WHO THIS IS NOT FOR */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="bg-brand-offwhite border border-brand-border p-10 md:p-16 flex flex-col"
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-2 bg-brand-light"></div>
            <span className="text-[9px] font-black uppercase tracking-[0.5em] text-brand-grey">Not a Fit</span>
          </div>
          <h3 className="text-3xl font-black text-brand-black mb-12 tracking-tighter uppercase leading-[0.85]">We are not a fit <br />for every clinic.</h3>
          <ul className="space-y-10">
            {[
              "Clinics looking for 'quick wins', cheap marketing, or overnight miracles.",
              "Practices unwilling to invest in their internal revenue infrastructure.",
              "Owners looking for hands-off growth without operational implementation.",
              "Clinics not ready to handle a predictable increase in patient demand."
            ].map((item, i) => (
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
