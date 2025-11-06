
import { motion } from 'framer-motion';
import bowTieImage from '@assets/image-removebg-preview (6)_1762407505728.png';

const BowTieGraphic = () => {
  return (
    <motion.div 
      className="w-screen relative left-[50%] right-[50%] -mx-[50vw] flex justify-center items-center bg-background overflow-hidden"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <img 
        src={bowTieImage} 
        alt="Bow tie decoration" 
        className="w-full h-auto object-cover"
        style={{ maxHeight: '200px' }}
      />
    </motion.div>
  );
};

export default BowTieGraphic;
