import { useState, useEffect } from 'react'
import { useLanguage } from '../hooks/useLanguage'

export default function AnimatedTitle() {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  // Динамічні заголовки з перекладів
  const titles = [
    {
      part1: t('hero.title1.part1'),
      part2: t('hero.title1.part2')
    },
    {
      part1: t('hero.title2.part1'),
      part2: t('hero.title2.part2')
    },
    {
      part1: t('hero.title3.part1'),
      part2: t('hero.title3.part2')
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      // Плавне зникнення
      setIsVisible(false)
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % titles.length)
        // Плавна поява
        setIsVisible(true)
      }, 300) // Повільніша пауза
      
    }, 3500) // Повільніше переключення

    return () => clearInterval(interval)
  }, [titles.length])

  const currentTitle = titles[currentIndex]

  return (
    <h1 
      className={`text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight         transition-opacity duration-400 ease-in-out transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 -translate-y-1'
      }`}
    >
      {currentTitle.part1}
      <br />
      <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
        {currentTitle.part2}
      </span>
    </h1>
  )
}
