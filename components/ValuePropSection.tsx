
import React, { useMemo } from 'react';

const ValuePropSection: React.FC = () => {
  const problems = useMemo(() => [
    {
      title: "Inconsistent Lead Flow",
      desc: "Relying on referrals or random marketing activity creates revenue fluctuations. Without controlled acquisition, your growth is left to chance.",
      icon: "📉"
    },
    {
      title: "Reliance on Referrals",
      desc: "Word of mouth is a vulnerability, not a strategy. If your referral source dries up, your clinic's revenue infrastructure collapses.",
      icon: "🔗"
    },
    {
      title: "No Revenue Visibility",
      desc: "If you don't track the exact cost per booked patient, you aren't scaling; you're gambling with your clinic's financial future.",
      icon: "📊"
    }
  ], []);

  const solutions = useMemo(() => [
    {
      title: "Demand Creation Systems",
      desc: "We build controlled acquisition frameworks using paid media, treatment-specific funnels, and rigorous attribution tracking.",
      icon: "🎯"
    },
    {
      title: "Conversion Infrastructure",
      desc: "We install speed-to-lead protocols, automated follow-ups, and deposit enforcement to protect and capture every pound of revenue.",
      icon: "⚙️"
    },
    {
      title: "Revenue Protection",
      desc: "Our systems reactivate dormant databases and nurture consultations to ensure no high-value patient ever falls through the cracks.",
      icon: "🛡️"
    }
  ], []);

  const cardStyle: React.CSSProperties = {
    contain: 'content',
    transform: 'translateZ(0)',
    willChange: 'transform'
  };

  return (
    <section className="max-w-7xl mx-auto section-optimized">
      {/* THE PROBLEMS - Why Most Clinics Struggle to Scale */}
      <div className="mb-48">
        <div className="text-left mb-24 flex items-start gap-8">
          <div className="w-1 h-32 bg-brand-black hidden md:block"></div>
          <div>
            <div className="inline-block bg-white text-brand-grey font-bold px-5 py-2 text-[10px] uppercase tracking-[0.4em] mb-8 border border-brand-border shadow-sm">
              The Structural Failure
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-brand-black mb-8 tracking-tighter leading-[1] uppercase">
              Why Most Clinics <br className="hidden md:block" /> Struggle to Scale.
            </h2>
            <p className="text-brand-grey text-lg md:text-xl max-w-3xl font-light leading-relaxed">
              Scaling is not a marketing problem; it is a structural one. If you don’t control your demand, your revenue fluctuates. If enquiries go unanswered, you are funding your competitors.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {problems.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-brand-border p-12 rounded-[20px] shadow-premium transition-all duration-200 hover:-translate-y-1 hover:shadow-premium-hover group"
              style={cardStyle}
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

      {/* THE SOLUTIONS - Dual Solution Framework */}
      <div className="pt-32 border-t border-brand-border">
        <div className="text-left mb-24 flex items-start gap-8">
          <div className="w-1 h-32 bg-brand-black hidden md:block"></div>
          <div>
            <div className="inline-block bg-white text-brand-grey font-bold px-5 py-2 text-[10px] uppercase tracking-[0.4em] mb-8 border border-brand-border shadow-sm">
              The Framework
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-brand-black mb-8 tracking-tighter leading-[1] uppercase">
              Demand Creation meets <br className="hidden md:block" /> Conversion Infrastructure.
            </h2>
            <p className="text-brand-grey text-lg md:text-xl max-w-3xl font-light leading-relaxed">
              We build the entire system. From generating high-intent market demand to installing the automated infrastructure that converts that demand into booked treatments.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {solutions.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-brand-border p-12 rounded-[20px] shadow-premium transition-all duration-200 hover:-translate-y-1 hover:shadow-premium-hover group"
              style={cardStyle}
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
            <h3 className="text-4xl font-bold text-brand-black mb-10 tracking-tighter uppercase">We Don’t Run Ads. <br /> We Build Revenue Systems.</h3>
            <div className="space-y-10">
              <div className="pb-10 border-b border-brand-border">
                <p className="text-brand-grey font-bold text-[10px] uppercase tracking-[0.3em] mb-6">Traditional Marketing Agencies</p>
                <ul className="text-brand-grey text-sm space-y-5 font-light">
                  <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-brand-border"></div> Focus solely on lead volume, not revenue</li>
                  <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-brand-border"></div> Deliver clicks and impressions, not patients</li>
                  <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-brand-border"></div> Fragmented reporting and zero accountability</li>
                </ul>
              </div>
              <div>
                <p className="text-brand-black font-bold text-[10px] uppercase tracking-[0.3em] mb-6">SysAgen Revenue Infrastructure</p>
                <ul className="text-brand-black text-sm space-y-5 font-medium">
                  <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-brand-black"></div> Integrated Demand + Conversion systems</li>
                  <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-brand-black"></div> Speed-to-lead and automated follow-up</li>
                  <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-brand-black"></div> Full visibility on cost per booked treatment</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center bg-brand-surface border border-brand-border rounded-[20px] p-16 text-center shadow-inner">
            <div className="text-8xl font-bold text-brand-black mb-4 tracking-tighter">ROI</div>
            <div className="text-[10px] text-brand-grey font-bold uppercase tracking-[0.4em] mb-12">Engineered Growth</div>
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
