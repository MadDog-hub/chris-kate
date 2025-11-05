import { motion } from 'framer-motion';
import prenup1 from '@assets/Soulmates_1762356015069.png';
import prenup2 from '@assets/Forever_1762356015068.jpg';
import monogram from '../assets/I&R-monogram.png';

import MONOGRAM_removebg_preview from "@assets/MONOGRAM-removebg-preview.png";

import logo from "@assets/logo.png";

interface RusticInvitationRevealProps {
  animationsEnabled: boolean;
}

const RusticInvitationReveal = ({ animationsEnabled }: RusticInvitationRevealProps) => {
  const polaroids = [
    { src: prenup1, alt: 'Soulmates', rotation: -8 },
    { src: prenup2, alt: 'Forever', rotation: 2 }
  ];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen py-12 px-4">
      {/* Rustic Wood Background Element */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="woodgrain" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
              <line x1="20" y1="0" x2="20" y2="100" stroke="currentColor" strokeWidth="0.3" opacity="0.2"/>
              <line x1="40" y1="0" x2="40" y2="100" stroke="currentColor" strokeWidth="0.4" opacity="0.25"/>
              <line x1="60" y1="0" x2="60" y2="100" stroke="currentColor" strokeWidth="0.3" opacity="0.2"/>
              <line x1="80" y1="0" x2="80" y2="100" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#woodgrain)"/>
        </svg>
      </div>
      {/* Twine/String across top */}
      <div
        className="absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        style={{ transformOrigin: 'center' }}
      >
        <div className="absolute inset-0 shadow-lg" style={{ 
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)' 
        }}/>
      </div>
      {/* Polaroid Photos */}
      <div className="relative z-10 mb-16 flex flex-wrap items-center justify-center gap-6 max-w-5xl">
        {polaroids.map((polaroid, index) => (
        <div
          key={index}
          className="relative group"
          style={{ 
            transform: `rotate(${polaroid.rotation}deg)` 
          }}
          data-testid={`polaroid-${index}`}
        >
          {/* Clip/Pin on top of polaroid */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
            <svg width="30" height="35" viewBox="0 0 30 35" className="drop-shadow-md">
              <path 
                d="M15,5 L10,0 L5,5 L5,15 Q5,20 7,22 L15,30 L23,22 Q25,20 25,15 L25,5 L20,0 Z" 
                fill="#8B7355"
                stroke="#5D4E37"
                strokeWidth="1"
              />
              <circle cx="15" cy="12" r="3" fill="#5D4E37"/>
            </svg>
          </div>

          {/* Polaroid Frame */}
          <div 
            className="bg-white p-3 pb-12 shadow-2xl transform hover:scale-105 transition-transform duration-300"
            style={{
              boxShadow: '0 10px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.1)'
            }}
          >
            <div className="relative overflow-hidden bg-gray-100" style={{ width: '220px', height: '220px' }}>
              <img
                src={polaroid.src}
                alt={polaroid.alt}
                className="w-full h-full object-cover"
              />
              {/* Vintage photo effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-100/20 via-transparent to-amber-900/10 pointer-events-none mix-blend-overlay"/>
            </div>

            {/* Handwritten-style caption */}
            <div className="mt-4 text-center">
              <p 
                className="text-gray-600 italic text-[18px]"
                style={{ fontFamily: 'Brush Script MT, cursive' }}
              >
                {polaroid.alt}
              </p>
            </div>
          </div>

          {/* Tape pieces on corners */}
          <div className="absolute -top-1 -left-1 w-8 h-6 bg-yellow-100/60 transform -rotate-45 opacity-70"
               style={{ boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)' }}/>
          <div className="absolute -top-1 -right-1 w-8 h-6 bg-yellow-100/60 transform rotate-45 opacity-70"
               style={{ boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)' }}/>
        </div>
        ))}
      </div>
      {/* Rustic Paper Invitation */}
      <div
        className="relative z-10 max-w-2xl w-full"
        data-testid="invitation-paper"
      >
        {/* Paper with rustic texture */}
        <div 
          className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 p-8 md:p-12 shadow-2xl"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(139,115,85,0.03) 1px, transparent 1px),
              linear-gradient(rgba(139,115,85,0.03) 1px, transparent 1px),
              radial-gradient(circle at 20% 30%, rgba(160,82,45,0.05) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(139,115,85,0.05) 0%, transparent 50%)
            `,
            backgroundSize: '30px 30px, 30px 30px, 200px 200px, 200px 200px',
            border: '3px solid #333333',
            boxShadow: `
              0 20px 60px rgba(51,51,51,0.4),
              inset 0 0 60px rgba(255,248,220,0.5),
              0 0 0 1px rgba(51,51,51,0.2)
            `
          }}
        >
          {/* Decorative corner elements */}
          <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-primary opacity-40"/>
          <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-primary opacity-40"/>
          <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-primary opacity-40"/>
          <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-primary opacity-40"/>

          {/* Rustic leaf decoration */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <svg width="60" height="40" viewBox="0 0 60 40">
              <path d="M30,5 Q20,10 15,20 Q20,15 30,15 Q40,15 45,20 Q40,10 30,5 Z" 
                    fill="#8B7355" opacity="0.6"/>
              <path d="M30,15 L30,35" stroke="#5D4E37" strokeWidth="2" opacity="0.5"/>
            </svg>
          </div>

          {/* Content */}
          <div className="text-center relative z-10">
            {/* Ornamental divider top */}
            <div className="flex items-center justify-center mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary"/>
              <svg className="w-6 h-6 mx-3 text-primary" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12,2L13.09,8.26L22,9L13.09,9.74L12,16L10.91,9.74L2,9L10.91,8.26L12,2Z"/>
              </svg>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary"/>
            </div>

            <h2 
              className="text-4xl md:text-5xl font-script italic text-primary mb-6"
              style={{ fontFamily: 'Boska, serif' }}
            >
              You're Invited
            </h2>

            <p 
              className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6 italic"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Come witness the moment we tie the knot and start our greatest adventure together
            </p>

            <div
              className="text-base md:text-lg text-foreground/80"
            >
              <p className="mb-2">with love, laughter,</p>
              <p>and a lifetime of memories</p>
            </div>

            {/* Ornamental divider bottom */}
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary"/>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary"/>
            </div>
          </div>

          {/* Paper aging effect */}
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-900 to-transparent"/>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-amber-900 to-transparent"/>
          </div>
        </div>

        {/* Wax seal effect */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="relative">
            <svg width="60" height="60" viewBox="0 0 60 60">
              <circle cx="30" cy="30" r="28" fill="white" opacity="0.9"/>
              <circle cx="30" cy="30" r="24" fill="white"/>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <img src={logo} alt="I&R" className="h-16 w-16 object-contain" />
            </div>
            {/* Wax drips */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-4 h-3 bg-gradient-to-b from-white to-transparent rounded-b-full opacity-70"/>
          </div>
        </div>
      </div>
      {/* Floating rustic elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 20}%`
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5
            }}
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24">
              <path fill="currentColor" d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
            </svg>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RusticInvitationReveal;