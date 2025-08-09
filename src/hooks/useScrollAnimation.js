import { useEffect, useRef, useState, useCallback } from 'react'

export function useScrollAnimation(threshold = 0.1, triggerOnce = true) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            observer.unobserve(entry.target)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { 
        threshold,
        rootMargin: '50px' // Запускати анімацію трохи раніше
      }
    )

    const currentElement = ref.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [threshold, triggerOnce])

  return [ref, isVisible]
}

export function useStaggeredAnimation(items, delay = 150) {
  const [visibleItems, setVisibleItems] = useState(new Set())
  const [ref, isVisible] = useScrollAnimation(0.1, true)
  const timeoutIds = useRef([])

  const clearTimeouts = useCallback(() => {
    timeoutIds.current.forEach(id => clearTimeout(id))
    timeoutIds.current = []
  }, [])

  useEffect(() => {
    if (isVisible) {
      clearTimeouts()
      
      items.forEach((_, index) => {
        const timeoutId = setTimeout(() => {
          setVisibleItems(prev => new Set([...prev, index]))
        }, index * delay)
        
        timeoutIds.current.push(timeoutId)
      })
    }

    return clearTimeouts
  }, [isVisible, items.length, delay, clearTimeouts])

  return [ref, visibleItems]
}
