import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/react-app/contexts/LanguageContext';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  const { t } = useLanguage();

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center mb-8">
            <img 
              src="https://mocha-cdn.com/01998949-c551-76a3-89a8-7392ec50ec23/image.png_4163-(1).png" 
              alt="ZappyBee AI Logo" 
              className="w-16 h-16 mr-4"
            />
            <h1 className="text-3xl font-bold text-white">ZappyBee AI</h1>
          </div>

          {/* Main Headline */}
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {(t('hero.title') as string).split(' ').map((word: string, index: number, array: string[]) => {
              // Check if this is part of "50+ B2B" or "50+ Leads B2B"
              if (word.includes('50+') || word === 'B2B' || word === 'Leads') {
                return (
                  <span key={index} className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                    {word}{index < array.length - 1 ? ' ' : ''}
                  </span>
                );
              }
              return (
                <span key={index}>
                  {word}{index < array.length - 1 ? ' ' : ''}
                </span>
              );
            })}
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
            <br />
            <span className="text-yellow-300 font-semibold">{t('hero.description')}</span>
          </p>

          {/* CTA Button */}
          <button 
            onClick={() => {
              if ((window as any).trackCTAClick) (window as any).trackCTAClick('hero_cta');
              onCtaClick();
            }} 
            className="group bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-black font-bold text-xl px-12 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/25"
          >
            {t('hero.cta')}
            <ArrowRight className="w-6 h-6 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-blue-200">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              <span>{t('hero.trustIndicators.noCard')}</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              <span>{t('hero.trustIndicators.quickSetup')}</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              <span>{t('hero.trustIndicators.support')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
