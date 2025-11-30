import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 relative">
                                ⏰
                            </div>
                            <span className="text-xl font-bold text-white">Timely</span>
                        </div>
                        <p className="text-gray-400 mb-4">
                            Gerencie seu tempo de trabalho de forma eficiente e profissional.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="hover:text-white transition-colors">
                                    Início
                                </Link>
                            </li>
                            <li>
                                <Link href="#recursos" className="hover:text-white transition-colors">
                                    Recursos
                                </Link>
                            </li>
                            <li>
                                <Link href="#screenshots" className="hover:text-white transition-colors">
                                    Screenshots
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/termos" className="hover:text-white transition-colors">
                                    Termos de Uso
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Timely. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}
