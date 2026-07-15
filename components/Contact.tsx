
import React from 'react';
import { BUSINESS } from '../constants.ts';
import { useLanguage } from '../context/LanguageContext.tsx';

const Contact: React.FC = () => {
  const { content } = useLanguage();

  return (
    <footer id="contacto" className="bg-[#000d1a] pt-16 pb-12 px-6 border-t border-[#002147]/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Columna 1: Marca y descripción */}
          <div className="space-y-6">
            <div>
              <span className="text-2xl font-serif font-bold text-white">
                Mobile<span className="text-[#C5A021]">Drinks</span>
              </span>
              <p className="text-gray-500 text-sm mt-4 leading-relaxed max-w-sm">
                {content.contact.description}
              </p>
            </div>
            
            <div className="flex space-x-5">
              <a 
                href={BUSINESS.socials.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/5 bg-white/5 flex items-center justify-center text-white hover:text-[#C5A021] hover:border-[#C5A021] transition-all"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8.14 9.75V15.43H7.9V12h2.24V9.43c0-2.21 1.35-3.43 3.33-3.43.95 0 1.94.17 1.94.17v2.14h-1.1c-1.1 0-1.44.68-1.44 1.38V12h2.41l-.39 3.43h-2.02v6.32c4.7-.88 8.14-4.91 8.14-9.75z"/>
                </svg>
              </a>
              <a 
                href={BUSINESS.socials.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/5 bg-white/5 flex items-center justify-center text-white hover:text-[#C5A021] hover:border-[#C5A021] transition-all"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.981 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Columna 2: Datos de Contacto */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#C5A021]/10 flex items-center justify-center text-[#C5A021]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              </div>
              <span className="text-gray-400 text-sm"><span className="text-white font-bold mr-2">{content.contact.call}</span> {BUSINESS.location.phone}</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#C5A021]/10 flex items-center justify-center text-[#C5A021]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <span className="text-gray-400 text-sm"><span className="text-white font-bold mr-2">{content.contact.write}</span> {BUSINESS.location.email}</span>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 mt-1 rounded-full bg-[#C5A021]/10 flex items-center justify-center text-[#C5A021]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <span className="text-gray-400 text-sm leading-relaxed max-w-xs"><span className="text-white font-bold mr-2">{content.contact.location}</span> {BUSINESS.location.address}</span>
            </div>
          </div>
        </div>

        {/* Logo Centrado */}
        <div className="flex justify-center mb-16">
          <img 
            src="https://i.imgur.com/GKJwxc5.png" 
            alt="Mobile Drinks Brand Logo" 
            className="h-48 md:h-72 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-500 hover:scale-105"
          />
        </div>

        <div className="pt-10 border-t border-white/5 text-center">
          <p className="text-gray-600 text-[9px] uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} {content.contact.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
