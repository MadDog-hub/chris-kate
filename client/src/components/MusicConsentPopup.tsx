import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX, Music } from 'lucide-react';

interface MusicConsentPopupProps {
  onConsent: (consent: boolean) => void;
  isVisible: boolean;
}

const MusicConsentPopup = ({ onConsent, isVisible }: MusicConsentPopupProps) => {
  const handleConsent = (consent: boolean) => {
    onConsent(consent);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-md flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-10 md:p-12 max-w-md w-full shadow-2xl"
          >
            <div className="text-center space-y-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                className="flex justify-center"
              >
                <Music className="h-16 w-16 text-[#333333] dark:text-white" strokeWidth={1.5} />
              </motion.div>
              
              <div className="space-y-3">
                <h2 className="text-2xl md:text-3xl font-medium text-[#333333] dark:text-white">
                  Play music?
                </h2>
                
                <p className="text-[#666666] dark:text-[#aaaaaa] leading-relaxed text-sm md:text-base">
                  Enhance your experience with background music
                </p>
              </div>

              <div className="flex flex-col gap-3 pt-4">
                <Button
                  onClick={() => handleConsent(true)}
                  className="w-full bg-[#333333] hover:bg-[#222222] text-white font-medium py-6 px-6 rounded-lg transition-all duration-200"
                  data-testid="button-allow-music"
                >
                  <Volume2 className="h-5 w-5 mr-2" />
                  Play Music
                </Button>
                <Button
                  onClick={() => handleConsent(false)}
                  variant="ghost"
                  className="w-full text-[#666666] dark:text-[#aaaaaa] hover:text-[#333333] dark:hover:text-white hover:bg-[#f5f5f5] dark:hover:bg-[#2a2a2a] font-medium py-6 px-6 rounded-lg transition-all duration-200"
                  data-testid="button-skip-music"
                >
                  <VolumeX className="h-5 w-5 mr-2" />
                  Continue Silently
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MusicConsentPopup;