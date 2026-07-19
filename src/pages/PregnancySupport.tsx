import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ArrowRight, BookHeart, MessagesSquare, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PregnancySupport() {
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
                <span className="text-charcoal font-medium">Pregnancy Support</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&q=80" 
            alt="Doula supporting pregnant mother" 
            className="w-full h-full object-cover"
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
              Pregnancy Support
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto mb-8">
              Compassionate, evidence-based care to guide you through a healthy and empowered pregnancy journey.
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
            Pregnancy is a transformative journey. Our trained doulas provide continuous emotional, physical, and informational support to help you feel confident, prepared, and deeply supported every step of the way.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold font-heading text-teal mb-4 flex items-center gap-2">
                <BookHeart className="w-6 h-6 text-coral" /> Prenatal Visits
              </h3>
              <p className="text-charcoal/70">
                We meet with you during your pregnancy to build a trusting relationship, understand your needs, and answer any questions you have about pregnancy, labour, and early motherhood.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold font-heading text-teal mb-4 flex items-center gap-2">
                <MessagesSquare className="w-6 h-6 text-coral" /> Birth Planning
              </h3>
              <p className="text-charcoal/70">
                Together, we help you explore your options, understand your rights, and create a comprehensive birth plan that reflects your preferences and values.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold font-heading text-teal mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-coral" /> Emotional Wellbeing
              </h3>
              <p className="text-charcoal/70">
                Pregnancy can bring a mix of emotions. We offer a safe, non-judgmental space to process your feelings, address fears, and cultivate a positive mindset.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold font-heading text-teal mb-4 flex items-center gap-2">
                <ArrowRight className="w-6 h-6 text-coral" /> Preparing for Labour
              </h3>
              <p className="text-charcoal/70">
                We provide hands-on techniques, breathing exercises, and comfort measures that you and your birth partner can use during labour.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Related Resources */}
      <section className="bg-sage/10 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold font-heading text-teal mb-8 text-center">Related Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/resources/hospital-bag-checklist" className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-beige group">
              <h3 className="text-xl font-bold text-charcoal group-hover:text-teal mb-2">Hospital Bag Checklist</h3>
              <p className="text-charcoal/70 text-sm">Prepare everything you need for the hospital with our comprehensive, interactive checklist.</p>
            </Link>
            <Link to="/resources/my-birth-plan" className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-beige group">
              <h3 className="text-xl font-bold text-charcoal group-hover:text-teal mb-2">My Birth Plan</h3>
              <p className="text-charcoal/70 text-sm">Document your preferences and choices for labor and delivery with our easy-to-use template.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <div className="bg-teal text-white rounded-[2rem] p-12 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Need Support During Your Pregnancy Journey?</h2>
          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
            Our trained doulas are here to provide compassionate, evidence-based support before, during, and after childbirth. Contact us today to learn more about our services or request personalized support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-coral text-white px-8 py-4 rounded-lg font-semibold hover:bg-coral/90 transition-colors inline-flex items-center justify-center gap-2 shadow-sm">
              Request Support <ArrowRight className="w-5 h-5" />
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
