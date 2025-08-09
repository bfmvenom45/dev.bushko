import { useState, useRef, useEffect } from 'react'
import { SmartBackground } from './SmartBackground'
import { useLanguage } from '../hooks/useLanguage'
import { faqs } from '../data/faqs'

export default function Faq() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="faq" 
      className={`section relative overflow-hidden transition-all duration-1000 transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-16'
      }`}
    >
      {/* Background Image */}
      <SmartBackground 
        imageSrc="/images/optimized/bg-faq-1920.webp"
        overlayClasses="bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-800/90"
      />
      
      {/* Background decorations with animation */}
      <div className={`absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-blue-500/6 to-purple-500/6 rounded-full blur-3xl animate-float-left transition-all duration-1500 transform ${
        isVisible 
          ? 'opacity-60 scale-100' 
          : 'opacity-0 scale-75'
      }`} style={{ transitionDelay: isVisible ? '100ms' : '0ms' }}></div>
      <div className={`absolute bottom-1/4 right-1/4 w-60 h-60 bg-gradient-to-r from-cyan-500/6 to-green-500/6 rounded-full blur-3xl animate-float-right transition-all duration-1500 transform ${
        isVisible 
          ? 'opacity-60 scale-100' 
          : 'opacity-0 scale-75'
      }`} style={{ transitionDelay: isVisible ? '300ms' : '0ms' }}></div>
      
      <div className="container relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`} style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md mb-6">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-xs font-semibold text-blue-300 uppercase tracking-wider">{t.faq.badge}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            {t.faq.title} <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-purple-600 bg-clip-text text-transparent">{t.faq.titleHighlight}</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {t.faq.subtitle}
          </p>
        </div>

        {/* FAQ Grid */}
        <div className={`max-w-4xl mx-auto transition-all duration-1000 transform ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-16'
        }`} style={{ transitionDelay: isVisible ? '400ms' : '0ms' }}>
          {/* Central decorative line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-500/30 to-transparent"></div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left column */}
            <div className="space-y-6">
              {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => (
                <FaqItem 
                  key={index} 
                  faq={faq} 
                  index={index} 
                  isOpen={open === index}
                  onToggle={() => setOpen(open === index ? null : index)}
                  isVisible={isVisible}
                  delay={600 + (index * 150)}
                />
              ))}
            </div>
            
            {/* Right column */}
            <div className="space-y-6">
              {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => {
                const actualIndex = Math.ceil(faqs.length / 2) + index
                return (
                  <FaqItem 
                    key={actualIndex} 
                    faq={faq} 
                    index={actualIndex} 
                    isOpen={open === actualIndex}
                    onToggle={() => setOpen(open === actualIndex ? null : actualIndex)}
                    isVisible={isVisible}
                    delay={600 + (actualIndex * 150)}
                  />
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className={`mt-16 flex justify-center transition-all duration-1000 transform ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: isVisible ? `${800 + (faqs.length * 150)}ms` : '0ms' }}>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        </div>
      </div>
    </section>
  )
}

function FaqItem({ faq, index, isOpen, onToggle, isVisible, delay }) {
  return (
    <div className={`group relative transition-all duration-1000 transform ${
      isVisible 
        ? 'opacity-100 translate-y-0 scale-100' 
        : 'opacity-0 translate-y-16 scale-95'
    }`} style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}>
      {/* Card with gradient border */}
      <div className={`relative p-0.5 rounded-2xl transition-all duration-500 transform hover:scale-105 ${
        isOpen 
          ? 'bg-gradient-to-r from-blue-400/50 via-cyan-400/50 to-purple-400/50 shadow-xl shadow-blue-500/20' 
          : 'bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 hover:from-blue-400/30 hover:via-cyan-400/30 hover:to-purple-400/30'
      }`}>
        <div className="relative rounded-2xl bg-slate-900/90 backdrop-blur-sm overflow-hidden z-10">
          
          {/* Question button */}
          <button
            className={`relative z-20 w-full p-6 text-left flex items-center justify-between transition-all duration-300 cursor-pointer ${
              isOpen ? 'bg-slate-800/50' : 'hover:bg-slate-800/30'
            }`}
            onClick={onToggle}
            aria-expanded={isOpen}
            type="button"
            style={{ pointerEvents: 'auto' }}
          >
            <div className="flex items-center gap-4">
              {/* Icon */}
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 transform ${
                isOpen 
                  ? 'bg-gradient-to-r from-blue-400 to-cyan-400 rotate-180 scale-110' 
                  : 'bg-slate-800 border-2 border-blue-500/30 hover:border-blue-400/50 hover:scale-105'
              }`}>
                <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  isOpen ? 'bg-white' : 'bg-blue-400'
                }`}></div>
              </div>
              
              {/* Question */}
              <span className={`font-semibold transition-all duration-300 ${
                isOpen ? 'text-cyan-300' : 'text-white group-hover:text-cyan-300'
              }`}>
                {faq.q}
              </span>
            </div>

            {/* Chevron */}
            <div className={`text-blue-400 transition-all duration-500 transform ${
              isOpen ? 'rotate-180 scale-110 text-cyan-300' : 'group-hover:scale-110'
            }`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>

          {/* Answer with max-height animation */}
          <div 
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              isOpen ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
              maxHeight: isOpen ? '1000px' : '0px',
              transitionProperty: 'max-height, opacity',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <div className="px-6 pb-6">
              <div className={`pl-14 transition-all duration-300 transform ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-50'
              }`} style={{ transitionDelay: isOpen ? '150ms' : '0ms' }}>
                <p className="text-slate-300 leading-relaxed">{faq.a}</p>
                
                {/* Decorative line with animation */}
                <div className={`mt-4 h-0.5 bg-gradient-to-r from-blue-400/50 via-cyan-400/50 to-transparent transition-all duration-500 ${
                  isOpen ? 'w-full opacity-100' : 'w-0 opacity-0'
                }`} style={{ transitionDelay: isOpen ? '300ms' : '0ms' }}></div>
              </div>
            </div>
          </div>

          {/* Enhanced shine effect */}
          <div className={`absolute inset-0 rounded-2xl transition-opacity duration-700 pointer-events-none z-0 ${
            isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}>
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 transition-transform duration-1000 ${
              isOpen ? 'translate-x-full' : '-translate-x-full group-hover:translate-x-full'
            }`}></div>
          </div>

          {/* Glow effect for open state */}
          {isOpen && (
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/10 via-cyan-400/10 to-purple-400/10 animate-pulse pointer-events-none z-0"></div>
          )}
        </div>
      </div>
    </div>
  )
}
