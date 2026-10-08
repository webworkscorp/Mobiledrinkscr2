import React, { createContext, useContext, useState, useEffect, useRef, ReactNode } from 'react';

interface PrivacyModalContextType {
  isModalOpen: boolean;
  openModal: (triggerElement?: HTMLElement | null) => void;
  closeModal: () => void;
  triggerElementRef: React.MutableRefObject<HTMLElement | null>;
}

const PrivacyModalContext = createContext<PrivacyModalContextType | undefined>(undefined);

export const PrivacyModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const triggerElementRef = useRef<HTMLElement | null>(null);

  const openModal = (triggerElement?: HTMLElement | null) => {
    if (triggerElement) {
      triggerElementRef.current = triggerElement;
    } else if (document.activeElement instanceof HTMLElement) {
      triggerElementRef.current = document.activeElement;
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    if (window.location.hash === '#politica-de-privacidad') {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    if (triggerElementRef.current && typeof triggerElementRef.current.focus === 'function') {
      triggerElementRef.current.focus();
    }
  };

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#politica-de-privacidad') {
        setIsModalOpen(true);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <PrivacyModalContext.Provider value={{ isModalOpen, openModal, closeModal, triggerElementRef }}>
      {children}
    </PrivacyModalContext.Provider>
  );
};

export const usePrivacyModal = () => {
  const context = useContext(PrivacyModalContext);
  if (!context) {
    throw new Error('usePrivacyModal must be used within a PrivacyModalProvider');
  }
  return context;
};
