import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ArrowRight, Heart, Activity, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BirthSupport() {
  return (
    <div className="pt-24 pb-20 bg-cream min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex text-sm text-charcoal/60" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link to="/" className="hover:text-teal transition-colors">Home</Link>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 mx-1" />
                <span className="hover:text-teal transition-colors">Services</span>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 mx-1" />
                <span className="text-charcoal font-medium">Birth Support</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80" 
            alt="Doula supporting mother during labour" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-charcoal/50"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6">
              Birth Support
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto mb-8">
              Continuous, reassuring presence and practical comfort measures during your labour and birth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="prose prose-lg prose-teal mx-auto"
        >
          <p className="text-xl text-charcoal/80 leading-relaxed mb-12 text-center">
            Labour can be unpredictable, but you don't have to navigate it alone. We offer continuous physical, emotional, and informational support from the moment active labour begins until your baby is born.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold font-heading text-teal mb-4 flex items-center gap-2">
                <Heart className="w-6 h-6 text-coral" /> Continuous Emotional Support
              </h3>
              <p className="text-charcoal/70">
                We stay by your side throughout labour, providing constant encouragement, reassurance, and a calming presence to help you feel safe and confident.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold font-heading text-teal mb-4 flex items-center gap-2">
                <Activity className="w-6 h-6 text-coral" /> Comfort Techniques
              </h3>
              <p className="text-charcoal/70">
                We use soothing touch, massage, counter-pressure, and position changes to help manage pain and facilitate the progression of labour.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold font-heading text-teal mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-coral" /> Advocacy & Communication
              </h3>
              <p className="text-charcoal/70">
                We help you communicate your needs and preferences to your medical team, ensuring you have the information you need to make informed decisions.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold font-heading text-teal mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-coral" /> Partner Support
              </h3>
              <p className="text-charcoal/70">
                We support your birth partner, guiding them on how to best help you, allowing them to participate at their comfort level while taking necessary breaks.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 border border-beige shadow-sm">
            <h3 className="text-2xl font-bold font-heading text-teal mb-4">Benefits of Doula Care During Birth</h3>
            <ul className="space-y-3 text-charcoal/80">
              <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-coral"></div> Reduced need for medical interventions</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-coral"></div> Shorter labour duration</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-coral"></div> Decrease in the use of pain medication</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-coral"></div> Higher satisfaction with the birth experience</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-coral"></div> Lower risk of caesarean sections</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <div className="bg-teal text-white rounded-[2rem] p-12 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Need Support During Your Pregnancy Journey?</h2>
          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
            Our trained doulas are here to provide compassionate, evidence-based support before, during, and after childbirth. Contact us today to learn more about our services or request personalised support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-coral text-white px-8 py-4 rounded-lg font-semibold hover:bg-coral/90 transition-colors inline-flex items-center justify-center gap-2 shadow-sm">
              Request Birth Support <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="bg-white text-teal px-8 py-4 rounded-lg font-semibold hover:bg-cream transition-colors inline-flex items-center justify-center gap-2 shadow-sm">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
