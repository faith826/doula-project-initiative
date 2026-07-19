import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Bell } from 'lucide-react';
import contactHero from '../assets/images/contact_hero_1784436383338.jpg';

export default function Contact() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setIsSubscribed(true);
      setNewsletterEmail('');
    }
  };

  const slides = [
    {
      image: contactHero,
      title: 'Contact Us',
      subtitle: "We'd love to hear from you. Reach out with any questions, partnership inquiries, or to request doula support."
    },
    {
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1600',
      title: 'Get in Touch',
      subtitle: 'Our supportive community response team is available to assist or guide you and your loved ones.'
    },
    {
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1600',
      title: 'Dignified Support',
      subtitle: 'Connecting mothers and families with dedicated, friendly maternal health practitioners across Nairobi.'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="bg-cream min-h-screen pb-20">
      {/* Header with image carousel support */}
      <section className="relative h-[55vh] min-h-[420px] w-full bg-teal text-white flex items-center justify-center overflow-hidden">
        {/* Carousel Background Images */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            />
          </AnimatePresence>
          {/* Authentic Warm Dark Tint Overlay */}
          <div className="absolute inset-0 bg-charcoal/60 md:bg-charcoal/50 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-cream/20 via-transparent to-charcoal/30" />
        </div>

        {/* Header content centered */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-tight text-white drop-shadow-md">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg md:text-xl text-cream/90 font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
                {slides[currentSlide].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2.5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === idx ? 'bg-coral w-8 shadow-sm' : 'bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid md:grid-cols-2 gap-12">
          
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-border">
            <h2 className="text-2xl font-bold font-heading text-teal mb-6">Send us a message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-charcoal/80 mb-1">Name</label>
                <input type="text" className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-teal/50" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal/80 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-teal/50" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal/80 mb-1">Message</label>
                <textarea rows={4} className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-teal/50" placeholder="How can we help you?"></textarea>
              </div>
              <button type="button" className="w-full bg-teal text-white px-6 py-3 rounded-xl font-medium hover:bg-teal-dark transition-colors">
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
             <div>
               <h2 className="text-2xl font-bold font-heading text-teal mb-6">Contact Information</h2>
               <div className="space-y-6">
                 <div className="flex items-start gap-4">
                   <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                     <MapPin className="w-5 h-5 text-teal" />
                   </div>
                   <div>
                     <h3 className="font-bold text-charcoal">Location</h3>
                     <p className="text-charcoal/70 text-sm mt-1">123 Community Hub<br/>Nairobi, Kenya</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                     <Phone className="w-5 h-5 text-teal" />
                   </div>
                   <div>
                     <h3 className="font-bold text-charcoal">Phone</h3>
                     <p className="text-charcoal/70 text-sm mt-1">+254 700 000 000</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                     <Mail className="w-5 h-5 text-teal" />
                   </div>
                   <div>
                     <h3 className="font-bold text-charcoal">Email</h3>
                     <p className="text-charcoal/70 text-sm mt-1">hello@doulaproject.org</p>
                   </div>
                 </div>
               </div>
             </div>

             {/* Newsletter Section */}
             <div className="bg-white rounded-2xl p-8 shadow-sm border border-border mt-8">
               <div className="flex items-start gap-4 mb-6">
                 <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center shrink-0">
                   <Bell className="w-5 h-5 text-coral" />
                 </div>
                 <div>
                   <h3 className="text-xl font-bold font-heading text-teal">Subscribe to our newsletter</h3>
                   <p className="text-charcoal/60 text-sm mt-1">
                     Receive updates on workshops, resources, events, and inspiring stories from the community.
                   </p>
                 </div>
               </div>

               <AnimatePresence mode="wait">
                 {isSubscribed ? (
                   <motion.div
                     key="success"
                     initial={{ opacity: 0, height: 0 }}
                     animate={{ opacity: 1, height: 'auto' }}
                     exit={{ opacity: 0, height: 0 }}
                     className="p-4 bg-teal/10 text-teal-dark rounded-xl text-sm font-semibold flex items-center gap-2 border border-teal/20"
                   >
                     <span className="text-base">✓</span> Thank you for subscribing to our newsletter!
                   </motion.div>
                 ) : (
                   <motion.form
                     key="form"
                     onSubmit={handleSubscribe}
                     className="space-y-3"
                   >
                     <div className="flex flex-col sm:flex-row gap-3">
                       <input
                         type="email"
                         required
                         value={newsletterEmail}
                         onChange={(e) => setNewsletterEmail(e.target.value)}
                         placeholder="Your email address"
                         className="flex-grow px-4 py-2.5 rounded-xl border border-border bg-cream/30 text-sm focus:outline-none focus:ring-2 focus:ring-teal/50"
                       />
                       <button
                         type="submit"
                         className="bg-teal hover:bg-teal-dark text-white font-semibold text-sm px-6 py-2.5 rounded-xl transition-colors cursor-pointer shrink-0"
                       >
                         Subscribe
                       </button>
                     </div>
                     <p className="text-[11px] text-charcoal/50 leading-normal">
                       By subscribing, you agree to receive communications from us. You can unsubscribe at any time.
                     </p>
                   </motion.form>
                 )}
               </AnimatePresence>
             </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
