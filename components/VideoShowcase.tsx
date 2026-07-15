
import React from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';

const VideoShowcase: React.FC = () => {
  const { content } = useLanguage();
  return (
    <section className="bg-[#000d1a] py-20 lg:py-32 relative border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-6">
        
        {/* Encabezado de Sección */}
        <div className="mb-16 text-center">
            <span className="block font-syncopate text-[10px] text-[#C5A021] tracking-[0.4em] uppercase mb-4">
              {content.videoShowcase.preTitle}
            </span>
            <h2 className="font-bodoni text-4xl md:text-6xl text-white font-medium">
              {content.videoShowcase.titleLine1} <span className="italic text-white/50">{content.videoShowcase.titleLine2}</span>
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Video 1 */}
          <div className="group relative h-[600px] md:h-[700px] w-full rounded-sm overflow-hidden border border-white/10 hover:border-[#C5A021]/30 transition-colors duration-500">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out"
              style={{ filter: 'grayscale(0.1) brightness(0.8) contrast(1.1)' }}
            >
              <source 
                src="https://www.image2url.com/r2/default/videos/1784076139465-6d540554-c411-4a49-89ea-671b3fcfa43b.mov" 
                type="video/quicktime" 
              />
               <source 
                src="https://www.image2url.com/r2/default/videos/1784076139465-6d540554-c411-4a49-89ea-671b3fcfa43b.mov" 
                type="video/mp4" 
              />
            </video>
            
            {/* Overlay Gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#000d1a] via-transparent to-transparent opacity-60"></div>
            
            {/* Etiqueta Flotante */}
            <div className="absolute bottom-8 left-8">
               <span className="font-syncopate text-[9px] text-white tracking-[0.3em] uppercase border-l-2 border-[#C5A021] pl-3">
                 {content.videoShowcase.video1Label}
               </span>
            </div>
          </div>

          {/* Video 2 */}
          <div className="group relative h-[600px] md:h-[700px] w-full rounded-sm overflow-hidden border border-white/10 hover:border-[#C5A021]/30 transition-colors duration-500 md:mt-16">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out"
              style={{ filter: 'grayscale(0.1) brightness(0.8) contrast(1.1)' }}
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
            
            {/* Overlay Gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#000d1a] via-transparent to-transparent opacity-60"></div>

             {/* Etiqueta Flotante */}
            <div className="absolute bottom-8 left-8">
               <span className="font-syncopate text-[9px] text-white tracking-[0.3em] uppercase border-l-2 border-[#C5A021] pl-3">
                 {content.videoShowcase.video2Label}
               </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
