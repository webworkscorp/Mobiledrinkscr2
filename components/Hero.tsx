
import React from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';

const Hero: React.FC = () => {
  const { content } = useLanguage();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="inicio" className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#000d1a]">
      {/* Background Video con Filtro de Contraste Alto */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-110"
          style={{ filter: 'grayscale(0.2) brightness(0.65) contrast(1.1)' }}
        >
          <source 
            src="https://www.image2url.com/r2/default/videos/1784075823906-d00da0c5-63e6-4c7f-b1b4-bcd11ab0198f.mov" 
            type="video/quicktime" 
          />
          <source 
            src="https://www.image2url.com/r2/default/videos/1784075823906-d00da0c5-63e6-4c7f-b1b4-bcd11ab0198f.mov" 
            type="video/mp4" 
          />
        </video>
        {/* Overlay suavizado para mayor visibilidad del video - Transición a Azul Oscuro */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#000d1a] via-black/25 to-black/60"></div>
      </div>

      {/* Grid Decorativo de Fondo */}
      <div className="absolute inset-0 z-1 opacity-10 pointer-events-none">
        <div className="h-full w-full" style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center px-6 max-w-[1400px] mx-auto pt-10">
        <h1 className="flex flex-col items-center justify-center animate-[heroSlideUp_1.4s_cubic-bezier(0.19,1,0.22,1)] drop-shadow-2xl">
          <span className="font-bodoni text-white text-2xl md:text-5xl lg:text-6xl font-light italic tracking-[0.2em] uppercase mb-2 md:mb-4 opacity-90">
            {content.hero.preTitle}
          </span>
          <span className="font-bodoni text-5xl md:text-8xl lg:text-9xl leading-[0.9] font-black italic uppercase text-white gold-shimmer tracking-tight">
            {content.hero.title}
          </span>
        </h1>
        
        <div className="mt-12 md:mt-12 flex flex-col md:flex-row items-center justify-between w-full max-w-4xl mx-auto border-t border-white/10 pt-10 gap-10">
          <p className="text-left text-sm md:text-base text-gray-300 font-light max-w-md leading-relaxed tracking-wide">
            {content.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 w-full md:w-auto">
            <a 
              href="#cotizar"
              onClick={(e) => handleScrollTo(e, 'cotizar')}
              className="px-8 py-4 bg-white text-black text-[10px] font-syncopate font-bold uppercase tracking-[0.2em] hover:bg-[#D4AF37] transition-all duration-300 min-w-[200px] flex justify-center items-center"
            >
              {content.hero.ctaPrimary}
            </a>
            <a 
              href="#servicios"
              onClick={(e) => handleScrollTo(e, 'servicios')}
              className="px-8 py-4 border border-white/30 text-white text-[10px] font-syncopate font-bold uppercase tracking-[0.2em] hover:bg-white/5 hover:border-white transition-all duration-300 min-w-[200px] flex justify-center items-center backdrop-blur-sm"
            >
              {content.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </div>

      {/* Animaciones Custom */}
      <style>{`
        @keyframes heroSlideUp {
          from { transform: translateY(100px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
