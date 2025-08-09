import { useEffect, useRef, useState } from 'react'
import { SmartBackground } from './SmartBackground'
import { useLanguage } from '../hooks/useLanguage'

// ============= НАЛАШТУВАННЯ КОНТАКТІВ =============
// 1. Замініть всі "ваш" у contactMethods на реальні дані
// 2. Оновіть YOUR_FORM_ID в handleSubmit на ID з Formspree
// 3. За потреби змініть текст у заголовках та описах
// ================================================

export default function Contact() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [formErrors, setFormErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', null
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

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    
    // Очищуємо помилку поля при введенні
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      })
    }
    
    // Очищуємо статус після зміни форми
    if (submitStatus) {
      setSubmitStatus(null)
    }
  }

  const validateForm = () => {
    const errors = {}
    
    if (!formData.name.trim()) {
      errors.name = t('contact.form.errors.nameRequired')
    } else if (formData.name.trim().length < 2) {
      errors.name = t('contact.form.errors.nameMinLength')
    }
    
    if (!formData.email.trim()) {
      errors.email = t('contact.form.errors.emailRequired')
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = t('contact.form.errors.emailInvalid')
    }
    
    if (!formData.message.trim()) {
      errors.message = t('contact.form.errors.messageRequired')
    } else if (formData.message.trim().length < 10) {
      errors.message = t('contact.form.errors.messageMinLength')
    }
    
    return errors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Валідація перед відправкою
    const errors = validateForm()
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }
    
    setIsSubmitting(true)
    setFormErrors({})

    try {
      // НАЛАШТУВАННЯ: Замініть YOUR_FORM_ID на реальний ID з Formspree
      // 1. Зайдіть на https://formspree.io/
      // 2. Створіть акаунт та новий проєкт
      // 3. Скопіюйте ваш Form ID і замініть нижче
      // ПРИКЛАД: const FORMSPREE_URL = 'https://formspree.io/f/xpzgkdql'
      const FORMSPREE_URL = 'https://formspree.io/f/mpwlkzez'
      
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Новий запит з портфоліо від ${formData.name}`,
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        
        // Показуємо успішне повідомлення на 5 секунд
        setTimeout(() => setSubmitStatus(null), 5000)
      } else {
        throw new Error(t('contact.form.error'))
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      
      // Приховуємо помилку через 5 секунд
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

    const contactMethods = [
    {
      icon: 'MAIL',
      label: t('contact.methods.email'),
      value: 'dev.bushko@gmail.com',
      href: 'mailto:dev.bushko@gmail.com',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: 'TEL',
      label: t('contact.methods.phone'),
      value: '+380 98 860 97 43',
      href: 'tel:+380988609743',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'TG',
      label: 'Telegram',
      value: '@sanya.bushko',
      href: 'https://t.me/sanya.bushko',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'GIT',
      label: 'GitHub',
      value: 'bfmvenom45',
      href: 'https://github.com/bfmvenom45',
      color: 'from-gray-500 to-slate-500'
    },
    {
      icon: 'LOC',
      label: t('contact.methods.location'),
      value: t('contact.location'),
      href: 'https://maps.google.com/?q=Chernivtsi,Ukraine',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: 'TIME',
      label: t('contact.methods.timezone'),
      value: 'UTC+2 (EET)',
      href: '#',
      color: 'from-indigo-500 to-purple-500'
    }
  ]

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className={`section relative overflow-hidden transition-all duration-1000 transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-16'
      }`}
    >
      {/* Background */}
      <SmartBackground 
        imageSrc="/images/optimized/bg-contact-1920.webp"
        overlayClasses="bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-800/90"
      />
      
      {/* Floating decorations */}
      <div className={`absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-green-500/6 to-cyan-500/6 rounded-full blur-3xl animate-float-left transition-all duration-1500 transform ${
        isVisible 
          ? 'opacity-60 scale-100' 
          : 'opacity-0 scale-75'
      }`} style={{ transitionDelay: isVisible ? '100ms' : '0ms' }}></div>
      <div className={`absolute bottom-1/4 right-1/4 w-60 h-60 bg-gradient-to-r from-blue-500/6 to-purple-500/6 rounded-full blur-3xl animate-float-right transition-all duration-1500 transform ${
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 backdrop-blur-md mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs font-semibold text-green-300 uppercase tracking-wider">{t('contact.badge')}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            {t('contact.title')} <span className="bg-gradient-to-r from-green-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">{t('contact.titleHighlight')}</span> {t('contact.titleEnd')}
          </h2>
          
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Content Grid */}
        <div className={`grid lg:grid-cols-2 gap-12 transition-all duration-1000 transform ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-16'
        }`} style={{ transitionDelay: isVisible ? '600ms' : '0ms' }}>
          
          {/* Contact information */}
          <div className={`flex flex-col h-full transition-all duration-1000 transform ${
            isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-8'
          }`} style={{ transitionDelay: isVisible ? '700ms' : '0ms' }}>
            
            {/* Contact card in form style */}
            <div className="relative p-0.5 rounded-3xl bg-gradient-to-r from-green-500/30 via-cyan-500/30 to-blue-500/30 hover:from-green-400/40 hover:via-cyan-400/40 hover:to-blue-400/40 transition-all duration-500 h-full">
              <div className="relative p-8 rounded-3xl bg-slate-900/90 backdrop-blur-sm h-full flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-8">{t('contact.infoTitle')}</h3>
                
                <div className="space-y-6 flex-1">
                  {contactMethods.map((contact, index) => (
                    <div 
                      key={index}
                      className={`transition-all duration-1000 transform ${
                        isVisible 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-0 translate-x-8'
                      }`} 
                      style={{ transitionDelay: isVisible ? `${800 + (index * 100)}ms` : '0ms' }}
                    >
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        {contact.label}
                      </label>
                      <div className="relative group">
                        <a 
                          href={contact.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300 flex items-center gap-3 group-hover:bg-slate-800/70"
                        >
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${contact.color} flex items-center justify-center text-sm font-bold text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            {contact.icon}
                          </div>
                          <span className="flex-1 font-medium">{contact.value}</span>
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Call to action */}
                <div className={`mt-8 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 text-center transition-all duration-1000 transform ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`} style={{ transitionDelay: isVisible ? '1200ms' : '0ms' }}>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 font-semibold text-sm">{t('contact.availability.available')}</span>
                  </div>
                  <p className="text-slate-400 text-sm mb-1">
                    {t('contact.availability.responseTime')} <span className="text-cyan-400 font-semibold">{t('contact.availability.hours')}</span>
                  </p>
                  <p className="text-slate-500 text-xs">
                    {t('contact.availability.schedule')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className={`flex flex-col h-full transition-all duration-1000 transform ${
            isVisible 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-16 scale-95'
          }`} style={{ transitionDelay: isVisible ? '800ms' : '0ms' }}>
            <div className="relative p-0.5 rounded-3xl bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 hover:from-blue-400/40 hover:via-purple-400/40 hover:to-pink-400/40 transition-all duration-500 h-full">
              <div className="relative p-8 rounded-3xl bg-slate-900/90 backdrop-blur-sm h-full flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-6">{t('contact.formTitle')}</h3>
                <p className="text-slate-400 text-sm mb-8">{t('contact.formDescription')}</p>
                
                <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                  
                  {/* Status messages */}
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-300 flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {t('contact.form.success')}
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-300 flex items-center gap-3">
                      <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {t('contact.form.error')}
                    </div>
                  )}

                  {/* Name field */}
                  <div className={`transition-all duration-1000 transform ${
                    isVisible 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-8'
                  }`} style={{ transitionDelay: isVisible ? '1000ms' : '0ms' }}>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {t('contact.form.name')} *
                    </label>
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder={t('contact.form.namePlaceholder')}
                      className={`w-full px-4 py-3 bg-slate-800/50 border rounded-xl text-white placeholder-slate-400 focus:ring-1 transition-all duration-300 hover:border-slate-500 ${
                        formErrors.name 
                          ? 'border-red-500 focus:border-red-400 focus:ring-red-400' 
                          : 'border-slate-600 focus:border-cyan-400 focus:ring-cyan-400'
                      }`}
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-sm text-red-400">{formErrors.name}</p>
                    )}
                  </div>

                  {/* Email field */}
                  <div className={`transition-all duration-1000 transform ${
                    isVisible 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-8'
                  }`} style={{ transitionDelay: isVisible ? '1100ms' : '0ms' }}>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {t('contact.form.email')} *
                    </label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder={t('contact.form.emailPlaceholder')}
                      className={`w-full px-4 py-3 bg-slate-800/50 border rounded-xl text-white placeholder-slate-400 focus:ring-1 transition-all duration-300 hover:border-slate-500 ${
                        formErrors.email 
                          ? 'border-red-500 focus:border-red-400 focus:ring-red-400' 
                          : 'border-slate-600 focus:border-cyan-400 focus:ring-cyan-400'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-sm text-red-400">{formErrors.email}</p>
                    )}
                  </div>

                  {/* Message field */}
                  <div className={`flex-1 flex flex-col transition-all duration-1000 transform ${
                    isVisible 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-8'
                  }`} style={{ transitionDelay: isVisible ? '1200ms' : '0ms' }}>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {t('contact.form.message')} *
                    </label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="6"
                      required
                      placeholder={t('contact.form.messagePlaceholder')}
                      className={`w-full flex-1 px-4 py-3 bg-slate-800/50 border rounded-xl text-white placeholder-slate-400 focus:ring-1 transition-all duration-300 resize-none hover:border-slate-500 ${
                        formErrors.message 
                          ? 'border-red-500 focus:border-red-400 focus:ring-red-400' 
                          : 'border-slate-600 focus:border-cyan-400 focus:ring-cyan-400'
                      }`}
                    ></textarea>
                    {formErrors.message && (
                      <p className="mt-1 text-sm text-red-400">{formErrors.message}</p>
                    )}
                  </div>

                  {/* Submit button */}
                  <div className={`relative group transition-all duration-1000 transform ${
                    isVisible 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-8 scale-95'
                  }`} style={{ transitionDelay: isVisible ? '1300ms' : '0ms' }}>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="relative w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl text-white font-semibold hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          {t('contact.form.submitting')}
                        </>
                      ) : (
                        t('contact.form.submit')
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className={`mt-16 flex justify-center transition-all duration-1000 transform ${
          isVisible 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-8 scale-95'
        }`} style={{ transitionDelay: isVisible ? '1400ms' : '0ms' }}>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
