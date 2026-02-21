
import React from 'react';

const ClinicTypes: React.FC = () => {
  const types = [
    {
      id: "type-1",
      title: "Type 1: High Lead Flow, Poor Conversion",
      situation: "You are spending heavily on marketing and generating plenty of enquiries, but your front-of-house team is overwhelmed and follow-up is inconsistent.",
      realIssue: "Your infrastructure is leaking. You are paying for leads that never reach a consultation because of slow response times and lack of nurture.",
      fix: "Install Lead Capture & Speed-to-Lead systems to ensure every enquiry is handled with professional precision within seconds.",
      color: "blue"
    },
    {
      id: "type-2",
      title: "Type 2: Moderate Lead Flow, No Systems",
      situation: "You have a steady stream of patients, but growth has plateaued. You rely on manual processes and have no clear visibility on your conversion metrics.",
      realIssue: "You lack a predictable growth engine. Your revenue is tied to your manual effort, making it impossible to scale without increasing stress.",
      fix: "Implement Conversion & Follow-Up infrastructure to automate the patient journey and provide real-time revenue visibility.",
      color: "purple"
    },
    {
      id: "type-3",
      title: "Type 3: Low Lead Flow, No Marketing",
      situation: "You are a specialist clinic with high-quality treatments, but you rely almost entirely on word-of-mouth. Demand is inconsistent and unpredictable.",
      realIssue: "You have a demand problem. Automation alone won't solve this; you need a system to proactively attract and educate your ideal patients.",
      fix: "Deploy Demand Creation Systems first to build a consistent pipeline of high-intent patients before layering on conversion infrastructure.",
      color: "emerald"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto section-optimized">
      <div className="text-left mb-24 flex items-start gap-8">
        <div className="w-1 h-32 bg-brand-black hidden md:block"></div>
        <div>
          <div className="inline-block bg-white text-brand-grey font-bold px-5 py-2 text-[10px] uppercase tracking-[0.4em] mb-8 border border-brand-border shadow-sm">
            Strategic Assessment
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-brand-black mb-8 tracking-tighter leading-[1] uppercase">
            Which stage is your <br className="hidden md:block" /> clinic currently in?
          </h2>
          <p className="text-brand-grey text-lg md:text-xl max-w-3xl font-light leading-relaxed">
            Identifying your current bottleneck is the first step toward building a predictable revenue engine.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {types.map((type) => (
          <div 
            key={type.id}
            className="bg-white border border-brand-border rounded-[20px] p-12 flex flex-col h-full shadow-premium transition-all duration-200 hover:-translate-y-1 hover:shadow-premium-hover group"
          >
            <h3 className="text-xl font-bold mb-12 tracking-tight text-brand-black uppercase">
              {type.title}
            </h3>
            
            <div className="space-y-12 flex-grow">
              <div>
                <p className="text-[10px] text-brand-grey font-bold uppercase tracking-[0.3em] mb-4">The Situation</p>
                <p className="text-brand-grey text-sm leading-relaxed font-light">{type.situation}</p>
              </div>
              
              <div>
                <p className="text-[10px] text-brand-grey font-bold uppercase tracking-[0.3em] mb-4">The Real Issue</p>
                <p className="text-brand-black text-sm leading-relaxed font-bold">{type.realIssue}</p>
              </div>
              
              <div className="pt-10 border-t border-brand-border">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] mb-4 text-brand-black">The Actual Fix</p>
                <p className="text-brand-grey text-sm leading-relaxed font-light">{type.fix}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClinicTypes;
