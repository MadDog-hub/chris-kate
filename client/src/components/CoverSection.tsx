interface CoverSectionProps {
  imageUrl: string;
  alt: string;
  className?: string;
}

const CoverSection = ({ imageUrl, alt, className = "" }: CoverSectionProps) => {
  // Detect if the URL is a video
  const isVideo = imageUrl.match(/\.(mp4|webm|ogg)$/i) || imageUrl.includes('/video/');

  return (
    <section className={`relative w-full overflow-hidden ${className}`}>
      {/* Full Width Image/Video Container */}
      <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden">
        {isVideo ? (
          <video
            src={imageUrl}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            webkit-playsinline="true"
            x5-playsinline="true"
            x-webkit-airplay="allow"
            controls={false}
            style={{
              display: 'block',
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              objectPosition: 'top',
              margin: 0,
              padding: 0
            }}
            onLoadedMetadata={(e) => {
              const video = e.currentTarget;
              // Force muted state
              video.muted = true;
              video.play().catch((error) => {
                console.log('Autoplay prevented, will retry on user interaction:', error);
              });
            }}
            onCanPlay={(e) => {
              const video = e.currentTarget;
              video.muted = true;
              video.play().catch(() => {
                // Silently handle autoplay restrictions on mobile
              });
            }}
            onClick={(e) => {
              const video = e.currentTarget;
              if (video.paused) {
                video.play();
              }
            }}
            data-testid="cover-video"
          />
        ) : (
          <img
            src={imageUrl}
            alt={alt}
            style={{
              display: 'block',
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              objectPosition: 'top',
              margin: 0,
              padding: 0
            }}
            data-testid="cover-image"
          />
        )}
      </div>
    </section>
  );
};

export default CoverSection;
