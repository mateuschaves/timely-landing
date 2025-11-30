'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

function ScreenshotItem({ screenshot, index, scrollY }: { screenshot: ScreenshotItem, index: number, scrollY: number }) {
  const [imageError, setImageError] = useState(false)
  
  // Calcula offset parallax baseado na posição
  const offset = (index - 1) * 0.3
  const translateY = scrollY * 100 * offset
  const scale = 1 - Math.abs(offset) * 0.1 + scrollY * 0.05
  const opacity = 0.6 + scrollY * 0.4

  return (
    <div
      className="relative group overflow-visible"
      style={{
        transform: `translateY(${translateY}px) scale(${Math.max(0.9, scale)})`,
        opacity: Math.min(1, opacity),
        transition: 'transform 0.1s ease-out'
      }}
    >
      {/* Phone Frame */}
      <div className="relative mx-auto max-w-[280px] overflow-visible">
        {/* Shadow */}
        <div 
          className="absolute inset-0 rounded-[3rem] bg-black/20 blur-2xl transition-all duration-300 group-hover:bg-black/30 group-hover:blur-3xl"
          style={{
            transform: `scale(${0.95 + scrollY * 0.05})`,
          }}
        />
        
        {/* Phone Container */}
        <div className="relative bg-gradient-to-b from-gray-900 to-black rounded-[3rem] p-2 shadow-2xl transition-all duration-300 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
          {/* Screen */}
          <div className="bg-black rounded-[2.5rem] overflow-hidden aspect-[9/19.5] relative">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-2xl z-10" />
            
            {/* Image Container - com overflow para garantir que nada saia */}
            <div className="relative w-full h-full bg-gray-900 overflow-hidden">
              {!imageError ? (
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 280px"
                  priority={index === 1}
                  onError={() => setImageError(true)}
                  style={{
                    objectPosition: 'center',
                  }}
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400">
                  <div className="text-center p-8">
                    <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm">{screenshot.title}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Label */}
        <div className="mt-8 text-center">
          <h3 className="text-2xl font-bold text-black mb-2">
            {screenshot.title}
          </h3>
          <p className="text-gray-600">
            {screenshot.description}
          </p>
        </div>
      </div>
    </div>
  )
}

interface ScreenshotItem {
  src: string
  alt: string
  title: string
  description: string
}

const screenshots: ScreenshotItem[] = [
  {
    src: '/images/clock.png',
    alt: 'Bater Ponto',
    title: 'Bater Ponto',
    description: 'Registro rápido e intuitivo'
  },
  {
    src: '/images/summary.png',
    alt: 'Resumo Mensal',
    title: 'Resumo das Horas',
    description: 'Acompanhe seu progresso mensal'
  },
  {
    src: '/images/worksettings.png',
    alt: 'Configurações',
    title: 'Personalize seu Horário',
    description: 'Configure conforme sua rotina'
  }
]

export default function ScreenshotSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect()
            const windowHeight = window.innerHeight
            const sectionTop = rect.top
            const sectionHeight = rect.height
            
            // Calcula o progresso do scroll na seção (0 a 1)
            const scrollProgress = Math.max(0, Math.min(1, 
              (windowHeight - sectionTop) / (windowHeight + sectionHeight)
            ))
            
            setScrollY(scrollProgress)
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Chama uma vez para inicializar

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="screenshots" 
      className="py-32 bg-white relative overflow-hidden"
    >
      {/* Background gradient effect */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% ${50 + scrollY * 20}%, rgba(0,0,0,0.05) 0%, transparent 70%)`
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Veja como o Timely funciona
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Uma experiência intuitiva que torna o controle de horas simples e eficiente
          </p>
        </div>

        {/* Screenshots Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-12 items-center px-4">
          {screenshots.map((screenshot, index) => (
            <ScreenshotItem
              key={index}
              screenshot={screenshot}
              index={index}
              scrollY={scrollY}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
