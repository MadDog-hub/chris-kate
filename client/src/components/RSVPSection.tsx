import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';

const RSVPSection = () => {
  const { animationsEnabled } = useAnimationContext();
  return (
    <motion.section 
      id="rsvp" 
      className="section-pastel-blue py-12 px-4 relative overflow-hidden"
      initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={animationsEnabled ? { duration: 1, delay: 10.5 } : { duration: 0 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 border border-primary/30 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 border border-primary/30 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Section Header */}
        <motion.div 
          className="mb-16"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 10.8 } : { duration: 0 }}
        >
          <h2 className="text-5xl font-script italic font-black text-gold mb-8" data-testid="text-rsvp-title">
            Please RSVP
          </h2>
        </motion.div>

        {/* Main RSVP Content */}
        <motion.div 
          className="mb-12"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 11.1 } : { duration: 0 }}
        >
          <div className="bg-card/30 border border-border rounded-xl p-12 shadow-soft hover-elegant">
            {/* RSVP Deadline */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-2 text-foreground">RSVP Deadline</h3>
              <p className="text-lg text-muted-foreground">November 8, 2025</p>
            </div>

            {/* RSVP Message */}
            <div className="space-y-6 mb-8">
              <p className="text-xl font-script italic leading-relaxed text-foreground/95" data-testid="text-rsvp-message">
                Your presence would make our day complete
              </p>
              <p className="text-xl font-script italic text-foreground/90 leading-relaxed" data-testid="text-rsvp-details">
                Please confirm your attendance by clicking the button below. 
                We're excited to celebrate this special moment with you!
              </p>
            </div>

            {/* RSVP Button */}
            <a href="https://chriskatewed.replit.app/" target="_blank" rel="noopener noreferrer">
              <button
                className="animated-rsvp-btn"
                aria-label="RSVP to Wedding"
                data-testid="button-rsvp"
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="bg-card"></span>
                <span>RSVP Now</span>
              </button>
            </a>

            {/* Decorative Elements */}
            <div className="mt-8 flex justify-center items-center space-x-4">
              <div className="w-12 h-px bg-primary/30"></div>
              <div className={`w-3 h-3 bg-primary rounded-full ${animationsEnabled ? 'animate-float' : ''}`}></div>
              <div className="w-12 h-px bg-primary/30"></div>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div 
          className="text-center max-w-2xl mx-auto"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 11.4 } : { duration: 0 }}
        >
          <p className="text-lg leading-relaxed text-foreground/90">
            Can't wait to celebrate with you! If you have any questions or special dietary requirements, please let us know when you RSVP.
          </p>
        </motion.div>
      </div>
      {/* Animated RSVP Button Styles */}
      <style>{`
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
      `}</style>
    </motion.section>
  );
};

export default RSVPSection;