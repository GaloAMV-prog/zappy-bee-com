import { Users, Shield, MessageSquare, BarChart3 } from 'lucide-react';
import { useLanguage } from '@/react-app/contexts/LanguageContext';

export default function BenefitsSection() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Users,
      title: t('benefits.leadGeneration.title'),
      description: t('benefits.leadGeneration.description'),
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      icon: Shield,
      title: t('benefits.emailValidation.title'),
      description: t('benefits.emailValidation.description'),
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      icon: MessageSquare,
      title: t('benefits.personalizedMessages.title'),
      description: t('benefits.personalizedMessages.description'),
      gradient: "from-purple-500 to-violet-500",
      bgGradient: "from-purple-50 to-violet-50"
    },
    {
      icon: BarChart3,
      title: t('benefits.dashboard.title'),
      description: t('benefits.dashboard.description'),
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-8 leading-tight">
            {(t('benefits.title') as string).split(' ').map((word: string, index: number, array: string[]) => {
              if (word === 'ZappyBee' || word === 'AI?') {
                return (
                  <span key={index} className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500">
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
            {t('benefits.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`group bg-gradient-to-br ${benefit.bgGradient} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/60 backdrop-blur-sm relative overflow-hidden`}
            >
              {/* Decorative background element */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-white/30 rounded-full blur-lg"></div>
              
              <div className="relative z-10">
                <div className={`w-18 h-18 bg-gradient-to-r ${benefit.gradient} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  <benefit.icon className="w-9 h-9 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 transition-all duration-300 leading-tight">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-700 leading-relaxed font-medium text-base">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Results Section */}
        <div className="mt-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden shadow-2xl">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 leading-tight">
              {t('benefits.resultsTitle')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-4">50+</div>
                <div className="text-blue-100 text-lg font-medium">{t('benefits.stats.leads')}</div>
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-4">25%</div>
                <div className="text-blue-100 text-lg font-medium">{t('benefits.stats.responseRate')}</div>
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-4">10x</div>
                <div className="text-blue-100 text-lg font-medium">{t('benefits.stats.roi')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
