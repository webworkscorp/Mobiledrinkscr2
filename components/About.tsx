
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';

const About: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { content } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="nosotros" ref={sectionRef} className="pt-0 pb-16 md:pb-20 px-6 relative bg-gradient-to-r from-[#001a35]/30 to-[#000d1a] z-20">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-start">
          <div className="relative group flex justify-center lg:-mt-24">
            <div className="w-full flex justify-center relative">
              <img 
                src="https://i.imgur.com/NOJ7Nn7.png" 
                alt="Mobile Drinks Logo" 
                className={`relative rounded-2xl max-h-[450px] md:max-h-[550px] w-full object-contain ${
                  hasAnimated ? 'roll-in-active' : 'opacity-0'
                }`}
              />
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-500 pt-2 lg:pt-12 ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-[#C5A021] text-xs font-bold uppercase tracking-widest mb-4">{content.about.preTitle}</h2>
            <h3 className="text-4xl font-serif font-bold text-white mb-6 md:mb-8">
              {content.about.title}
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 md:mb-10">
              {content.about.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {content.about.reasons.map((reason, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-[#C5A021]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-[#C5A021]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 010 1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300 text-sm">{reason}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 md:mt-10 flex flex-wrap gap-3">
              {content.about.eventTypes.map((event, idx) => (
                <span key={idx} className="px-4 py-1.5 bg-[#002147]/40 rounded-full text-[10px] text-blue-200/50 font-bold uppercase tracking-widest border border-white/5">
                  {event}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
