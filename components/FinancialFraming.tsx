
import React from 'react';

const FinancialFraming: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto section-optimized">
      <div className="bg-white border border-brand-border rounded-[24px] p-8 md:p-20 shadow-premium relative overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
          <div>
            <div className="text-left mb-16 flex items-start gap-6">
              <div className="w-1 h-24 bg-brand-black hidden md:block"></div>
              <div>
                <div className="inline-block bg-brand-surface text-brand-grey font-bold px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] mb-6 border border-brand-border shadow-sm">
                  The Mathematics of Growth
                </div>
                <h2 className="text-5xl md:text-7xl font-bold text-brand-black mb-10 tracking-tighter leading-[1] uppercase">
                  Small improvements. <br />
                  Significant revenue.
                </h2>
                <p className="text-brand-grey text-lg md:text-xl font-light leading-relaxed">
                  Growth does not require miracles; it requires optimization. Small conversion improvements in your infrastructure compound into significant annual revenue without increasing your advertising spend.
                </p>
              </div>
            </div>
            
            <div className="space-y-12">
              {[
                { title: "Consultation Conversion", desc: "A 10% increase in lead-to-consultation conversion can result in a 25-30% increase in net profit by capturing demand you are already paying for.", icon: "📈" },
                { title: "No-Show Reduction", desc: "Reducing no-shows by 20% through automated deposit enforcement and multi-channel reminders protects your practitioners' time and clinic capacity.", icon: "🛡️" },
                { title: "Database Reactivation", desc: "Re-engaging just 5% of your dormant patient database creates immediate cash flow from an asset you already own, with zero acquisition cost.", icon: "💎" }
              ].map((item, i) => (
                <div key={i} className="flex gap-10 group">
                  <div className="text-3xl grayscale opacity-60 group-hover:opacity-100 transition-opacity">{item.icon}</div>
                  <div>
                    <h4 className="text-brand-black font-bold text-lg mb-4 uppercase tracking-tight">{item.title}</h4>
                    <p className="text-brand-grey text-sm leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-brand-surface border border-brand-border rounded-[20px] p-12 md:p-16 shadow-inner">
            <div className="text-center mb-16">
              <p className="text-brand-grey text-[10px] font-bold uppercase tracking-[0.4em] mb-6">Revenue Impact Projection</p>
              <div className="text-7xl md:text-8xl font-bold text-brand-black mb-4 tracking-tighter">£120k+</div>
              <p className="text-brand-grey text-sm font-medium uppercase tracking-widest">Additional Annual Revenue</p>
            </div>
            
            <div className="space-y-6 mb-16">
              {[
                { label: "Consultation Conversion", value: "+10%" },
                { label: "No-Show Reduction", value: "-20%" },
                { label: "Database Reactivation", value: "+5%" }
              ].map((stat, idx) => (
                <div key={idx} className="flex justify-between items-center py-4 border-b border-brand-border">
                  <span className="text-brand-grey text-sm uppercase tracking-widest font-bold">{stat.label}</span>
                  <span className="text-brand-black font-bold text-xl">{stat.value}</span>
                </div>
              ))}
            </div>
            
            <p className="text-brand-grey text-[10px] text-center italic leading-relaxed font-light mb-12">
              *Estimates based on average results across private medical and aesthetic practices implementing our revenue infrastructure.
            </p>

            <a href="#contact" className="w-full block bg-brand-black text-white py-6 rounded-none font-bold text-sm text-center uppercase tracking-[0.2em] hover:bg-brand-grey hover:scale-[1.02] transition-all shadow-premium active:scale-95">
              Request Your Audit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialFraming;
