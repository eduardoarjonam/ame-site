import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navigation/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Chatbot Promo Section */}
        <section className="bg-[#000887] text-white py-32 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-1/2 space-y-4 text-left">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Si respondes lo mismo 20 veces al día,{" "}
                <span className="text-[#40c898]">necesitas esto.</span>
              </h2>

              <p className="text-lg md:text-xl font-light">(SPOILER ALERT)</p>

              <h3 className="text-xl md:text-2xl font-semibold">
                Chatbot de inteligencia artificial
              </h3>
              <p className="text-lg font-light max-w-2xl leading-tight">
                ...para WhatsApp, Messenger, tu sitio web, correo electrónico o donde lo
                necesites. 24/7.
              </p>
              <p className="text-lg font-light leading-tight">No duerme.</p>
              <p className="text-lg font-light leading-tight">Tú sí.</p>
              <p className="text-lg font-light leading-tight">Al fin.</p>

              <a
                href="https://cal.com/amevm/chatbot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-md text-lg shadow-md transition duration-300"
              >
                QUIERO DORMIR MEJOR
              </a>
            </div>

            <div className="w-full md:w-1/2 flex items-center justify-center">
              <img
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=533,fit=crop/A3Q2xZeqo2hNGejK/el-texto-del-pa-rrafo-1-m7V3NqKOrrfPr4k6.png"
                alt="Chatbot conversando"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Nueva Sección - Respuesta Inteligente */}
        <section className="bg-white py-36 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            {/* Contenedor de Texto */}
            <div className="w-full md:w-1/2 text-left">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight text-[#000887]">
                Si quieres más clientes, necesitas{" "}
                <span className="text-[#40c898]">responder mejor.</span>
              </h2>

              <p className="text-lg text-gray-800 mt-6">
                Tu día está lleno.
                <br />
                Resolver trámites, coordinar proveedores, revisar inventario, atender pedidos… y en medio de todo, WhatsApp, Messenger, correos y hasta TikTok.
              </p>

              <p className="text-lg text-gray-800 mt-4">
                El problema no es conseguir más clientes.
                <br />
                Es que no hay forma humana de atenderlos bien mientras lidias con todo lo demás.
              </p>

              <p className="text-lg text-gray-800 mt-4">
                Tratas de responder rápido, cuando lo ves a tiempo.
              </p>

              <p className="text-lg text-gray-800 mt-2 italic">
                Pero seco: <em>"Sí"</em>, <em>"No"</em>, <em>"Disponible"</em>.
                <br />
                O peor, los dejas en visto sin darte cuenta.
              </p>

              <p className="text-lg text-gray-800 mt-6 font-semibold">
                Pero hay una forma mejor.
              </p>

              <p className="text-lg text-gray-800 mt-2">
                Un asistente de IA que responde en segundos, sin errores y con más paciencia que tú después de una junta con el banco.
                <br />
                Siempre con la información correcta, sin perder ventas por respuestas frías o tardías.
              </p>

              <p className="text-lg font-bold text-gray-900 mt-6">
                Agenda una consultoría gratuita y descubre cómo podría quitarte muchos dolores de cabeza.
              </p>

              {/* Botón de Agendar */}
              <a
                href="https://cal.com/amevm/chatbot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-md text-lg shadow-md transition duration-300"
              >
                AGENDAR LLAMADA
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}