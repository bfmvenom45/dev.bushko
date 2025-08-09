import { Link } from 'react-scroll'
import { useState, useEffect } from 'react'

export default function Header() {
  const [hasScrolled, setHasScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 z-40 w-full transition-all duration-500 ${
      hasScrolled ? 'py-3 bg-slate-900/90 backdrop-blur-lg border-b border-cyan-500/20' : 'py-6'
    }`}>
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <div className="relative group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          <div className="relative px-4 py-2 bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl border border-cyan-500/30">
            <span className="font-black text-xl bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              dev.bushko
            </span>
          </div>
        </div>

        {/* Navigation & Contact */}
        <div className="flex items-center gap-4">
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { id: 'projects', label: 'Проєкти' },
              { id: 'stack', label: 'Навички' },
              { id: 'experience', label: 'Досвід' },
              { id: 'faq', label: 'FAQ' },
              { id: 'contact', label: 'Контакти' }
            ].map((item) => (
              <Link 
                key={item.id} 
                to={item.id} 
                smooth 
                offset={-80} 
                className="relative cursor-pointer group"
              >
                <span className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                  {item.label}
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 group-hover:w-full transition-all duration-300"></div>
              </Link>
            ))}
          </nav>

          {/* Phone */}
          <a 
            href="tel:+380988609743"
            className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/50 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 group"
          >
            <span className="text-cyan-400">📞</span>
            <span className="text-white font-medium group-hover:text-cyan-300 transition-colors">
              +380 98 860 97 43
            </span>
          </a>

          {/* CTA Button */}
          <div className="hidden md:block relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Link 
              to="contact" 
              smooth 
              offset={-80}
              className="relative block px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl text-white font-semibold cursor-pointer hover:from-cyan-400 hover:to-purple-500 transition-all duration-300"
            >
              Зв'язатись
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden w-10 h-10 rounded-xl bg-slate-800/50 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 flex items-center justify-center"
          >
            <div className="space-y-1.5">
              <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-lg border-b border-cyan-500/20 transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="container py-6">
          <nav className="space-y-4">
            {[
              { id: 'projects', label: 'Проєкти' },
              { id: 'stack', label: 'Навички' },
              { id: 'experience', label: 'Досвід' },
              { id: 'faq', label: 'FAQ' },
              { id: 'contact', label: 'Контакти' }
            ].map((item) => (
              <Link 
                key={item.id} 
                to={item.id} 
                smooth 
                offset={-80} 
                onClick={closeMobileMenu}
                className="block text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium py-2 cursor-pointer"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile CTA and Phone */}
          <div className="mt-6 space-y-4">
            <Link 
              to="contact" 
              smooth 
              offset={-80}
              onClick={closeMobileMenu}
              className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl text-white font-semibold text-center cursor-pointer hover:from-cyan-400 hover:to-purple-500 transition-all duration-300"
            >
              Зв'язатись
            </Link>
            
            <a 
              href="tel:+380988609743"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-800/50 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300"
            >
              <span className="text-cyan-400">📞</span>
              <span className="text-white font-medium">+380 98 860 97 43</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
