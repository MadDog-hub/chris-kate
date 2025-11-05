import { useEffect, useRef, useState } from 'react';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import MusicConsentPopup from '@/components/MusicConsentPopup';
import CountdownSection from '@/components/CountdownSection';
import StorySection from '@/components/StorySection';
import ScrollTriggeredTimeline from '@/components/ScrollTriggeredTimeline';
import VenueSection from '@/components/VenueSection';
import DressCodeSection from '@/components/DressCodeSection';
import HashtagGiftsSection from '@/components/HashtagGiftsSection';
import EntourageSection from '@/components/EntourageSection';
import RSVPSection from '@/components/RSVPSection';
import MemorableMomentsSection from '@/components/MemorableMomentsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import CoverSection from '@/components/CoverSection';
import InvitationRevealSection from '@/components/InvitationRevealSection';
import MusicControl from '@/components/MusicControl';
import { AnimationContext } from '@/contexts/AnimationContext';

// Cover videos from Cloudinary
const cover1Video = 'https://res.cloudinary.com/ddkgrqrt9/video/upload/v1762332256/Sunset_1_d5jxuo.mov';
const cover2Video = 'https://res.cloudinary.com/ddkgrqrt9/video/upload/v1762332253/Sunset_2_uvqh3l.mov';
const proposalVideo = 'https://res.cloudinary.com/ddkgrqrt9/video/upload/v1762332256/Proposal_nh5seg.mov';

const Index = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [showMusicConsent, setShowMusicConsent] = useState(true);
  const [animationsEnabled, setAnimationsEnabled] = useState(false);

  // Handle music consent
  const handleMusicConsent = async (consent: boolean) => {
    setShowMusicConsent(false);
    setAnimationsEnabled(true);
    if (consent && audioRef.current) {
      try {
        await audioRef.current.play();
      } catch (error) {
        console.error('Music play failed:', error);
      }
    }
  };

  // Ensure audio is properly initialized
  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current;
      audio.volume = 0.3;
      audio.loop = true;

      // Handle audio loading
      const handleCanPlay = () => {
        console.log('Audio is ready to play');
      };

      const handleError = (e: Event) => {
        console.error('Audio loading error:', e);
      };

      const handleLoadedData = () => {
        console.log('Audio data loaded successfully');
      };

      audio.addEventListener('canplay', handleCanPlay);
      audio.addEventListener('error', handleError);
      audio.addEventListener('loadeddata', handleLoadedData);

      return () => {
        audio.removeEventListener('canplay', handleCanPlay);
        audio.removeEventListener('error', handleError);
        audio.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, []);

  return (
    <AnimationContext.Provider value={{ animationsEnabled }}>
      {/* Background Music - Always present */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        crossOrigin="anonymous"
        style={{ display: 'none' }}
        data-testid="background-audio"
      >
        <source
          src="https://res.cloudinary.com/ddkgrqrt9/video/upload/v1762329446/ytmp3free.cc_found-a-love-official-lyric-video-7-hills-worship-youtubemp3free.org_qmvwne.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>

      <div className="min-h-screen relative">
        <Navigation />

        {/* Music Consent Popup */}
        <MusicConsentPopup 
          onConsent={handleMusicConsent} 
          isVisible={showMusicConsent}
        />

        {/* Main Content Sections */}
        <main className="relative z-10">
          <HeroSection />
          <InvitationRevealSection />
          <CountdownSection />
          <StorySection />
          
          {/* The Proposal Video Section */}
          <div className="w-full">
            <div className="text-center py-8 bg-gradient-to-b from-background to-background/95">
              <h2 className="text-4xl md:text-5xl font-script italic text-primary" data-testid="text-proposal-header">
                The Proposal on
              </h2>
            </div>
            <CoverSection
              imageUrl={proposalVideo}
              alt="Chris & Kate Proposal Video"
            />
          </div>
          
          <ScrollTriggeredTimeline />
          <CoverSection
            imageUrl={cover1Video}
            alt="Chris & Kate Wedding Cover Video 1"
          />
          <VenueSection />
          <DressCodeSection />
          <CoverSection
            imageUrl={cover2Video}
            alt="Chris & Kate Wedding Cover Video 2"
          />
          <HashtagGiftsSection />
          <RSVPSection />
          <MemorableMomentsSection />
          <EntourageSection />
          <FAQSection />
          <Footer />
        </main>

        {/* Music Control - always show */}
        <MusicControl audioRef={audioRef} />
      </div>
    </AnimationContext.Provider>
  );
};

export default Index;