import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';
import { useAnimationContext } from '@/contexts/AnimationContext';

const heroVideo = 'https://res.cloudinary.com/ddkgrqrt9/video/upload/v1762329340/First_page_dla9c0.mp4';

const HeroSection = () => {
  const [showElements, setShowElements] = useState(false);
  const { animationsEnabled } = useAnimationContext();

  return (
    <section 
      className="hero-section relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: 'center' }}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      {/* Cinematic gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] text-white tracking-wide leading-tight" data-testid="text-main-invitation" style={{ fontFamily: 'Boska, serif', fontWeight: 300 }}>
            {animationsEnabled ? (
              <TypeAnimation
                sequence={[
                  'CHRIS\n&\nKATE',
                  () => {
                    setShowElements(true);
                  }
                ]}
                wrapper="span"
                speed={{ type: 'keyStrokeDelayInMs', value: 273 }}
                style={{ 
                  whiteSpace: 'pre-line',
                  display: 'inline-block'
                }}
                cursor={true}
                repeat={0}
                className="typewriter-text"
              />
            ) : (
              <span 
                style={{ 
                  whiteSpace: 'pre-line',
                  display: 'inline-block'
                }}
                className="typewriter-text"
              >
                CHRIS
                <br />
                &
                <br />
                KATE
              </span>
            )}
          </h1>
        </div>

        <div className={`transition-all duration-700 ${(animationsEnabled && showElements) ? 'animate-fade-up opacity-100' : (!animationsEnabled ? 'opacity-100' : 'opacity-0')}`}>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 mb-10 max-w-lg mx-auto shadow-2xl">
            <div className="space-y-3">
              <div className="text-center">
                <p className="text-lg sm:text-xl text-white font-light tracking-wide font-times" data-testid="text-date">
                  12.08.2025 | Sunday
                </p>
              </div>
              <div className="text-center">
                <p className="text-lg sm:text-xl text-white font-light tracking-wide font-times" data-testid="text-venue">
                  The Secret Garden, Venue 88
                </p>
                <p className="text-base sm:text-lg text-white font-light tracking-wide font-times">
                  Venue 88 Hotel and Events Place - DOME 1
                </p>
              </div>
            </div>
          </div>
          
          {/* RSVP Button */}
          <div className={`transition-all duration-700 opacity-100 mt-[10px] mb-[10px] ${animationsEnabled ? 'animate-fade-scale' : ''}`}>
            <a href="https://chriskatewed.replit.app/" target="_blank" rel="noopener noreferrer">
              <button
                className="animated-rsvp-btn"
                aria-label="RSVP to Wedding"
                data-testid="button-rsvp-hero"
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="bg-card"></span>
                <span>RSVP</span>
              </button>
            </a>
          </div>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <p className="text-white text-sm font-light tracking-wide">Scroll Down</p>
          <svg 
            className="w-6 h-6 text-white" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      {/* Improved mobile responsiveness */}
      <style>{`
        .hero-section {
          min-height: 100vh !important;
        }
        @media (min-width: 768px) {
          .hero-section {
            min-height: 100vh !important;
          }
        }
        @media (max-width: 767px) {
          .hero-section {
            background-attachment: scroll !important;
            background-size: cover !important;
            padding-top: 1rem;
            padding-bottom: 1rem;
            min-height: 100vh !important;
          }
          .hero-section h1 {
            font-size: 2.5rem !important;
            line-height: 1.2 !important;
          }
          .hero-section .bg-white\\/10 {
            padding: 1.5rem !important;
            margin-bottom: 2rem !important;
          }
        }


        /* Animated RSVP Button */
        .animated-rsvp-btn {
          font-family: Arial, Helvetica, sans-serif;
          font-weight: bold;
          color: hsl(var(--primary-foreground));
          background-color: hsl(var(--primary));
          padding: 1em 2em;
          border: none;
          border-radius: 0;
          position: relative;
          cursor: pointer;
          overflow: hidden;
        }

        .animated-rsvp-btn span:not(:nth-child(6)) {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          height: 30px;
          width: 30px;
          background-color: hsl(var(--accent));
          border-radius: 50%;
          transition: .6s ease;
        }

        .animated-rsvp-btn span:nth-child(6) {
          position: relative;
        }

        .animated-rsvp-btn span:nth-child(1) {
          transform: translate(-3.3em, -4em);
        }

        .animated-rsvp-btn span:nth-child(2) {
          transform: translate(-6em, 1.3em);
        }

        .animated-rsvp-btn span:nth-child(3) {
          transform: translate(-.2em, 1.8em);
        }

        .animated-rsvp-btn span:nth-child(4) {
          transform: translate(3.5em, 1.4em);
        }

        .animated-rsvp-btn span:nth-child(5) {
          transform: translate(3.5em, -3.8em);
        }

        .animated-rsvp-btn:hover span:not(:nth-child(6)) {
          transform: translate(-50%, -50%) scale(4);
          transition: 1.5s ease;
        }

        /* Custom underscore cursor for TypeAnimation */
        .typewriter-text .react-type-animation-cursor {
          color: white;
          animation: blink 1.2s infinite;
        }

        .typewriter-text .react-type-animation-cursor::after {
          content: '_';
          font-weight: bold;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
