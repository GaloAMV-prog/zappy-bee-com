import { Target, Search, Send } from 'lucide-react';
import { useLanguage } from '@/react-app/contexts/LanguageContext';

interface HowItWorksSectionProps {
  onCtaClick: () => void;
}

export default function HowItWorksSection({ onCtaClick }: HowItWorksSectionProps) {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Target,
      number: "01",
      title: t('howItWorks.step1.title'),
      description: t('howItWorks.step1.description'),
      color: "blue",
      bgColor: "from-blue-50 to-cyan-50"
    },
    {
      icon: Search,
      number: "02", 
      title: t('howItWorks.step2.title'),
      description: t('howItWorks.step2.description'),
      color: "purple",
      bgColor: "from-purple-50 to-violet-50"
    },
    {
      icon: Send,
      number: "03",
      title: t('howItWorks.step3.title'),
      description: t('howItWorks.step3.description'),
      color: "orange",
      bgColor: "from-orange-50 to-red-50"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-8 leading-tight">
            {(t('howItWorks.title') as string).split(' ').map((word: string, index: number, array: string[]) => {
              // Highlight the key parts like "3 simple steps" or "3 simples pasos"
              if (word === '3' || word.toLowerCase().includes('simple') || word.toLowerCase().includes('step') || word.toLowerCase().includes('paso')) {
                return (
                  <span key={index} className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500">
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
            {t('howItWorks.subtitle')}
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-blue-200 via-purple-200 to-orange-200 transform -translate-y-1/2 z-0 rounded-full shadow-sm"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                {/* Step Number */}
                <div className="relative mb-12">
                  <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-r ${
                    step.color === 'blue' ? 'from-blue-500 to-cyan-500' :
                    step.color === 'purple' ? 'from-purple-500 to-violet-500' :
                    'from-orange-500 to-red-500'
                  } flex items-center justify-center text-white font-extrabold text-3xl shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border-4 border-white`}>
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center border-4 ${
                    step.color === 'blue' ? 'border-blue-200' :
                    step.color === 'purple' ? 'border-purple-200' :
                    'border-orange-200'
                  } group-hover:scale-110 transition-all duration-300`}>
                    <step.icon className={`w-7 h-7 ${
                      step.color === 'blue' ? 'text-blue-500' :
                      step.color === 'purple' ? 'text-purple-500' :
                      'text-orange-500'
                    }`} />
                  </div>
                </div>

                {/* Content */}
                <div className={`bg-gradient-to-br ${step.bgColor} rounded-3xl p-10 group-hover:bg-white group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 border border-white/60 backdrop-blur-sm relative overflow-hidden`}>
                  {/* Decorative elements */}
                  <div className="absolute -top-8 -right-8 w-16 h-16 bg-white/40 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/30 rounded-full blur-lg"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed font-medium text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 rounded-3xl p-12 border border-white/60 shadow-xl relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-blue-200/30 rounded-full blur-2xl"></div>
              <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-purple-200/30 rounded-full blur-2xl"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {t('howItWorks.ctaTitle')}
              </h3>
              <p className="text-xl text-gray-600 mb-8 font-medium">
                {t('howItWorks.ctaSubtitle')}
              </p>
              <button 
                onClick={() => {
                  if ((window as any).trackCTAClick) (window as any).trackCTAClick('how_it_works_cta');
                  onCtaClick();
                }}
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 hover:from-blue-600 hover:via-purple-600 hover:to-indigo-600 text-white font-bold px-12 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl text-lg"
              >
                {t('howItWorks.ctaButton')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
