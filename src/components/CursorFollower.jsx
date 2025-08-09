import { useEffect, useState, useCallback } from 'react'

export default function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  // Throttle function для оптимізації
  const throttle = useCallback((func, delay) => {
    let timeoutId
    let lastExecTime = 0
    return function (...args) {
      const currentTime = Date.now()
      
      if (currentTime - lastExecTime > delay) {
        func.apply(this, args)
        lastExecTime = currentTime
      } else {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
          func.apply(this, args)
          lastExecTime = Date.now()
        }, delay - (currentTime - lastExecTime))
      }
    }
  }, [])

  useEffect(() => {
    // Показувати курсор тільки на десктопі
    if (window.innerWidth < 768) return

    const updatePosition = throttle((e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }, 16) // ~60fps

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Add listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], .cursor-hover')
    
    document.addEventListener('mousemove', updatePosition, { passive: true })
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter, { passive: true })
      el.addEventListener('mouseleave', handleMouseLeave, { passive: true })
    })

    return () => {
      document.removeEventListener('mousemove', updatePosition)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [throttle])

  // Не рендерити на мобільних пристроях
  if (window.innerWidth < 768) return null

  return (
    <>
      {/* Main cursor */}
      <div 
        className="fixed top-0 left-0 w-3 h-3 bg-cyan-400/50 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-75 ease-out"
        style={{
          transform: `translate(${position.x - 6}px, ${position.y - 6}px) scale(${isHovering ? 1.3 : 1})`
        }}
      />
      
      {/* Trailing cursor - тільки на великих екранах */}
      <div 
        className="fixed top-0 left-0 w-6 h-6 border border-cyan-400/20 rounded-full pointer-events-none z-50 transition-all duration-200 ease-out"
        style={{
          transform: `translate(${position.x - 12}px, ${position.y - 12}px) scale(${isHovering ? 1.5 : 1})`
        }}
      />
    </>
  )
}
