
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
    <div className={`relative min-h-screen bg-white selection:bg-brand-black selection:text-white transition-opacity duration-500 ease-out ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      <div className="relative z-10 flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <div id="hero">
            <Hero />
          </div>
          
          <div className="bg-white border-y border-brand-border">
            <SocialProof />
          </div>

          <div id="infrastructure" className="scroll-mt-32 bg-brand-surface py-24 md:py-32">
            <ValuePropSection />
          </div>

          <div id="diagnosis" className="scroll-mt-32 bg-white py-24 md:py-32 border-b border-brand-border">
            <ClinicTypes />
          </div>

          <div className="bg-white py-24 md:py-32 border-b border-brand-border">
            <FinancialFraming />
          </div>

          <div id="testimonials" className="scroll-mt-32 bg-brand-surface py-24 md:py-32 border-b border-brand-border">
            <Testimonials />
          </div>

          <div className="bg-white py-24 md:py-32 border-b border-brand-border">
            <Qualification />
          </div>

          <div id="contact" className="scroll-mt-32 bg-brand-surface py-24 md:py-32">
            <BookingSection />
          </div>
        </main>

        <Footer onPlaceholderClick={showToast} />
      </div>

      {toast && (
        <div className="fixed bottom-8 right-8 z-[100] animate-fade-in">
          <div className="bg-white border border-brand-border px-6 py-4 rounded-xl shadow-premium flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-brand-black"></div>
            <span className="text-brand-black text-sm font-medium tracking-tight">{toast}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
