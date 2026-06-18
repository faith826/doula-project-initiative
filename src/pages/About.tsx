import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Shield, Users, Lightbulb, MessageCircle, Scale } from 'lucide-react';

export default function About() {
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140e2b8?q=80&w=1600',
      title: 'About Us',
      subtitle: 'A collaborative initiative between TNL Partnerships and Utulivu Women\'s Group dedicated to transforming maternal health with dignity and compassion.'
    },
    {
      image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=1600',
      title: 'Led by the Community',
      subtitle: 'Empowering local African women with skills to support mothers before, during, and after childbirth.'
    },
    {
      image: 'https://images.unsplash.com/photo-1504151932400-72d4384f04b3?q=80&w=1600',
      title: 'Deepening Support',
      subtitle: 'Nurturing maternal health, newborn development, and cultivating strong community family foundations.'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const values = [
    { icon: Heart, title: 'Compassion', desc: 'Approaching every life event with deep empathy.' },
    { icon: Users, title: 'Inclusion', desc: 'Welcoming families of all backgrounds and structures.' },
    { icon: Shield, title: 'Dignity', desc: 'Honoring maternal choices and bodily autonomy.' },
    { icon: Scale, title: 'Respect', desc: 'Listening to and validating lived experiences.' },
    { icon: Lightbulb, title: 'Community Leadership', desc: 'Led by the community, for the community.' },
    { icon: MessageCircle, title: 'Accountability', desc: 'Transparent, evidence-based practices.' },
  ];

  return (
    <div className="flex flex-col">
      {/* Header with image carousel support */}
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

      {/* Mission & Vision */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-sm border-t-4 border-teal">
              <h2 className="text-2xl font-bold font-heading text-teal mb-4">Our Vision</h2>
              <p className="text-charcoal/80 text-lg leading-relaxed">
                A future where every mother receives compassionate support before, during, and after childbirth. We envision communities where birth is a continuously supported, empowering life event.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border-t-4 border-coral">
              <h2 className="text-2xl font-bold font-heading text-teal mb-4">Our Mission</h2>
              <p className="text-charcoal/80 text-lg leading-relaxed">
                To improve maternal wellbeing through accessible doula services, community engagement, and evidence-based support systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-heading text-teal mb-4">Our Core Values</h2>
            <p className="text-charcoal/80">The principles that guide our support and community engagement.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 border border-beige rounded-2xl flex flex-col items-center text-center bg-cream hover:bg-beige/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center mb-4 text-teal">
                  <v.icon size={24} />
                </div>
                <h3 className="font-bold text-lg font-heading text-teal mb-2">{v.title}</h3>
                <p className="text-charcoal/70 text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-beige">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-heading text-center text-teal mb-16">Our Story</h2>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-teal/30 before:to-transparent">
            {[
              { year: 'Phase 1', title: 'Community Research', desc: 'Understanding local maternal health needs through Participatory Action Research.' },
              { year: 'Phase 2', title: 'Project Concept', desc: 'Designing community-based intervention models.' },
              { year: 'Phase 3', title: 'Partnership Formation', desc: 'TNL and UWG officially join forces.' },
              { year: 'Phase 4', title: 'Doula Program Launch', desc: 'First cohort of community doulas trained and deployed.' }
            ].map((item, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-cream text-teal shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <Heart size={16} fill="currentColor" className="text-coral" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border border-cream">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-teal text-lg">{item.title}</h3>
                  </div>
                  <div className="text-sage font-medium text-sm mb-3">{item.year}</div>
                  <p className="text-charcoal/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
