import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ArrowRight, Users, BookOpen, Presentation, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FamilyEducation() {
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
                <span className="text-charcoal font-medium">Family Education</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?auto=format&fit=crop&q=80" 
            alt="Family participating in maternal health education" 
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
              Family Education
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto mb-8">
              Equipping partners, families, and communities with the knowledge to create a supportive environment.
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
            A supported mother needs a supportive village. We believe that involving partners and extended family members is crucial for healthy pregnancies, positive birth experiences, and smooth postnatal transitions.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold font-heading text-teal mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-coral" /> Partner Support
              </h3>
              <p className="text-charcoal/70">
                We empower partners with practical tools and knowledge on how to be an active, confident participant during pregnancy, labour, and the early days of parenting.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold font-heading text-teal mb-4 flex items-center gap-2">
                <Home className="w-6 h-6 text-coral" /> Preparing Family Members
              </h3>
              <p className="text-charcoal/70">
                We help grandparents, siblings, and extended family understand their roles and how they can best support the growing family without overstepping boundaries.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold font-heading text-teal mb-4 flex items-center gap-2">
                <Presentation className="w-6 h-6 text-coral" /> Community Workshops
              </h3>
              <p className="text-charcoal/70">
                We host interactive group workshops on topics like childbirth preparation, newborn care basics, and maternal mental health, fostering community connection.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold font-heading text-teal mb-4 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-coral" /> Parenting Education
              </h3>
              <p className="text-charcoal/70">
                We provide evidence-based resources and gentle guidance on normal newborn behaviour, soothing techniques, safe sleep, and adjusting to your new identities as parents.
              </p>
            </div>
          </div>
          
          <div className="bg-sage/10 rounded-2xl p-8 border border-sage/30 text-center mb-8">
            <h3 className="text-2xl font-bold font-heading text-teal mb-4">Building Supportive Environments</h3>
            <p className="text-charcoal/80 mb-0">
              When families are educated and prepared, they become the strong foundation a mother needs to rest, heal, and bond with her baby.
            </p>
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
              Register for a Family Workshop <ArrowRight className="w-5 h-5" />
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
