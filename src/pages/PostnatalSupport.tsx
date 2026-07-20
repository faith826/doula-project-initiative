import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ArrowRight, Baby, Moon, Heart, SmilePlus } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PostnatalSupport() {
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
                <span className="text-charcoal font-medium">Postnatal Support</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&q=80" 
            alt="Mother and newborn baby receiving postnatal care in the UK" 
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
              Postnatal Support
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto mb-8">
              Gentle, nurturing care to help you recover, bond with your baby, and adjust to the fourth trimester alongside NHS midwifery care.
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
            The postnatal period is a time of profound physical and emotional transition. Our UK-trained doulas "mother the mother", providing holistic support to ensure your family thrives during these precious early weeks, fully complementary to your local NHS postnatal care.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold font-heading text-teal mb-4 flex items-center gap-2">
                <Heart className="w-6 h-6 text-coral" /> Maternal Recovery
              </h3>
              <p className="text-charcoal/70">
                We prioritise your healing by encouraging rest, preparing nourishing meals, and providing physical comfort measures as your body recovers from birth.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold font-heading text-teal mb-4 flex items-center gap-2">
                <SmilePlus className="w-6 h-6 text-coral" /> Infant Feeding Support
              </h3>
              <p className="text-charcoal/70">
                Whether you choose to breastfeed, pump, or formula feed, we offer evidence-based guidance, positioning tips, and reassurance to help you establish a positive routine.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold font-heading text-teal mb-4 flex items-center gap-2">
                <Baby className="w-6 h-6 text-coral" /> Newborn Care
              </h3>
              <p className="text-charcoal/70">
                We assist with soothing techniques, nappy changing, bathing, and babywearing, building your confidence in caring for your new baby in those critical early days.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold font-heading text-teal mb-4 flex items-center gap-2">
                <Moon className="w-6 h-6 text-coral" /> Emotional Wellbeing
              </h3>
              <p className="text-charcoal/70">
                We provide a safe space to process your birth experience, listen to your concerns, and help identify signs of postnatal depression or anxiety if clinical NHS support is needed.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <div className="bg-teal text-white rounded-[2rem] p-12 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Need Support During Your Postnatal Journey?</h2>
          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
            Our trained doulas are here to provide compassionate, evidence-based support before, during, and after childbirth. Contact us today to learn more about our services or request personalised support in the UK.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-coral text-white px-8 py-4 rounded-lg font-semibold hover:bg-coral/90 transition-colors inline-flex items-center justify-center gap-2 shadow-sm">
              Request Postnatal Support <ArrowRight className="w-5 h-5" />
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
