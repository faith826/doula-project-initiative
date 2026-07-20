import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Bell } from 'lucide-react';
import contactHero from '../assets/images/contact_hero_uk_1784533172300.jpg';

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
      subtitle: "We'd love to hear from you. Reach out with any questions, partnership enquiries, or to request doula support."
    },
    {
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1600',
      title: 'Get in Touch',
      subtitle: 'Our supportive community response team is available to assist or guide you and your loved ones.'
    },
    {
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1600',
      title: 'Dignified Support',
      subtitle: 'Connecting mums and families with dedicated, friendly maternal health practitioners across the UK.'
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
                     <p className="text-charcoal/70 text-sm mt-1">123 Community Hub<br/>Reading, Berkshire, RG1 1AA, UK</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                     <Phone className="w-5 h-5 text-teal" />
                   </div>
                   <div>
                     <h3 className="font-bold text-charcoal">Phone</h3>
                     <p className="text-charcoal/70 text-sm mt-1">+44 (0) 20 7946 0192</p>
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

          </div>
          
        </div>

        {/* Horizontal Newsletter Banner */}
        <div className="relative overflow-hidden bg-teal rounded-3xl p-8 md:p-12 mt-16 shadow-lg flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Subtle Wavy Lines Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 800 200" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M-100,150 C100,100 200,200 400,120 C600,40 700,180 900,80" stroke="white" strokeWidth="4" />
              <path d="M-50,80 C150,150 300,50 500,140 C700,230 750,90 950,120" stroke="white" strokeWidth="2" />
            </svg>
          </div>

          <div className="relative z-10 text-center lg:text-left max-w-md">
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Sign Up for Our<br className="hidden md:inline" /> Newsletter
            </h2>
          </div>

          <div className="relative z-10 w-full lg:max-w-xl">
            <AnimatePresence mode="wait">
              {isSubscribed ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white/10 backdrop-blur-sm text-white rounded-full py-4 px-8 text-sm md:text-base font-bold text-center border border-white/20 shadow-md"
                >
                  ✓ Thank you! You have successfully subscribed to our newsletter.
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubscribe}
                  className="bg-white rounded-full p-1.5 flex items-center shadow-md w-full"
                >
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-grow bg-transparent border-none outline-none focus:outline-none focus:ring-0 text-charcoal px-5 py-3 text-sm md:text-base placeholder-charcoal/40"
                  />
                  <button
                    type="submit"
                    className="bg-[#1E293B] hover:bg-[#0F172A] text-white font-bold text-xs md:text-sm tracking-widest uppercase px-6 py-3.5 rounded-full transition-colors flex items-center gap-2.5 cursor-pointer shrink-0"
                  >
                    <Mail className="w-4 h-4" />
                    Subscribe
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
