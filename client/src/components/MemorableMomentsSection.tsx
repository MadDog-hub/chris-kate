import { motion } from 'framer-motion';

// Save the Date photo
import saveDatePhoto from '@assets/savedDate_1762330926580.jpg';

const MemorableMomentsSection = () => {

  return (
    <motion.section 
      id="prenup-photos" 
      className="section-hard-blue py-12 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        >
          <h2 className="text-5xl font-script italic font-black text-gold-bright mb-8" data-testid="text-prenup-photos-title">
            Save the Date
          </h2>
          <p className="text-xl font-script italic max-w-2xl mx-auto leading-relaxed text-white/90">
            Captured moments before forever begins
          </p>
        </motion.div>

        {/* Save the Date Photo */}
        <motion.div 
          className="flex flex-col items-center justify-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.1 }}
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-8">
            <img
              src={saveDatePhoto}
              alt="Chris & Kate Save the Date"
              className="w-full h-auto object-cover"
              data-testid="img-save-date"
            />
          </div>
          
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <p className="text-2xl md:text-3xl font-script italic text-gold-bright" data-testid="text-video-coming-soon">
              Save the date photos and video coming soon
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MemorableMomentsSection;
