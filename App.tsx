
import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Services from './components/Services.tsx';
import About from './components/About.tsx';
import Contact from './components/Contact.tsx';
import BookingForm from './components/BookingForm.tsx';
import VideoShowcase from './components/VideoShowcase.tsx';
import { useLanguage } from './context/LanguageContext.tsx';

const App: React.FC = () => {
  const { content } = useLanguage();

  return (
    <div className="min-h-screen bg-black font-sans">
      <Navbar />
      <main>
        <Hero />
        
        {/* Sección de Credenciales - Clean Minimal (Sin Bordes, Fondo Azul Oscuro) */}
        <section className="relative bg-[#000d1a] z-20">
          <div className="max-w-[1920px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4">
              
              {/* ITEM 1 */}
              <div className="group relative py-8 px-6 cursor-default">
                 <div className="flex flex-col items-center md:items-start gap-1">
                    <span className="font-syncopate font-bold text-2xl lg:text-3xl text-white group-hover:text-[#C5A021] transition-colors duration-300">
                      {content.credentials.dedication}
                    </span>
                    <span className="font-inter text-[10px] text-gray-500 uppercase tracking-[0.25em] group-hover:text-gray-300 transition-colors">
                      {content.credentials.dedicationLabel}
                    </span>
                 </div>
              </div>

              {/* ITEM 2 */}
              <div className="group relative py-8 px-6 cursor-default">
                 <div className="flex flex-col items-center md:items-start gap-1">
                    <span className="font-syncopate font-bold text-2xl lg:text-3xl text-white group-hover:text-[#C5A021] transition-colors duration-300">
                      {content.credentials.bar}
                    </span>
                    <span className="font-inter text-[10px] text-gray-500 uppercase tracking-[0.25em] group-hover:text-gray-300 transition-colors">
                      {content.credentials.barLabel}
                    </span>
                 </div>
              </div>

              {/* ITEM 3 */}
              <div className="group relative py-8 px-6 cursor-default">
                 <div className="flex flex-col items-center md:items-start gap-1">
                    <span className="font-syncopate font-bold text-2xl lg:text-3xl text-white group-hover:text-[#C5A021] transition-colors duration-300">
                      {content.credentials.attention}
                    </span>
                    <span className="font-inter text-[10px] text-gray-500 uppercase tracking-[0.25em] group-hover:text-gray-300 transition-colors">
                      {content.credentials.attentionLabel}
                    </span>
                 </div>
              </div>

              {/* ITEM 4 */}
              <div className="group relative py-8 px-6 cursor-default">
                 <div className="flex flex-col items-center md:items-start gap-1">
                    <span className="font-syncopate font-bold text-2xl lg:text-3xl text-white group-hover:text-[#C5A021] transition-colors duration-300">
                      {content.credentials.quality}
                    </span>
                    <span className="font-inter text-[10px] text-gray-500 uppercase tracking-[0.25em] group-hover:text-gray-300 transition-colors">
                      {content.credentials.qualityLabel}
                    </span>
                 </div>
              </div>

            </div>
          </div>
        </section>

        <Services />

        <About />
        
        <VideoShowcase />

        {/* Sección de Cotización - High End Touristy Surf Vibe */}
        <section id="cotizar" className="py-32 px-6 bg-gradient-to-r from-[#001a35]/30 to-[#000d1a] relative z-10 border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center">
             <span className="block font-syncopate text-[#C5A021] text-[10px] md:text-xs tracking-[0.4em] uppercase mb-6 opacity-90">
                {content.booking.preTitle}
             </span>
             <h3 className="text-white mb-10 leading-none">
               <span className="font-bodoni font-bold text-3xl md:text-5xl uppercase tracking-widest block mb-4">
                 {content.booking.titleLine1}
               </span>
               <span className="font-syncopate font-black text-5xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 uppercase tracking-tighter drop-shadow-2xl">
                 {content.booking.titleLine2}
               </span>
             </h3>
             <p className="font-inter text-base text-gray-400 mb-16 max-w-lg mx-auto leading-relaxed font-light tracking-wide">
               {content.booking.description}
             </p>
             
             <div className="mt-2">
               <BookingForm />
             </div>
          </div>
        </section>

        <Contact />
      </main>
    </div>
  );
};

export default App;
