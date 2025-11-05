
import { useAnimationContext } from '@/contexts/AnimationContext';

const TextLoop = () => {
  const { animationsEnabled } = useAnimationContext();
  
  // Create array of repeated text for continuous loop
  const textItems = Array(8).fill("You're Invited");

  return (
    <section id="slideshow" className="image-loop-section section-hard-blue w-full overflow-hidden py-4">
      <div className="image-loop-container">
        <div className={`${animationsEnabled ? 'image-loop-track' : 'image-loop-track-static'}`}>
          {/* First set of text */}
          {textItems.map((text, index) => (
            <div key={`set1-${index}`} className="image-loop-item">
              <div className="image-loop-img flex items-center justify-center">
                <span className="text-4xl md:text-6xl font-serif text-white whitespace-nowrap px-8">
                  {text}
                </span>
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless looping */}
          {textItems.map((text, index) => (
            <div key={`set2-${index}`} className="image-loop-item">
              <div className="image-loop-img flex items-center justify-center">
                <span className="text-4xl md:text-6xl font-serif text-white whitespace-nowrap px-8">
                  {text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TextLoop;
