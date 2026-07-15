
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';

const Services: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { content } = useLanguage();

  const images = [
    'https://i.imgur.com/c0yIlh7.jpeg',
    'https://i.imgur.com/cKWE9Pm.jpeg',
    'https://i.imgur.com/Px8UNRr.jpeg',
    'https://i.imgur.com/zwffr5r.jpeg',
    'https://i.imgur.com/qRz4nw8.jpeg'
  ];

  const handleConsultClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const element = document.getElementById('cotizar');
    if (element) {
      const offset = 80;
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.pageYOffset - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="servicios" className="bg-gradient-to-r from-[#001a35]/30 to-[#000d1a] pt-24 lg:pt-40 pb-10 relative overflow-hidden z-10">
      
      {/* Línea decorativa sutil top */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        
        {/* Columna Izquierda: Imagen Sticky (Visible Desktop) */}
        <div className="hidden lg:block lg:col-span-5 relative">
          <div className="sticky top-32 h-[75vh] w-full rounded-sm overflow-hidden border border-white/5 bg-[#000d1a]">
             {images.map((img, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    activeIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000d1a]/80 via-transparent to-transparent z-10"></div>
                  <img 
                    src={img} 
                    alt="Service Detail" 
                    className="w-full h-full object-cover grayscale-[30%] contrast-110"
                  />
                  
                  {/* Etiqueta Flotante sobre imagen */}
                  <div className="absolute bottom-8 left-8 z-20">
                     <span className="block font-syncopate text-[10px] text-[#C5A021] tracking-[0.3em] uppercase mb-2">
                       Servicio N° {index + 1}
                     </span>
                     <div className="h-[1px] w-12 bg-white/30"></div>
                  </div>
                </div>
             ))}
          </div>
        </div>

        {/* Columna Derecha: Lista Interactiva */}
        <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="mb-24 lg:pl-4">
                <h2 className="font-syncopate text-[10px] md:text-xs text-[#C5A021] tracking-[0.4em] uppercase mb-6 flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-[#C5A021]"></span>
                  {content.services.preTitle}
                </h2>
                <h3 className="font-bodoni font-medium text-5xl md:text-7xl lg:text-8xl text-white leading-[0.9] tracking-tight">
                  {content.services.titleLine1} <br/>
                  <span className="italic text-gray-700 font-serif font-black" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>{content.services.titleLine2}</span>
                </h3>
            </div>

            <div className="flex flex-col">
                {content.services.items.map((service, index) => (
                    <div 
                        key={index}
                        onMouseEnter={() => setActiveIndex(index)}
                        className="group border-t border-white/10 py-10 lg:py-14 cursor-pointer relative transition-all duration-500 hover:border-white/30"
                    >
                         {/* Imagen Móvil (Solo visible en pantallas pequeñas al activar) */}
                         <div className={`lg:hidden overflow-hidden transition-all duration-500 mb-6 ${
                            activeIndex === index ? 'max-h-[250px] opacity-100' : 'max-h-0 opacity-0'
                         }`}>
                           <img src={images[index]} alt={service.name} className="w-full h-full object-cover rounded-lg brightness-75" />
                         </div>

                         <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-10 relative z-10">
                            <span className={`font-syncopate text-xs tracking-widest transition-colors duration-300 w-8 ${
                              activeIndex === index ? 'text-[#C5A021]' : 'text-gray-500'
                            }`}>
                                0{index + 1}
                            </span>
                            
                            {/* Título con efecto Outline -> Fill */}
                            <h4 
                              className={`text-4xl md:text-6xl font-bodoni font-black italic uppercase transition-all duration-500 ease-out ${
                                activeIndex === index 
                                  ? 'text-white translate-x-2' 
                                  : 'text-transparent hover:text-white/50'
                              }`}
                              style={{ 
                                WebkitTextStroke: activeIndex === index ? '0px' : '1px rgba(255,255,255,0.3)' 
                              }}
                            >
                                {service.name}
                            </h4>
                         </div>

                         {/* Contenido Expandible */}
                         <div className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                            activeIndex === index ? 'max-h-[400px] opacity-100 mt-6' : 'max-h-0 opacity-0'
                         }`}>
                            <div className="md:pl-20 max-w-xl">
                              <p className="text-gray-400 font-light text-base md:text-lg leading-relaxed mb-8">
                                  {service.description}
                              </p>
                              
                              <button 
                                onClick={handleConsultClick}
                                className="group/btn flex items-center gap-4 text-[10px] font-syncopate font-bold uppercase tracking-[0.2em] text-white hover:text-[#C5A021] transition-colors"
                              >
                                  <span>{content.services.cta}</span>
                                  <span className="w-8 h-[1px] bg-white/30 group-hover/btn:w-16 group-hover/btn:bg-[#C5A021] transition-all duration-300"></span>
                              </button>
                            </div>
                         </div>
                    </div>
                ))}
                <div className="border-t border-white/10"></div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
