import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const { animationsEnabled } = useAnimationContext();

  useEffect(() => {
    const targetDate = new Date('December 8, 2025 15:00:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section 
      id="countdown" 
      className="section-pastel-blue py-2 px-4 relative"
      initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={animationsEnabled ? { duration: 1, delay: 2.5 } : { duration: 0 }}
    >
      {/* Decorative Line Art */}
      <div className="line-art-corner-tl" />
      <div className="line-art-corner-br" />
      <div className="line-art-circle" style={{ top: '10%', right: '5%' }} />
      <div className="line-art-circle" style={{ bottom: '15%', left: '8%', width: '120px', height: '120px' }} />
      
      <div className="max-w-4xl mx-auto text-center relative">
        <motion.div 
          className="mb-12"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 0.3 } : { duration: 0 }}
        >
          <p className="text-2xl font-display font-bold text-primary mb-4 tracking-wider">
            December 8, 2025
          </p>
          <h2 className="text-4xl font-display text-foreground mb-2" data-testid="text-countdown-title">
            Forever starts soon
          </h2>
        </motion.div>



        <motion.div 
          className="grid grid-cols-4 gap-4 md:gap-8 max-w-lg mx-auto"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 0.6 } : { duration: 0 }}
        >
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              className="text-center"
              initial={animationsEnabled ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={animationsEnabled ? { 
                duration: 0.6, 
                ease: "easeOut", 
                delay: 0.8 + (index * 0.1) 
              } : { duration: 0 }}
              data-testid={`countdown-${item.label.toLowerCase()}`}
            >
              <motion.div 
                className="text-3xl md:text-4xl font-display mb-1 text-primary"
                key={item.value}
                initial={animationsEnabled ? { opacity: 0.7, scale: 0.9 } : { opacity: 1, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={animationsEnabled ? { duration: 0.3 } : { duration: 0 }}
              >
                {item.value.toString().padStart(2, '0')}
              </motion.div>
              <div className="text-xs font-body uppercase tracking-wider text-muted-foreground">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
};

export default CountdownSection;