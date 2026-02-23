import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
    <a
      href={href}
      onClick={onClick}
      className="group relative text-[11px] font-black text-brand-grey hover:text-brand-white transition-colors uppercase tracking-[0.3em] py-2"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-accent transition-all duration-300 group-hover:w-full" />
    </a>
  );

  const navContent = (
    <>
      <NavLink href="#infrastructure" onClick={closeMenu}>Infrastructure</NavLink>
      <NavLink href="#diagnosis" onClick={closeMenu}>Diagnosis</NavLink>
      <NavLink href="#testimonials" onClick={closeMenu}>Results</NavLink>
      <a
        href="#contact"
        onClick={closeMenu}
        className="btn-editorial !px-6 !py-3 !text-[10px] mt-4 md:mt-0"
      >
        Book Audit
      </a>
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-500">
      <nav
        className={`
          mx-auto max-w-7xl transition-all duration-700 ease-out pointer-events-auto
          ${scrolled || mobileMenuOpen
            ? 'bg-brand-charcoal/95 backdrop-blur-md border-b border-brand-border py-4 px-6 md:px-8 shadow-editorial'
            : 'bg-transparent border-b border-transparent py-8 px-6 md:px-8'}
          flex flex-col md:flex-row items-stretch md:items-center justify-between
        `}
      >
        <div className="flex items-center justify-between w-full md:w-auto">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="block transform transition-transform hover:opacity-90 active:scale-95"
          >
            <Logo className="scale-[1.0] md:scale-[1.2] origin-left" />
          </a>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-brand-white"
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

        <AnimatePresence>
          <motion.div
            initial={false}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0 }}
            className={`
              ${mobileMenuOpen ? 'flex flex-col mt-6 pb-6' : 'hidden md:flex'}
              md:flex-row md:items-center md:mt-0 md:pb-0 gap-8 lg:gap-12
            `}
          >
            {navContent}
          </motion.div>
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
