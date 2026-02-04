
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'Service Agency',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }
    
    setStatus('loading');
    
    // Simulate API Call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', type: 'Service Agency', message: '' });
    }, 1500);
  };

  return (
    <section className="py-24 px-4 max-w-6xl mx-auto">
      <div className="bg-[#111] border-gradient-shadow rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row gap-16 relative overflow-hidden">
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-500/10 blur-[100px] rounded-full"></div>
        
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter">Claim Your AI Blueprint</h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed font-medium">
            We don't just "talk" about AI. We build it. Request your discovery session and we'll show you the <span className="text-white">exact bottlenecks</span> costing you revenue right now.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.location.href = 'mailto:hello@sysagenlab.ai'}>
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all shadow-inner">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <p className="text-white font-bold">Direct Access</p>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">hello@sysagenlab.ai</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-green-500 shadow-inner">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <p className="text-white font-bold">Rapid Response</p>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Replies within 4 working hours</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 relative z-10">
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-purple-500/10 border border-purple-500/30 rounded-3xl animate-fade-in min-h-[400px]">
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center text-white mb-6 shadow-xl shadow-purple-500/40">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-3 tracking-tighter">Blueprint Requested!</h3>
              <p className="text-gray-400 font-medium">A growth engineer will review your data and reach out to schedule your roadmap session.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-8 text-purple-500 text-sm font-bold hover:text-white transition-colors"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Your Name</label>
                  <input 
                    required 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all font-medium"
                    placeholder="Full Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Business Email</label>
                  <input 
                    required 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all font-medium"
                    placeholder="name@company.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Scaling Goal</label>
                <div className="relative">
                  <select 
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 outline-none transition-all appearance-none cursor-pointer font-medium"
                  >
                    <option className="bg-[#111]">Scale Outreach & Sales</option>
                    <option className="bg-[#111]">Automate Ops & Fulfillment</option>
                    <option className="bg-[#111]">Full AI Digital Transformation</option>
                    <option className="bg-[#111]">Custom AI Integration</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Tell us about your biggest bottleneck</label>
                <textarea 
                  required 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all min-h-[120px] resize-none font-medium"
                  placeholder="Where is your business currently stuck?"
                />
              </div>
              <button 
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-black py-4 rounded-xl hover:shadow-[0_10px_30px_rgba(168,85,247,0.4)] transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-3 group"
              >
                {status === 'loading' ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Analyzing...
                  </>
                ) : (
                  <>
                    Request My Strategy Roadmap
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
