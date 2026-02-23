
import React from 'react';
import Logo from './Logo';
import { Instagram, Linkedin, Mail, Globe } from 'lucide-react';

interface FooterProps {
  onPlaceholderClick: (msg: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onPlaceholderClick }) => {
  const handlePlaceholder = (e: React.MouseEvent, feature: string) => {
    e.preventDefault();
    onPlaceholderClick(`${feature} is coming soon!`);
  };

  return (
    <footer className="bg-brand-white border-t border-brand-border pt-20 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 sm:col-span-2">
             <div className="mb-10">
                <Logo className="scale-[1.0] origin-left" />
            </div>
            <p className="text-brand-grey max-w-md text-lg leading-relaxed font-light">
              Engineering high-performance revenue infrastructure and predictable patient acquisition systems for modern private clinics across the United Kingdom.
            </p>
            <div className="mt-16 flex flex-col gap-6">
              <div className="flex items-center gap-4 text-[10px] md:text-xs text-brand-grey uppercase tracking-[0.4em] font-black">
                <Mail className="w-4 h-4 text-brand-black" />
                Support: <a href="mailto:Hello@sysagenlab.co.uk" className="text-brand-black hover:text-brand-grey transition-colors ml-2">Hello@sysagenlab.co.uk</a>
              </div>
              <div className="flex items-center gap-4 text-[10px] md:text-xs text-brand-grey uppercase tracking-[0.4em] font-black">
                <Globe className="w-4 h-4 text-brand-black" />
                Region: <span className="text-brand-black ml-2">United Kingdom / Global</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-brand-black font-black mb-10 text-[10px] uppercase tracking-[0.5em]">Ecosystem</h4>
            <ul className="space-y-6 text-brand-grey font-light text-sm">
              <li><a href="#infrastructure" className="hover:text-brand-black transition-colors uppercase tracking-[0.3em] text-[10px]">Infrastructure</a></li>
              <li><a href="#diagnosis" className="hover:text-brand-black transition-colors uppercase tracking-[0.3em] text-[10px]">Diagnosis</a></li>
              <li><a href="#testimonials" className="hover:text-brand-black transition-colors uppercase tracking-[0.3em] text-[10px]">Results</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-black font-black mb-10 text-[10px] uppercase tracking-[0.5em]">Company</h4>
            <ul className="space-y-6 text-brand-grey font-light text-sm">
              <li><a href="#" onClick={(e) => handlePlaceholder(e, 'Privacy Policy')} className="hover:text-brand-black transition-colors uppercase tracking-[0.3em] text-[10px]">Privacy</a></li>
              <li><a href="#" onClick={(e) => handlePlaceholder(e, 'Terms of Service')} className="hover:text-brand-black transition-colors uppercase tracking-[0.3em] text-[10px]">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-16 border-t border-brand-border flex flex-col sm:flex-row justify-between items-center gap-10">
          <p className="text-[10px] text-brand-grey font-black text-center sm:text-left tracking-[0.4em] uppercase leading-loose">
            © 2025 SysAgen Lab Ltd. <br className="sm:hidden" />
            <span className="text-brand-black">Strategic Revenue Infrastructure.</span>
          </p>
          <div className="flex gap-12 text-brand-grey">
            <a href="https://www.instagram.com/sysagenlab/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-black transition-all transform hover:scale-125">
              <span className="sr-only">Instagram</span>
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/company/sysagen-lab/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-black transition-all transform hover:scale-125">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
