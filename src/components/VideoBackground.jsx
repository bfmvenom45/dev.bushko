// Enhanced Video Background Component with better controls
import { useState, useEffect, useRef } from 'react';

export function VideoBackground({ 
  videoSrc, 
  imageSrc, 
  className = "",
  overlay = true,
  overlayClasses = "bg-gradient-to-br from-slate-900/70 via-slate-900/40 to-slate-800/70",
  autoPlay = true,
  loop = true,
  muted = true,
  playOnIntersection = true,
  fallbackImage = true
}) {
  const [videoAvailable, setVideoAvailable] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const videoRef = useRef(null);

  // Check video availability
  useEffect(() => {
    if (!videoSrc) return;

    const checkVideo = async () => {
      try {
        const response = await fetch(videoSrc, { method: 'HEAD' });
        if (response.ok) {
          setVideoAvailable(true);
          console.log(`✅ Video available: ${videoSrc}`);
        } else {
          setShowFallback(true);
          console.log(`❌ Video not found: ${videoSrc}, using fallback`);
        }
      } catch (error) {
        setShowFallback(true);
        console.log(`❌ Video check failed: ${videoSrc}`, error);
      }
    };

    checkVideo();
  }, [videoSrc]);

  // Intersection Observer for play on scroll
  useEffect(() => {
    if (!videoRef.current || !playOnIntersection || !videoAvailable) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoLoaded) {
          videoRef.current?.play().then(() => {
            setVideoPlaying(true);
            console.log('🎬 Video playing');
          }).catch(err => {
            console.log('⚠️ Video autoplay blocked:', err);
          });
        } else {
          videoRef.current?.pause();
          setVideoPlaying(false);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, [playOnIntersection, videoAvailable, videoLoaded]);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
    console.log('📹 Video loaded successfully');
    
    if (autoPlay && videoRef.current) {
      videoRef.current.play().then(() => {
        setVideoPlaying(true);
      }).catch(err => {
        console.log('⚠️ Autoplay failed:', err);
      });
    }
  };

  const handleVideoError = (e) => {
    console.log('❌ Video failed to load:', e);
    setShowFallback(true);
    setVideoAvailable(false);
  };

  const handleVideoPlay = () => {
    setVideoPlaying(true);
  };

  const handleVideoPause = () => {
    setVideoPlaying(false);
  };

  // Render video if available
  if (videoAvailable && !showFallback) {
    return (
      <div className="absolute inset-0">
        {/* Video */}
        <video 
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          playsInline
          preload="auto"
          poster={imageSrc}
          onLoadedData={handleVideoLoad}
          onCanPlayThrough={handleVideoLoad}
          onError={handleVideoError}
          onPlay={handleVideoPlay}
          onPause={handleVideoPause}
        >
          {/* Try WebM first (better compression) */}
          <source src={videoSrc.replace('.mp4', '.webm')} type="video/webm" />
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Image fallback during video load */}
        {!videoLoaded && fallbackImage && (
          <div 
            className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat ${className}`}
            style={{ backgroundImage: `url(${imageSrc})` }}
          />
        )}

        {/* Loading indicator */}
        {!videoLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white/50 text-sm">
              <div className="animate-spin w-6 h-6 border-2 border-white/30 border-t-white/70 rounded-full"></div>
            </div>
          </div>
        )}

        {/* Overlay */}
        {overlay && (
          <div className={`absolute inset-0 ${overlayClasses}`}></div>
        )}

        {/* Debug info (remove in production) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="absolute top-4 right-4 text-xs text-white/70 bg-black/50 px-2 py-1 rounded">
            📹 {videoPlaying ? 'Playing' : 'Paused'} | {videoLoaded ? 'Loaded' : 'Loading'}
          </div>
        )}
      </div>
    );
  }

  // Fallback to image
  return (
    <div className="absolute inset-0">
      <div 
        className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat ${className}`}
        style={{ backgroundImage: `url(${imageSrc})` }}
      />
      {overlay && (
        <div className={`absolute inset-0 ${overlayClasses}`}></div>
      )}
      
      {/* Debug info */}
      {process.env.NODE_ENV === 'development' && (
        <div className="absolute top-4 right-4 text-xs text-white/70 bg-black/50 px-2 py-1 rounded">
          🖼️ Image Fallback
        </div>
      )}
    </div>
  );
}

export default VideoBackground;
