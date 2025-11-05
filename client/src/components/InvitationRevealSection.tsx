import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';
import RusticInvitationReveal from './RusticInvitationReveal';

const InvitationRevealSection = () => {
  const { animationsEnabled } = useAnimationContext();

  return (
    <motion.section 
      className="section-hard-blue relative min-h-screen w-full overflow-hidden isolate"
      initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={animationsEnabled ? { duration: 1, delay: 2.5 } : { duration: 0 }}
      data-testid="section-invitation-reveal"
    >
      <RusticInvitationReveal animationsEnabled={animationsEnabled} />
    </motion.section>
  );
};

export default InvitationRevealSection;