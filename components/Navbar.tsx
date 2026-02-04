
import React, { useEffect, useState } from 'react';

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
        mx-auto max-w-4xl transition-all duration-300 border border-white/10
        ${scrolled || mobileMenuOpen ? 'bg-black/90 backdrop-blur-md rounded-2xl py-3 px-6 shadow-2xl' : 'bg-transparent py-4 px-6'}
        flex flex-col md:flex-row items-stretch md:items-center justify-between
      `}>
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/20">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              SYSAGEN<span className="text-purple-500">LAB</span>
            </span>
          </div>

          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
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
          md:flex md:flex-row md:items-center md:mt-0 md:pb-0 gap-6 md:gap-8
        `}>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <a href="#features" onClick={closeMenu} className="text-sm font-medium text-gray-400 hover:text-white transition-colors py-2 md:py-0">Features</a>
            <a href="#testimonials" onClick={closeMenu} className="text-sm font-medium text-gray-400 hover:text-white transition-colors py-2 md:py-0">Success Stories</a>
          </div>
          <a 
            href="#contact" 
            onClick={closeMenu}
            className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-all hover:scale-105 text-center shadow-lg shadow-white/5"
          >
            Start Growing
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
