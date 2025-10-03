import { useEffect } from 'react';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';

export default function CookiesPolicy() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Política de Cookies</h1>
          <p className="text-gray-600 mb-12">Última actualización: 27 de septiembre de 2024</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">¿Qué son las Cookies?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (computadora, tablet o móvil) cuando visita nuestro sitio web. Estas cookies nos permiten reconocer su dispositivo y recordar información sobre su visita.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Tipos de Cookies que Utilizamos</h2>
              
              <div className="bg-blue-50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">🔧 Cookies Estrictamente Necesarias</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Estas cookies son esenciales para el funcionamiento del sitio web y no se pueden desactivar. Incluyen:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Cookies de sesión para mantener su sesión activa</li>
                  <li>Cookies de seguridad para proteger contra ataques</li>
                  <li>Cookies de preferencias de idioma</li>
                  <li>Cookies de carrito de compras</li>
                </ul>
                <p className="text-sm text-gray-600">Base legal: Interés legítimo para el funcionamiento del sitio web.</p>
              </div>

              <div className="bg-green-50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">📊 Cookies de Rendimiento y Analytics</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Google Analytics para estadísticas de uso</li>
                  <li>Métricas de rendimiento del sitio</li>
                  <li>Análisis de comportamiento de usuarios</li>
                  <li>Información sobre páginas más visitadas</li>
                </ul>
                <p className="text-sm text-gray-600">Base legal: Consentimiento del usuario.</p>
              </div>

              <div className="bg-purple-50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">🎯 Cookies de Marketing y Publicidad</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Utilizadas para mostrar anuncios relevantes y medir la efectividad de campañas:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Pixels de Facebook y LinkedIn</li>
                  <li>Google Ads y remarketing</li>
                  <li>Seguimiento de conversiones</li>
                  <li>Personalización de anuncios</li>
                </ul>
                <p className="text-sm text-gray-600">Base legal: Consentimiento del usuario.</p>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">⚙️ Cookies de Funcionalidad</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Mejoran la experiencia del usuario recordando sus preferencias:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Preferencias de idioma y región</li>
                  <li>Configuraciones de cuenta</li>
                  <li>Preferencias de diseño</li>
                  <li>Historial de formularios completados</li>
                </ul>
                <p className="text-sm text-gray-600">Base legal: Interés legítimo para mejorar la experiencia del usuario.</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Cookies de Terceros</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Utilizamos servicios de terceros que pueden establecer sus propias cookies:
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto border-collapse border border-gray-300 rounded-lg">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Servicio</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Propósito</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Duración</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Google Analytics</td>
                      <td className="border border-gray-300 px-4 py-2">Análisis de tráfico web</td>
                      <td className="border border-gray-300 px-4 py-2">24 meses</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Google Ads</td>
                      <td className="border border-gray-300 px-4 py-2">Publicidad dirigida</td>
                      <td className="border border-gray-300 px-4 py-2">18 meses</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Facebook Pixel</td>
                      <td className="border border-gray-300 px-4 py-2">Remarketing social</td>
                      <td className="border border-gray-300 px-4 py-2">12 meses</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">LinkedIn Insight</td>
                      <td className="border border-gray-300 px-4 py-2">Analytics B2B</td>
                      <td className="border border-gray-300 px-4 py-2">12 meses</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Gestión de Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Usted tiene control sobre las cookies. Puede gestionarlas de las siguientes maneras:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">A través de nuestro sitio web:</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Al visitar nuestro sitio por primera vez, aparecerá un banner de cookies donde puede elegir qué tipos de cookies acepta.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">A través de su navegador:</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
                <li><strong>Firefox:</strong> Preferencias → Privacidad y seguridad → Cookies</li>
                <li><strong>Safari:</strong> Preferencias → Privacidad → Cookies</li>
                <li><strong>Edge:</strong> Configuración → Cookies y permisos del sitio</li>
              </ul>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <p className="text-gray-700">
                  <strong>Importante:</strong> Desactivar ciertas cookies puede afectar la funcionalidad del sitio web y su experiencia de usuario.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Duración de las Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Utilizamos dos tipos de cookies según su duración:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Cookies de sesión:</strong> Se eliminan cuando cierra su navegador</li>
                <li><strong>Cookies persistentes:</strong> Permanecen en su dispositivo por un período determinado o hasta que las elimine manualmente</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Sus Derechos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                En relación con las cookies, usted tiene derecho a:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Ser informado sobre las cookies que utilizamos</li>
                <li>Dar o retirar su consentimiento para cookies no esenciales</li>
                <li>Acceder a información sobre las cookies almacenadas</li>
                <li>Solicitar la eliminación de datos recopilados a través de cookies</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Cambios en esta Política</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Podemos actualizar esta política de cookies ocasionalmente para reflejar cambios en nuestro uso de cookies o por otras razones operativas, legales o reglamentarias.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contacto</h2>
              <p className="text-gray-700 leading-relaxed">
                Si tiene preguntas sobre nuestra política de cookies, contáctenos en: contact.support@zappybee.com
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
