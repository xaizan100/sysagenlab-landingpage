
import React from 'react';

const MarketingFailure: React.FC = () => {
  const points = [
    {
      title: "Marketing Agencies focus on Ads only",
      desc: "They generate leads but take no responsibility for what happens after the click. If your internal systems are broken, their ads are just an expensive way to fail.",
      icon: "📣"
    },
    {
      title: "Software Companies focus on Tools",
      desc: "They sell you a platform and leave you to figure it out. Without a strategic revenue framework, you just end up with another monthly subscription you don't use.",
      icon: "💻"
    },
    {
      title: "Consultants focus on Theory",
      desc: "They give you a 50-page strategy document but no way to implement it. You need infrastructure that works, not more advice to manage.",
      icon: "📜"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto section-optimized">
      <div className="text-left mb-24 flex items-start gap-8">
        <div className="w-1 h-32 bg-brand-black hidden md:block"></div>
        <div>
          <div className="inline-block bg-white text-brand-grey font-bold px-5 py-2 text-[10px] uppercase tracking-[0.4em] mb-8 border border-brand-border shadow-sm">
            The Industry Gap
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-brand-black mb-8 tracking-tighter leading-[1] uppercase">
            Why most marketing <br className="hidden md:block" /> fails private clinics.
          </h2>
          <p className="text-brand-grey text-lg md:text-xl max-w-3xl font-light leading-relaxed">
            The gap isn't in the marketing; it's in the infrastructure. We don't just provide services; we build end-to-end revenue systems.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-32">
        {points.map((point, idx) => (
          <div 
            key={idx} 
            className="bg-white border border-brand-border p-12 rounded-[20px] shadow-premium transition-all duration-200 hover:-translate-y-1 hover:shadow-premium-hover group"
          >
            <div className="w-12 h-12 flex items-center justify-center border border-brand-border rounded-lg mb-10 group-hover:border-brand-black transition-colors">
              <span className="text-2xl grayscale opacity-60 group-hover:opacity-100 transition-opacity">{point.icon}</span>
            </div>
            <h3 className="text-lg font-bold text-brand-black mb-4 tracking-tight uppercase">{point.title}</h3>
            <p className="text-brand-grey leading-relaxed text-sm font-light">
              {point.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-white border border-brand-border rounded-[24px] p-12 md:p-24 text-center shadow-premium relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-brand-black text-2xl md:text-3xl font-bold tracking-tighter uppercase leading-tight mb-12">
            We position ourselves as <span className="text-brand-grey">Infrastructure Builders</span>. <br className="hidden md:block" /> We install the predictable systems that allow your clinic to scale with total control.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
            <a href="#contact" className="w-full sm:w-auto bg-brand-black text-white px-14 py-6 rounded-none font-bold text-sm uppercase tracking-[0.2em] hover:bg-brand-grey hover:scale-[1.02] transition-all shadow-premium active:scale-95">
              Book a Revenue Audit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingFailure;
