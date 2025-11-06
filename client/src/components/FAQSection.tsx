
import { useState } from 'react';
import { ChevronDown, ChevronUp, Camera, Clock, Users, Calendar, MapPin, Gift, Music, Utensils } from 'lucide-react';
import { motion } from 'framer-motion';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Can I bring a plus one?",
      icon: Users,
      answer: "We have carefully planned our guest list based on our venue capacity. If your invitation includes a plus one, it will be noted on your RSVP. If you have any questions about your invitation, please feel free to reach out to us directly."
    },
    {
      question: "What is the dress code?",
      icon: Users,
      answer: "The attire for our special day is Formal to Semi-Formal in Plain Black. We encourage you to dress elegantly and enjoy getting dressed up for the occasion!"
    },
    {
      question: "Is this an adults-only celebration?",
      icon: Users,
      answer: "To allow all of our guests to relax and enjoy the evening, our ceremony and reception will be an adults-only event. The only children attending will be those in the immediate wedding party. We hope this gives you a chance to enjoy a child-free night out!"
    },
    {
      question: "What is an unplugged ceremony?",
      icon: Camera,
      answer: "We want you to be fully present with us as we exchange our vows. While it is okay to take photos, we kindly ask that you do not distract or block our professional photographer and videographer. Please keep the aisles clear and make sure your camera is not a distraction—we want to see your faces, not your devices!"
    },
    {
      question: "When is the RSVP deadline?",
      icon: Calendar,
      answer: "Please RSVP by November 8, 2025. This helps us finalize our guest count with the venue and caterer. You can RSVP through the link on this website."
    },
    {
      question: "Where is the ceremony and reception?",
      icon: MapPin,
      answer: "Both the ceremony and reception will be held at The Secret Garden, Venue 88 Hotel and Events Place on December 8, 2025. Details about the venue location and directions can be found in the venue section of this website."
    },
    {
      question: "What time should I arrive?",
      icon: Clock,
      answer: "We recommend arriving at least 15-20 minutes before the ceremony start time to find parking and get settled. The ceremony will begin promptly at the scheduled time."
    },
    {
      question: "Will there be food and drinks?",
      icon: Utensils,
      answer: "Yes! A full dinner will be served at the reception, along with beverages. If you have any dietary restrictions or allergies, please let us know when you RSVP so we can accommodate your needs."
    },
    {
      question: "Can I bring a gift?",
      icon: Gift,
      answer: "Your presence is the greatest gift of all! However, if you wish to honor us with a gift, monetary gifts via GCash are appreciated. Details can be found in the gifts section of this website."
    },
    {
      question: "Will there be music and dancing?",
      icon: Music,
      answer: "Absolutely! We have planned a full evening of dinner, music, and dancing. We hope you'll stay and celebrate with us on the dance floor!"
    },
    {
      question: "How long will the celebration last?",
      icon: Calendar,
      answer: "We have planned a full evening of dinner, dancing, and fun! Your presence means the world to us, and we would be honored if you could stay until the very end of the program so we can properly thank you and celebrate our final dance with all of our loved ones."
    }
  ];

  return (
    <motion.section 
      className="section-pastel-blue py-2 px-4 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 11.5 }}
    >
      {/* Decorative Line Art */}
      <div className="line-art-corner-tr" />
      <div className="line-art-corner-bl" />
      <div className="line-art-circle" style={{ top: '15%', left: '3%', width: '120px', height: '120px' }} />
      <div className="line-art-circle" style={{ bottom: '20%', right: '5%', width: '90px', height: '90px' }} />
      
      <div className="max-w-4xl mx-auto mt-[24px] mb-[24px]">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 11.8 }}
        >
          <h2 className="text-5xl font-display italic text-primary mb-8" data-testid="text-faq-title">
            Frequently Asked Questions
          </h2>
          <p className="text-lg font-body text-foreground max-w-2xl mx-auto">
            We've compiled answers to the most common questions about our wedding day. 
            If you have additional questions, please don't hesitate to contact us.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-card/30 border border-border rounded-xl shadow-soft overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 12.1 + (index * 0.1) }}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gold/5 transition-colors duration-300"
              >
                <div className="flex items-center gap-3">
                  <faq.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <h3 className="text-lg font-satoshi font-bold text-primary">
                    {faq.question}
                  </h3>
                </div>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-primary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary" />
                  )}
                </div>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-8 pb-6">
                  <div className="w-full h-px bg-border mb-4"></div>
                  <p className="text-foreground leading-relaxed font-satoshi text-base">
                    {faq.answer}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FAQSection;
