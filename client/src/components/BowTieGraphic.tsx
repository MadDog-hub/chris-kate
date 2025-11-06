import { motion } from 'framer-motion';
import bowTieImage from '@assets/image-removebg-preview (6)_1762407505728.png';

const BowTieGraphic = () => {
  return (
    <motion.div 
      className="w-full flex justify-center items-center py-4 bg-background overflow-hidden"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <img 
        src={bowTieImage} 
        alt="Bow tie decoration" 
        className="w-full max-w-full h-auto object-contain"
        style={{ maxHeight: '150px' }}
      />
    </motion.div>
  );
};

export default BowTieGraphic;
