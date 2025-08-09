// Video Play Button for autoplay-blocked scenarios
import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';

export function VideoPlayButton({ onVideoPlay }) {
  const [hidden, setHidden] = useState(false);
  const { t } = useLanguage();

  const handleClick = () => {
    onVideoPlay();
    setHidden(true);
  };

  if (hidden) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-10">
      <button
        onClick={handleClick}
        className="group relative px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/30 transition-all duration-300"
      >
        <div className="flex items-center gap-3 text-white">
          <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-2"></div>
          <span className="text-lg font-semibold">{t('common.playVideo')}</span>
        </div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>
    </div>
  );
}

export default VideoPlayButton;
