import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Clock, Camera, Utensils, Music, Heart, Wine, PartyPopper } from 'lucide-react';
import { useAnimationContext } from '@/contexts/AnimationContext';

interface TimelineEvent {
    time: string;
    event: string;
    icon: React.ComponentType<any>;
    hueA: number;
    hueB: number;
}

interface TimelineCardProps {
    timelineEvent: TimelineEvent;
    i: number;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ timelineEvent, i }) => {
    const IconComponent = timelineEvent.icon;
    const accentColor = `hsl(${timelineEvent.hueA}, 80%, 60%)`;

    const getEventDescription = (eventName: string): string => {
        const descriptions: Record<string, string> = {
            "Guest Arrival": "We highly encourage you to arrive by 2:30 PM. Please be seated before the ceremony begins at 3:00 PM.",
            "Wedding Ceremony": "Witness our vows and the beginning of our journey together as we exchange rings and promises at The Secret Garden, Venue 88.",
            "Photo Session": "Capture beautiful moments with the newlyweds and wedding party. Professional photography session for cherished memories.",
            "Cocktail Hour": "Relax and mingle with other guests while enjoying refreshing drinks and light appetizers.",
            "Reception": "Join us at DOME 1 for dinner, heartfelt toasts, and dancing as we celebrate our union together."
        };
        return descriptions[eventName] || "Join us for this special moment in our lives.";
    };

    return (
        <motion.div
            className={`relative pl-8 md:pl-12 py-4 md:py-6 group`}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.3, once: true }}
            data-testid={`timeline-card-${i}`}
        >
            {/* Timeline dot */}
            <div className="absolute left-0 top-6 md:top-8 w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center z-10"
                style={{
                    background: 'hsl(var(--primary))',
                    boxShadow: '0 0 0 4px rgba(212, 168, 83, 0.2)'
                }}
            >
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
            </div>

            {/* Timeline line */}
            <div className="absolute left-2.5 md:left-3 top-0 bottom-0 w-0.5 bg-primary/30"></div>
            
            {/* Card */}
            <motion.div 
                className="bg-card/40 backdrop-blur-sm border border-primary/20 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/40"
                variants={cardVariants}
                whileHover={{ y: -5 }}
            >
                <div className="p-4 md:p-6">
                    <div className="flex items-start gap-3 md:gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-primary/20 border-2 border-primary" 
                            >
                                <IconComponent className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                            </div>
                        </div>
                        
                        <div className="flex-1 min-w-0">
                            <div className="text-xs md:text-sm font-bold text-primary mb-1">
                                {timelineEvent.time}
                            </div>
                            <h3 className="text-base md:text-lg font-serif font-semibold text-foreground mb-2">
                                {timelineEvent.event}
                            </h3>
                            <div className="w-10 h-0.5 bg-primary my-2 md:my-3"></div>
                            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                                {getEventDescription(timelineEvent.event)}
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const cardVariants: Variants = {
    offscreen: {
        x: -30,
        opacity: 0,
    },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.5,
            delay: 0.1
        },
    },
};

const hue = (h: number, s: number = 100, l: number = 50): string => `hsl(${h}, ${s}%, ${l}%)`;

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
    position: 'relative',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px 10px',
};

/**
 * ==============   Data   ================
 */

const timelineEvents: TimelineEvent[] = [
    {
        time: "2:30 PM",
        event: "Guest Arrival",
        icon: Clock,
        hueA: 40,
        hueB: 40,
    },
    {
        time: "3:00 PM", 
        event: "Wedding Ceremony",
        icon: Heart,
        hueA: 40,
        hueB: 40,
    },
    {
        time: "4:30 PM",
        event: "Photo Session", 
        icon: Camera,
        hueA: 40,
        hueB: 40,
    },
    {
        time: "5:00 PM",
        event: "Cocktail Hour",
        icon: Wine,
        hueA: 40,
        hueB: 40,
    },
    {
        time: "6:00 PM",
        event: "Reception",
        icon: PartyPopper,
        hueA: 40,
        hueB: 40,
    },
];

export default function ScrollTriggeredTimeline() {
    const { animationsEnabled } = useAnimationContext();

    return (
        <motion.section 
            id="timeline" 
            className="section-pastel-blue relative py-12 px-4 overflow-hidden"
            initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={animationsEnabled ? { duration: 0.8, ease: "easeOut" } : { duration: 0 }}
        >
            {/* Enhanced Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/30 rounded-full"></div>
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-primary/30 rounded-full"></div>
                <div className="absolute top-1/3 right-1/3 w-24 h-24 border-2 border-primary/30 rotate-45"></div>
                <div className="absolute bottom-1/3 left-1/5 w-16 h-16 border border-primary/30 rounded-full"></div>
                <div className={`absolute top-1/2 left-1/6 w-6 h-6 bg-primary/40 rounded-full ${animationsEnabled ? 'animate-pulse' : ''}`}></div>
                <div className="absolute bottom-1/2 right-1/5 w-8 h-8 bg-primary/40 rotate-45"></div>
            </div>
            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className={`absolute top-20 left-10 w-2 h-2 bg-white/20 rounded-full ${animationsEnabled ? 'animate-bounce' : ''}`} style={{animationDelay: '0s', animationDuration: '3s'}}></div>
                <div className="absolute top-40 right-20 w-1 h-1 bg-white/30 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
                <div className="absolute bottom-32 left-20 w-3 h-3 bg-white/15 rounded-full animate-bounce" style={{animationDelay: '2s', animationDuration: '3.5s'}}></div>
                <div className="absolute bottom-20 right-32 w-1.5 h-1.5 bg-white/25 rounded-full animate-bounce" style={{animationDelay: '0.5s', animationDuration: '2.5s'}}></div>
            </div>
            {/* Header Section */}
            <div className="relative z-10 text-center mb-12 flex items-center justify-center min-h-[120px]">
                <motion.div 
                    className="text-center max-w-4xl mx-auto px-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-4xl md:text-5xl font-serif italic mb-4 text-primary" data-testid="text-timeline-title">
                        Our Wedding Day
                    </h2>
                    <p className="max-w-2xl mx-auto text-[#333333]">
                        Join us as we celebrate our love story. Here's what to expect on our special day.
                    </p>
                </motion.div>
            </div>
            {/* Timeline Cards Container */}
            <div style={container}>
                {timelineEvents.map((timelineEvent, i) => (
                    <TimelineCard i={i} timelineEvent={timelineEvent} key={timelineEvent.time} />
                ))}
            </div>
            {/* Bottom Decorative */}
            <motion.div 
                className="mt-16 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="inline-flex items-center space-x-2">
                    <div className="w-8 h-px bg-[#ffffff]"></div>
                    <div className="w-2 h-2 bg-[#ffffff] rounded-full animate-pulse"></div>
                    <div className="w-8 h-px bg-[#ffffff]"></div>
                </div>
                <p className="mt-4 text-muted-foreground font-body italic">
                    Our Love Shines Till Evening
                </p>
            </motion.div>
        </motion.section>
    );
}