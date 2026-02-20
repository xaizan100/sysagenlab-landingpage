
import React from 'react';
import Logo from './Logo';

interface FooterProps {
  onPlaceholderClick: (msg: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onPlaceholderClick }) => {
  const handlePlaceholder = (e: React.MouseEvent, feature: string) => {
    e.preventDefault();
    onPlaceholderClick(`${feature} is coming soon!`);
  };

  return (
    <footer className="bg-black border-t border-white/5 pt-24 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
             <div className="mb-8 group">
               <Logo />
            </div>
            <p className="text-gray-500 max-w-md text-lg leading-relaxed font-medium">
              Engineering high-performance revenue infrastructure and predictable patient acquisition systems for modern private clinics.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <div className="px-4 py-2 w-fit rounded-lg bg-white/5 border border-white/10 text-xs text-gray-400">
                Support: <a href="mailto:Hello@sysagenlab.co.uk" className="text-white font-bold hover:text-blue-400">Hello@sysagenlab.co.uk</a>
              </div>
              <div className="px-4 py-2 w-fit rounded-lg bg-white/5 border border-white/10 text-xs text-gray-400">
                Region: <span className="text-white font-bold">United Kingdom / Global</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-[0.2em]">Ecosystem</h4>
            <ul className="space-y-4 text-gray-500 font-medium text-sm">
              <li><a href="#infrastructure" className="hover:text-blue-400 transition-colors">Infrastructure</a></li>
              <li><a href="#diagnosis" className="hover:text-blue-400 transition-colors">Diagnosis</a></li>
              <li><a href="#testimonials" className="hover:text-blue-400 transition-colors">Results</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-[0.2em]">Company</h4>
            <ul className="space-y-4 text-gray-500 font-medium text-sm">
              <li><a href="#" onClick={(e) => handlePlaceholder(e, 'Privacy Policy')} className="hover:text-blue-400 transition-colors">Privacy</a></li>
              <li><a href="#" onClick={(e) => handlePlaceholder(e, 'Terms of Service')} className="hover:text-blue-400 transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-8">
          <p className="text-xs text-gray-600 font-medium text-center sm:text-left tracking-wide">
            © 2025 SysAgen Lab Ltd. All systems go. <br className="sm:hidden" />
            Empowering clinics with <span className="text-blue-500">intelligent infrastructure</span>.
          </p>
          <div className="flex gap-8 text-gray-500">
            <a href="https://www.instagram.com/sysagenlab/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all transform hover:scale-110">
              <span className="sr-only">Instagram</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36.1057.413 2.227.057 1.266.07 1.646.07 4.85s-.013 3.584-.07 4.85c-.054 1.17-.249 1.805-.413 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.584-.013-4.85-.07c-1.17-.054-1.805-.249-2.227-.413-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.013-3.584.07-4.85c.054-1.17.249-1.805.413-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.36 2.227-.413 1.266-.057 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.15.26-2.914.557-.79.307-1.459.717-2.126 1.384-.667.667-1.077 1.336-1.384 2.126-.297.764-.5 1.637-.557 2.914-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.057 1.277.26 2.15.557 2.914.307.79.717 1.459 1.384 2.126.667.667 1.336 1.077 2.126 1.384.764.297 1.637.5 2.914.557 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.057 2.15-.26 2.914-.557.79-.307 1.459-.717 2.126-1.384.667-.667 1.077-1.336 1.384-2.126.297-.764.5-1.637.557-2.914.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.057-1.277-.26-2.15-.557-2.914-.307-.79-.717-1.459-1.384-2.126-.667-.667-1.336-1.077-2.126-1.384-.764-.297-1.637-.5-2.914-.557-1.28-.058-1.688-.072-4.947-.072z"/><path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/sysagen-lab/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all transform hover:scale-110">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
