import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 relative">
              <Image
                src="/images/icon.png"
                alt="Timely Logo"
                fill
                className="object-contain"
                sizes="32px"
                priority
              />
            </div>
            <span className="text-xl font-bold text-black">Timely</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-black transition-colors">
              Início
            </Link>
            <Link href="#recursos" className="text-gray-700 hover:text-black transition-colors">
              Recursos
            </Link>
            <Link href="#screenshots" className="text-gray-700 hover:text-black transition-colors">
              Screenshots
            </Link>
            <Link href="/termos" className="text-gray-700 hover:text-black transition-colors">
              Termos de Uso
            </Link>
          </div>

          <div className="md:hidden">
            <button className="text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
