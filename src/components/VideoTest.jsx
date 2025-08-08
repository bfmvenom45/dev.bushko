// Video Test Component для діагностики
import { useState, useRef, useEffect } from 'react';

export function VideoTest() {
  const [status, setStatus] = useState('initializing');
  const [logs, setLogs] = useState([]);
  const videoRef = useRef(null);

  const addLog = (message) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [...prev, `[${timestamp}] ${message}`]);
    console.log(message);
  };

  useEffect(() => {
    addLog('🔍 VideoTest component mounted');
    
    if (videoRef.current) {
      const video = videoRef.current;
      
      video.addEventListener('loadstart', () => addLog('📡 Video load started'));
      video.addEventListener('loadedmetadata', () => addLog('📊 Video metadata loaded'));
      video.addEventListener('loadeddata', () => addLog('📹 Video data loaded'));
      video.addEventListener('canplay', () => addLog('▶️ Video can start playing'));
      video.addEventListener('canplaythrough', () => addLog('🎬 Video can play through'));
      video.addEventListener('play', () => addLog('✅ Video started playing'));
      video.addEventListener('pause', () => addLog('⏸️ Video paused'));
      video.addEventListener('ended', () => addLog('🏁 Video ended'));
      video.addEventListener('error', (e) => addLog(`❌ Video error: ${e.message}`));
      video.addEventListener('stalled', () => addLog('🚫 Video stalled'));
      video.addEventListener('waiting', () => addLog('⏳ Video waiting'));
      
      return () => {
        video.removeEventListener('loadstart', () => {});
        // Remove other listeners...
      };
    }
  }, []);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
        .then(() => addLog('✅ Manual play successful'))
        .catch(err => addLog(`❌ Manual play failed: ${err.message}`));
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      addLog('⏸️ Manual pause');
    }
  };

  return (
    <div className="fixed top-4 right-4 w-96 bg-black/90 text-white p-4 rounded-lg z-50 max-h-96 overflow-auto text-xs font-mono">
      <h3 className="text-lg font-bold mb-2">🎬 Video Diagnostics</h3>
      
      {/* Controls */}
      <div className="flex gap-2 mb-4">
        <button 
          onClick={handlePlay}
          className="px-3 py-1 bg-green-600 rounded hover:bg-green-700"
        >
          ▶️ Play
        </button>
        <button 
          onClick={handlePause}
          className="px-3 py-1 bg-red-600 rounded hover:bg-red-700"
        >
          ⏸️ Pause
        </button>
      </div>

      {/* Video Element */}
      <video 
        ref={videoRef}
        className="w-full h-20 bg-gray-800 mb-4"
        muted
        playsInline
        preload="auto"
        poster="/images/images/bg-hero.jpg"
      >
        <source src="/video/bg-hero.mp4" type="video/mp4" />
        <source src="/video/optimized/bg-hero-optimized.mp4" type="video/mp4" />
        <source src="/video/optimized/bg-hero-optimized.webm" type="video/webm" />
      </video>

      {/* Video Info */}
      <div className="mb-4 text-xs">
        <div>Ready State: {videoRef.current?.readyState || 'N/A'}</div>
        <div>Network State: {videoRef.current?.networkState || 'N/A'}</div>
        <div>Paused: {videoRef.current?.paused ? 'Yes' : 'No'}</div>
        <div>Muted: {videoRef.current?.muted ? 'Yes' : 'No'}</div>
        <div>Duration: {videoRef.current?.duration || 'N/A'}s</div>
        <div>Current Time: {videoRef.current?.currentTime || 'N/A'}s</div>
      </div>

      {/* Logs */}
      <div className="border-t pt-2">
        <div className="font-bold mb-1">📋 Event Log:</div>
        <div className="max-h-32 overflow-y-auto">
          {logs.map((log, index) => (
            <div key={index} className="text-xs">{log}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoTest;
