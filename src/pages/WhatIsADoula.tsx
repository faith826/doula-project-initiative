import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, HeartHandshake, Baby, Speech, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import { triggerGetInvolvedModal } from '../components/GetInvolvedModal';
import doulaHero from '../assets/images/doula_hero_1784436366793.jpg';

export default function WhatIsADoula() {
  const slides = [
    {
      image: doulaHero,
      title: 'What Is a Doula?',
      subtitle: 'A trained birth companion who provides emotional, physical, and informational support during pregnancy, labor, birth, and the postpartum period.'
    },
    {
      image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1600',
      title: 'A Compassionate Partner',
      subtitle: 'Dedicated to walking alongside you, translating medical terms, easing labor fears, and respecting your choices.'
    },
    {
      image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1600',
      title: 'Dignity in Every Birth',
      subtitle: 'Empowering families across Nairobi with continuous physical comforting, emotional validation, and education.'
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
      {/* Header with authentic image slider */}
      <section className="relative h-[60vh] min-h-[480px] w-full bg-teal text-white flex items-center justify-center overflow-hidden">
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
        
        {/* Do's and Don'ts */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-sage">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="text-sage w-8 h-8" />
              <h2 className="text-2xl font-bold font-heading text-teal">What Doulas Do</h2>
            </div>
            <ul className="space-y-4">
              {[
                'Provide continuous emotional reassurance',
                'Offer physical comfort techniques and massage',
                'Help with birth preparation and planning',
                'Translate medical jargon into plain language',
                'Support and guide partners and family members',
                'Assist with early infant feeding and recovery'
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-charcoal/80">
                  <div className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-sage"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-coral">
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="text-coral w-8 h-8" />
              <h2 className="text-2xl font-bold font-heading text-teal">What Doulas Do NOT Do</h2>
            </div>
            <ul className="space-y-4">
              {[
                'Perform clinical or medical tasks (like vaginal exams)',
                'Diagnose medical conditions',
                'Give medical advice or prescribe medicine',
                'Catch the baby (unless unassisted)',
                'Make decisions for you',
                'Project their own personal beliefs onto your birth'
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-charcoal/80">
                  <div className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-coral"></div>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-coral/10 rounded-xl flex items-start gap-3">
               <Stethoscope className="text-coral shrink-0" />
               <p className="text-sm text-charcoal/80 italic">Doulas are an addition to your care team, they do not replace your doctors, nurses, or midwives.</p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <h2 className="text-3xl font-bold font-heading text-center text-teal mb-10">The Benefits of Doula Support</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Lower Anxiety', icon: HeartHandshake, text: 'Continuous support significantly reduces stress and anxiety during labor.' },
            { title: 'Shorter Labor', icon: Speech, text: 'Evidence shows doula presence can actually decrease the length of labor.' },
            { title: 'Better Bonding', icon: Baby, text: 'Boosts early bonding and increases breastfeeding success rates.' }
          ].map((b, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl border border-beige text-center"
            >
              <b.icon className="w-10 h-10 text-teal mx-auto mb-4" />
              <h3 className="font-bold text-lg text-teal mb-2">{b.title}</h3>
              <p className="text-sm text-charcoal/70">{b.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
           <button 
             onClick={() => triggerGetInvolvedModal('Request Support')}
             className="bg-teal text-white px-8 py-3.5 rounded-full font-medium hover:bg-teal-dark transition-colors inline-flex items-center gap-2 cursor-pointer border-0"
           >
              Request a Doula
           </button>
        </div>

      </div>
    </div>
  );
}
