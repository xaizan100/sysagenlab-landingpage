
import React, { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-6">
      <nav className={`
        mx-auto max-w-4xl transition-all duration-300 border border-white/10
        ${scrolled ? 'bg-black/80 backdrop-blur-md rounded-full py-3 px-6 shadow-2xl' : 'bg-transparent py-4 px-6'}
        flex items-center justify-between
      `}>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/20">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white hidden sm:block">
            SYSAGEN<span className="text-purple-500">LAB</span>
          </span>
        </div>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-6">
            <a href="#features" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Features</a>
            <a href="#testimonials" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Success Stories</a>
          </div>
          <a 
            href="#contact" 
            className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-all hover:scale-105"
          >
            Start Growing
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
