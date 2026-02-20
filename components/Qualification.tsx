
import React from 'react';

const Qualification: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto section-optimized">
      <div className="grid md:grid-cols-2 gap-8">
        {/* WHO THIS IS FOR */}
        <div className="bg-[#0f0f0f] border border-white/5 rounded-[2.5rem] p-10 md:p-12 hover:border-green-500/20 transition-all">
          <div className="inline-block bg-green-500/10 text-green-400 font-black px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] mb-8 border border-green-500/20">
            Who This Is For
          </div>
          <h3 className="text-3xl font-bold text-white mb-8 tracking-tight">Clinics serious about <br />sustainable growth.</h3>
          <ul className="space-y-6">
            {[
              "Clinics with established treatment plans and a desire to scale.",
              "Owners who value structure, predictability, and data-driven decisions.",
              "Practices willing to implement new systems to improve patient experience.",
              "Clinics that understand growth requires a strategic infrastructure, not just 'hacks'."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-gray-400 text-sm font-medium leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* WHO THIS IS NOT FOR */}
        <div className="bg-[#0f0f0f] border border-white/5 rounded-[2.5rem] p-10 md:p-12 hover:border-red-500/20 transition-all">
          <div className="inline-block bg-red-500/10 text-red-400 font-black px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] mb-8 border border-red-500/20">
            Who This Is Not For
          </div>
          <h3 className="text-3xl font-bold text-white mb-8 tracking-tight">We are not a fit <br />for every clinic.</h3>
          <ul className="space-y-6">
            {[
              "Clinics looking for 'quick fixes' or overnight marketing miracles.",
              "Practices unwilling to invest in their internal revenue infrastructure.",
              "Owners who are not tracking their numbers or conversion rates.",
              "Clinics that are not ready to handle a predictable increase in patient demand."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                </div>
                <span className="text-gray-400 text-sm font-medium leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
