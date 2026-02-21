
import React, { useMemo } from 'react';

const ValuePropSection: React.FC = () => {
  const problems = useMemo(() => [
    {
      title: "Slow Response Times",
      desc: "Patient enquiries cool rapidly. If you don't respond within minutes, they've already called the next clinic on Google. We eliminate this leak.",
      icon: "📩"
    },
    {
      title: "Missed Procedure Calls",
      desc: "Your front-of-house is busy assisting patients. Every missed call is a potential high-value treatment plan lost to a competitor.",
      icon: "📞"
    },
    {
      title: "No Structured Follow-Up",
      desc: "Leads that don't book immediately are often forgotten. Without a multi-touch follow-up system, your cost-per-acquisition skyrockets.",
      icon: "🔄"
    },
    {
      title: "No Deposit Enforcement",
      desc: "No-shows and late cancellations drain your clinic's profitability. We install automated deposit systems to protect your practitioners' time.",
      icon: "💳"
    },
    {
      title: "Zero Conversion Visibility",
      desc: "If you can't see exactly which marketing channels are producing booked treatments, you're guessing with your growth budget.",
      icon: "📊"
    },
    {
      title: "Dormant Patient Databases",
      desc: "Your existing patients are your most valuable asset. Most clinics leave thousands in revenue on the table by failing to reactivate them.",
      icon: "💤"
    }
  ], []);

  const solutions = useMemo(() => [
    {
      title: "Demand Creation Systems",
      desc: "We don't just 'run ads'. We build predictable demand engines that attract high-intent patients looking for specific specialist treatments.",
      icon: "🧲"
    },
    {
      title: "Lead Capture & Speed-to-Lead",
      desc: "Instant, professional responses to every enquiry, 24/7. We ensure no patient is left waiting, regardless of when they reach out.",
      icon: "⚡"
    },
    {
      title: "Conversion & Follow-Up",
      desc: "Automated, ethical nurture sequences that educate patients and build trust, leading to higher consultation booking rates.",
      icon: "📈"
    },
    {
      title: "Retention & Reactivation",
      desc: "Systems that keep your clinic top-of-mind and automatically reach out to past patients for follow-up treatments and maintenance.",
      icon: "🔁"
    },
    {
      title: "Reporting & Revenue Visibility",
      desc: "A clear, real-time dashboard showing your exact ROI, conversion rates, and revenue pipeline. No more guesswork.",
      icon: "🖥️"
    },
    {
      title: "Infrastructure Management",
      desc: "We install and manage the entire revenue system, ensuring your clinic's growth is supported by a robust, scalable foundation.",
      icon: "🏗️"
    }
  ], []);

  const cardStyle: React.CSSProperties = {
    contain: 'content',
    transform: 'translateZ(0)',
    willChange: 'transform'
  };

  return (
    <section className="max-w-7xl mx-auto section-optimized">
      {/* THE PROBLEMS - The Hidden Revenue Leak */}
      <div className="mb-48">
        <div className="text-left mb-24 flex items-start gap-8">
          <div className="w-1 h-32 bg-brand-black hidden md:block"></div>
          <div>
            <div className="inline-block bg-white text-brand-grey font-bold px-5 py-2 text-[10px] uppercase tracking-[0.4em] mb-8 border border-brand-border shadow-sm">
              The Revenue Leak
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-brand-black mb-8 tracking-tighter leading-[1] uppercase">
              Is your clinic losing <br className="hidden md:block" /> revenue to poor infrastructure?
            </h2>
            <p className="text-brand-grey text-lg md:text-xl max-w-3xl font-light leading-relaxed">
              Most clinics don't have a lead problem; they have a system problem. We identify and fix the structural gaps that are costing you patients every single day.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {problems.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-brand-border p-12 rounded-[20px] shadow-premium transition-all duration-200 hover:-translate-y-1 hover:shadow-premium-hover group"
            >
              <div className="w-12 h-12 flex items-center justify-center border border-brand-border rounded-lg mb-10 group-hover:border-brand-black transition-colors">
                <span className="text-2xl grayscale opacity-60 group-hover:opacity-100 transition-opacity">{item.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-brand-black mb-4 tracking-tight uppercase">{item.title}</h3>
              <p className="text-brand-grey leading-relaxed text-sm font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* THE SOLUTIONS - Revenue Infrastructure */}
      <div className="pt-32 border-t border-brand-border">
        <div className="text-left mb-24 flex items-start gap-8">
          <div className="w-1 h-32 bg-brand-black hidden md:block"></div>
          <div>
            <div className="inline-block bg-white text-brand-grey font-bold px-5 py-2 text-[10px] uppercase tracking-[0.4em] mb-8 border border-brand-border shadow-sm">
              Strategic Systems
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-brand-black mb-8 tracking-tighter leading-[1] uppercase">
              Revenue Infrastructure <br className="hidden md:block" /> built for modern clinics.
            </h2>
            <p className="text-brand-grey text-lg md:text-xl max-w-3xl font-light leading-relaxed">
              We install end-to-end systems that manage the entire patient journey, from initial interest to long-term retention and advocacy.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {solutions.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-brand-border p-12 rounded-[20px] shadow-premium transition-all duration-200 hover:-translate-y-1 hover:shadow-premium-hover group"
            >
              <div className="w-12 h-12 flex items-center justify-center border border-brand-border rounded-lg mb-10 group-hover:border-brand-black transition-colors">
                <span className="text-2xl grayscale opacity-60 group-hover:opacity-100 transition-opacity">{item.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-brand-black mb-4 tracking-tight uppercase">{item.title}</h3>
              <p className="text-brand-grey leading-relaxed text-sm font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ROI SUMMARY */}
      <div className="mt-48 bg-white border border-brand-border rounded-[24px] p-10 md:p-20 shadow-premium relative overflow-hidden">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h3 className="text-4xl font-bold text-brand-black mb-10 tracking-tighter uppercase">Strategic Infrastructure</h3>
            <div className="space-y-10">
              <div className="pb-10 border-b border-brand-border">
                <p className="text-brand-grey font-bold text-[10px] uppercase tracking-[0.3em] mb-6">Traditional Marketing Agencies</p>
                <ul className="text-brand-grey text-sm space-y-5 font-light">
                  <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-brand-border"></div> Focus solely on lead volume, not conversion</li>
                  <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-brand-border"></div> No integration with your clinic's operations</li>
                  <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-brand-border"></div> Fragmented reporting and zero accountability</li>
                </ul>
              </div>
              <div>
                <p className="text-brand-black font-bold text-[10px] uppercase tracking-[0.3em] mb-6">SysAgen Revenue Systems</p>
                <ul className="text-brand-black text-sm space-y-5 font-medium">
                  <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-brand-black"></div> End-to-end systems built for patient conversion</li>
                  <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-brand-black"></div> Seamless integration with your existing team</li>
                  <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-brand-black"></div> Full visibility on revenue and ROI metrics</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center bg-brand-surface border border-brand-border rounded-[20px] p-16 text-center shadow-inner">
            <div className="text-8xl font-bold text-brand-black mb-4 tracking-tighter">ROI</div>
            <div className="text-[10px] text-brand-grey font-bold uppercase tracking-[0.4em] mb-12">Predictable Growth Engine</div>
            <a href="#contact" className="w-full bg-brand-black text-white py-6 rounded-none font-bold text-sm uppercase tracking-[0.2em] hover:bg-brand-grey hover:scale-[1.02] transition-all shadow-premium active:scale-95">
              Book a Revenue Audit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropSection;
