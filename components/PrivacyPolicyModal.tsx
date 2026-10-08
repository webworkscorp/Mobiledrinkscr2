import React, { useEffect, useRef } from 'react';
import { usePrivacyModal } from '../context/PrivacyModalContext.tsx';

const PrivacyPolicyModal: React.FC = () => {
  const { isModalOpen, closeModal } = usePrivacyModal();
  const modalContainerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Lock body scroll and reset scroll to top on open
  useEffect(() => {
    if (!isModalOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }

    // Set initial focus to close button
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    // Keyboard handlers: ESC to close, Tab to trap focus
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeModal();
        return;
      }

      if (e.key === 'Tab' && modalContainerRef.current) {
        const focusableElements = modalContainerRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const focusable: HTMLElement[] = Array.from(focusableElements).filter(
          (el): el is HTMLElement => el instanceof HTMLElement && !el.hasAttribute('disabled')
        );
        if (focusable.length === 0) return;

        const firstElement = focusable[0];
        const lastElement = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
    };
  }, [isModalOpen, closeModal]);

  if (!isModalOpen) return null;

  return (
    <div
      id="politica-de-privacidad"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-policy-title"
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        // Close when clicking directly on backdrop
        if (e.target === e.currentTarget) {
          closeModal();
        }
      }}
    >
      <div
        ref={modalContainerRef}
        className="relative w-full max-w-[720px] max-h-[90vh] bg-[#000d1a] border border-[#C5A021]/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header con botón de cierre */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#C5A021]/20 bg-[#001428] shrink-0">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-syncopate text-[#C5A021] block font-bold">
              Mobile Drinks CR
            </span>
            <h2
              id="privacy-policy-title"
              className="text-lg sm:text-xl font-bodoni font-bold text-white tracking-wide mt-1"
            >
              Política de Privacidad
            </h2>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeModal}
            aria-label="Cerrar Política de Privacidad"
            className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#C5A021] hover:bg-[#C5A021]/10 transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A021]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Contenido con scroll interno */}
        <div
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto px-6 py-6 sm:px-8 sm:py-8 space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed bg-[#000d1a]"
        >
          {/* Título y fecha de actualización */}
          <div className="border-b border-white/10 pb-4">
            <h3 className="text-xl sm:text-2xl font-bodoni font-bold text-white mb-2">
              Política de Privacidad — Mobile Drinks CR
            </h3>
            <p className="text-xs text-[#C5A021] uppercase tracking-widest font-semibold">
              Última actualización: 8 de octubre de 2026
            </p>
          </div>

          {/* Sección 1: Responsable */}
          <section className="space-y-2">
            <h4 className="text-base font-bold text-white font-syncopate text-xs tracking-widest text-[#C5A021]">
              Responsable
            </h4>
            <p>
              Bebidas móviles CR (www.mobiledrinkscr.com) es responsable del tratamiento de los datos personales que usted envía mediante el formulario de contacto. Contacto: mobiledrinkscr@gmail.com. Este tratamiento se rige por la Ley N.º 8968, de Protección de la Persona frente al Tratamiento de sus Datos Personales, y su Reglamento.
            </p>
          </section>

          {/* Sección 2: Datos que recopilamos */}
          <section className="space-y-2">
            <h4 className="text-base font-bold text-white font-syncopate text-xs tracking-widest text-[#C5A021]">
              Datos que recopilamos
            </h4>
            <p>
              Nombre, tipo de servicio de interés, fecha del evento y los detalles de su consulta. No solicitamos datos sensibles (salud, religión, origen racial, orientación sexual, ideología política u otros similares); le pedimos no incluirlos en su mensaje.
            </p>
          </section>

          {/* Sección 3: Para qué los usamos */}
          <section className="space-y-2">
            <h4 className="text-base font-bold text-white font-syncopate text-xs tracking-widest text-[#C5A021]">
              Para qué los usamos
            </h4>
            <p>
              Solo para responder su consulta, enviarle cotizaciones, verificar disponibilidad y coordinar el servicio. No los usamos para otros fines ni le enviamos promociones sin su autorización expresa.
            </p>
          </section>

          {/* Sección 4: Consentimiento */}
          <section className="space-y-2">
            <h4 className="text-base font-bold text-white font-syncopate text-xs tracking-widest text-[#C5A021]">
              Consentimiento
            </h4>
            <p>
              Al marcar la casilla de aceptación y enviar el formulario, usted nos da su consentimiento libre, informado y expreso para este tratamiento. Nombre, tipo de servicio y fecha del evento son necesarios para atender su consulta; sin ellos no podemos responderle. Los detalles adicionales son opcionales. Puede retirar su consentimiento en cualquier momento.
            </p>
          </section>

          {/* Sección 5: WhatsApp y otros destinatarios */}
          <section className="space-y-2">
            <h4 className="text-base font-bold text-white font-syncopate text-xs tracking-widest text-[#C5A021]">
              WhatsApp y otros destinatarios
            </h4>
            <p>
              Los datos del formulario se envían a WhatsApp (Meta), el canal por el que atendemos las consultas. Meta se encuentra fuera de Costa Rica y trata los datos conforme a sus propias políticas; al aceptar esta política, usted consiente esa transferencia. No vendemos ni cedemos sus datos a otros terceros y solo los divulgaremos si una autoridad competente lo exige conforme a la ley.
            </p>
          </section>

          {/* Sección 6: Conservación */}
          <section className="space-y-2">
            <h4 className="text-base font-bold text-white font-syncopate text-xs tracking-widest text-[#C5A021]">
              Conservación
            </h4>
            <p>
              Conservamos sus datos hasta 12 meses después del último contacto. Si contrata nuestros servicios, los conservamos durante el tiempo que exijan las obligaciones legales aplicables. Después los eliminamos.
            </p>
          </section>

          {/* Sección 7: Seguridad */}
          <section className="space-y-2">
            <h4 className="text-base font-bold text-white font-syncopate text-xs tracking-widest text-[#C5A021]">
              Seguridad
            </h4>
            <p>
              Aplicamos medidas razonables para proteger sus datos: el sitio usa conexión cifrada (HTTPS) y limitamos el acceso a las consultas a las personas que las atienden.
            </p>
          </section>

          {/* Sección 8: Sus derechos */}
          <section className="space-y-2">
            <h4 className="text-base font-bold text-white font-syncopate text-xs tracking-widest text-[#C5A021]">
              Sus derechos
            </h4>
            <p>
              Conforme a la Ley N.º 8968, usted puede solicitar el acceso, la rectificación, la supresión o la oposición al tratamiento de sus datos, y retirar su consentimiento, escribiendo a mobiledrinkscr@gmail.com e indicando su nombre y lo que solicita. Si considera que sus derechos no fueron atendidos, puede acudir a la Agencia de Protección de Datos de los Habitantes (PRODHAB): <a href="https://www.prodhab.go.cr" target="_blank" rel="noopener noreferrer" className="text-[#C5A021] underline hover:text-white">www.prodhab.go.cr</a>.
            </p>
          </section>

          {/* Sección 9: Mayores de edad */}
          <section className="space-y-2">
            <h4 className="text-base font-bold text-white font-syncopate text-xs tracking-widest text-[#C5A021]">
              Mayores de edad
            </h4>
            <p>
              Nuestros servicios incluyen bebidas alcohólicas y están dirigidos a mayores de 18 años. No recopilamos datos de menores de edad a sabiendas.
            </p>
          </section>

          {/* Sección 10: Galletas */}
          <section className="space-y-2">
            <h4 className="text-base font-bold text-white font-syncopate text-xs tracking-widest text-[#C5A021]">
              Galletas
            </h4>
            <p>
              Este sitio no utiliza cookies de seguimiento ni de publicidad.
            </p>
          </section>

          {/* Sección 11: Cambios */}
          <section className="space-y-2">
            <h4 className="text-base font-bold text-white font-syncopate text-xs tracking-widest text-[#C5A021]">
              Cambios
            </h4>
            <p>
              Podemos actualizar esta política. La versión vigente estará siempre publicada en este sitio con su fecha de actualización.
            </p>
          </section>
        </div>

        {/* Footer del modal */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#001428] flex justify-end shrink-0">
          <button
            type="button"
            onClick={closeModal}
            className="px-6 py-2.5 bg-[#C5A021] text-black text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A021]"
          >
            Entendido / Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
