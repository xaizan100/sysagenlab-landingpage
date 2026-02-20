
import React from 'react';

const FinancialFraming: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto section-optimized">
      <div className="bg-[#0f0f0f] border border-white/5 rounded-[3rem] p-8 md:p-16 lg:p-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[100px] pointer-events-none"></div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-block bg-blue-500/10 text-blue-400 font-black px-5 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] mb-8 border border-blue-500/20">
              The Financial Logic
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter leading-tight">
              Small improvements. <br />
              <span className="text-blue-500">Significant revenue.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed font-medium">
              You don't always need more leads to grow. Often, the fastest way to increase your clinic's revenue is by fixing the conversion leaks in your existing infrastructure.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="text-3xl">📈</div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Conversion Optimization</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">A 10% increase in lead-to-consultation conversion can result in a 25-30% increase in net profit without spending an extra penny on ads.</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="text-3xl">🛡️</div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">No-Show Reduction</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">Automated deposit enforcement and multi-channel reminders protect your practitioners' time and ensure your clinic's capacity is fully utilized.</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="text-3xl">💎</div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Patient Reactivation</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">Re-engaging dormant patients for maintenance treatments or new procedures creates immediate cash flow from an asset you already own.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-10 md:p-12 shadow-2xl">
            <div className="text-center mb-10">
              <p className="text-gray-500 text-xs font-black uppercase tracking-[0.2em] mb-4">Revenue Impact Example</p>
              <div className="text-5xl md:text-6xl font-black text-white mb-2">£120k+</div>
              <p className="text-blue-400 text-sm font-bold">Additional Annual Revenue</p>
            </div>
            
            <div className="space-y-4 mb-10">
              <div className="flex justify-between items-center py-3 border-b border-white/5">
                <span className="text-gray-400 text-sm">Missed Calls Captured</span>
                <span className="text-white font-bold">+15%</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/5">
                <span className="text-gray-400 text-sm">Follow-up Conversion</span>
                <span className="text-white font-bold">+20%</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/5">
                <span className="text-gray-400 text-sm">No-Show Rate Reduction</span>
                <span className="text-white font-bold">-40%</span>
              </div>
            </div>
            
            <p className="text-gray-500 text-[10px] text-center italic leading-relaxed">
              *Estimates based on average aesthetic clinic metrics. Actual results depend on treatment value and current infrastructure efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialFraming;
