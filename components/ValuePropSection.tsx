import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const ValuePropSection: React.FC = () => {
  const revenueLeaks = useMemo(() => [
    { title: "Slow response to enquiries", desc: "Every hour an enquiry sits unanswered, the chance of conversion drops. Your competitors are responding faster." },
    { title: "Missed calls during procedures", desc: "When you're with a patient, the phone goes to voicemail. Those leads rarely call back." },
    { title: "No structured follow-up", desc: "Leads that don't book immediately are lost without a clear nurture path. One touch is not enough." },
    { title: "No deposit enforcement", desc: "No-shows drain capacity and revenue. Without deposits and confirmations, your diary is built on sand." },
    { title: "No visibility on conversion rates", desc: "If you don't know your cost per booked patient or where leads drop off, you can't improve." },
    { title: "Dormant patient databases", desc: "Past patients are a revenue asset. Without reactivation, that asset sits unused." },
    { title: "No consistent demand generation", desc: "Relying on referrals or ad-hoc marketing means revenue fluctuates. You don't control the pipeline." },
  ], []);

  const approachPillars = useMemo(() => [
    { letter: "A", title: "Demand Creation Systems", desc: "Structured ways to generate consistent, high-intent patient enquiries so you control your pipeline instead of hoping for referrals." },
    { letter: "B", title: "Lead Capture & Speed-to-Lead", desc: "Fast response to every enquiry and missed call so no lead goes cold. Speed-to-lead directly impacts conversion." },
    { letter: "C", title: "Conversion & Follow-Up Systems", desc: "Clear paths from enquiry to booked consultation, with follow-up and deposit enforcement so appointments stick." },
    { letter: "D", title: "Retention & Reactivation Systems", desc: "Nurture existing patients and re-engage dormant ones. Your database is an asset; we help you use it." },
    { letter: "E", title: "Reporting & Revenue Visibility", desc: "You see conversion rates, cost per booked patient, and where revenue leaks. No guesswork." },
  ], []);

  return (
    <section className="max-w-7xl mx-auto section-optimized px-6">
      {/* 1. THE HIDDEN REVENUE LEAK */}
      <div className="mb-64">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-[1px] bg-brand-accent" />
              <span className="section-label">The Hidden Revenue Leak</span>
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-brand-white mb-10 tracking-[-0.05em] leading-[0.85] uppercase">
              Where Clinics <br /> Lose Revenue.
            </h2>
            <p className="text-brand-grey text-lg md:text-xl max-w-2xl font-light leading-relaxed">
              Revenue leaks when systems are missing or broken. Slow response, missed calls, no follow-up, no deposits, no visibility on conversion, dormant databases, and no consistent demand. If this sounds like your clinic, you're not alone. The fix is infrastructure, not more marketing.
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
                alt="Clinic consultation"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                width={800}
                height={800}
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-brand-surface p-10 shadow-editorial border border-brand-border max-w-[240px]">
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-brand-accent block mb-4">Reality</span>
              <p className="text-xs font-medium leading-relaxed italic text-brand-white">"Most clinics don't have a lead problem. They have a system problem."</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {revenueLeaks.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.8 }}
              className="border-t border-brand-border pt-8"
            >
              <span className="text-[10px] font-black text-brand-accent mb-4 block">0{idx + 1}</span>
              <h3 className="text-lg font-black text-brand-white mb-4 tracking-tight uppercase">{item.title}</h3>
              <p className="text-brand-grey leading-relaxed text-sm font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 2. OUR APPROACH – REVENUE INFRASTRUCTURE */}
      <div className="pt-32 border-t border-brand-border mb-64">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-20">
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
                alt="Clinic systems"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                width={800}
                height={800}
              />
            </div>
            <div className="absolute -top-10 -right-10 bg-brand-surface p-10 shadow-editorial border border-brand-border max-w-[240px]">
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-brand-accent block mb-4">What We Install</span>
              <p className="text-xs font-medium leading-relaxed text-brand-white">End-to-end revenue systems, not single tools or one-off campaigns.</p>
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
              <div className="w-10 h-[1px] bg-brand-accent" />
              <span className="section-label">Our Approach</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-[4.5rem] font-black text-brand-white mb-10 tracking-[-0.05em] leading-[0.9] uppercase">
              <span className="block">Revenue</span>
              <span className="block">Infrastructure.</span>
            </h2>
            <p className="text-brand-white text-lg md:text-xl max-w-2xl font-light leading-relaxed opacity-90">
              We don't sell software or run ads in isolation. We install predictable patient acquisition and conversion systems. Demand creation, lead capture, conversion and follow-up, retention and reactivation, and full revenue visibility. Structured, intelligent, and built to last.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {approachPillars.slice(0, 3).map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="border-t border-brand-accent pt-8"
            >
              <span className="text-[10px] font-black text-brand-accent mb-4 block">{item.letter}</span>
              <h3 className="text-lg font-black text-brand-white mb-4 tracking-tight uppercase">{item.title}</h3>
              <p className="text-brand-grey leading-relaxed text-sm font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {approachPillars.slice(3, 5).map((item, idx) => (
            <motion.div
              key={idx + 3}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx + 3) * 0.1, duration: 0.8 }}
              className="border-t border-brand-accent pt-8"
            >
              <span className="text-[10px] font-black text-brand-accent mb-4 block">{item.letter}</span>
              <h3 className="text-lg font-black text-brand-white mb-4 tracking-tight uppercase">{item.title}</h3>
              <p className="text-brand-grey leading-relaxed text-sm font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. WHY MOST MARKETING FAILS CLINICS */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="editorial-card p-10 md:p-24 relative overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-[1px] bg-brand-accent" />
              <span className="section-label">Why Most Marketing Fails Clinics</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-brand-white mb-10 tracking-[-0.04em] uppercase leading-[0.85]">
              Agencies Focus on Ads. <br />
              <span className="text-brand-accent">We Build Systems.</span>
            </h2>
            <p className="text-brand-grey text-base md:text-lg font-light leading-relaxed mb-10">
              Most agencies focus on ads only. Software companies focus on tools. Consultants focus on theory. Very few build end-to-end revenue systems that create demand, capture leads, convert them, and retain or reactivate patients—with full visibility. We do. That's the difference between marketing and infrastructure.
            </p>
            <ul className="text-brand-grey text-sm space-y-4 font-light">
              <li className="flex items-start gap-3"><span className="text-brand-accent mt-0.5">—</span> Ads alone don't fix slow response or no follow-up.</li>
              <li className="flex items-start gap-3"><span className="text-brand-accent mt-0.5">—</span> Tools alone don't fix a missing demand engine.</li>
              <li className="flex items-start gap-3"><span className="text-brand-accent mt-0.5">—</span> Theory alone doesn't book more patients.</li>
            </ul>
          </div>
          <div className="flex flex-col justify-center items-center bg-brand-muted border border-brand-border p-16 text-center shadow-editorial">
            <div className="text-[100px] md:text-[120px] font-black text-brand-accent mb-4 tracking-[-0.1em] leading-none">ROI</div>
            <div className="text-[9px] text-brand-grey font-black uppercase tracking-[0.5em] mb-12">Predictable Growth</div>
            <a href="#contact" className="btn-editorial w-full">
              Book Revenue Audit
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ValuePropSection;
