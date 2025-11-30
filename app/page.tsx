import Link from 'next/link'
import ScreenshotSection from '@/components/ScreenshotSection'

export default function Home() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
                            Gerencie seu tempo com{' '}
                            <span className="text-black">Timely</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Bata ponto, controle feriados, personalize seus horários e saiba exatamente quanto vai ganhar no mês.
                            Tudo isso com notificações inteligentes e resumo completo das suas horas trabalhadas.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#"
                                className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors shadow-lg"
                            >
                                Baixar Agora
                            </a>
                            <Link
                                href="#screenshots"
                                className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors border-2 border-black"
                            >
                                Ver Screenshots
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="recursos" className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Recursos Principais
                        </h2>
                        <p className="text-xl text-gray-600">
                            Tudo que você precisa para gerenciar seu tempo de trabalho de forma completa e profissional
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Bater Ponto */}
                        <div className="p-6 rounded-xl bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Bater Ponto
                            </h3>
                            <p className="text-gray-600">
                                Registre sua entrada e saída de forma rápida e simples, com apenas um toque no seu dispositivo
                            </p>
                        </div>

                        {/* Push Notifications */}
                        <div className="p-6 rounded-xl bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Push Notifications
                            </h3>
                            <p className="text-gray-600">
                                Receba notificações importantes sobre seus horários e lembretes para não esquecer de bater o ponto
                            </p>
                        </div>

                        {/* Controle de Feriados */}
                        <div className="p-6 rounded-xl bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Controle de Feriados
                            </h3>
                            <p className="text-gray-600">
                                O aplicativo reconhece automaticamente os feriados nacionais e ajusta seus cálculos de horas trabalhadas
                            </p>
                        </div>

                        {/* Resumo das Horas do Mês */}
                        <div className="p-6 rounded-xl bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Resumo das Horas do Mês
                            </h3>
                            <p className="text-gray-600">
                                Visualize rapidamente quantas horas você já trabalhou, quantas faltam ou quantas estão sobrando no mês
                            </p>
                        </div>

                        {/* Personalize seu Horário */}
                        <div className="p-6 rounded-xl bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Personalize seu Horário de Trabalho
                            </h3>
                            <p className="text-gray-600">
                                Configure horários diferentes para cada dia da semana, adaptando às suas necessidades e rotina de trabalho
                            </p>
                        </div>

                        {/* Configure Valor da Hora */}
                        <div className="p-6 rounded-xl bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Controle Financeiro
                            </h3>
                            <p className="text-gray-600">
                                Configure seu valor de hora trabalhada e saiba exatamente quanto você vai ganhar no final do mês antes mesmo de receber
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Screenshots Section with Parallax */}
            <ScreenshotSection />

            {/* CTA Section */}
            <section className="py-20 bg-black">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Pronto para começar?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Baixe o Timely agora e tenha controle total sobre suas horas trabalhadas,
                        com relatórios detalhados e cálculo automático do seu salário mensal
                    </p>
                    <a
                        href="#"
                        className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-block"
                    >
                        Baixar Agora
                    </a>
                </div>
            </section>
        </div>
    )
}
