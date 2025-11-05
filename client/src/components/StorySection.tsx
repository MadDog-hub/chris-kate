import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';
import { Heart, Sparkles, CloudRain, MapPin, BookOpen } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

import dinnerImage from '@assets/december-20-2020-dinner.png';
import proposalImage1 from '@assets/proposal-chocolate-hills-1.jpg';
import proposalImage2 from '@assets/proposal-chocolate-hills-2.jpg';
import trafficImage from '@assets/traffic-encounter.jpg';

gsap.registerPlugin(ScrollTrigger);

const StorySection = () => {
  const { animationsEnabled } = useAnimationContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState<{ [key: number]: { x: number; y: number } }>({});
  const [openDialog, setOpenDialog] = useState(false);

  const storyCards = [
    {
      id: 1,
      title: "Our Promise",
      subtitle: "",
      text: "Through every season, we promise to walk hand in hand, embracing both joy and challenge with unwavering love and faith.",
      fullText: "",
      image: proposalImage2,
      icon: Heart,
      showReadButton: false
    },
    {
      id: 2,
      title: "Our Future",
      subtitle: "",
      text: "Together, we step into a future filled with hope and endless possibilities, building a life rooted in love and shared dreams.",
      fullText: "",
      image: null,
      icon: Sparkles,
      showReadButton: true
    },
    {
      id: 3,
      title: "Our Vow",
      subtitle: "",
      text: '"Above all, clothe yourselves with love, which binds us all together in perfect harmony."',
      fullText: "Colossians 3:14",
      image: null,
      icon: Heart,
      showReadButton: false
    },
    {
      id: 4,
      title: "Our Love Story",
      subtitle: "How It All Began",
      text: "Their story began, as so many modern tales do, with a mutual connection on FB Dating in September 2019. This initial exchange was fleeting, lasting barely a week before Kate deleted the account, which she had only created for a feature trial.",
      fullText: "",
      image: trafficImage,
      icon: BookOpen,
      showReadButton: false
    }
  ];

  useEffect(() => {
    const container = containerRef.current;
    const horizontal = horizontalRef.current;

    if (!container || !horizontal || !animationsEnabled) return;

    const isMobile = window.innerWidth < 1024;
    const scrollMultiplier = isMobile ? 3 : 2;
    const scrubValue = isMobile ? 0.3 : 0.2;

    const horizontalScrollTween = gsap.to(horizontal, {
      x: () => -(horizontal.scrollWidth - container.offsetWidth),
      ease: "none",
    });

    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: () => `+=${(horizontal.scrollWidth - container.offsetWidth) * scrollMultiplier}`,
      pin: true,
      scrub: scrubValue,
      animation: horizontalScrollTween,
      invalidateOnRefresh: true,
      anticipatePin: 1,
    });

    const handleRefresh = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('load', handleRefresh);

    const images = horizontal.querySelectorAll('img');
    images.forEach(img => {
      if (!img.complete) {
        img.addEventListener('load', handleRefresh, { once: true });
      }
    });

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    gsap.fromTo(".story-card", {
      opacity: 0,
      y: 50,
      scale: 0.9
    }, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".story-card",
        start: "top 80%",
      }
    });

    return () => {
      window.removeEventListener('load', handleRefresh);
      images.forEach(img => {
        img.removeEventListener('load', handleRefresh);
      });
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [animationsEnabled]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, cardId: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition(prev => ({
      ...prev,
      [cardId]: { x, y }
    }));
  };

  const handleMouseLeave = (cardId: number) => {
    setMousePosition(prev => {
      const newPosition = { ...prev };
      delete newPosition[cardId];
      return newPosition;
    });
  };

  return (
    <motion.section 
      id="story" 
      className="section-hard-blue relative overflow-hidden isolate"
      initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={animationsEnabled ? { duration: 1, delay: 3.5 } : { duration: 0 }}
    >
      <div className="text-center py-16 sm:py-20 px-4 relative z-10">
        <motion.div
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 3.8 } : { duration: 0 }}
        >
          <h2 className="text-4xl sm:text-5xl font-script italic font-black mb-6 sm:mb-8 text-foreground" data-testid="text-story-title">
            Together Forever
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto mb-4 text-foreground/90">
            Scroll to discover our commitment to each other
          </p>
          
          <div className="flex items-center justify-center space-x-4 mt-6 sm:mt-8">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary animate-bounce" viewBox="0 0 24 24">
              <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
            </svg>
            <span className="text-xs sm:text-sm text-muted-foreground">Scroll down</span>
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground animate-pulse" viewBox="0 0 24 24">
              <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
            </svg>
          </div>
        </motion.div>
      </div>

      <div 
        ref={containerRef} 
        className="relative overflow-hidden"
        style={{ height: '100vh' }}
      >
        <div 
          ref={horizontalRef}
          className="flex h-full items-center will-change-transform"
          style={{ width: `${storyCards.length * 100}vw` }}
        >
          {storyCards.map((card, index) => (
            <div
              key={card.id}
              className="story-card flex-shrink-0 h-full flex items-center justify-center px-4 sm:px-8 py-8 sm:py-12"
              style={{ width: '100vw', minWidth: '100vw' }}
            >
              <div 
                className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center h-full relative overflow-hidden rounded-3xl p-8 transition-all duration-300 bg-black/5 dark:bg-white/5 border border-white/10 backdrop-blur-sm"
                style={{
                  background: mousePosition[card.id] 
                    ? `radial-gradient(600px circle at ${mousePosition[card.id].x}px ${mousePosition[card.id].y}px, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.02) 40%), rgba(0, 0, 0, 0.05)`
                    : 'rgba(0, 0, 0, 0.05)'
                }}
                onMouseMove={(e) => handleMouseMove(e, card.id)}
                onMouseLeave={() => handleMouseLeave(card.id)}
                data-testid={`card-story-${card.id}`}
              >
                <div className={`space-y-6 sm:space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
                    <card.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary" strokeWidth={1.5} />
                  </div>
                  
                  <div>
                    <p className="text-sm sm:text-base text-primary/80 mb-2 font-semibold" data-testid={`text-story-card-${card.id}-subtitle`}>
                      {card.subtitle}
                    </p>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-script italic mb-4 sm:mb-6 text-foreground" data-testid={`text-story-card-${card.id}-title`}>
                      {card.title}
                    </h3>
                  </div>
                  
                  <p className="text-base sm:text-lg leading-relaxed text-foreground/90" data-testid={`text-story-card-${card.id}-text`}>
                    {card.text}
                  </p>

                  {card.fullText && (
                    <p className="text-base sm:text-lg font-body text-foreground/80 mt-4">
                      {card.fullText}
                    </p>
                  )}

                  {card.showReadButton ? (
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => setOpenDialog(true)}
                      className="mt-8 group hover:bg-primary hover:text-primary-foreground transition-all border-primary/30"
                      data-testid="button-read-full-story"
                    >
                      <BookOpen className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      Read Full Story
                    </Button>
                  ) : (
                    <div className="flex items-center space-x-4 pt-4 sm:pt-6">
                      <div className="w-12 sm:w-16 h-px bg-primary-foreground/60"></div>
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary-foreground/70" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
                      </svg>
                      <div className="w-12 sm:w-16 h-px bg-primary-foreground/60"></div>
                    </div>
                  )}
                </div>

                {card.image && (
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="aspect-square max-w-[70vw] sm:max-w-sm md:max-w-md mx-auto relative">
                      <img
                        src={card.image}
                        alt={`${card.title} moment`}
                        className="w-full h-full object-cover rounded-2xl shadow-lg"
                        data-testid={`img-story-card-${card.id}`}
                      />

                      <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4">
                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground/70 animate-spin" style={{ animationDuration: '10s' }} viewBox="0 0 24 24">
                          <path fill="currentColor" d="M12,2L13.09,8.26L22,9L13.09,9.74L12,16L10.91,9.74L2,9L10.91,8.26L12,2Z"/>
                        </svg>
                      </div>

                      <div className="absolute -bottom-1 sm:-bottom-2 -left-1 sm:-left-2">
                        <svg className="w-4 h-4 sm:w-6 sm:h-6 text-primary-foreground/60 animate-pulse" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                )}

                {!card.image && !card.showReadButton && (
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''} flex items-center justify-center`}>
                    <div className="text-center space-y-6">
                      <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-primary/10 border-4 border-primary/30">
                        <card.icon className="w-16 h-16 text-primary" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-4xl font-script italic text-primary mb-6">
              Our Complete Love Story
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 pt-4">
            <p className="text-base leading-relaxed text-foreground/90">
              Their story began, as so many modern tales do, with a mutual connection on FB Dating in September 2019. This initial exchange was fleeting, lasting barely a week before Kate deleted the account, which she had only created for a feature trial. Chris, immediately drawn to Kate and undeterred by the ensuing silence, tracked down her main Facebook account. Though Kate never accepted his friend request, they chatted sporadically on Messenger—a frustrating courtship defined by long intervals, sometimes stretching to four months, during which Kate often ignored him. He felt a deeper, insistent pull to meet her, but Kate remained cautious, agreeing to an in-person meeting only if destiny intervened—if they met purely by chance.
            </p>
            <p className="text-base leading-relaxed text-foreground/90">
              Fate, it seemed, was romantic at heart. One evening, Chris was weaving through traffic on his motorcycle when his eyes caught a familiar, striking face with wonderfully expressive cheeks riding in the passenger seat of a tricycle. It was her—Kate! Remembering her unique condition, he acted on instinct, capturing the moment with a quick photo and sending it to her immediately. Kate's shock quickly dissolved into delighted surprise. The universe had spoken, and she finally agreed to meet.
            </p>
            <p className="text-base leading-relaxed text-foreground/90">
              Chris's courtship of Kate was filled with genuine devotion, but she held one last, extraordinary condition for giving him her sweet 'yes'. While reading her devotional, the words of Colossians 3:17, "Whatever you do, whether in word or deed, do it all in the name of the Lord Jesus," felt like the confirmation she needed. This verse, suggesting her commitment to Chris should honor God, initially prompted her to accept. However, in her desire to be truly wise and prudent, she hesitated. To ensure the answer wasn't a coincidence or merely her own biased wish, she sought a completely unmistakable divine answer—a sign that only God could utterly control. She stipulated one final test: it had to be blessed by a pouring rain.
            </p>
            <p className="text-base leading-relaxed text-foreground/90">
              Then came the fateful night of December 20, 2020. After a memorable dinner, they were driving home, talking and laughing, when the heavens opened. Not a drizzle, but a sudden, beautiful downpour washed over the car. It was the sign they both had waited for, a celestial confirmation of their love. In that rain-streaked car, Chris was given his joyous 'yes.'
            </p>
            <p className="text-base leading-relaxed text-foreground/90">
              Four beautiful years unfolded while living a life of shared laughter, quiet strength, and enduring love through every up and down. To mark a new chapter, Chris brought Kate to the breathtaking beauty of Bohol to meet his extended family. He led her to the highest point of the Chocolate Hills, a panoramic view stretching before them. As a soft, romantic mist began to fall—nature echoing their past promise—Chris knelt down. Looking into the eyes of the woman who waited for her answered prayer, he asked her the most important question of his life: "Will you marry me?"
            </p>
            
            <div className="flex justify-center mt-8 pt-6 border-t border-foreground/10">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setOpenDialog(false)}
                className="group hover:bg-primary hover:text-primary-foreground transition-all"
                data-testid="button-back-from-story"
              >
                Back
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </motion.section>
  );
};

export default StorySection;
