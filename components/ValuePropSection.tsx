
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, Link2, BarChart3, Target, Settings, ShieldCheck, ArrowRight } from 'lucide-react';

const ValuePropSection: React.FC = () => {
  const problems = useMemo(() => [
    {
      title: "Inconsistent Lead Flow",
      desc: "Relying on referrals or random marketing activity creates revenue fluctuations. Without controlled acquisition, your growth is left to chance.",
    },
    {
      title: "Reliance on Referrals",
      desc: "Word of mouth is a vulnerability, not a strategy. If your referral source dries up, your clinic's revenue infrastructure collapses.",
    },
    {
      title: "No Revenue Visibility",
      desc: "If you don't track the exact cost per booked patient, you aren't scaling; you're gambling with your clinic's financial future.",
    }
  ], []);

  const solutions = useMemo(() => [
    {
      title: "Demand Creation Systems",
      desc: "We build controlled acquisition frameworks using paid media, treatment-specific funnels, and rigorous attribution tracking.",
    },
    {
      title: "Conversion Infrastructure",
      desc: "We install speed-to-lead protocols, automated follow-ups, and deposit enforcement to protect and capture every pound of revenue.",
    },
    {
      title: "Revenue Protection",
      desc: "Our systems reactivate dormant databases and nurture consultations to ensure no high-value patient ever falls through the cracks.",
    }
  ], []);

  return (
    <section className="max-w-7xl mx-auto section-optimized px-6">
      {/* THE PROBLEMS - Why Most Clinics Struggle to Scale */}
      <div className="mb-64">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-[1px] bg-brand-accent"></div>
              <span className="section-label">The Structural Failure</span>
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-brand-white mb-10 tracking-[-0.05em] leading-[0.85] uppercase">
              Why Most Clinics <br /> Struggle to Scale.
            </h2>
            <p className="text-brand-grey text-lg md:text-xl max-w-2xl font-light leading-relaxed">
              Scaling is not a marketing problem; it is a structural one. If you don’t control your demand, your revenue fluctuates. If enquiries go unanswered, you are funding your competitors.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="image-reveal aspect-square shadow-editorial border border-brand-border overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80" 
                alt="Clinic Consultation" 
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                width={800}
                height={800}
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-brand-surface p-10 shadow-editorial border border-brand-border max-w-[240px]">
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-brand-accent block mb-4">Market Insight</span>
              <p className="text-xs font-medium leading-relaxed italic text-brand-white">"Referrals are a vulnerability, not a strategy."</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {problems.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="border-t border-brand-border pt-10"
            >
              <span className="text-[10px] font-black text-brand-accent mb-6 block">0{idx + 1}</span>
              <h3 className="text-xl font-black text-brand-white mb-6 tracking-tight uppercase">{item.title}</h3>
              <p className="text-brand-grey leading-relaxed text-sm font-light">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* THE SOLUTIONS - Dual Solution Framework */}
      <div className="pt-32 border-t border-brand-border mb-64">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-5 order-2 lg:order-1 relative"
          >
            <div className="image-reveal aspect-square shadow-editorial border border-brand-border overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80" 
                alt="Clinic Management System" 
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                width={800}
                height={800}
              />
            </div>
            <div className="absolute -top-10 -right-10 bg-brand-surface p-10 shadow-editorial border border-brand-border max-w-[240px]">
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-brand-accent block mb-4">Infrastructure</span>
              <p className="text-xs font-medium leading-relaxed text-brand-white">Engineering high-performance conversion protocols.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 order-1 lg:order-2 lg:pl-12"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-[1px] bg-brand-accent"></div>
              <span className="section-label">The Framework</span>
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-brand-white mb-10 tracking-[-0.05em] leading-[0.85] uppercase">
              Demand meets <br /> Infrastructure.
            </h2>
            <p className="text-brand-grey text-lg md:text-xl max-w-2xl font-light leading-relaxed">
              We build the entire system. From generating high-intent market demand to installing the automated infrastructure that converts that demand into booked treatments.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {solutions.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="border-t border-brand-accent pt-10"
            >
              <span className="text-[10px] font-black text-brand-accent mb-6 block">0{idx + 1}</span>
              <h3 className="text-xl font-black text-brand-white mb-6 tracking-tight uppercase">{item.title}</h3>
              <p className="text-brand-grey leading-relaxed text-sm font-light">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ROI SUMMARY */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="editorial-card p-10 md:p-24 relative overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div>
            <h3 className="text-4xl md:text-6xl font-black text-brand-white mb-12 tracking-[-0.04em] uppercase leading-[0.85]">We Don’t Run Ads. <br /> <span className="text-brand-accent">We Build Systems.</span></h3>
            <div className="space-y-16">
              <div>
                <p className="text-brand-grey font-black text-[9px] uppercase tracking-[0.5em] mb-8">Traditional Marketing</p>
                <ul className="text-brand-grey text-xs space-y-6 font-light uppercase tracking-widest">
                  <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-brand-muted"></div> Focus solely on lead volume</li>
                  <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-brand-muted"></div> Deliver clicks, not patients</li>
                  <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-brand-muted"></div> Zero accountability</li>
                </ul>
              </div>
              <div>
                <p className="text-brand-accent font-black text-[9px] uppercase tracking-[0.5em] mb-8">SysAgen Infrastructure</p>
                <ul className="text-brand-white text-xs space-y-6 font-black uppercase tracking-widest">
                  <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-brand-accent"></div> Integrated Demand + Conversion</li>
                  <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-brand-accent"></div> Automated speed-to-lead</li>
                  <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-brand-accent"></div> Full revenue visibility</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center bg-brand-muted border border-brand-border p-16 text-center shadow-editorial">
            <div className="text-[120px] font-black text-brand-accent mb-4 tracking-[-0.1em] leading-none">ROI</div>
            <div className="text-[9px] text-brand-grey font-black uppercase tracking-[0.5em] mb-16">Engineered Growth</div>
            <a href="#contact" className="btn-editorial w-full">
              Book Audit
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ValuePropSection;
