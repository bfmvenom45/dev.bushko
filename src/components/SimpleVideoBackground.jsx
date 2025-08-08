// Simple Video Background Component
import { useState, useEffect, useRef } from 'react';
import VideoPlayButton from './VideoPlayButton';

export function SimpleVideoBackground({ 
  videoSrc, 
  imageSrc, 
  overlayClasses = "bg-gradient-to-br from-slate-900/60 via-slate-900/30 to-slate-800/60"
}) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [needsUserInteraction, setNeedsUserInteraction] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      
      const handleCanPlay = () => {
        console.log('✅ Video can play, attempting autoplay...');
        setVideoLoaded(true);
        
        // Try to play video
        video.play().then(() => {
          console.log('🎬 Video playing successfully');
          setNeedsUserInteraction(false);
        }).catch(err => {
          console.log('❌ Autoplay blocked:', err.message);
          console.log('🔧 Will show play button');
          setNeedsUserInteraction(true);
        });
      };

      const handleError = (e) => {
        console.log('❌ Video error:', e);
        setVideoError(true);
      };

      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('error', handleError);
      video.addEventListener('loadeddata', () => console.log('📹 Video data loaded'));

      return () => {
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('error', handleError);
      };
    }
  }, []);

  const handleVideoPlay = () => {
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        console.log('🎬 Manual play successful');
        setNeedsUserInteraction(false);
      }).catch(err => {
        console.log('❌ Manual play failed:', err);
      });
    }
  };

  if (videoError) {
    console.log('🖼️ Using image fallback due to video error');
    return (
      <>
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${imageSrc})` }}
        />
        <div className={`absolute inset-0 ${overlayClasses}`}></div>
      </>
    );
  }

  return (
    <>
      {/* Video Background */}
      <video 
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          videoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={imageSrc}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Image shown while video loads */}
      {!videoLoaded && (
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${imageSrc})` }}
        />
      )}

      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayClasses}`}></div>

      {/* Play button if autoplay is blocked */}
      {needsUserInteraction && !videoError && (
        <VideoPlayButton onVideoPlay={handleVideoPlay} />
      )}
    </>
  );
}

export default SimpleVideoBackground;
