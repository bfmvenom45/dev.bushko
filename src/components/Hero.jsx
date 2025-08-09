import AnimatedTitle from './AnimatedTitle'
import OptimizedVideoBackground from './OptimizedVideoBackground'
import { translations } from '../translations'

export default function Hero() {
    const language = 'uk' // Default to Ukrainian
    const t = translations[language]

    return (
        <section 
            id="hero" 
            className="min-h-screen flex items-center relative overflow-hidden"
        >
            {/* Відео фон */}
            <OptimizedVideoBackground 
                videoSrc="/video/optimized/bg-hero-optimized.mp4"
                fallbackImage="/images/optimized/bg-hero-1920.webp"
                className="absolute inset-0"
            />
            
            {/* Темний оверлей */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
            
            {/* Плаваючі іконки - розміщені по центру */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
                {/* Орбітальне кільце */}
                <div className="relative w-full max-w-4xl h-96">
                    <div className="absolute inset-0 rounded-full border border-white/10 backdrop-blur-xl bg-white/5 animate-pulse shadow-2xl shadow-cyan-500/10"></div>
                    
                    {/* Світлові часточки */}
                    <div className="absolute top-16 left-1/2 w-2 h-2 bg-cyan-400/60 rounded-full animate-sparkle backdrop-blur-sm"></div>
                    <div className="absolute bottom-20 right-1/2 w-1 h-1 bg-purple-400/60 rounded-full animate-sparkle backdrop-blur-sm" style={{animationDelay: '1s'}}></div>
                    <div className="absolute top-1/3 left-1/5 w-1.5 h-1.5 bg-pink-400/60 rounded-full animate-sparkle backdrop-blur-sm" style={{animationDelay: '2s'}}></div>
                    <div className="absolute bottom-1/3 right-1/5 w-1 h-1 bg-yellow-400/60 rounded-full animate-sparkle backdrop-blur-sm" style={{animationDelay: '0.5s'}}></div>
                    
                    {/* React іконка - верхній лівий */}
                    <div className="absolute top-4 left-1/4 animate-float">
                        <div className="w-16 h-16 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10 shadow-lg">
                            <span className="text-cyan-400 text-2xl">⚛️</span>
                        </div>
                    </div>
                    
                    {/* Блискавка - верхній правий */}
                    <div className="absolute top-8 right-1/4 animate-float-lightning">
                        <div className="w-14 h-14 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10 shadow-lg">
                            <span className="text-purple-400 text-xl">⚡</span>
                        </div>
                    </div>
                    
                    {/* JS іконка - правий центр */}
                    <div className="absolute top-1/2 right-8 animate-float-slow">
                        <div className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10 shadow-lg">
                            <span className="text-yellow-400 text-lg">JS</span>
                        </div>
                    </div>
                    
                    {/* Палітра - нижній правий */}
                    <div className="absolute bottom-8 right-1/3 animate-float">
                        <div className="w-15 h-15 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10 shadow-lg animate-pulse">
                            <span className="text-pink-400 text-xl">🎨</span>
                        </div>
                    </div>
                    
                    {/* CSS іконка - нижній лівий */}
                    <div className="absolute bottom-4 left-1/3 animate-float-delayed">
                        <div className="w-14 h-14 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10 shadow-lg">
                            <span className="text-blue-400 text-xl">#</span>
                        </div>
                    </div>
                    
                    {/* HTML іконка - лівий центр */}
                    <div className="absolute top-1/2 left-8 animate-float-slow">
                        <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10 shadow-lg">
                            <span className="text-orange-400 text-sm">&lt;/&gt;</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center">
                    {/* Статус бейдж */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-8">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        <span className="text-sm font-semibold text-cyan-300 uppercase tracking-wider">{t.hero.badge}</span>
                    </div>
                    
                    <AnimatedTitle />
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed opacity-90">
                        {t.hero.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a 
                            href="#contact" 
                            className="border-2 border-cyan-400/60 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/20 backdrop-blur-md hover:text-white transition-all duration-300 font-semibold text-lg transform hover:scale-105 shadow-lg"
                        >
                            Зв'язатися
                        </a>
                    </div>
                </div>
            </div>
            
            {/* Індикатор прокрутки внизу */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="flex flex-col items-center gap-2 text-slate-400">
                    <span className="text-sm font-medium">Прокрутіть вниз</span>
                    <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-purple-600 rounded-full mt-2 animate-bounce"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
