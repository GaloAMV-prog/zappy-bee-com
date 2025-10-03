import { useState } from 'react';
import { User, Mail, Building, ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/react-app/contexts/LanguageContext';

export default function RegistrationForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim() || formData.name.length < 2) {
      newErrors.name = t('registration.errors.nameMin') as string;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = t('registration.errors.emailRequired') as string;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('registration.errors.emailInvalid') as string;
    }
    
    if (!formData.company.trim() || formData.company.length < 2) {
      newErrors.company = t('registration.errors.companyMin') as string;
    }
    
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    setIsSubmitting(true);
    setErrors({});
    
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (result.success) {
        // Track form submission conversion
        if ((window as any).trackFormSubmit) (window as any).trackFormSubmit();
        setIsSubmitted(true);
      } else {
        setErrors({ submit: result.message || (t('registration.errors.submitError') as string) });
      }
    } catch (error) {
      setErrors({ submit: t('registration.errors.connectionError') as string });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-16 shadow-2xl border border-white/60 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-200/30 rounded-full blur-2xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-blue-200/30 rounded-full blur-xl"></div>
            </div>
            
            <div className="relative z-10">
              <div className="w-28 h-28 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-10 shadow-xl">
                <CheckCircle className="w-14 h-14 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
                {t('registration.successTitle') as string}
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed font-medium">
                {t('registration.successMessage') as string}
                <br />
                {t('registration.successSubtitle') as string}
              </p>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200/30">
                <p className="text-gray-700 text-lg leading-relaxed">
                  <strong className="text-gray-900">{(t('registration.whatNext') as string).split(' ')[0]} {(t('registration.whatNext') as string).split(' ')[1]}</strong> {(t('registration.whatNext') as string).split(' ').slice(2).join(' ')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="registro" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-8 leading-tight">
            {(t('registration.title') as string).split(' ').map((word: string, index: number, array: string[]) => {
              // Highlight "free trial" or "prueba gratuita"
              if (word.toLowerCase().includes('free') || word.toLowerCase().includes('gratuita') || word.toLowerCase().includes('trial')) {
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
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
            {t('registration.subtitle') as string}
          </p>
        </div>

        <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-10 md:p-16 border border-white/60 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-blue-200/30 rounded-full blur-xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-purple-200/30 rounded-full blur-2xl"></div>
          </div>

          <div className="relative z-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-3">
                  {t('registration.nameLabel') as string}
                </label>
                <div className="relative">
                  <User className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full pl-16 pr-6 py-5 border-2 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-lg font-medium backdrop-blur-sm ${
                      errors.name ? 'border-red-500 bg-red-50/50' : 'border-gray-200 bg-white/70 hover:bg-white focus:bg-white'
                    }`}
                    placeholder={t('registration.namePlaceholder') as string}
                    disabled={isSubmitting}
                  />
                </div>
                {errors.name && <p className="mt-3 text-sm text-red-600 font-medium">{errors.name}</p>}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-3">
                  {t('registration.emailLabel') as string}
                </label>
                <div className="relative">
                  <Mail className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full pl-16 pr-6 py-5 border-2 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-lg font-medium backdrop-blur-sm ${
                      errors.email ? 'border-red-500 bg-red-50/50' : 'border-gray-200 bg-white/70 hover:bg-white focus:bg-white'
                    }`}
                    placeholder={t('registration.emailPlaceholder') as string}
                    disabled={isSubmitting}
                  />
                </div>
                {errors.email && <p className="mt-3 text-sm text-red-600 font-medium">{errors.email}</p>}
              </div>

              {/* Company Field */}
              <div>
                <label htmlFor="company" className="block text-lg font-semibold text-gray-700 mb-3">
                  {t('registration.companyLabel') as string}
                </label>
                <div className="relative">
                  <Building className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className={`w-full pl-16 pr-6 py-5 border-2 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-lg font-medium backdrop-blur-sm ${
                      errors.company ? 'border-red-500 bg-red-50/50' : 'border-gray-200 bg-white/70 hover:bg-white focus:bg-white'
                    }`}
                    placeholder={t('registration.companyPlaceholder') as string}
                    disabled={isSubmitting}
                  />
                </div>
                {errors.company && <p className="mt-3 text-sm text-red-600 font-medium">{errors.company}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 hover:from-blue-600 hover:via-purple-600 hover:to-indigo-600 disabled:from-gray-400 disabled:to-gray-400 text-white font-bold py-5 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed shadow-xl text-xl"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                    {t('registration.submitting') as string}
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    {t('registration.submitButton') as string}
                    <ArrowRight className="w-6 h-6 ml-3" />
                  </div>
                )}
              </button>

              {errors.submit && (
                <div className="bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl p-6">
                  <p className="text-red-600 text-center font-medium text-lg">{errors.submit}</p>
                </div>
              )}
            </form>

            {/* Trust Indicators */}
            <div className="mt-12 pt-10 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-12 text-gray-600">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="font-medium text-lg">{t('registration.trustIndicators.freeTrial') as string}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="font-medium text-lg">{t('registration.trustIndicators.noCommitment') as string}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="font-medium text-lg">{t('registration.trustIndicators.quickSetup') as string}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
