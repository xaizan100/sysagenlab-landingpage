
import React from 'react';

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
             <div className="flex items-center gap-3 mb-8 group">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-2xl flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500">
                <span className="text-white font-black text-2xl">S</span>
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">
                SYSAGEN<span className="text-purple-500 ml-0.5">LAB</span>
              </span>
            </div>
            <p className="text-gray-500 max-w-md text-lg leading-relaxed">
              We engineer high-performance AI systems that turn operations into revenue. Join the automated revolution.
            </p>
            <div className="mt-8 flex gap-4">
              <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-400">
                Operating in <span className="text-white font-bold">San Francisco, CA</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-[0.2em]">Ecosystem</h4>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li><a href="#features" className="hover:text-purple-400 transition-colors">AI Solutions</a></li>
              <li><a href="#" onClick={(e) => handlePlaceholder(e, 'Partner Portal')} className="hover:text-purple-400 transition-colors">Partner Portal</a></li>
              <li><a href="#" onClick={(e) => handlePlaceholder(e, 'Developer API')} className="hover:text-purple-400 transition-colors">Developer API</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-[0.2em]">Company</h4>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li><a href="#" onClick={(e) => handlePlaceholder(e, 'Success Stories')} className="hover:text-purple-400 transition-colors">Success Stories</a></li>
              <li><a href="#" onClick={(e) => handlePlaceholder(e, 'Privacy')} className="hover:text-purple-400 transition-colors">Privacy</a></li>
              <li><a href="#" onClick={(e) => handlePlaceholder(e, 'Terms')} className="hover:text-purple-400 transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-8">
          <p className="text-xs text-gray-600 font-medium text-center sm:text-left tracking-wide">
            © 2025 SysAgen Lab Inc. All systems go. <br className="sm:hidden" />
            Designed for <span className="text-purple-500">infinite scalability</span>.
          </p>
          <div className="flex gap-8 text-gray-500">
            <a href="#" onClick={(e) => handlePlaceholder(e, 'X')} className="hover:text-white transition-all transform hover:scale-110">
              <span className="sr-only">X (Twitter)</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" onClick={(e) => handlePlaceholder(e, 'LinkedIn')} className="hover:text-white transition-all transform hover:scale-110">
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
