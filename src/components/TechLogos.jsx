export const TechLogos = {
  React: () => (
    <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-full h-full">
      <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
      <g stroke="#61dafb" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  ),
  
  TypeScript: () => (
    <svg viewBox="0 0 400 400" className="w-full h-full">
      <rect width="400" height="400" rx="50" fill="#3178c6"/>
      <clipPath id="a">
        <rect width="400" height="400" rx="50"/>
      </clipPath>
      <rect clipPath="url(#a)" x="0" y="150" width="400" height="100" fill="#ffffff"/>
      <rect x="100" y="200" width="200" height="50" fill="#3178c6"/>
      <path d="M150 280V200h50v-30h-100v30h50v80h50z" fill="#ffffff"/>
      <path d="M250 280c0-20 15-35 35-35s35 15 35 35-15 35-35 35-35-15-35-35zm70 0c0-15-10-25-25-25s-25 10-25 25 10 25 25 25 25-10 25-25z" fill="#ffffff"/>
    </svg>
  ),
  
  NextJS: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <circle cx="12" cy="12" r="11" fill="#000000"/>
      <path d="m13.5 7.5 6.544 9.544a10.97 10.97 0 0 0 1.956-6.894c0-.8-.081-1.582-.236-2.334A10.94 10.94 0 0 0 19.74 5.27 10.94 10.94 0 0 0 12 2c-2.87 0-5.504 1.1-7.465 2.9L13.5 7.5Z" fill="#ffffff"/>
      <path d="M8.485 5.514A10.97 10.97 0 0 0 2 12c0 6.075 4.925 11 11 11 1.5 0 2.931-.3 4.236-.844L8.485 5.514Z" fill="#ffffff"/>
    </svg>
  ),
  
  Tailwind: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" fill="#06b6d4"/>
    </svg>
  ),
  
  ThreeJS: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <g fill="#ffffff">
        <polygon points="12,2 2,7 2,17 12,22 22,17 22,7" strokeWidth="1.5" stroke="#ffffff" fill="none"/>
        <polygon points="12,7 7,10 7,14 12,17 17,14 17,10" fill="rgba(255,255,255,0.3)"/>
        <line x1="12" y1="7" x2="12" y2="17" stroke="#ffffff" strokeWidth="1"/>
        <line x1="12" y1="7" x2="17" y2="10" stroke="#ffffff" strokeWidth="1"/>
        <line x1="12" y1="7" x2="7" y2="10" stroke="#ffffff" strokeWidth="1"/>
        <line x1="7" y1="14" x2="12" y2="17" stroke="#ffffff" strokeWidth="1"/>
        <line x1="17" y1="14" x2="12" y2="17" stroke="#ffffff" strokeWidth="1"/>
      </g>
    </svg>
  ),
  
  Zustand: () => (
    <svg viewBox="0 0 128 128" className="w-full h-full">
      <defs>
        <radialGradient id="zustand-gradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FF8C42"/>
          <stop offset="100%" stopColor="#FF6B35"/>
        </radialGradient>
      </defs>
      <ellipse cx="64" cy="45" rx="30" ry="25" fill="url(#zustand-gradient)"/>
      <ellipse cx="64" cy="90" rx="35" ry="28" fill="url(#zustand-gradient)"/>
      <circle cx="55" cy="42" r="4" fill="#000"/>
      <circle cx="73" cy="42" r="4" fill="#000"/>
      <ellipse cx="64" cy="50" rx="8" ry="4" fill="#000"/>
      <circle cx="45" cy="75" r="3" fill="#000"/>
      <circle cx="83" cy="75" r="3" fill="#000"/>
      <circle cx="50" cy="85" r="2" fill="#000"/>
      <circle cx="78" cy="85" r="2" fill="#000"/>
    </svg>
  ),
  
  Blender: () => (
    <svg viewBox="0 0 128 128" className="w-full h-full">
      <defs>
        <radialGradient id="blender-bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F5792A"/>
          <stop offset="100%" stopColor="#E85A00"/>
        </radialGradient>
      </defs>
      <circle cx="64" cy="64" r="60" fill="url(#blender-bg)"/>
      <circle cx="50" cy="50" r="20" fill="rgba(255,255,255,0.9)"/>
      <circle cx="85" cy="80" r="25" fill="rgba(255,255,255,0.6)"/>
      <circle cx="50" cy="50" r="8" fill="#F5792A"/>
      <circle cx="85" cy="80" r="12" fill="#F5792A"/>
      <circle cx="48" cy="47" r="3" fill="rgba(255,255,255,0.8)"/>
      <circle cx="82" cy="77" r="4" fill="rgba(255,255,255,0.6)"/>
    </svg>
  ),
  
  Photoshop: () => (
    <svg viewBox="0 0 240 234" className="w-full h-full">
      <rect width="240" height="234" rx="42" fill="#001e36"/>
      <rect x="10" y="10" width="220" height="214" rx="32" fill="#31A8FF"/>
      <path d="M30 54h42c24 0 42 12 42 36s-18 36-42 36H54v36H30V54zm24 48h18c12 0 18-6 18-12s-6-12-18-12H54v24z" fill="#ffffff"/>
      <path d="M150 126c0-12 12-24 24-24s24 12 24 24-12 24-24 24-24-12-24-24zm0-24h12v-12h12v12h12v12h-12v12h-12v-12h-12v-12z" fill="#ffffff"/>
    </svg>
  ),
  
  Lightroom: () => (
    <svg viewBox="0 0 240 234" className="w-full h-full">
      <rect width="240" height="234" rx="42" fill="#001e36"/>
      <rect x="10" y="10" width="220" height="214" rx="32" fill="#31A8FF"/>
      <path d="M30 54h24v108h36v24H30V54z" fill="#ffffff"/>
      <path d="M120 78h12v24h24v12h-24v24h-12v-24h-24v-12h24V78zm24 72c0 12-12 24-24 24s-24-12-24-24 12-24 24-24 24 12 24 24z" fill="#ffffff"/>
    </svg>
  ),
  
  Photography: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <rect x="2" y="6" width="20" height="14" rx="2" fill="none" stroke="#FF6B6B" strokeWidth="1.5"/>
      <circle cx="12" cy="13" r="4" fill="none" stroke="#FF6B6B" strokeWidth="1.5"/>
      <rect x="6" y="4" width="4" height="2" rx="1" fill="#FF6B6B"/>
      <circle cx="18.5" cy="8.5" r="1" fill="#FF6B6B"/>
      <circle cx="12" cy="13" r="2" fill="#FF6B6B" opacity="0.6"/>
      <path d="M8 13a4 4 0 0 1 8 0" stroke="#FF6B6B" strokeWidth="0.5" fill="none" opacity="0.4"/>
    </svg>
  )
}

export const getLogoComponent = (name) => {
  const logoMap = {
    'React': TechLogos.React,
    'TypeScript': TechLogos.TypeScript,
    'Next.js': TechLogos.NextJS,
    'Tailwind': TechLogos.Tailwind,
    'Three.js': TechLogos.ThreeJS,
    'Zustand': TechLogos.Zustand,
    'Blender': TechLogos.Blender,
    'Photoshop': TechLogos.Photoshop,
    'Lightroom': TechLogos.Lightroom,
    'Photography': TechLogos.Photography
  }
  
  return logoMap[name] || (() => <div>{name[0]}</div>)
}
