import { motion } from 'framer-motion';

const BowTieGraphic = () => {
  return (
    <motion.div 
      className="flex justify-center items-center py-8 bg-background"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <svg
        width="120"
        height="80"
        viewBox="0 0 120 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-foreground"
      >
        {/* Left side of bow */}
        <path
          d="M10 40 Q15 20, 35 25 Q40 30, 45 40 Q40 50, 35 55 Q15 60, 10 40"
          fill="currentColor"
          opacity="0.9"
        />
        
        {/* Right side of bow */}
        <path
          d="M75 40 Q80 30, 85 25 Q105 20, 110 40 Q105 60, 85 55 Q80 50, 75 40"
          fill="currentColor"
          opacity="0.9"
        />
        
        {/* Center knot */}
        <ellipse
          cx="60"
          cy="40"
          rx="15"
          ry="20"
          fill="currentColor"
        />
        
        {/* Center detail lines */}
        <path
          d="M52 30 Q60 35, 68 30"
          stroke="currentColor"
          strokeWidth="0.5"
          fill="none"
          opacity="0.3"
        />
        <path
          d="M52 50 Q60 45, 68 50"
          stroke="currentColor"
          strokeWidth="0.5"
          fill="none"
          opacity="0.3"
        />
      </svg>
    </motion.div>
  );
};

export default BowTieGraphic;
