import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => {
      // Pause background music when video starts
      const audio = document.querySelector('audio[data-testid="background-audio"]') as HTMLAudioElement;
      if (audio) {
        audio.pause();
      }
    };

    const handlePause = () => {
      // Resume background music when video pauses
      const audio = document.querySelector('audio[data-testid="background-audio"]') as HTMLAudioElement;
      if (audio) {
        audio.play().catch(() => {
          // Silently handle autoplay restrictions
        });
      }
    };

    const handleEnded = () => {
      // Resume background music when video ends
      const audio = document.querySelector('audio[data-testid="background-audio"]') as HTMLAudioElement;
      if (audio) {
        audio.play().catch(() => {
          // Silently handle autoplay restrictions
        });
      }
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <motion.section 
      className="section-hard-blue relative w-full overflow-hidden py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 4.5 }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-display mb-8 text-center text-primary" data-testid="text-video-title">
          Save the Date Video
        </h2>
      </div>
      <div className="relative w-full overflow-hidden">
        <video
          ref={videoRef}
          loop
          playsInline
          controls
          preload="metadata"
          webkit-playsinline="true"
          x5-playsinline="true"
          x-webkit-airplay="allow"
          controlsList="nodownload"
          style={{
            display: 'block',
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
            objectPosition: 'top',
            margin: 0,
            padding: 0
          }}
        >
          <source
            src="https://res.cloudinary.com/dpzxdmqqg/video/upload/v1755326629/LUIS_JESSY_Our_Prenup_Music_Video_zfytbf_g7zn7u_tdoloe.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </motion.section>
  );
};

export default VideoSection;