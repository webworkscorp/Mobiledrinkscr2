
import { BusinessData, LocalizedContent } from './types';

export const BUSINESS: BusinessData = {
  name: "Mobile Drinks",
  location: {
    address: "San Vicente, Moravia, San José, Costa Rica",
    phone: "+506 6054 8233",
    email: "mobiledrinkscr@gmail.com"
  },
  socials: {
    facebook: "https://www.facebook.com/mobiledrinkscr",
    instagram: "https://www.instagram.com/mobiledrinkscr"
  }
};

export const CONTENT: Record<'es' | 'en', LocalizedContent> = {
  es: {
    nav: {
      est: "Est. Costa Rica"
    },
    hero: {
      preTitle: "El arte del",
      title: "Bartending",
      subtitle: "Un evento se disfruta más cuando todo está bien llevado. Cuando el ambiente fluye, los detalles están cuidados y usted puede enfocarse en compartir con sus invitados.",
      ctaPrimary: "Agendar Consulta",
      ctaSecondary: "Ver Servicios"
    },
    credentials: {
      dedication: "100%",
      dedicationLabel: "Dedicación",
      bar: "Barra",
      barLabel: "Libre y Variada",
      attention: "Atención",
      attentionLabel: "Amable",
      quality: "Calidad",
      qualityLabel: "Garantizada"
    },
    services: {
      preTitle: "Nuestros Servicios",
      titleLine1: "¿En qué podemos",
      titleLine2: "ayudarle?",
      cta: "Reservar Experiencia",
      items: [
        {
          name: "Coctelería Móvil",
          description: "Brindamos un servicio de coctelería móvil pensado para su evento, con bebidas bien preparadas y opciones que se ajustan a sus preferencias y al ambiente de la celebración."
        },
        {
          name: "Bartending Profesional",
          description: "Contamos con bartenders con experiencia que atienden la barra de forma profesional, cuidando la preparación de las bebidas y la atención a cada invitado."
        },
        {
          name: "Barra Libre / Open Bar",
          description: "Servicio de barra libre con personal a cargo de la atención y la preparación de bebidas, para que sus invitados disfruten del evento sin preocupaciones."
        },
        {
          name: "Estaciones de Sangría",
          description: "Contamos con estaciones de sangría artesanal, elaboradas con frutas frescas y una preparación cuidada que ha sido parte de muchos de nuestros eventos."
        },
        {
          name: "Gin & Tonic",
          description: "Contamos con barras de Gin & Tonic, con diferentes botánicos y tónicas para adaptarnos a las preferencias de sus invitados."
        }
      ]
    },
    about: {
      preTitle: "Sobre nosotros",
      title: "Pasión por la buena atención",
      description: "Somos un equipo apasionado por la coctelería y el servicio a la medida. Cada evento lo tratamos como único, escuchando tus ideas y creando un ambiente donde tus invitados se sientan bien atendidos y disfruten cada momento.",
      reasons: [
        "Atención personalizada y cordial.",
        "Bartenders profesionales con experiencia.",
        "Adaptamos nuestros servicios a tus necesidades.",
        "Nos encargamos de cada detalle."
      ],
      eventTypes: [
        "Bodas",
        "Cumpleaños",
        "Eventos corporativos",
        "Aniversarios",
        "Celebraciones privadas"
      ]
    },
    videoShowcase: {
      preTitle: "Atmósfera & Estilo",
      titleLine1: "Experiencia",
      titleLine2: "En Vivo",
      video1Label: "Coctelería Artesanal",
      video2Label: "Staff Profesional"
    },
    booking: {
      preTitle: "Saborea la Experiencia",
      titleLine1: "Reserva tu prueba de",
      titleLine2: "MENÚ",
      description: "Cada evento es una historia distinta. Cuéntenos la suya y nosotros nos encargamos de servirla con elegancia.",
      form: {
        name: "Nombre",
        namePlaceholder: "Su nombre completo",
        service: "Tipo de servicio",
        servicePlaceholder: "Seleccione el servicio",
        date: "Fecha del evento",
        details: "Detalles de la consulta",
        detailsPlaceholder: "¿Cuántas personas? ¿Alguna idea especial?...",
        button: "Enviar Consulta",
        sending: "Abriendo WhatsApp..."
      }
    },
    contact: {
      description: "Servicio de coctelería móvil para su evento, con una atención ordenada y bebidas preparadas con dedicación.",
      call: "Llamar:",
      write: "Escribir:",
      location: "Estamos en:",
      copyright: "Mobile Drinks CR. Moravia, San José, Costa Rica."
    }
  },
  en: {
    nav: {
      est: "Est. Costa Rica"
    },
    hero: {
      preTitle: "The Art of",
      title: "Bartending",
      subtitle: "An event is best enjoyed when everything flows seamlessly. When details are curated and you can focus on sharing the moment with your guests.",
      ctaPrimary: "Book Consultation",
      ctaSecondary: "View Services"
    },
    credentials: {
      dedication: "100%",
      dedicationLabel: "Dedication",
      bar: "Open Bar",
      barLabel: "& Varied",
      attention: "Warm",
      attentionLabel: "Hospitality",
      quality: "Quality",
      qualityLabel: "Guaranteed"
    },
    services: {
      preTitle: "Our Services",
      titleLine1: "How can we",
      titleLine2: "assist you?",
      cta: "Book Experience",
      items: [
        {
          name: "Mobile Mixology",
          description: "We provide a mobile cocktail service designed for your event, with well-prepared drinks and options tailored to your preferences and the celebration's atmosphere."
        },
        {
          name: "Professional Bartending",
          description: "We feature experienced bartenders who manage the bar professionally, ensuring precise drink preparation and attentive care for every guest."
        },
        {
          name: "Open Bar Service",
          description: "Full open bar service with staff in charge of service and drink preparation, allowing your guests to enjoy the event without worry."
        },
        {
          name: "Sangria Stations",
          description: "We offer artisanal sangria stations, crafted with fresh fruits and careful preparation that has become a staple in many of our events."
        },
        {
          name: "Gin & Tonic",
          description: "We feature Gin & Tonic bars with diverse botanicals and tonics to adapt to your guests' specific preferences."
        }
      ]
    },
    about: {
      preTitle: "About Us",
      title: "Passion for Service",
      description: "We are a team passionate about mixology and tailored service. We treat every event as unique, listening to your ideas and creating an atmosphere where your guests feel well-cared for and enjoy every moment.",
      reasons: [
        "Personalized and cordial attention.",
        "Experienced professional bartenders.",
        "Services adapted to your needs.",
        "We take care of every detail."
      ],
      eventTypes: [
        "Weddings",
        "Birthdays",
        "Corporate Events",
        "Anniversaries",
        "Private Celebrations"
      ]
    },
    videoShowcase: {
      preTitle: "Atmosphere & Style",
      titleLine1: "Live",
      titleLine2: "Experience",
      video1Label: "Craft Cocktails",
      video2Label: "Professional Staff"
    },
    booking: {
      preTitle: "Taste The Experience",
      titleLine1: "Book your",
      titleLine2: "MENU TASTING",
      description: "Every event is a different story. Tell us yours, and we will take care of serving it with elegance.",
      form: {
        name: "Name",
        namePlaceholder: "Your full name",
        service: "Service Type",
        servicePlaceholder: "Select service",
        date: "Event Date",
        details: "Inquiry Details",
        detailsPlaceholder: "How many guests? Any special ideas?...",
        button: "Send Inquiry",
        sending: "Opening WhatsApp..."
      }
    },
    contact: {
      description: "Mobile cocktail service for your event, with organized attention and drinks prepared with dedication.",
      call: "Call:",
      write: "Email:",
      location: "Located in:",
      copyright: "Mobile Drinks CR. Moravia, San José, Costa Rica."
    }
  }
};
