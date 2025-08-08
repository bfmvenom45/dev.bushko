import { useState, useRef, useEffect } from 'react'
import { SmartBackground } from './SmartBackground'
import { translations } from '../translations'
import { faqs } from '../data/faqs'

export default function Faq() {
  const [open, setOpen] = useState(null)
  const language = 'uk' // Default to Ukrainian
  const t = translations[language]

  return (
    <section 
      id="faq" 
      className="section relative overflow-hidden"
    >
      {/* Background Image */}
      <SmartBackground 
        imageSrc="/images/optimized/bg-faq-1920.webp"
        overlayClasses="bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-800/90"
      />
      
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6">
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
        <div className="max-w-4xl mx-auto">
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
                  />
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="mt-16 flex justify-center">
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        </div>
      </div>
    </section>
  )
}

function FaqItem({ faq, index, isOpen, onToggle }) {
  const contentRef = useRef(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0)
    }
  }, [isOpen])

  return (
    <div className="group relative">
      {/* Card with gradient border */}
      <div className={`relative p-0.5 rounded-2xl transition-all duration-500 ${
        isOpen 
          ? 'bg-gradient-to-r from-blue-400/50 via-cyan-400/50 to-purple-400/50' 
          : 'bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20'
      }`}>
        <div className="relative rounded-2xl bg-slate-900/90 backdrop-blur-sm overflow-hidden">
          
          {/* Question button */}
          <button
            className="w-full p-6 text-left flex items-center justify-between group-hover:bg-slate-800/50 transition-colors duration-300"
            onClick={onToggle}
            aria-expanded={isOpen}
            type="button"
          >
            <div className="flex items-center gap-4">
              {/* Icon */}
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                isOpen 
                  ? 'bg-gradient-to-r from-blue-400 to-cyan-400' 
                  : 'bg-slate-800 border-2 border-blue-500/30'
              }`}>
                <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  isOpen ? 'bg-white' : 'bg-blue-400'
                }`}></div>
              </div>
              
              {/* Question */}
              <span className={`font-semibold transition-colors duration-300 ${
                isOpen ? 'text-cyan-300' : 'text-white'
              }`}>
                {faq.q}
              </span>
            </div>

            {/* Chevron */}
            <div className={`text-blue-400 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>

          {/* Answer */}
          <div 
            className="transition-all duration-500 ease-out overflow-hidden"
            style={{ height: `${height}px` }}
          >
            <div ref={contentRef} className="px-6 pb-6">
              <div className="pl-14">
                <p className="text-slate-300 leading-relaxed">{faq.a}</p>
                
                {/* Decorative line */}
                <div className="mt-4 w-full h-0.5 bg-gradient-to-r from-blue-400/50 via-cyan-400/50 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Shine effect */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
