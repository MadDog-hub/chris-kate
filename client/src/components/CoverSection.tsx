import { useEffect, useRef } from 'react';

interface CoverSectionProps {
  imageUrl: string;
  alt: string;
  className?: string;
  startTime?: number;
  endTime?: number;
}

const CoverSection = ({ imageUrl, alt, className = "", startTime, endTime }: CoverSectionProps) => {
  const iframeRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Detect if the URL is a YouTube video
  const isYouTube = imageUrl.includes('youtube.com') || imageUrl.includes('youtu.be');
  
  // Detect if the URL is a regular video file
  const isVideo = imageUrl.match(/\.(mp4|webm|ogg|mov)$/i) || imageUrl.includes('/video/');
  
  // Extract YouTube video ID
  const getYouTubeVideoId = (url: string): string | null => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=)([^&]+)/,
      /(?:youtu\.be\/)([^?]+)/,
      /(?:youtube\.com\/embed\/)([^?]+)/
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return null;
  };

  useEffect(() => {
    if (!isYouTube || typeof window === 'undefined') return;

    const videoId = getYouTubeVideoId(imageUrl);
    if (!videoId) return;

    // Load YouTube IFrame API
    const loadYouTubeAPI = () => {
      if ((window as any).YT && (window as any).YT.Player) {
        initializePlayer();
        return;
      }

      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      (window as any).onYouTubeIframeAPIReady = initializePlayer;
    };

    const initializePlayer = () => {
      if (!iframeRef.current) return;

      playerRef.current = new (window as any).YT.Player(iframeRef.current, {
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          mute: 1,
          loop: 0,
          playsinline: 1,
          start: startTime || 0,
          end: endTime,
          fs: 0,
          iv_load_policy: 3,
          disablekb: 1,
        },
        events: {
          onReady: (event: any) => {
            event.target.mute();
            event.target.playVideo();
            
            // Set up time checking for looping
            if (startTime !== undefined && endTime !== undefined) {
              intervalRef.current = setInterval(() => {
                if (playerRef.current && playerRef.current.getCurrentTime) {
                  const currentTime = playerRef.current.getCurrentTime();
                  if (currentTime >= endTime) {
                    playerRef.current.seekTo(startTime, true);
                  }
                }
              }, 100);
            }
          },
          onStateChange: (event: any) => {
            // Loop the video when it ends
            if (event.data === (window as any).YT.PlayerState.ENDED) {
              if (startTime !== undefined) {
                playerRef.current.seekTo(startTime, true);
                playerRef.current.playVideo();
              }
            }
          }
        }
      });
    };

    loadYouTubeAPI();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy();
      }
    };
  }, [imageUrl, startTime, endTime, isYouTube]);

  if (isYouTube) {
    return (
      <section className={`relative w-full overflow-hidden ${className}`}>
        <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden">
          <div 
            style={{
              position: 'relative',
              paddingBottom: '56.25%', // 16:9 aspect ratio
              height: 0,
              overflow: 'hidden'
            }}
          >
            <div
              ref={iframeRef as any}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none'
              }}
              data-testid="cover-youtube-video"
            />
            <style>
              {`
                .ytp-pause-overlay,
                .ytp-title,
                .ytp-title-channel,
                .ytp-watermark,
                .ytp-chrome-top,
                .ytp-show-cards-title,
                .ytp-endscreen-content,
                .ytp-gradient-top,
                .ytp-gradient-bottom {
                  display: none !important;
                  opacity: 0 !important;
                  visibility: hidden !important;
                }
              `}
            </style>
          </div>
        </div>
      </section>
    );
  }

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
