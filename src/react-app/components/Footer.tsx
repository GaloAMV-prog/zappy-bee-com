import { Mail } from 'lucide-react';
import { useLanguage } from '@/react-app/contexts/LanguageContext';

export default function Footer() {
  const { t, language } = useLanguage();

  // Determine URL paths based on language
  const getLocalizedPath = (path: string) => {
    if (language === 'es') {
      switch (path) {
        case 'terms':
          return '/terminos';
        case 'privacy':
          return '/privacidad';
        case 'cookies':
          return '/cookies';
        default:
          return path;
      }
    } else {
      switch (path) {
        case 'terms':
          return '/terms';
        case 'privacy':
          return '/privacy';
        case 'cookies':
          return '/cookies';
        default:
          return path;
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-center">
          {/* Brand */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <img 
                src="https://mocha-cdn.com/01998949-c551-76a3-89a8-7392ec50ec23/image.png_4163-(1).png" 
                alt="ZappyBee AI Logo" 
                className="w-10 h-10 mr-3"
              />
              <h3 className="text-2xl font-bold">ZappyBee AI</h3>
            </div>
            <p className="text-gray-300 text-lg mb-6 max-w-md">
              {t('footer.description')}
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-yellow-400" />
                <span>{t('footer.email')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-start space-x-6 mb-4 md:mb-0">
              <a 
                href={getLocalizedPath('terms')} 
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {t('footer.legal.terms')}
              </a>
              <a 
                href={getLocalizedPath('privacy')} 
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {t('footer.legal.privacy')}
              </a>
              <a 
                href={getLocalizedPath('cookies')} 
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {t('footer.legal.cookies')}
              </a>
            </div>

            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-right">
              <p>{t('footer.copyright')}</p>
              <p className="mt-1">
                {t('footer.madeWith')}
              </p>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-400 text-sm">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span>{t('footer.trustBadges.ssl')}</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span>{t('footer.trustBadges.gdpr')}</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span>{t('footer.trustBadges.uptime')}</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span>{t('footer.trustBadges.support')}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
