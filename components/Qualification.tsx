
import React from 'react';

const Qualification: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto section-optimized">
      <div className="text-left mb-24 flex items-start gap-8">
        <div className="w-1 h-32 bg-brand-black hidden md:block"></div>
        <div>
          <div className="inline-block bg-white text-brand-grey font-bold px-5 py-2 text-[10px] uppercase tracking-[0.4em] mb-8 border border-brand-border shadow-sm">
            Strategic Qualification
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-brand-black mb-8 tracking-tighter leading-[1] uppercase">
            Who This Is For — <br className="hidden md:block" /> And Who It’s Not.
          </h2>
          <p className="text-brand-grey text-lg md:text-xl max-w-3xl font-light leading-relaxed">
            We only partner with clinics where we can guarantee a significant and measurable revenue impact. Our systems require a commitment to professional operations.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* WHO THIS IS FOR */}
        <div className="bg-white border border-brand-border rounded-[20px] p-8 md:p-16 shadow-premium transition-all duration-200 hover:-translate-y-1 hover:shadow-premium-hover group">
          <div className="inline-block bg-brand-surface text-brand-grey font-bold px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] mb-10 border border-brand-border">
            Ideal Partner
          </div>
          <h3 className="text-3xl font-bold text-brand-black mb-10 tracking-tighter uppercase">Clinics serious about <br />structured growth.</h3>
          <ul className="space-y-8">
            {[
              "Clinics that want structured growth and value systems over 'hacks'.",
              "Owners who track performance data and are serious about expansion.",
              "Practices with established treatment plans looking to scale predictably.",
              "Clinics that understand growth requires a strategic infrastructure."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-5">
                <div className="w-2 h-2 rounded-none bg-brand-black flex-shrink-0 mt-2"></div>
                <span className="text-brand-grey text-sm font-light leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* WHO THIS IS NOT FOR */}
        <div className="bg-white border border-brand-border rounded-[20px] p-8 md:p-16 shadow-premium transition-all duration-200 hover:-translate-y-1 hover:shadow-premium-hover group">
          <div className="inline-block bg-brand-surface text-brand-grey font-bold px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] mb-10 border border-brand-border">
            Not a Fit
          </div>
          <h3 className="text-3xl font-bold text-brand-black mb-10 tracking-tighter uppercase">We are not a fit <br />for every clinic.</h3>
          <ul className="space-y-8">
            {[
              "Clinics looking for 'quick wins', cheap marketing, or overnight miracles.",
              "Practices unwilling to invest in their internal revenue infrastructure.",
              "Owners looking for hands-off growth without operational implementation.",
              "Clinics not ready to handle a predictable increase in patient demand."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-5">
                <div className="w-2 h-2 rounded-none border border-brand-grey flex-shrink-0 mt-2"></div>
                <span className="text-brand-grey text-sm font-light leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
