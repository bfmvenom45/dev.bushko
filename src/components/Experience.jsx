import OptimizedVideoBackground from './OptimizedVideoBackground'
import { useLanguage } from '../hooks/useLanguage'
import { useEffect, useRef, useState } from 'react'

export default function Experience() {
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
  const items = [
    { 
      title: 'Frontend Developer (самостійні проєкти)', 
      time: '2024—2025', 
      desc: 'React/TS, TMDB-апка, e-commerce віджети, React Three Fiber, 3D інтерактивні сцени.',
      icon: 'DEV',
      skills: ['React', 'TypeScript', 'Next.js', 'R3F', 'Blender']
    },
    { 
      title: '3D Artist & Blender Developer', 
      time: '2022—2024', 
      desc: '3D моделювання, текстурування, анімація в Blender. Створення GLTF моделей для веб, оптимізація для React Three Fiber.',
      icon: 'UI',
      skills: ['Blender', 'GLTF', '3D Modeling', 'Animation', 'Texturing']
    },
    { 
      title: 'Stock Photographer & Content Creator', 
      time: '2017—2023', 
      desc: 'Професійна фотографія для стокових агентств. Створення високоякісного контенту, робота з освітленням, композицією.',
      icon: 'PHOTO',
      skills: ['Photography', 'Lightroom', 'Photoshop', 'Stock Content', 'Visual Design']
    },
    { 
      title: 'Інженер-дизайнер (Hal-Kran)', 
      time: 'до 2016', 
      desc: 'Львівська політехніка, інженерні системи. Проектування та розрахунок технічних рішень.',
      icon: 'SYS',
      skills: ['Engineering', 'CAD', 'Technical Design', 'Project Management']
    },
  ]

  return (
    <section 
      ref={sectionRef}
      id="experience" 
      className={`section relative overflow-hidden transition-all duration-1000 transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-16'
      }`}
    >
      {/* Optimized Video Background */}
      <OptimizedVideoBackground 
        videoSrc="/video/optimized/bg-exp-optimized.mp4"
        fallbackImage="/images/optimized/bg-exp-1920.webp"
        className="absolute inset-0"
      />
      
      {/* Темний оверлей */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-800/90"></div>
      
      {/* Background decorations with animation */}
      <div className={`absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-500/6 to-pink-500/6 rounded-full blur-3xl animate-float-right transition-all duration-1500 transform ${
        isVisible 
          ? 'opacity-60 scale-100' 
          : 'opacity-0 scale-75'
      }`} style={{ transitionDelay: isVisible ? '100ms' : '0ms' }}></div>
      <div className={`absolute bottom-1/4 left-1/4 w-60 h-60 bg-gradient-to-r from-cyan-500/6 to-blue-500/6 rounded-full blur-3xl animate-float-left transition-all duration-1500 transform ${
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md mb-6">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span className="text-xs font-semibold text-purple-300 uppercase tracking-wider">{t('experience.badge')}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            {t('experience.title')} <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">{t('experience.titleHighlight')}</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {t('experience.subtitle')}
          </p>
        </div>

        {/* Timeline */}
        <div className={`relative max-w-4xl mx-auto transition-all duration-1000 transform ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-16'
        }`} style={{ transitionDelay: isVisible ? '400ms' : '0ms' }}>
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-400 to-purple-500"></div>
          
          <div className="space-y-12">
            {items.map((item, index) => (
              <div 
                key={item.title} 
                className={`relative group transition-all duration-1000 transform ${
                  isVisible 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-16 scale-95'
                }`}
                style={{ 
                  transitionDelay: isVisible ? `${600 + (index * 200)}ms` : '0ms'
                }}
              >
                {/* Timeline node */}
                <div className="absolute left-6 top-6">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full flex items-center justify-center border-4 border-slate-900 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Content card */}
                <div className="ml-20">
                  <div className="relative p-0.5 rounded-2xl bg-gradient-to-r from-purple-500/30 via-cyan-500/30 to-purple-500/30 group-hover:from-purple-400/50 group-hover:via-cyan-400/50 group-hover:to-purple-400/50 transition-all duration-500">
                    <div className="relative p-8 rounded-2xl bg-slate-900/90 backdrop-blur-sm">
                      
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="text-3xl">{item.icon}</div>
                          <div>
                            <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                              {item.title}
                            </h3>
                            <time className="text-purple-400 font-semibold">{item.time}</time>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-300 leading-relaxed mb-4">{item.desc}</p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.skills.map(skill => (
                          <span 
                            key={skill} 
                            className="px-3 py-1 text-xs font-medium bg-slate-800 text-cyan-300 rounded-full border border-cyan-500/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Decorative bottom line */}
                      <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>

                      {/* Shine effect */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats section */}
        <div className={`mt-16 grid md:grid-cols-4 gap-6 transition-all duration-1000 transform ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`} style={{ transitionDelay: isVisible ? `${800 + (items.length * 200)}ms` : '0ms' }}>
          {[
            { number: '2+', label: 'Роки у frontend', color: 'from-purple-400 to-cyan-400' },
            { number: '3+', label: 'Роки 3D/Blender', color: 'from-cyan-400 to-blue-400' },
            { number: '4+', label: 'Роки фотографії', color: 'from-blue-400 to-purple-400' },
            { number: '10+', label: 'Років загального досвіду', color: 'from-purple-400 to-pink-400' }
          ].map((stat, index) => (
            <div key={index} className="group relative">
              <div className="relative p-0.5 rounded-2xl bg-gradient-to-r from-slate-700 to-slate-600 group-hover:from-purple-500/50 group-hover:to-cyan-500/50 transition-all duration-500">
                <div className="relative p-6 rounded-2xl bg-slate-900/90 backdrop-blur-sm text-center">
                  <div className={`text-2xl md:text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-slate-400 font-medium text-sm">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative line */}
        <div className={`mt-16 flex justify-center transition-all duration-1000 transform ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: isVisible ? `${1000 + (items.length * 200)}ms` : '0ms' }}>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
        </div>
      </div>
    </section>
  )
}
