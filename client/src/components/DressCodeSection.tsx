import { motion } from 'framer-motion';

import guestsImage from "@assets/Guest (1)_1762354636714.jpg";
import principalSponsorsImage from "@assets/Sponsors (1)_1762354636713.jpg";

const DressCodeSection = () => {
  return (
    <motion.section 
      id="dresscode" 
      className="section-pastel-blue py-12 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 7.5 }}
    >
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 7.8 }}
        >
          <h2 className="font-display italic text-gold mb-8 text-[48px]" data-testid="text-dresscode-title">
            Attire Guide
          </h2>
        </motion.div>

        {/* Modern Dress Code Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Principal Sponsors */}
          <motion.div 
            className="group"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 8.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-card/30 border border-border rounded-xl p-8 shadow-soft hover-elegant transition-all duration-500 h-full relative">
              <div className="text-center">
                <motion.img 
                  src={principalSponsorsImage}
                  alt="Principal Sponsors attire guide"
                  className="w-full max-w-md mx-auto object-contain rounded-2xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 8.5 }}
                />
              </div>
            </div>
          </motion.div>

          {/* Guests */}
          <motion.div 
            className="group"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 8.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-card/30 border border-border rounded-xl p-8 shadow-soft hover-elegant transition-all duration-500 h-full relative">
              <div className="text-center">
                <motion.img 
                  src={guestsImage}
                  alt="Guests attire guide"
                  className="w-full max-w-md mx-auto object-contain rounded-2xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 8.8 }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Guidelines */}
        <motion.div
          className="bg-white/5 border border-primary/20 rounded-2xl p-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.0 }}
        >
          <h3 className="text-2xl font-display text-foreground text-center mb-8">Additional Guidelines</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Principal Sponsors */}
            <div className="bg-card/20 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-body font-semibold text-foreground mb-2">
                    Principal Sponsors
                  </h4>
                  <p className="text-base font-body text-foreground/80 leading-relaxed">
                    Gentlemen: Barong/Modern Barong<br />
                    Ladies: Beige/Champagne/Espresso Brown Long Gown/Dress
                  </p>
                </div>
              </div>
            </div>

            {/* Guests */}
            <div className="bg-card/20 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-body font-semibold text-foreground mb-2">Guests</h4>
                  <p className="text-base font-body text-foreground/80 leading-relaxed">Plain Black Formal or Semi-Formal attire. Please dress elegantly for this special occasion.</p>
                </div>
              </div>
            </div>

            {/* No white colors */}
            <div className="bg-card/20 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-body font-semibold text-foreground mb-2">
                    No White Colors
                  </h4>
                  <p className="text-base font-body text-foreground/80 leading-relaxed">
                    Avoid wearing white, as this color is reserved for the bride.
                  </p>
                </div>
              </div>
            </div>

            {/* Respectful attire */}
            <div className="bg-card/20 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-body font-semibold text-foreground mb-2">
                    Respectful Attire
                  </h4>
                  <p className="text-base font-body text-foreground/80 leading-relaxed">
                    Kindly ensure your attire is respectful and appropriate for a religious ceremony.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default DressCodeSection;
