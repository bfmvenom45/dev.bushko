// Simple optimized video background component
import { useRef, useEffect, useState } from 'react'

export default function OptimizedVideoBackground({ 
  videoSrc, 
  imageSrc, 
  overlayClasses = "bg-gradient-to-br from-slate-900/80 via-slate-900/50 to-slate-800/80"
}) {
  const videoRef = useRef(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [useVideo, setUseVideo] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Оптимізовані налаштування відео
    video.setAttribute('webkit-playsinline', 'true')
    video.setAttribute('playsinline', 'true')
    video.muted = true
    video.loop = true
    
    // Запускаємо відео з затримкою
    const timer = setTimeout(() => {
      video.play().catch(() => {
        console.log('Video autoplay prevented')
        setUseVideo(false)
      })
    }, 100)

    const handleLoad = () => {
      setVideoLoaded(true)
    }

    const handleError = () => {
      setUseVideo(false)
    }

    video.addEventListener('loadeddata', handleLoad)
    video.addEventListener('error', handleError)

    return () => {
      clearTimeout(timer)
      video.removeEventListener('loadeddata', handleLoad)
      video.removeEventListener('error', handleError)
    }
  }, [])

  if (!useVideo) {
    return (
      <>
        {/* Image fallback */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${imageSrc})` }}
        />
        <div className={`absolute inset-0 ${overlayClasses}`}></div>
      </>
    )
  }

  return (
    <>
      {/* Оптимізоване відео */}
      <video 
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          videoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        muted
        loop
        playsInline
        preload="none" // Мінімальне завантаження
        poster={imageSrc}
        style={{
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          perspective: 1000,
          willChange: 'auto'
        }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Image показується поки відео не завантажилось */}
      {!videoLoaded && (
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${imageSrc})` }}
        />
      )}

      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayClasses}`}></div>
    </>
  )
}
