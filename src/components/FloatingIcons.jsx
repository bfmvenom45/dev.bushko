import { useEffect, useState, useRef, useCallback } from 'react'

export default function FloatingIcons() {
  const [icons, setIcons] = useState([])
  const animationRef = useRef()
  const iconsRef = useRef([])

  const iconsList = [
    { emoji: '⚛️', color: 'from-cyan-400/20 to-blue-500/20' },
    { emoji: '⚡', color: 'from-purple-400/20 to-pink-500/20' },
    { emoji: '🎨', color: 'from-green-400/20 to-cyan-500/20' }
  ]

  const createFloatingIcons = useCallback(() => {
    return iconsList.map((icon, index) => ({
      id: index,
      emoji: icon.emoji,
      color: icon.color,
      x: Math.random() * 70 + 15, // 15-85% від ширини
      y: Math.random() * 50 + 25, // 25-75% від висоти  
      vx: (Math.random() - 0.5) * 0.3, // швидкість по X
      vy: (Math.random() - 0.5) * 0.3, // швидкість по Y
      size: 14 + index * 2, // розміри 14, 16, 18
      rotation: 0,
      rotationSpeed: (Math.random() - 0.5) * 2
    }))
  }, [])

  useEffect(() => {
    iconsRef.current = createFloatingIcons()
    setIcons([...iconsRef.current])

    const animate = () => {
      iconsRef.current = iconsRef.current.map(icon => {
        let newX = icon.x + icon.vx
        let newY = icon.y + icon.vy
        let newVx = icon.vx
        let newVy = icon.vy

        // Відбивання від меж екрану з невеликим рандомом
        if (newX <= 10 || newX >= 90) {
          newVx = -newVx * (0.8 + Math.random() * 0.4) // додаємо варіацію
          newX = newX <= 10 ? 10 : 90
        }
        if (newY <= 20 || newY >= 80) {
          newVy = -newVy * (0.8 + Math.random() * 0.4)
          newY = newY <= 20 ? 20 : 80
        }

        // Періодично міняємо напрямок для більшого хаосу
        if (Math.random() < 0.002) { // 0.2% шанс кожного кадру
          newVx += (Math.random() - 0.5) * 0.1
          newVy += (Math.random() - 0.5) * 0.1
        }

        // Обмежуємо швидкість
        const maxSpeed = 0.5
        if (Math.abs(newVx) > maxSpeed) newVx = Math.sign(newVx) * maxSpeed
        if (Math.abs(newVy) > maxSpeed) newVy = Math.sign(newVy) * maxSpeed

        return {
          ...icon,
          x: newX,
          y: newY,
          vx: newVx,
          vy: newVy,
          rotation: (icon.rotation + icon.rotationSpeed) % 360
        }
      })

      setIcons([...iconsRef.current])
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [createFloatingIcons])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className={`absolute bg-gradient-to-r ${icon.color} rounded-xl backdrop-blur-sm flex items-center justify-center text-xl transition-transform duration-100 ease-linear shadow-lg hover:scale-110`}
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            width: `${icon.size * 4}px`,
            height: `${icon.size * 4}px`,
            transform: `translate(-50%, -50%) rotate(${icon.rotation}deg)`,
            fontSize: `${icon.size + 4}px`,
            zIndex: 1
          }}
        >
          {icon.emoji}
        </div>
      ))}
    </div>
  )
}
