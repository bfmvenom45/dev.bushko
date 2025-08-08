// Responsive Image Component with WebP support
export function ResponsiveImage({ 
  src, 
  alt, 
  className = "", 
  sizes = "100vw",
  loading = "lazy"
}) {
  const baseName = src.replace(/\.[^/.]+$/, ""); // Remove extension
  
  return (
    <picture className={className}>
      {/* WebP format for modern browsers */}
      <source 
        srcSet={`
          ${baseName}-768.webp 768w,
          ${baseName}-1280.webp 1280w,
          ${baseName}-1920.webp 1920w
        `}
        sizes={sizes}
        type="image/webp"
      />
      
      {/* JPEG fallback */}
      <source 
        srcSet={`
          ${baseName}-768.jpg 768w,
          ${baseName}-1280.jpg 1280w,
          ${baseName}-1920.jpg 1920w
        `}
        sizes={sizes}
        type="image/jpeg"
      />
      
      {/* Fallback img tag */}
      <img 
        src={`${baseName}-1920.jpg`}
        alt={alt}
        loading={loading}
        className="w-full h-full object-cover"
      />
    </picture>
  );
}

// Background Video Component with optimization
export function BackgroundVideo({ 
  src, 
  poster, 
  className = "",
  overlay = true 
}) {
  const baseName = src.replace(/\.[^/.]+$/, ""); // Remove extension
  
  return (
    <>
      <video 
        className={`absolute inset-0 w-full h-full object-cover ${className}`}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
      >
        <source src={`${baseName}.webm`} type="video/webm" />
        <source src={`${baseName}.mp4`} type="video/mp4" />
        Your browser does not support video backgrounds.
      </video>
      
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/50 to-slate-800/80"></div>
      )}
    </>
  );
}
