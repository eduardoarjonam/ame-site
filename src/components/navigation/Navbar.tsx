import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-[#000887] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=200,fit=crop,q=95/A3Q2xZeqo2hNGejK/logotipo-ame_logo-ame-blanco-AzGXvkq3oBieM9JX.png" alt="AME Digital" width={120} height={36} priority />
            </Link>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link href="/servicios" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Servicios
            </Link>
            <Link href="/sobre-nosotros" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Sobre Nosotros
            </Link>
            <Link href="/contacto" className="bg-white text-[#000887] hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}