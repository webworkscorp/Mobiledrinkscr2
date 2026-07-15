
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, content } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-700 ${
      isScrolled ? 'bg-black/95 backdrop-blur-2xl py-3 border-b border-white/5' : 'bg-transparent py-10'
    }`}>
      <div className="max-w-[1600px] mx-auto px-8 flex justify-between items-center">
        {/* Branding Editorial */}
        <div className="flex flex-col">
          <span className="font-bodoni text-2xl md:text-4xl font-black text-white leading-none uppercase italic tracking-tighter">
            Mobile<span className="text-[#D4AF37]">Drinks</span>
          </span>
          <span className="font-syncopate text-[8px] uppercase tracking-[0.6em] text-gray-500 font-bold mt-2">
            {content.nav.est}
          </span>
        </div>

        <div className="flex items-center gap-8">
           {/* Language Switch */}
           <button 
             onClick={toggleLanguage}
             className="hidden md:flex items-center gap-2 font-syncopate text-[10px] font-bold tracking-[0.2em] text-white hover:text-[#C5A021] transition-colors"
           >
             <span className={language === 'es' ? 'text-[#C5A021]' : 'text-gray-500'}>ES</span>
             <span className="text-gray-600">/</span>
             <span className={language === 'en' ? 'text-[#C5A021]' : 'text-gray-500'}>EN</span>
           </button>

           {/* Logo Original */}
           <img 
            src="https://i.imgur.com/NOJ7Nn7.png" 
            alt="Mobile Drinks Logo" 
            className={`transition-all duration-700 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] ${
              isScrolled ? 'h-16 md:h-20' : 'h-24 md:h-36'
            }`}
          />
        </div>
      </div>
      
      {/* Mobile Lang Switch (Visible only on mobile) */}
      <div className="absolute top-4 right-4 md:hidden">
        <button 
             onClick={toggleLanguage}
             className="flex items-center gap-2 font-syncopate text-[10px] font-bold tracking-[0.2em] text-white"
           >
             <span className={language === 'es' ? 'text-[#C5A021]' : 'text-gray-500'}>ES</span>
             <span className="text-gray-600">/</span>
             <span className={language === 'en' ? 'text-[#C5A021]' : 'text-gray-500'}>EN</span>
           </button>
      </div>
    </nav>
  );
};

export default Navbar;
