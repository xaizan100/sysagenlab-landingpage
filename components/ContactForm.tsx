
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'Scale Outreach & Sales',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', type: 'Scale Outreach & Sales', message: '' });
    }, 1500);
  };

  return (
    <section className="py-24 px-4 max-w-6xl mx-auto">
      <div className="bg-[#111] border border-white/10 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row gap-16">
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter">Get Your Automation Audit</h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed font-medium">
            Tell us about your current manual processes. We will analyze your workflow and show you exactly where AI can <span className="text-white">reduce your costs</span> and save your team time.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 text-gray-400">
               <div className="w-2 h-2 rounded-full bg-green-500"></div>
               <span className="text-sm font-bold">Free 15-Minute Consultation</span>
            </div>
            <div className="flex items-center gap-4 text-gray-400">
               <div className="w-2 h-2 rounded-full bg-green-500"></div>
               <span className="text-sm font-bold">Concrete ROI Estimate Provided</span>
            </div>
          </div>
        </div>

        <div className="flex-1">
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-purple-500/10 border border-purple-500/30 rounded-3xl animate-fade-in min-h-[400px]">
              <h3 className="text-3xl font-bold text-white mb-3 tracking-tighter">Request Received</h3>
              <p className="text-gray-400 font-medium">An automation engineer will contact you within 4 business hours to book your audit.</p>
              <button onClick={() => setStatus('idle')} className="mt-8 text-purple-500 text-sm font-bold">New Request</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  required name="name" value={formData.name} onChange={handleChange} type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 outline-none"
                  placeholder="Name"
                />
                <input 
                  required name="email" value={formData.email} onChange={handleChange} type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 outline-none"
                  placeholder="Work Email"
                />
              </div>
              <select 
                name="type" value={formData.type} onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 outline-none"
              >
                <option value="Scale Outreach & Sales">Automate Sales & Outreach</option>
                <option value="Automate Ops & Fulfillment">Automate Operations</option>
                <option value="Custom AI Integration">Custom AI Development</option>
              </select>
              <textarea 
                required name="message" value={formData.message} onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 outline-none min-h-[120px]"
                placeholder="What is your biggest manual bottleneck?"
              />
              <button 
                type="submit" disabled={status === 'loading'}
                className="w-full bg-purple-600 text-white font-black py-4 rounded-xl hover:bg-purple-500 transition-all disabled:opacity-50"
              >
                {status === 'loading' ? 'Processing...' : 'Request Free Audit'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
