import { motion } from 'framer-motion';

interface CurvedLineDividerProps {
  variant?: 'left' | 'right' | 'center';
}

const CurvedLineDivider = ({ variant = 'center' }: CurvedLineDividerProps) => {
  const paths = {
    left: "M0 20 Q30 10, 60 20 T120 20",
    right: "M0 20 Q30 30, 60 20 T120 20",
    center: "M0 20 Q40 5, 60 20 T120 20"
  };

  return (
    <motion.div 
      className="w-full flex justify-center py-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <svg
        width="200"
        height="40"
        viewBox="0 0 200 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-foreground/30"
      >
        <path
          d={paths[variant]}
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Center decorative element */}
        <circle cx="100" cy="20" r="3" fill="currentColor" opacity="0.6" />
        
        {/* Small decorative dots */}
        <circle cx="50" cy="20" r="1.5" fill="currentColor" opacity="0.4" />
        <circle cx="150" cy="20" r="1.5" fill="currentColor" opacity="0.4" />
      </svg>
    </motion.div>
  );
};

export default CurvedLineDivider;
