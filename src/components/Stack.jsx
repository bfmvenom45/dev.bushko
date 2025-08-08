import { SmartBackground } from './SmartBackground'
import { translations } from '../translations'

export default function Stack() {
  const language = 'uk' // Default to Ukrainian
  const t = translations[language]
  
  const techSkills = [
    { name: 'React', level: '90%', color: '#61DAFB', category: 'frontend', icon: '⚛️' },
    { name: 'TypeScript', level: '80%', color: '#3178C6', category: 'frontend', icon: 'TS' },
    { name: 'Next.js', level: '85%', color: '#000000', category: 'frontend', icon: '▲' },
    { name: 'Tailwind', level: '95%', color: '#06B6D4', category: 'frontend', icon: '🎨' },
    { name: 'Three.js', level: '75%', color: '#000000', category: 'frontend', icon: '3D' }
  ]

  const creativeSkills = [
    { name: 'Blender', level: '85%', color: '#F5792A', category: 'creative', icon: '🎲' },
    { name: 'Photoshop', level: '90%', color: '#31A8FF', category: 'creative', icon: '🖼️' },
    { name: 'Lightroom', level: '95%', color: '#31A8FF', category: 'creative', icon: 'LR' },
    { name: 'Photography', level: '88%', color: '#FF6B6B', category: 'creative', icon: '📷' },
    { name: 'Midjourney', level: '80%', color: '#9333EA', category: 'creative', icon: '🎭' },
    { name: 'Sora', level: '75%', color: '#10B981', category: 'creative', icon: '🎬' }
  ]

  return (
    <section id="stack" className="section relative overflow-hidden">
      {/* Background Image */}
      <SmartBackground 
        imageSrc="/images/optimized/bg-skills-1920.webp"
        overlayClasses="bg-gradient-to-br from-slate-900/85 via-slate-900/75 to-slate-800/85"
      />
      
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-green-500/10 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-xs font-semibold text-blue-300 uppercase tracking-wider">{t.stack.badge}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            {t.stack.title}
          </h2>
          
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {t.stack.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Frontend Skills */}
          <div className="relative">
            <div className="relative p-0.5 rounded-3xl bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30">
              <div className="relative p-8 rounded-3xl bg-slate-900/90 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-400 to-purple-600 flex items-center justify-center text-2xl">
                    💻
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{t.stack.frontend}</h3>
                    <p className="text-slate-400">Сучасні веб-технології</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {techSkills.map((skill, index) => (
                    <div key={index} className="group">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-slate-800/50 flex items-center justify-center text-lg font-bold group-hover:scale-110 transition-transform duration-300 text-white">
                          {skill.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-white">{skill.name}</span>
                            <span className="text-sm text-slate-400">{skill.level}</span>
                          </div>
                          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-blue-400 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: skill.level }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Creative Skills */}
          <div className="relative">
            <div className="relative p-0.5 rounded-3xl bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-orange-500/30">
              <div className="relative p-8 rounded-3xl bg-slate-900/90 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-400 to-pink-600 flex items-center justify-center text-2xl">
                    🎨
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{t.stack.creative}</h3>
                    <p className="text-slate-400">Дизайн та креативні інструменти</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {creativeSkills.map((skill, index) => (
                    <div key={index} className="group">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-slate-800/50 flex items-center justify-center text-lg font-bold group-hover:scale-110 transition-transform duration-300 text-white">
                          {skill.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-white">{skill.name}</span>
                            <span className="text-sm text-slate-400">{skill.level}</span>
                          </div>
                          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-purple-400 to-pink-600 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: skill.level }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '3+', label: t.stack.stats.years, icon: '📅' },
            { number: '50+', label: t.stack.stats.projects, icon: '🚀' },
            { number: '15+', label: t.stack.stats.technologies, icon: '⚡' },
            { number: '100%', label: t.stack.stats.satisfaction, icon: '😊' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-black text-white mb-2">{stat.number}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
