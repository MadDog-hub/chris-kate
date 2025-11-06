import { motion } from 'framer-motion';
import bowTieImage from '@assets/image-removebg-preview (6)_1762407505728.png';

const BowTieGraphic = () => {
  return (
    <motion.div 
      className="flex justify-center items-center py-8 bg-background"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <img 
        src={bowTieImage} 
        alt="Bow tie decoration" 
        className="w-32 md:w-40 h-auto"
      />
    </motion.div>
  );
};

export default BowTieGraphic;
