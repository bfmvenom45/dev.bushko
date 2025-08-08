import { Link } from 'react-scroll'
import { SmartBackground } from './SmartBackground'
import { translations } from '../translations'

export default function Hero() {
  const language = 'uk' // Default to Ukrainian
  const t = translations[language]

  return (
    <section 
      id="hero" 
      className="section relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Smart Background - automatically switches between video and image */}
      <SmartBackground 
        videoSrc="/video/optimized/bg-hero-optimized.mp4"
        imageSrc="/images/optimized/bg-hero-1920.webp"
        overlayClasses="bg-gradient-to-br from-slate-900/60 via-slate-900/30 to-slate-800/60"
      />
      {/* Main overlay for better content visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-blue-900/50 to-indigo-900/70"></div>
      
      {/* Geometric decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="container relative z-10 flex items-center justify-center min-h-screen">
        {/* Main content - centered */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-8">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-cyan-300 uppercase tracking-wider">{t.hero.badge}</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
            {t.hero.title}{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              {t.hero.titleHighlight}
            </span>{' '}
            {t.hero.titleEnd}
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
          
          {/* CTA buttons */}
          <div className="flex justify-center">
            {/* Primary button */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <a 
                href={`mailto:${t.hero.email}`}
                className="relative block px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl text-white font-semibold hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 text-center"
              >
                {t.hero.emailButton}
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-slate-400">
          <span className="text-sm">Прокрутіть вниз</span>
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-purple-600 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
