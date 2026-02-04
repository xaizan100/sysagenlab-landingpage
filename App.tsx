
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import ValuePropSection from './components/ValuePropSection';
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
    const timer = setTimeout(() => {
      setMounted(true);
    }, 150);
    
    if (toast) {
      const toastTimer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(toastTimer);
    }
    return () => clearTimeout(timer);
  }, [toast]);

  return (
    <div className={`relative min-h-screen bg-[#0a0a0a] selection:bg-purple-500 selection:text-white transition-opacity duration-1000 ease-out ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-900/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <div id="hero">
            <Hero />
          </div>
          <SocialProof />
          <div id="features" className="scroll-mt-32">
            <ValuePropSection />
          </div>
          <div id="testimonials" className="scroll-mt-32">
            <Testimonials />
          </div>
          <div id="contact" className="scroll-mt-32">
            <BookingSection />
          </div>
        </main>

        <Footer onPlaceholderClick={showToast} />
      </div>

      {toast && (
        <div className="fixed bottom-8 right-8 z-[100] animate-fade-in">
          <div className="bg-black/90 backdrop-blur-2xl border border-white/10 px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4">
            <div className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse"></div>
            <span className="text-white text-sm font-bold tracking-tight">{toast}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
