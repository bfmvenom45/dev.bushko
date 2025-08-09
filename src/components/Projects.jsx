import { projects } from '../data/projects'
import { useLanguage } from '../hooks/useLanguage'
import { useEffect, useRef, useState } from 'react'

export default function Projects() {
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

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className={`section relative overflow-hidden transition-all duration-1000 transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-16'
      }`}
    >
      {/* Розмитий фон */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/images/images/bg-portfolio.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(3px)',
          transform: 'scale(1.1)'
        }}
      ></div>
      
      {/* Main gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/80 to-slate-800/95 backdrop-blur-sm"></div>
      
      {/* Background decorations */}
      <div className={`absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-cyan-500/3 to-blue-500/3 rounded-full blur-3xl animate-float-left transition-all duration-1500 transform ${
        isVisible 
          ? 'opacity-60 scale-100' 
          : 'opacity-0 scale-75'
      }`} style={{ transitionDelay: isVisible ? '100ms' : '0ms' }}></div>
      <div className={`absolute bottom-1/4 right-1/4 w-60 h-60 bg-gradient-to-r from-purple-500/3 to-pink-500/3 rounded-full blur-3xl animate-float-right transition-all duration-1500 transform ${
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-6">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-xs font-semibold text-cyan-300 uppercase tracking-wider">{t('projects.badge')}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            {t('projects.title')} <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">{t('projects.titleHighlight')}</span>
          </h2>
          
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <div className="flex-1"></div>
            <p className="text-slate-300 text-lg">{t('projects.subtitle')}</p>
            <div className="flex-1 flex justify-end">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-600 rounded-xl"></div>
                <a 
                  href="https://github.com/bfmvenom45" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block px-6 py-3 bg-slate-800/80 backdrop-blur-sm rounded-xl text-cyan-400 font-semibold border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 group-hover:bg-slate-700/80"
                >
                  GitHub Profile →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article 
              key={project.title} 
              className={`group relative transition-all duration-1000 transform ${
                isVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-16 scale-95'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${400 + (index * 150)}ms` : '0ms'
              }}
            >
              {/* Card with gradient border */}
              <div className="relative p-0.5 rounded-2xl bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 group-hover:from-cyan-400/50 group-hover:via-blue-400/50 group-hover:to-purple-400/50 transition-all duration-500">
                <div className="relative rounded-2xl bg-slate-900/90 backdrop-blur-sm overflow-hidden">
                  
                  {/* Project image */}
                  <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl">
                    <img 
                      src={project.image || "/images/images/zipp.jpg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Image overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                    
                    {/* Status badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Завершено' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : project.status === 'В розробці'
                          ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                          : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      }`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          project.status === 'Завершено' 
                            ? 'bg-green-400'
                            : project.status === 'В розробці'
                            ? 'bg-yellow-400'
                            : 'bg-blue-400'
                        }`}></div>
                        {project.status}
                      </span>
                    </div>

                    {/* Project title overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
                    </div>

                    {/* Action buttons */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/60">
                      <div className="flex gap-3">
                        {/* GitHub link */}
                        <a 
                          href={project.href} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-slate-800/90 backdrop-blur-sm rounded-full p-3 transform scale-75 group-hover:scale-100 transition-all duration-300 hover:bg-slate-700/90 border border-cyan-500/30 hover:border-cyan-400/50"
                          title="Переглянути код"
                        >
                          <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.300 24 12c0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>

                        {/* Live demo link */}
                        {project.liveDemo && project.liveDemo !== '#' && (
                          <a 
                            href={project.liveDemo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-cyan-500/90 backdrop-blur-sm rounded-full p-3 transform scale-75 group-hover:scale-100 transition-all duration-300 hover:bg-cyan-400/90"
                            title="Переглянути демо"
                          >
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="px-3 py-1 text-xs font-medium bg-slate-800 text-cyan-300 rounded-full border border-cyan-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to action */}
        <div className={`mt-16 text-center transition-all duration-1000 transform ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`} style={{ transitionDelay: isVisible ? `${600 + (projects.length * 150)}ms` : '0ms' }}>
          <div className="relative group inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            <a 
              href="https://github.com/bfmvenom45?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="relative block px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl text-white font-semibold hover:from-cyan-400 hover:to-purple-500 transition-all duration-300"
            >
              Переглянути всі проєкти на GitHub
            </a>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className={`mt-16 flex justify-center transition-all duration-1000 transform ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: isVisible ? `${800 + (projects.length * 150)}ms` : '0ms' }}>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        </div>
      </div>
    </section>
  )
}
