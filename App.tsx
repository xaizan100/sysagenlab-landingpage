
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
    // Instant mount for better UX
    setMounted(true);
    
    if (toast) {
      const toastTimer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(toastTimer);
    }
  }, [toast]);

  return (
    <div className={`relative min-h-screen bg-[#0a0a0a] selection:bg-blue-500 selection:text-white transition-opacity duration-300 ease-out ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-900/5 rounded-full" style={{ background: 'radial-gradient(circle, rgba(30,58,138,0.1) 0%, transparent 70%)' }}></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-900/5 rounded-full" style={{ background: 'radial-gradient(circle, rgba(88,28,135,0.1) 0%, transparent 70%)' }}></div>
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
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></div>
            <span className="text-white text-sm font-bold tracking-tight">{toast}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
