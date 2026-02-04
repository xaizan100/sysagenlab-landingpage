
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'Automate Sales & Outreach',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Direct integration with your Google Workspace email via FormSubmit
      const response = await fetch("https://formsubmit.co/ajax/Hello@sysagenlab.co.uk", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          requested_goal: formData.type,
          bottleneck_description: formData.message,
          _subject: `New AI Audit Request: ${formData.name}`,
          _template: 'table',
          _captcha: 'false' // Note: First submission will still require you to click an activation link in your email
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', type: 'Automate Sales & Outreach', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus('error');
    }
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
            <div className="pt-6">
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-2">Direct Support</p>
              <a href="mailto:Hello@sysagenlab.co.uk" className="text-white font-bold hover:text-purple-400 transition-colors">Hello@sysagenlab.co.uk</a>
            </div>
          </div>
        </div>

        <div className="flex-1">
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-purple-500/10 border border-purple-500/30 rounded-3xl animate-fade-in min-h-[400px]">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white mb-6 shadow-lg shadow-green-500/20">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-3 tracking-tighter">Request Received</h3>
              <p className="text-gray-400 font-medium px-4">An automation engineer will review your details and contact you within 4 business hours to book your audit.</p>
              <button onClick={() => setStatus('idle')} className="mt-8 text-purple-500 text-sm font-bold hover:text-purple-400">Submit another request</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="text" name="_honey" style={{ display: 'none' }} />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                   <label className="text-[10px] text-gray-500 font-black uppercase tracking-widest ml-1">Name</label>
                   <input 
                    required name="name" value={formData.name} onChange={handleChange} type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 outline-none transition-all"
                    placeholder="Full Name"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] text-gray-500 font-black uppercase tracking-widest ml-1">Work Email</label>
                  <input 
                    required name="email" value={formData.email} onChange={handleChange} type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 outline-none transition-all"
                    placeholder="name@company.com"
                  />
                </div>
              </div>
              
              <div className="space-y-1">
                <label className="text-[10px] text-gray-500 font-black uppercase tracking-widest ml-1">Primary Goal</label>
                <select 
                  name="type" value={formData.type} onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 outline-none cursor-pointer"
                >
                  <option value="Automate Sales & Outreach">Automate Sales & Outreach</option>
                  <option value="Automate Ops & Fulfillment">Automate Operations</option>
                  <option value="Custom AI Integration">Custom AI Development</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] text-gray-500 font-black uppercase tracking-widest ml-1">Current Manual Bottleneck</label>
                <textarea 
                  required name="message" value={formData.message} onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 outline-none min-h-[120px] resize-none"
                  placeholder="Describe the task that takes too much of your time..."
                />
              </div>

              {status === 'error' && (
                <p className="text-red-500 text-xs font-bold text-center">Something went wrong. Please check your connection or email us directly.</p>
              )}

              <button 
                type="submit" disabled={status === 'loading'}
                className="w-full bg-purple-600 text-white font-black py-4 rounded-xl hover:bg-purple-500 transition-all disabled:opacity-50 flex items-center justify-center gap-3 group"
              >
                {status === 'loading' ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Request Free Audit
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
