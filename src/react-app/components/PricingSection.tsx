import { Check, Star } from 'lucide-react';
import { useLanguage } from '@/react-app/contexts/LanguageContext';

interface PricingSectionProps {
  onCtaClick: () => void;
}

export default function PricingSection({ onCtaClick }: PricingSectionProps) {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-8 leading-tight">
            {(t('pricing.title') as string).split(' ').map((word: string, index: number, array: string[]) => {
              // Highlight key words like "simple", "transparent"
              if (word.toLowerCase().includes('simple') || word.toLowerCase().includes('transparent')) {
                return (
                  <span key={index} className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-blue-500 to-purple-500">
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
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="w-full max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 items-stretch justify-center pt-4">
            {/* Starter Plan */}
            <div className="flex-1 max-w-sm mx-auto lg:mx-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl p-10 shadow-xl border border-gray-200/60 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 w-20 h-20 bg-gray-100/50 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gray-200/40 rounded-full blur-lg"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-10">
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">{t('pricing.starter.name')}</h3>
                  <div className="text-5xl font-extrabold text-gray-900 mb-2">{t('pricing.starter.price')}</div>
                  <div className="text-gray-600 text-lg font-medium">{t('pricing.starter.period')}</div>
                </div>
                
                <ul className="space-y-5 mb-10">
                  {(t('pricing.starter.features') as string[]).map((feature: string, index: number) => (
                    <li key={index} className="flex items-center">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => {
                    if ((window as any).trackCTAClick) (window as any).trackCTAClick('pricing_starter_cta');
                    onCtaClick();
                  }} 
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
                >
                  {t('pricing.ctaButton')}
                </button>
              </div>
            </div>

            {/* Growth Plan - Most Popular */}
            <div className="flex-1 max-w-sm mx-auto lg:mx-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 rounded-3xl p-10 shadow-2xl relative overflow-visible lg:scale-105 lg:z-10 mt-8">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full flex items-center shadow-lg">
                  <Star className="w-4 h-4 mr-2" />
                  <span className="font-bold text-xs">{t('pricing.growth.popular')}</span>
                </div>
              </div>

              {/* Background decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl"></div>
              </div>
              
              <div className="relative z-10 pt-6">
                <div className="text-center mb-10">
                  <h3 className="text-3xl font-bold text-white mb-3">{t('pricing.growth.name')}</h3>
                  <div className="text-5xl font-extrabold text-white mb-2">{t('pricing.growth.price')}</div>
                  <div className="text-blue-200 text-lg font-medium">{t('pricing.growth.period')}</div>
                </div>
                
                <ul className="space-y-5 mb-10">
                  {(t('pricing.growth.features') as string[]).map((feature: string, index: number) => (
                    <li key={index} className="flex items-center">
                      <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Check className="w-4 h-4 text-black" />
                      </div>
                      <span className="text-blue-100 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => {
                    if ((window as any).trackCTAClick) (window as any).trackCTAClick('pricing_growth_cta');
                    onCtaClick();
                  }} 
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-black font-bold py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl text-lg"
                >
                  {t('pricing.ctaButton')}
                </button>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="flex-1 max-w-sm mx-auto lg:mx-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl p-10 shadow-xl border border-gray-200/60 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 w-20 h-20 bg-gray-100/50 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gray-200/40 rounded-full blur-lg"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-10">
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">{t('pricing.pro.name')}</h3>
                  <div className="text-5xl font-extrabold text-gray-900 mb-2">{t('pricing.pro.price')}</div>
                  <div className="text-gray-600 text-lg font-medium">{t('pricing.pro.period')}</div>
                </div>
                
                <ul className="space-y-5 mb-10">
                  {(t('pricing.pro.features') as string[]).map((feature: string, index: number) => (
                    <li key={index} className="flex items-center">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => {
                    if ((window as any).trackCTAClick) (window as any).trackCTAClick('pricing_pro_cta');
                    onCtaClick();
                  }} 
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
                >
                  {t('pricing.ctaButton')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
