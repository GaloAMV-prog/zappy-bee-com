import { useEffect } from 'react';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';

export default function TermsAndConditions() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src="https://mocha-cdn.com/01998949-c551-76a3-89a8-7392ec50ec23/image.png_4163-(1).png" 
                alt="ZappyBee AI Logo" 
                className="w-10 h-10 mr-3"
              />
              <h1 className="text-2xl font-bold text-gray-900">ZappyBee AI</h1>
            </div>
            <Link 
              to="/" 
              className="flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Volver al inicio
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl shadow-xl p-12 border border-gray-200">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Términos y Condiciones</h1>
          <p className="text-gray-600 mb-12">Última actualización: 27 de septiembre de 2024</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">1. Aceptación de los Términos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Al acceder y utilizar ZappyBee AI ("la Plataforma"), usted acepta estar sujeto a estos Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestros servicios.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">2. Descripción del Servicio</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                ZappyBee AI es una plataforma de automatización de generación de leads B2B que utiliza inteligencia artificial para encontrar, validar y contactar prospectos comerciales. Nuestro servicio incluye:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Generación automática de leads</li>
                <li>Validación de direcciones de email</li>
                <li>Personalización de mensajes con IA</li>
                <li>Dashboard de métricas y analytics</li>
                <li>Gestión de campañas de outreach</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">3. Uso Aceptable</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Usted se compromete a utilizar la Plataforma únicamente para fines comerciales legítimos y de conformidad con todas las leyes aplicables. Está prohibido:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Enviar spam o contenido no solicitado</li>
                <li>Utilizar la plataforma para actividades fraudulentas o ilegales</li>
                <li>Intentar acceder a sistemas o datos no autorizados</li>
                <li>Violar los derechos de propiedad intelectual de terceros</li>
                <li>Distribuir malware o contenido malicioso</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">4. Planes y Pagos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Los planes de suscripción se facturan mensualmente. Los precios están sujetos a cambios con previo aviso de 30 días. Las pruebas gratuitas son por tiempo limitado y se convertirán automáticamente en suscripciones pagas a menos que se cancelen antes del final del período de prueba.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">5. Cancelación y Reembolsos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Puede cancelar su suscripción en cualquier momento. Las cancelaciones son efectivas al final del período de facturación actual. No ofrecemos reembolsos para períodos de servicio ya utilizados, excepto en circunstancias excepcionales a nuestra discreción.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">6. Limitación de Responsabilidad</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                En ningún caso ZappyBee AI será responsable por daños indirectos, incidentales, especiales, consecuenciales o punitivos, incluyendo pero no limitado a la pérdida de beneficios, datos o uso, independientemente de la causa de acción.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">7. Propiedad Intelectual</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Todos los derechos de propiedad intelectual en la Plataforma y sus contenidos pertenecen a ZappyBee AI o a nuestros licenciantes. Usted recibe una licencia limitada, no exclusiva y no transferible para utilizar la Plataforma según estos términos.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">8. Modificaciones de los Términos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones importantes serán notificadas con al menos 30 días de anticipación. El uso continuado de la Plataforma después de las modificaciones constituye su aceptación de los nuevos términos.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">9. Ley Aplicable</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Estos términos se rigen por las leyes de Argentina. Cualquier disputa será resuelta en los tribunales competentes de la Ciudad Autónoma de Buenos Aires.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">10. Contacto</h2>
              <p className="text-gray-700 leading-relaxed">
                Para preguntas sobre estos términos, contáctenos en: contact.support@zappybee.com
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
