import type { Metadata } from "next";
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/navigation/Footer';

export const metadata: Metadata = {
  title: "Nuestros Servicios | Marketing Digital y Automatizaciones",
  description: "Descubre nuestros servicios de marketing digital, automatización de procesos y estrategias personalizadas para impulsar tu negocio."
};

export default function ServiciosPage() {
  const servicios = [
    {
      titulo: "Marketing Digital",
      descripcion: "Estrategias personalizadas de marketing digital para aumentar tu presencia online y alcanzar a tu audiencia objetivo.",
      caracteristicas: ["SEO", "Marketing de Contenidos", "Redes Sociales", "Email Marketing"]
    },
    {
      titulo: "Automatización",
      descripcion: "Optimiza tus procesos empresariales con soluciones de automatización inteligente que ahorran tiempo y recursos.",
      caracteristicas: ["Flujos de Trabajo", "CRM", "Email Automation", "Integración de Sistemas"]
    },
    {
      titulo: "Desarrollo Web",
      descripcion: "Sitios web modernos y optimizados que convierten visitantes en clientes.",
      caracteristicas: ["Diseño Responsive", "E-commerce", "Landing Pages", "Optimización de Conversión"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-12">Nuestros Servicios</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicios.map((servicio, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <h2 className="text-2xl font-semibold mb-4">{servicio.titulo}</h2>
                  <p className="text-gray-600 mb-6">{servicio.descripcion}</p>
                  <ul className="space-y-2">
                    {servicio.caracteristicas.map((caracteristica, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {caracteristica}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}