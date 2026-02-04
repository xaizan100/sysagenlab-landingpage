
import React, { useEffect, useState } from 'react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-6">
      <nav className={`
        mx-auto max-w-5xl transition-all duration-500 border border-white/10
        ${scrolled || mobileMenuOpen ? 'bg-black/90 backdrop-blur-xl rounded-2xl py-3 px-6 shadow-2xl' : 'bg-transparent py-4 px-6'}
        flex flex-col md:flex-row items-stretch md:items-center justify-between
      `}>
        <div className="flex items-center justify-between w-full md:w-auto">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="block transform transition-transform hover:scale-105 active:scale-95">
            <Logo className="scale-[0.65] md:scale-[0.75] origin-left" />
          </a>

          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-400 hover:text-white"
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
          ${mobileMenuOpen ? 'flex flex-col mt-4 pb-4 animate-fade-in' : 'hidden'} 
          md:flex md:flex-row md:items-center md:mt-0 md:pb-0 gap-8
        `}>
          <a href="#features" onClick={closeMenu} className="text-sm font-bold text-gray-400 hover:text-white transition-colors">Solutions</a>
          <a href="#testimonials" onClick={closeMenu} className="text-sm font-bold text-gray-400 hover:text-white transition-colors">Case Studies</a>
          <a 
            href="#contact" 
            onClick={closeMenu}
            className="bg-purple-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-purple-500 transition-all text-center shadow-[0_0_20px_rgba(139,92,246,0.3)]"
          >
            Discovery Call
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
