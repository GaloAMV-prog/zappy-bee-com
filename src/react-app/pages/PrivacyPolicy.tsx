import { useEffect } from 'react';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Política de Privacidad</h1>
          <p className="text-gray-600 mb-12">Última actualización: 27 de septiembre de 2024</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">1. Información que Recopilamos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                En ZappyBee AI recopilamos la siguiente información para brindar nuestros servicios:
              </p>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Información que usted nos proporciona:</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Datos de registro (nombre, email, empresa)</li>
                <li>Información de pago y facturación</li>
                <li>Contenido de campañas y mensajes</li>
                <li>Configuraciones de cuenta y preferencias</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Información recopilada automáticamente:</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Datos de uso de la plataforma</li>
                <li>Direcciones IP y ubicación geográfica</li>
                <li>Información del dispositivo y navegador</li>
                <li>Cookies y tecnologías similares</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">2. Cómo Utilizamos su Información</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Utilizamos la información recopilada para:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Proporcionar y mejorar nuestros servicios de generación de leads</li>
                <li>Procesar pagos y gestionar su cuenta</li>
                <li>Personalizar su experiencia en la plataforma</li>
                <li>Enviar comunicaciones relacionadas con el servicio</li>
                <li>Cumplir con obligaciones legales y reglamentarias</li>
                <li>Detectar y prevenir fraudes o actividades maliciosas</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">3. Compartir Información</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                No vendemos ni alquilamos su información personal. Podemos compartir información en las siguientes circunstancias:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Con proveedores de servicios que nos ayudan a operar la plataforma</li>
                <li>Cuando sea requerido por ley o por autoridades competentes</li>
                <li>En caso de fusión, adquisición o venta de activos</li>
                <li>Con su consentimiento explícito</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">4. Seguridad de los Datos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Implementamos medidas de seguridad técnicas y organizativas para proteger su información:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Encriptación SSL/TLS para todas las transmisiones de datos</li>
                <li>Almacenamiento seguro en servidores protegidos</li>
                <li>Acceso limitado basado en el principio de menor privilegio</li>
                <li>Monitoreo continuo de seguridad</li>
                <li>Auditorías regulares de seguridad</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">5. Sus Derechos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                De acuerdo con las leyes de protección de datos aplicables, usted tiene derecho a:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Acceder a sus datos personales</li>
                <li>Rectificar información inexacta</li>
                <li>Solicitar la eliminación de sus datos</li>
                <li>Portabilidad de datos</li>
                <li>Limitar el procesamiento de sus datos</li>
                <li>Oponerse al procesamiento con fines de marketing</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">6. Retención de Datos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Conservamos su información personal durante el tiempo necesario para cumplir con los propósitos descritos en esta política, a menos que la ley requiera un período de retención más largo. Cuando cancele su cuenta, eliminaremos o anonimizaremos sus datos personales.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">7. Transferencias Internacionales</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sus datos pueden ser transferidos y procesados en países fuera de Argentina. Cuando esto ocurra, implementamos salvaguardas apropiadas para garantizar que su información esté protegida según los estándares de esta política de privacidad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">8. Cumplimiento GDPR</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Para usuarios en la Unión Europea, cumplimos con el Reglamento General de Protección de Datos (GDPR). Tenemos un representante en la UE y procesamos datos con base legal apropiada, incluyendo consentimiento, ejecución de contrato y intereses legítimos.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">9. Cambios en esta Política</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Podemos actualizar esta política de privacidad ocasionalmente. Le notificaremos sobre cambios significativos por email o mediante un aviso en la plataforma. La fecha de "última actualización" al inicio de esta política indica cuándo se realizaron los cambios más recientes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">10. Contacto</h2>
              <p className="text-gray-700 leading-relaxed">
                Para ejercer sus derechos o consultas sobre privacidad, contáctenos en: contact.support@zappybee.com
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
