
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ShieldCheck, Gem, ArrowRight } from 'lucide-react';

const FinancialFraming: React.FC = () => {
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
                <div className="w-10 h-[1px] bg-brand-black"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-grey">The Mathematics of Growth</span>
              </div>
              <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-brand-black mb-10 tracking-[-0.05em] leading-[0.85] uppercase">
                Small Shifts. <br />
                <span className="text-brand-grey">Significant Impact.</span>
              </h2>
              <p className="text-brand-grey text-lg md:text-xl font-light leading-relaxed max-w-xl">
                Growth does not require miracles; it requires optimization. Small conversion improvements compound into significant annual revenue without increasing your advertising spend.
              </p>
            </div>
            
            <div className="space-y-16">
              {[
                { title: "Consultation Conversion", desc: "A 10% increase in lead-to-consultation conversion can result in a 25-30% increase in net profit by capturing demand you are already paying for." },
                { title: "No-Show Reduction", desc: "Reducing no-shows by 20% through automated deposit enforcement and multi-channel reminders protects your practitioners' time and clinic capacity." },
                { title: "Database Reactivation", desc: "Re-engaging just 5% of your dormant patient database creates immediate cash flow from an asset you already own, with zero acquisition cost." }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className="flex gap-10"
                >
                  <div className="text-[10px] font-black text-brand-black mt-1">0{i + 1}</div>
                  <div>
                    <h4 className="text-brand-black font-black text-lg mb-4 uppercase tracking-tight">{item.title}</h4>
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
            className="bg-brand-offwhite p-12 md:p-20 border border-brand-border text-center"
          >
            <p className="text-brand-grey text-[9px] font-black uppercase tracking-[0.5em] mb-10">Revenue Impact Projection</p>
            <div className="text-[80px] md:text-[120px] font-black text-brand-black mb-6 tracking-[-0.08em] leading-none">£120k+</div>
            <p className="text-brand-grey text-[10px] font-black uppercase tracking-[0.4em] mb-20">Additional Annual Revenue</p>
            
            <div className="space-y-8 mb-20">
              {[
                { label: "Consultation Conversion", value: "+10%" },
                { label: "No-Show Reduction", value: "-20%" },
                { label: "Database Reactivation", value: "+5%" }
              ].map((stat, idx) => (
                <div key={idx} className="flex justify-between items-center py-6 border-b border-brand-border">
                  <span className="text-brand-grey text-[9px] uppercase tracking-[0.3em] font-black">{stat.label}</span>
                  <span className="text-brand-black font-black text-2xl tracking-tighter">{stat.value}</span>
                </div>
              ))}
            </div>
            
            <p className="text-brand-grey/40 text-[8px] uppercase tracking-widest mb-16 italic">
              *Estimates based on average results across private medical and aesthetic practices.
            </p>

            <a href="#contact" className="btn-editorial w-full">
              Request Audit
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default FinancialFraming;
