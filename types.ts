
export interface Service {
  name: string;
  description: string;
}

export interface BusinessData {
  name: string;
  location: {
    address: string;
    phone: string;
    email: string;
  };
  socials: {
    facebook: string;
    instagram: string;
  };
}

export interface LocalizedContent {
  nav: {
    est: string;
  };
  hero: {
    preTitle: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  credentials: {
    dedication: string;
    dedicationLabel: string;
    bar: string;
    barLabel: string;
    attention: string;
    attentionLabel: string;
    quality: string;
    qualityLabel: string;
  };
  services: {
    preTitle: string;
    titleLine1: string;
    titleLine2: string;
    items: Service[];
    cta: string;
  };
  about: {
    preTitle: string;
    title: string;
    description: string;
    reasons: string[];
    eventTypes: string[];
  };
  videoShowcase: {
    preTitle: string;
    titleLine1: string;
    titleLine2: string;
    video1Label: string;
    video2Label: string;
  };
  booking: {
    preTitle: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    form: {
      name: string;
      namePlaceholder: string;
      service: string;
      servicePlaceholder: string;
      date: string;
      details: string;
      detailsPlaceholder: string;
      button: string;
      sending: string;
    };
  };
  contact: {
    description: string;
    call: string;
    write: string;
    location: string;
    copyright: string;
  };
}

export type Language = 'es' | 'en';

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}
