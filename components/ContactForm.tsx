
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section className="py-24 px-4 max-w-6xl mx-auto">
      <div className="bg-[#111] border-gradient-shadow rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row gap-16 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-500/10 blur-[100px] rounded-full"></div>
        
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to scale your revenue?</h2>
          <p className="text-gray-400 text-lg mb-10">
            Book a discovery call today. We'll analyze your current operations and show you exactly where AI can add $10k+ to your MRR.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <p className="text-white font-medium">hello@sysagenlab.ai</p>
            </div>
            <div className="flex items-center gap-4 group">
               <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
              </div>
              <p className="text-white font-medium">Fast support via Slack</p>
            </div>
          </div>
        </div>

        <div className="flex-1 relative z-10">
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-green-500/10 border border-green-500/30 rounded-3xl animate-fade-in">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white mb-4 shadow-lg shadow-green-500/20">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Inquiry Received!</h3>
              <p className="text-gray-400">Our AI will match you with a growth strategist. Expect a reply within 2 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Name</label>
                  <input 
                    required 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Email</label>
                  <input 
                    required 
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Your Business Type</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 outline-none transition-all appearance-none">
                  <option className="bg-[#111]">Service Agency</option>
                  <option className="bg-[#111]">SaaS Startup</option>
                  <option className="bg-[#111]">E-commerce</option>
                  <option className="bg-[#111]">Content Creator</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Message</label>
                <textarea 
                  required 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 outline-none transition-all min-h-[120px]"
                  placeholder="Tell us about your bottleneck..."
                />
              </div>
              <button 
                disabled={status === 'loading'}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-4 rounded-xl hover:shadow-[0_0_25px_rgba(147,51,234,0.3)] transition-all active:scale-95 disabled:opacity-50"
              >
                {status === 'loading' ? 'Sending...' : 'Book My AI Strategy Call'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
