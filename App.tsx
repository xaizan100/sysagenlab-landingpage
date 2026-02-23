
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import ValuePropSection from './components/ValuePropSection';
import ClinicTypes from './components/ClinicTypes';
import FinancialFraming from './components/FinancialFraming';
import Qualification from './components/Qualification';
import Testimonials from './components/Testimonials';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [toast, setToast] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  const showToast = (message: string) => {
    setToast(message);
  };

  useEffect(() => {
    // Instant mount for better UX
    setMounted(true);
    
    if (toast) {
      const toastTimer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(toastTimer);
    }
  }, [toast]);

  return (
    <div className={`relative min-h-screen bg-brand-white selection:bg-brand-black selection:text-brand-white transition-opacity duration-1000 ease-out ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      <div className="relative z-10 flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <div id="hero">
            <Hero />
          </div>
          
          <div className="bg-brand-white border-y border-brand-border">
            <SocialProof />
          </div>

          <div id="infrastructure" className="scroll-mt-32 bg-brand-white py-10 md:py-16">
            <ValuePropSection />
          </div>

          <div id="diagnosis" className="scroll-mt-32 bg-brand-offwhite py-10 md:py-16 border-y border-brand-border">
            <ClinicTypes />
          </div>

          <div className="bg-brand-white py-10 md:py-16">
            <FinancialFraming />
          </div>

          <div id="testimonials" className="scroll-mt-32 bg-brand-offwhite py-10 md:py-16 border-y border-brand-border">
            <Testimonials />
          </div>

          <div className="bg-brand-white py-10 md:py-16">
            <Qualification />
          </div>

          <div id="contact" className="scroll-mt-32 bg-brand-offwhite py-10 md:py-16 border-t border-brand-border">
            <BookingSection />
          </div>
        </main>

        <Footer onPlaceholderClick={showToast} />
      </div>

      {toast && (
        <div className="fixed bottom-8 right-8 z-[100] animate-slide-up">
          <div className="bg-brand-white border border-brand-border px-8 py-5 rounded-none shadow-editorial flex items-center gap-4">
            <div className="w-2 h-2 bg-brand-black"></div>
            <span className="text-brand-black text-xs font-black uppercase tracking-widest">{toast}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
