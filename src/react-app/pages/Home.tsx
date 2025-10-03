import { useEffect } from 'react';
import { useLanguage } from '@/react-app/contexts/LanguageContext';
import HeroSection from '@/react-app/components/HeroSection';
import BenefitsSection from '@/react-app/components/BenefitsSection';
import HowItWorksSection from '@/react-app/components/HowItWorksSection';
import PricingSection from '@/react-app/components/PricingSection';

import Footer from '@/react-app/components/Footer';

export default function Home() {
  const { language, isLoading } = useLanguage();

  // Load Google Fonts
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  // Update meta tags based on language
  useEffect(() => {
    if (!isLoading) {
      const title = language === 'es' 
        ? 'ZappyBee AI - Conseguí 50+ Leads B2B con IA al mes'
        : 'ZappyBee AI - Get 50+ B2B Leads with AI per month';
      
      const description = language === 'es'
        ? 'Conseguí 50 Leads B2B con IA al mes. Nuestro software encuentra, valida y contacta prospectos automáticamente.'
        : 'Get 50+ B2B Leads with AI per month. Our software automatically finds, validates, and contacts prospects.';

      document.title = title;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        const newMetaDescription = document.createElement('meta');
        newMetaDescription.name = 'description';
        newMetaDescription.content = description;
        document.head.appendChild(newMetaDescription);
      }

      // Update Open Graph meta tags
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', title);

      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) ogDescription.setAttribute('content', description);

      const twitterTitle = document.querySelector('meta[property="twitter:title"]');
      if (twitterTitle) twitterTitle.setAttribute('content', title);

      const twitterDescription = document.querySelector('meta[property="twitter:description"]');
      if (twitterDescription) twitterDescription.setAttribute('content', description);
    }
  }, [language, isLoading]);

  const redirectToApp = () => {
    window.open('https://app.zappybee.com/', '_blank');
  };

  // Show loading state while detecting language
  if (isLoading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden max-w-full">
      <HeroSection onCtaClick={redirectToApp} />
      <BenefitsSection />
      <HowItWorksSection onCtaClick={redirectToApp} />
      <PricingSection onCtaClick={redirectToApp} />
      <Footer />
    </div>
  );
}
