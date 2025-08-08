// Smart Background Component - automatically switches between video and image
import { useState, useEffect, useRef } from 'react';

export function SmartBackground({ 
  videoSrc, 
  imageSrc, 
  className = "",
  overlay = true,
  overlayClasses = "bg-gradient-to-br from-slate-900/80 via-slate-900/50 to-slate-800/80"
}) {
  const [useVideo, setUseVideo] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Check if video file exists
    const checkVideo = async () => {
      try {
        const response = await fetch(videoSrc, { method: 'HEAD' });
        if (response.ok) {
          setUseVideo(true);
        } else {
          setUseVideo(false);
        }
      } catch (error) {
        setUseVideo(false);
      }
    };

    if (videoSrc) {
      checkVideo();
    }
  }, [videoSrc]);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
    // Try to play video
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay failed, which is normal
      });
    }
  };

  const handleVideoError = () => {
    setUseVideo(false);
  };

  // Intersection Observer to play video when in view
  useEffect(() => {
    if (!videoRef.current || !useVideo) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => {});
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(videoRef.current);

    return () => {
      observer.disconnect();
    };
  }, [useVideo, videoLoaded]);

  if (useVideo) {
    return (
      <>
        {/* Video Background */}
        <video 
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={imageSrc}
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
          onCanPlayThrough={handleVideoLoad}
        >
          <source src={videoSrc.replace('.mp4', '.webm')} type="video/webm" />
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Image fallback while video loads */}
        {!videoLoaded && (
          <div 
            className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat ${className}`}
            style={{ backgroundImage: `url(${imageSrc})` }}
          />
        )}

        {/* Overlay */}
        {overlay && (
          <div className={`absolute inset-0 ${overlayClasses}`}></div>
        )}
      </>
    );
  }

  // Image fallback
  return (
    <>
      <div 
        className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat ${className}`}
        style={{ backgroundImage: `url(${imageSrc})` }}
      />
      {overlay && (
        <div className={`absolute inset-0 ${overlayClasses}`}></div>
      )}
    </>
  );
}

export default SmartBackground;
