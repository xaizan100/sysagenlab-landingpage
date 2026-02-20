
import React, { useEffect, useState } from 'react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:pt-6 pointer-events-none transition-all duration-300">
      <nav className={`
        mx-auto max-w-5xl transition-all duration-300 ease-out border pointer-events-auto
        ${scrolled || mobileMenuOpen 
          ? 'bg-black/95 backdrop-blur-xl border-white/10 rounded-2xl shadow-2xl py-3 px-5' 
          : 'bg-transparent border-transparent py-3 px-5'}
        flex flex-col md:flex-row items-stretch md:items-center justify-between
      `}>
        <div className="flex items-center justify-between w-full md:w-auto">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="block transform transition-transform hover:scale-105 active:scale-95">
            <Logo className="scale-[0.45] md:scale-[0.55] lg:scale-[0.6] origin-left" />
          </a>

          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        <div className={`
          ${mobileMenuOpen ? 'flex flex-col mt-4 pb-4 animate-fade-in' : 'hidden md:flex'} 
          md:flex-row md:items-center md:mt-0 md:pb-0 gap-6 lg:gap-8 transition-all duration-300
        `}>
          <a href="#infrastructure" onClick={closeMenu} className="text-[13px] md:text-sm font-bold text-gray-400 hover:text-white transition-colors">Infrastructure</a>
          <a href="#diagnosis" onClick={closeMenu} className="text-[13px] md:text-sm font-bold text-gray-400 hover:text-white transition-colors">Diagnosis</a>
          <a href="#testimonials" onClick={closeMenu} className="text-[13px] md:text-sm font-bold text-gray-400 hover:text-white transition-colors">Results</a>
          <a 
            href="#contact" 
            onClick={closeMenu}
            className="bg-purple-600 text-white px-4 py-2 md:px-5 md:py-2 rounded-xl text-[12px] md:text-sm font-bold hover:bg-purple-500 transition-all text-center shadow-[0_0_20px_rgba(139,92,246,0.3)] mt-4 md:mt-0"
          >
            Book a Revenue Audit
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
