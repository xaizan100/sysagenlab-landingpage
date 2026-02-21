
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
        mx-auto max-w-6xl transition-all duration-300 ease-out border-b pointer-events-auto
        ${scrolled || mobileMenuOpen 
          ? 'bg-white/95 backdrop-blur-xl border-brand-light py-4 px-6' 
          : 'bg-white border-transparent py-6 px-6'}
        flex flex-col md:flex-row items-stretch md:items-center justify-between
      `}>
        <div className="flex items-center justify-between w-full md:w-auto">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="block transform transition-transform hover:opacity-80 active:scale-95">
            <Logo className="scale-[0.6] md:scale-[0.7] origin-left" />
          </a>

          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-brand-black hover:opacity-60 transition-colors"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        <div className={`
          ${mobileMenuOpen ? 'flex flex-col mt-6 pb-6 animate-fade-in' : 'hidden md:flex'} 
          md:flex-row md:items-center md:mt-0 md:pb-0 gap-8 lg:gap-10 transition-all duration-300
        `}>
          <a href="#infrastructure" onClick={closeMenu} className="text-[13px] md:text-sm font-medium text-brand-grey hover:text-brand-black transition-colors uppercase tracking-widest">Infrastructure</a>
          <a href="#diagnosis" onClick={closeMenu} className="text-[13px] md:text-sm font-medium text-brand-grey hover:text-brand-black transition-colors uppercase tracking-widest">Diagnosis</a>
          <a href="#testimonials" onClick={closeMenu} className="text-[13px] md:text-sm font-medium text-brand-grey hover:text-brand-black transition-colors uppercase tracking-widest">Results</a>
          <a 
            href="#contact" 
            onClick={closeMenu}
            className="bg-brand-black text-white px-6 py-2.5 rounded-none text-[12px] md:text-sm font-bold hover:bg-brand-grey transition-all text-center uppercase tracking-widest mt-4 md:mt-0"
          >
            Book a Revenue Audit
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
