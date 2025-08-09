import { SmartBackground } from './SmartBackground'
import { useLanguage } from '../hooks/useLanguage'
import { useEffect, useRef, useState } from 'react'

export default function Stack() {
  const { t } = useLanguage()
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
  
  const frontendSkills = [
    { name: 'React', description: t('stack.skills.react'), color: 'from-cyan-400 to-blue-500', icon: '⚛️' },
    { name: 'TypeScript', description: t('stack.skills.typescript'), color: 'from-blue-400 to-blue-600', icon: 'TS' },
    { name: 'Next.js', description: t('stack.skills.nextjs'), color: 'from-gray-600 to-gray-800', icon: '▲' },
    { name: 'Tailwind CSS', description: t('stack.skills.tailwind'), color: 'from-teal-400 to-cyan-500', icon: '🎨' },
    { name: 'Vite', description: t('stack.skills.vite'), color: 'from-purple-400 to-purple-600', icon: '⚡' },
    { name: 'Three.js', description: t('stack.skills.threejs'), color: 'from-green-400 to-emerald-500', icon: '3D' }
  ]

  const aiSkills = [
    { name: 'ChatGPT', description: t('stack.skills.chatgpt'), color: 'from-green-400 to-emerald-600', icon: 'GPT' },
    { name: 'GitHub Copilot', description: t('stack.skills.copilot'), color: 'from-blue-400 to-indigo-600', icon: 'CP' },
    { name: 'Midjourney', description: t('stack.skills.midjourney'), color: 'from-purple-400 to-pink-600', icon: 'MJ' },
    { name: 'Claude', description: t('stack.skills.claude'), color: 'from-orange-400 to-red-500', icon: 'CL' },
    { name: 'Sora', description: t('stack.skills.sora'), color: 'from-red-400 to-pink-500', icon: 'SORA' },
    { name: 'Runway', description: t('stack.skills.runway'), color: 'from-cyan-400 to-blue-500', icon: 'RW' }
  ]

  const creativeSkills = [
    { name: 'Figma', description: t('stack.skills.figma'), color: 'from-purple-400 to-pink-500', icon: '🎨' },
    { name: 'Photoshop', description: t('stack.skills.photoshop'), color: 'from-blue-500 to-cyan-500', icon: 'Ph' },
    { name: 'Blender', description: t('stack.skills.blender'), color: 'from-orange-400 to-red-500', icon: 'Blend' },
    { name: 'Photography', description: t('stack.skills.photography'), color: 'from-yellow-400 to-orange-500', icon: '📷' }
  ]

  return (
    <section 
      ref={sectionRef}
      id="stack" 
      className={`section relative overflow-hidden transition-all duration-1000 transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-16'
      }`}
    >
      {/* Background Image */}
      <SmartBackground 
        imageSrc="/images/optimized/bg-skills-1920.webp"
        overlayClasses="bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-800/90"
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
            <span className="text-xs font-semibold text-blue-300 uppercase tracking-wider">{t('stack.badge')}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            {t('stack.title')} <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">{t('stack.titleHighlight')}</span>
          </h2>
          
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {t('stack.subtitle')}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {/* Frontend Development */}
          <div className={`transition-all duration-1000 transform ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-16'
          }`} style={{ transitionDelay: isVisible ? '400ms' : '0ms' }}>
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                💻 <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{t('stack.frontend')}</span>
              </h3>
              <p className="text-slate-400">{t('stack.frontendDesc')}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {frontendSkills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className={`group relative p-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-slate-700/50 hover:border-slate-600/80 transition-all duration-500 hover:scale-105 transform ${
                    isVisible 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-8 scale-95'
                  }`}
                  style={{ 
                    transitionDelay: isVisible ? `${500 + (index * 100)}ms` : '0ms'
                  }}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg flex items-center justify-center group-hover:border-white/20 transition-all duration-300">
                      <span className={`text-2xl font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                        {skill.icon}
                      </span>
                    </div>
                    <h4 className="font-semibold text-white mb-2">{skill.name}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{skill.description}</p>
                  </div>
                  
                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Tools */}
          <div className={`transition-all duration-1000 transform ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-16'
          }`} style={{ transitionDelay: isVisible ? '700ms' : '0ms' }}>
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                🤖 <span className="bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">AI Tools & Assistants</span>
              </h3>
              <p className="text-slate-400">{t('stack.aiDesc')}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {aiSkills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className={`group relative p-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-slate-700/50 hover:border-slate-600/80 transition-all duration-500 hover:scale-105 transform ${
                    isVisible 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-8 scale-95'
                  }`}
                  style={{ 
                    transitionDelay: isVisible ? `${800 + (index * 100)}ms` : '0ms'
                  }}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg flex items-center justify-center group-hover:border-white/20 transition-all duration-300">
                      <span className={`text-2xl font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                        {skill.icon}
                      </span>
                    </div>
                    <h4 className="font-semibold text-white mb-2">{skill.name}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{skill.description}</p>
                  </div>
                  
                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Creative Tools */}
          <div className={`transition-all duration-1000 transform ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-16'
          }`} style={{ transitionDelay: isVisible ? '1000ms' : '0ms' }}>
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                🎨 <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">{t('stack.creative')}</span>
              </h3>
              <p className="text-slate-400">{t('stack.creativeDesc')}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {creativeSkills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className={`group relative p-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-slate-700/50 hover:border-slate-600/80 transition-all duration-500 hover:scale-105 transform ${
                    isVisible 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-8 scale-95'
                  }`}
                  style={{ 
                    transitionDelay: isVisible ? `${1100 + (index * 100)}ms` : '0ms'
                  }}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg flex items-center justify-center group-hover:border-white/20 transition-all duration-300">
                      <span className={`text-2xl font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                        {skill.icon}
                      </span>
                    </div>
                    <h4 className="font-semibold text-white mb-2">{skill.name}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{skill.description}</p>
                  </div>
                  
                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
