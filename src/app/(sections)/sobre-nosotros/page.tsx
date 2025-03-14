import type { Metadata } from "next";
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/navigation/Footer';

export const metadata: Metadata = {
  title: "Sobre Nosotros | Agencia de Marketing Digital",
  description: "Conoce nuestro equipo de expertos en marketing digital y automatizaciones. Descubre cómo ayudamos a las empresas a crecer en el mundo digital."
};

export default function SobreNosotrosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-12">Sobre Nosotros</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-semibold">Nuestra Misión</h2>
                <p className="text-gray-600">En AME Digital, nos dedicamos a transformar negocios a través de soluciones digitales innovadoras. Combinamos estrategias de marketing digital con automatizaciones inteligentes para impulsar el crecimiento de nuestros clientes.</p>
                <h3 className="text-2xl font-semibold">Valores</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Innovación constante</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Compromiso con resultados</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Transparencia y confianza</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-semibold">Nuestro Equipo</h2>
                <p className="text-gray-600">Contamos con un equipo multidisciplinario de expertos en marketing digital, desarrollo web y automatización de procesos. Cada miembro aporta su experiencia única para crear soluciones integrales que impulsan el éxito de nuestros clientes.</p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-4">¿Por qué elegirnos?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Experiencia comprobada
                    </li>
                    <li className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Soluciones personalizadas
                    </li>
                    <li className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Resultados medibles
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}