import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Translation {
  [key: string]: string | Translation | string[];
}

interface Translations {
  en: Translation;
  es: Translation;
}

const translations: Translations = {
  en: {
    hero: {
      title: "Get 50+ B2B Leads with AI per month",
      subtitle: "Our software automatically finds, validates, and contacts prospects.",
      description: "No manual effort. No spam. Just results.",
      cta: "Try Free for 7 Days",
      trustIndicators: {
        noCard: "No credit card required",
        quickSetup: "5-minute setup",
        support: "24/7 Support"
      }
    },
    registration: {
      title: "Start your free trial",
      subtitle: "7 days free. No credit card. 5-minute setup.",
      nameLabel: "Full name",
      namePlaceholder: "Your full name",
      emailLabel: "Business email",
      emailPlaceholder: "you@company.com",
      companyLabel: "Company name",
      companyPlaceholder: "Your company name",
      submitButton: "Join Free",
      submitting: "Registering...",
      successTitle: "Thank you for signing up!",
      successMessage: "You'll soon have access to your 7-day free trial.",
      successSubtitle: "Check your email for next steps.",
      whatNext: "What's next? Our team will contact you within 24 hours to set up your account and help you create your first campaign.",
      trustIndicators: {
        freeTrial: "7-day free trial",
        noCommitment: "No commitment",
        quickSetup: "5-minute setup"
      },
      errors: {
        nameMin: "Name must be at least 2 characters",
        emailRequired: "Email is required",
        emailInvalid: "Enter a valid email",
        companyMin: "Company name must be at least 2 characters",
        submitError: "There was an error. Please try again.",
        connectionError: "Connection error. Please try again."
      }
    },
    benefits: {
      title: "Why choose ZappyBee AI?",
      subtitle: "The all-in-one platform that automates your lead generation while you focus on closing sales.",
      leadGeneration: {
        title: "Automatic Lead Generation",
        description: "AI that finds perfect prospects on LinkedIn, databases, and social networks 24 hours a day."
      },
      emailValidation: {
        title: "Email Validation",
        description: "We verify every email before sending. 95% deliverability guaranteed."
      },
      personalizedMessages: {
        title: "AI-Personalized Messages",
        description: "Each message automatically adapts to the prospect's profile and company."
      },
      dashboard: {
        title: "Metrics Dashboard",
        description: "Track opens, clicks, responses, and conversions in real-time."
      },
      resultsTitle: "Average Results from Our Clients",
      stats: {
        leads: "Qualified leads per month",
        responseRate: "Average response rate",
        roi: "ROI in the first 3 months"
      }
    },
    howItWorks: {
      title: "How it works in 3 simple steps",
      subtitle: "From zero to qualified leads in less than 24 hours. No technical complications.",
      step1: {
        title: "Create Campaign",
        description: "Define your ideal customer: industry, position, company size. Our AI understands exactly who you're looking for."
      },
      step2: {
        title: "Find Leads",
        description: "AI automatically searches multiple sources, validates emails and builds a list of qualified prospects."
      },
      step3: {
        title: "Send Emails and Get Responses",
        description: "Personalized messages are sent automatically. Track responses and schedule meetings from the dashboard."
      },
      ctaTitle: "Ready to automate your leads?",
      ctaSubtitle: "Join +500 companies already generating leads on autopilot.",
      ctaButton: "Get Started Free"
    },
    pricing: {
      title: "Simple and transparent pricing",
      subtitle: "No annual contracts, no hidden costs. Pay only for the results you get.",
      starter: {
        name: "Starter",
        price: "$49",
        period: "/month",
        features: [
          "200 leads per month",
          "1 active campaign",
          "1 sending account",
          "Basic dashboard",
          "Email support"
        ]
      },
      growth: {
        name: "Growth",
        price: "$99",
        period: "/month",
        popular: "MOST POPULAR",
        features: [
          "1,000 leads per month",
          "3 active campaigns",
          "3 sending accounts",
          "Advanced AI personalization",
          "Complete analytics",
          "Priority support"
        ]
      },
      pro: {
        name: "Pro",
        price: "$199",
        period: "/month",
        features: [
          "3,000 leads per month",
          "Multi-user",
          "Advanced sequences",
          "Advanced analytics",
          "Premium support"
        ]
      },
      ctaButton: "Get Started Free"
    },
    footer: {
      description: "The most advanced B2B lead generation platform. Automate your prospecting with artificial intelligence.",
      email: "contact.support@zappybee.com",
      legal: {
        terms: "Terms and Conditions",
        privacy: "Privacy Policy",
        cookies: "Cookie Policy"
      },
      copyright: "© 2024 ZappyBee AI. All rights reserved.",
      madeWith: "Made with ❤️ for B2B sales teams",
      trustBadges: {
        ssl: "SSL encrypted data",
        gdpr: "GDPR Compliant",
        uptime: "99.9% Uptime SLA",
        support: "24/7 Support"
      }
    }
  },
  es: {
    hero: {
      title: "Conseguí 50+ Leads B2B con IA al mes",
      subtitle: "Nuestro software encuentra, valida y contacta prospectos automáticamente.",
      description: "Sin esfuerzo manual. Sin spam. Solo resultados.",
      cta: "Probar Gratis 7 Días",
      trustIndicators: {
        noCard: "Sin tarjeta de crédito",
        quickSetup: "Configuración en 5 minutos",
        support: "Soporte 24/7"
      }
    },
    registration: {
      title: "Comenzá tu prueba gratuita",
      subtitle: "7 días gratis. Sin tarjeta de crédito. Configuración en 5 minutos.",
      nameLabel: "Nombre completo",
      namePlaceholder: "Tu nombre completo",
      emailLabel: "Email profesional",
      emailPlaceholder: "tu@empresa.com",
      companyLabel: "Nombre de la empresa",
      companyPlaceholder: "Nombre de tu empresa",
      submitButton: "Unirme Gratis",
      submitting: "Registrando...",
      successTitle: "¡Gracias por registrarte!",
      successMessage: "Pronto tendrás acceso a tu prueba gratuita de 7 días.",
      successSubtitle: "Revisa tu email para los próximos pasos.",
      whatNext: "¿Qué sigue? Nuestro equipo te contactará en las próximas 24 horas para configurar tu cuenta y ayudarte a crear tu primera campaña.",
      trustIndicators: {
        freeTrial: "Prueba gratuita de 7 días",
        noCommitment: "Sin compromiso",
        quickSetup: "Configurable en 5 minutos"
      },
      errors: {
        nameMin: "El nombre debe tener al menos 2 caracteres",
        emailRequired: "El email es requerido",
        emailInvalid: "Ingresa un email válido",
        companyMin: "El nombre de la empresa debe tener al menos 2 caracteres",
        submitError: "Hubo un error. Por favor intenta nuevamente.",
        connectionError: "Error de conexión. Por favor intenta nuevamente."
      }
    },
    benefits: {
      title: "¿Por qué elegir ZappyBee AI?",
      subtitle: "La plataforma todo-en-uno que automatiza tu generación de leads mientras tú te enfocas en cerrar ventas.",
      leadGeneration: {
        title: "Generación Automática de Leads",
        description: "IA que encuentra prospectos perfectos en LinkedIn, bases de datos y redes sociales las 24 horas."
      },
      emailValidation: {
        title: "Validación de Emails",
        description: "Verificamos cada email antes de enviarlo. 95% de deliverability garantizada."
      },
      personalizedMessages: {
        title: "Mensajes Personalizados con IA",
        description: "Cada mensaje se adapta automáticamente al perfil y empresa del prospecto."
      },
      dashboard: {
        title: "Dashboard con Métricas",
        description: "Trackea opens, clicks, respuestas y conversiones en tiempo real."
      },
      resultsTitle: "Resultados Promedio de Nuestros Clientes",
      stats: {
        leads: "Leads calificados por mes",
        responseRate: "Tasa de respuesta promedio",
        roi: "ROI en los primeros 3 meses"
      }
    },
    howItWorks: {
      title: "Cómo funciona en 3 simples pasos",
      subtitle: "De cero a leads calificados en menos de 24 horas. Sin complicaciones técnicas.",
      step1: {
        title: "Crear Campaña",
        description: "Define tu cliente ideal: industria, cargo, tamaño de empresa. Nuestra IA entiende exactamente a quién buscas."
      },
      step2: {
        title: "Encontrar Leads",
        description: "La IA busca automáticamente en múltiples fuentes, valida emails y construye una lista de prospectos calificados."
      },
      step3: {
        title: "Enviar Emails y Recibir Respuestas",
        description: "Mensajes personalizados se envían automáticamente. Trackeas respuestas y agendas reuniones desde el dashboard."
      },
      ctaTitle: "¿Listo para automatizar tus leads?",
      ctaSubtitle: "Únete a +500 empresas que ya están generando leads en piloto automático.",
      ctaButton: "Comenzar Ahora Gratis"
    },
    pricing: {
      title: "Pricing simple y transparente",
      subtitle: "Sin contratos anuales, sin costos ocultos. Paga solo por los resultados que obtienes.",
      starter: {
        name: "Starter",
        price: "$49",
        period: "/mes",
        features: [
          "200 leads por mes",
          "1 campaña activa",
          "1 cuenta de envío",
          "Dashboard básico",
          "Soporte por email"
        ]
      },
      growth: {
        name: "Growth",
        price: "$99",
        period: "/mes",
        popular: "MÁS POPULAR",
        features: [
          "1,000 leads por mes",
          "3 campañas activas",
          "3 cuentas de envío",
          "IA personalización avanzada",
          "Analytics completos",
          "Soporte prioritario"
        ]
      },
      pro: {
        name: "Pro",
        price: "$199",
        period: "/mes",
        features: [
          "3,000 leads por mes",
          "Multi-usuario",
          "Secuencias avanzadas",
          "Analytics avanzados",
          "Soporte premium"
        ]
      },
      ctaButton: "Comenzar Gratis"
    },
    footer: {
      description: "La plataforma de generación de leads B2B más avanzada. Automatiza tu prospección con inteligencia artificial.",
      email: "contact.support@zappybee.com",
      legal: {
        terms: "Términos y Condiciones",
        privacy: "Política de Privacidad",
        cookies: "Política de Cookies"
      },
      copyright: "© 2024 ZappyBee AI. Todos los derechos reservados.",
      madeWith: "Hecho con ❤️ para equipos de ventas B2B",
      trustBadges: {
        ssl: "Datos encriptados SSL",
        gdpr: "GDPR Compliant",
        uptime: "99.9% Uptime SLA",
        support: "Soporte 24/7"
      }
    }
  }
};

interface LanguageContextType {
  language: string;
  t: (key: string) => string | string[];
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Spanish-speaking countries
const spanishSpeakingCountries = [
  'AR', // Argentina
  'BO', // Bolivia
  'CL', // Chile
  'CO', // Colombia
  'CR', // Costa Rica
  'CU', // Cuba
  'DO', // Dominican Republic
  'EC', // Ecuador
  'SV', // El Salvador
  'GQ', // Equatorial Guinea
  'GT', // Guatemala
  'HN', // Honduras
  'MX', // Mexico
  'NI', // Nicaragua
  'PA', // Panama
  'PY', // Paraguay
  'PE', // Peru
  'PR', // Puerto Rico
  'ES', // Spain
  'UY', // Uruguay
  'VE'  // Venezuela
];

async function detectUserCountry(): Promise<string> {
  try {
    // Try to get country from Cloudflare headers first (if available)
    const response = await fetch('/api/country');
    if (response.ok) {
      const data = await response.json();
      return data.country;
    }
  } catch (error) {
    console.log('Country detection via API failed, using fallback');
  }

  try {
    // Fallback to a free IP geolocation service
    const response = await fetch('https://ipapi.co/country_code/');
    if (response.ok) {
      const country = await response.text();
      return country.trim().toUpperCase();
    }
  } catch (error) {
    console.log('Fallback country detection failed');
  }

  // Final fallback - check browser language
  const browserLang = navigator.language || navigator.languages?.[0] || 'en';
  if (browserLang.startsWith('es')) {
    return 'ES'; // Assume Spain if browser is in Spanish
  }

  return 'US'; // Default to US if all detection methods fail
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<string>('en');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function initializeLanguage() {
      try {
        const country = await detectUserCountry();
        const isSpanishCountry = spanishSpeakingCountries.includes(country);
        setLanguage(isSpanishCountry ? 'es' : 'en');
      } catch (error) {
        console.error('Error detecting language:', error);
        setLanguage('en'); // Default to English
      } finally {
        setIsLoading(false);
      }
    }

    initializeLanguage();
  }, []);

  const t = (key: string): string | string[] => {
    const keys = key.split('.');
    let current: any = translations[language as keyof Translations];
    
    for (const k of keys) {
      if (current && typeof current === 'object' && k in current) {
        current = current[k];
      } else {
        // Fallback to English if key not found
        current = translations.en;
        for (const fallbackKey of keys) {
          if (current && typeof current === 'object' && fallbackKey in current) {
            current = current[fallbackKey];
          } else {
            return key; // Return the key itself if not found
          }
        }
        break;
      }
    }
    
    // Return the current value if it's a string or array, otherwise return the key
    if (typeof current === 'string' || Array.isArray(current)) {
      return current;
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, t, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
