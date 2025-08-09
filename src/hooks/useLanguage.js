import { useState, useEffect, createContext, useContext } from 'react'
import { translations } from '../translations'

// Language Context
const LanguageContext = createContext()

// Language Provider Component
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('uk')

  useEffect(() => {
    // Get saved language from localStorage
    const savedLanguage = localStorage.getItem('portfolio-language')
    if (savedLanguage && (savedLanguage === 'uk' || savedLanguage === 'en')) {
      setLanguage(savedLanguage)
    } else {
      // Auto-detect browser language
      const browserLang = navigator.language.toLowerCase()
      if (browserLang.includes('en')) {
        setLanguage('en')
      } else {
        setLanguage('uk')
      }
    }
  }, [])

  const changeLanguage = (newLanguage) => {
    if (newLanguage === 'uk' || newLanguage === 'en') {
      setLanguage(newLanguage)
      localStorage.setItem('portfolio-language', newLanguage)
      
      // Update HTML lang attribute
      document.documentElement.lang = newLanguage
      
      // Update page title
      const titleKey = newLanguage === 'en' 
        ? 'dev.bushko — Frontend Developer | React, TypeScript, Node.js'
        : 'dev.bushko — Frontend Developer | React, TypeScript, Node.js'
      document.title = titleKey
    }
  }

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[language]
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k]
      } else {
        console.warn(`Translation missing for key: ${key} in language: ${language}`)
        return key
      }
    }
    
    return value
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

// Custom hook to use language context
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

// Language Switcher Component
export function LanguageSwitcher({ className = '' }) {
  const { language, changeLanguage, t } = useLanguage()

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => changeLanguage(language === 'uk' ? 'en' : 'uk')}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-600 hover:border-cyan-400 transition-all duration-300 text-white hover:text-cyan-300"
        title={t('common.language')}
      >
        <div className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center bg-slate-700">
          {language === 'uk' ? (
            <span className="text-xs font-bold text-blue-400">🇺🇦</span>
          ) : (
            <span className="text-xs font-bold text-red-400">🇺🇸</span>
          )}
        </div>
        <span className="text-sm font-medium">
          {language === 'uk' ? 'УКР' : 'ENG'}
        </span>
      </button>
    </div>
  )
}

export default useLanguage
