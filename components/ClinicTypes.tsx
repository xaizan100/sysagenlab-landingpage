
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
    <section className="py-24 px-6 max-w-7xl mx-auto section-optimized">
      <div className="text-center mb-16 md:mb-20">
        <div className="inline-block bg-blue-500/10 text-blue-400 font-black px-5 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] mb-6 border border-blue-500/20">
          Self-Qualification
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter leading-[1.1]">
          Which stage is your <br className="hidden md:block" /> clinic currently in?
        </h2>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-medium">
          Identifying your current bottleneck is the first step toward building a predictable revenue engine.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {types.map((type) => (
          <div 
            key={type.id}
            className="bg-[#0f0f0f] border border-white/5 rounded-[2rem] p-8 md:p-10 flex flex-col h-full hover:border-white/10 transition-all group"
          >
            <h3 className={`text-xl font-bold mb-6 tracking-tight ${
              type.color === 'blue' ? 'text-blue-400' : 
              type.color === 'purple' ? 'text-purple-400' : 
              'text-emerald-400'
            }`}>
              {type.title}
            </h3>
            
            <div className="space-y-8 flex-grow">
              <div>
                <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-2">The Situation</p>
                <p className="text-gray-400 text-sm leading-relaxed font-medium">{type.situation}</p>
              </div>
              
              <div>
                <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-2">The Real Issue</p>
                <p className="text-gray-300 text-sm leading-relaxed font-bold">{type.realIssue}</p>
              </div>
              
              <div className={`p-6 rounded-2xl border ${
                type.color === 'blue' ? 'bg-blue-500/5 border-blue-500/10' : 
                type.color === 'purple' ? 'bg-purple-500/5 border-purple-500/10' : 
                'bg-emerald-500/5 border-emerald-500/10'
              }`}>
                <p className={`text-[10px] font-black uppercase tracking-widest mb-2 ${
                  type.color === 'blue' ? 'text-blue-400' : 
                  type.color === 'purple' ? 'text-purple-400' : 
                  'text-emerald-400'
                }`}>The Actual Fix</p>
                <p className="text-white text-sm leading-relaxed font-medium">{type.fix}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClinicTypes;
