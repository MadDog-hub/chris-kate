import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="bg-card text-foreground py-16 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 12.5 }}
    >
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <motion.div 
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 12.8 }}
        >
          {/* Couple Names */}
          <div className="mb-4">
            <h2 className="text-3xl sm:text-4xl mb-3 text-foreground" style={{ fontFamily: 'Boska, serif', fontWeight: 300 }}>
              Isabel
              <span className="text-primary mx-3">&</span>
              Rustin
            </h2>
            <p className="text-foreground/80 text-base"> Parish of the Holy Family | Casa Dominguez</p>
          </div>

          {/* Heart Divider */}
          <div className="flex justify-center items-center gap-4 my-6">
            <div className="h-px w-24 bg-primary/30"></div>
            <Heart className="w-5 h-5 text-primary fill-primary" />
            <div className="h-px w-24 bg-primary/30"></div>
          </div>

          {/* Grateful Message */}
          <div className="max-w-2xl mx-auto">
            <p className="text-foreground/90 text-base italic leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              We're grateful to have you as part of our story. You've made our journey more beautiful, and we can't wait to share our special day with you.
            </p>
          </div>

          {/* Closing */}
          <div className="mt-8">
            <p className="text-foreground/80 text-sm mb-2">With love and gratitude,</p>
            <p className="text-foreground text-lg" style={{ fontFamily: 'Boska, serif', fontWeight: 300 }}>
              Isabel & Rustin
            </p>
          </div>
        </motion.div>
      </div>
      {/* Background Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary/20 to-transparent opacity-50 pointer-events-none"></div>
    </motion.footer>
  );
};

export default Footer;