
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import ValuePropSection from './components/ValuePropSection';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] selection:bg-purple-500 selection:text-white">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        
        <main>
          <Hero />
          <SocialProof />
          <div id="features">
            <ValuePropSection />
          </div>
          <div id="testimonials">
            <Testimonials />
          </div>
          <div id="contact">
            <ContactForm />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
