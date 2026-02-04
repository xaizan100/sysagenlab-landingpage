
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
        mx-auto max-w-5xl transition-all duration-500 border border-white/10
        ${scrolled || mobileMenuOpen ? 'bg-black/90 backdrop-blur-xl rounded-2xl py-3 px-6 shadow-2xl' : 'bg-transparent py-4 px-6'}
        flex flex-col md:flex-row items-stretch md:items-center justify-between
      `}>
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-black text-xl">S</span>
            </div>
            <span className="text-xl font-extrabold tracking-tighter text-white">
              SYSAGEN<span className="text-purple-500 ml-0.5">LAB</span>
            </span>
          </div>

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
          <a href="#features" onClick={closeMenu} className="text-sm font-semibold text-gray-400 hover:text-white transition-colors">Solutions</a>
          <a href="#testimonials" onClick={closeMenu} className="text-sm font-semibold text-gray-400 hover:text-white transition-colors">Case Studies</a>
          <a 
            href="#contact" 
            onClick={closeMenu}
            className="bg-purple-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-purple-500 transition-all text-center"
          >
            Discovery Call
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
