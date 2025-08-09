// Simple static background component
export function StaticBackground({ 
  imageSrc, 
  overlayClasses = "bg-gradient-to-br from-slate-900/80 via-slate-900/50 to-slate-800/80"
}) {
  return (
    <>
      {/* Static image background */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ 
          backgroundImage: `url(${imageSrc})`,
          transform: 'translateZ(0)',
          willChange: 'auto'
        }}
      />
      
      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayClasses}`}></div>
    </>
  )
}
