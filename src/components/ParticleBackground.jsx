import { useEffect, useRef } from 'react'

export default function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    
    // Зменшена кількість частинок для кращої продуктивності
    const particles = []
    const particleCount = window.innerWidth > 768 ? 30 : 15 // Менше частинок на мобільних
    
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.3 // Повільніша швидкість
        this.vy = (Math.random() - 0.5) * 0.3
        this.size = Math.random() * 1.5 + 0.5 // Менші частинки
        this.opacity = Math.random() * 0.3 + 0.1 // Менша прозорість
      }
      
      update() {
        this.x += this.vx
        this.y += this.vy
        
        // Wrap around screen
        if (this.x < 0) this.x = canvas.width
        if (this.x > canvas.width) this.x = 0
        if (this.y < 0) this.y = canvas.height
        if (this.y > canvas.height) this.y = 0
      }
      
      draw() {
        ctx.save()
        ctx.globalAlpha = this.opacity
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = '#06b6d4'
        ctx.fill()
        ctx.restore()
      }
    }
    
    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }
    
    // Оптимізований animation loop з throttling
    let lastTime = 0
    const targetFPS = 30 // Обмежуємо до 30 FPS замість 60
    
    const animate = (currentTime) => {
      if (currentTime - lastTime >= 1000 / targetFPS) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        
        particles.forEach(particle => {
          particle.update()
          particle.draw()
        })
        
        // Менше з'єднань для кращої продуктивності
        const maxDistance = 100 // Зменшена відстань
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x
            const dy = particles[i].y - particles[j].y
            const distance = Math.sqrt(dx * dx + dy * dy)
            
            if (distance < maxDistance) {
              ctx.save()
              ctx.globalAlpha = (maxDistance - distance) / maxDistance * 0.05
              ctx.beginPath()
              ctx.moveTo(particles[i].x, particles[i].y)
              ctx.lineTo(particles[j].x, particles[j].y)
              ctx.strokeStyle = '#06b6d4'
              ctx.lineWidth = 0.3
              ctx.stroke()
              ctx.restore()
            }
          }
        }
        
        lastTime = currentTime
      }
      
      animationId = requestAnimationFrame(animate)
    }
    
    animationId = requestAnimationFrame(animate)
    
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.3 }} // Зменшена прозорість
    />
  )
}
