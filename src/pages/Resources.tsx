import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Download, FileText, CheckSquare, Heart, ArrowRight } from 'lucide-react';
import { triggerGetInvolvedModal } from '../components/GetInvolvedModal';

export default function Resources() {
  const resources = [
    {
      title: "Hospital Bag Checklist",
      description: "A practical checklist to help expectant mothers and birth partners prepare everything needed for labour, birth, and the first days after delivery.",
      icon: <CheckSquare className="w-8 h-8 text-teal" />,
      color: "bg-sage/30",
      path: "/resources/hospital-bag-checklist",
    },
    {
      title: "My Birth Plan",
      description: "A simple birth plan template that helps mothers communicate their preferences, pain relief choices, birth partner information, feeding plans, and cultural or personal wishes with their healthcare team.",
      icon: <FileText className="w-8 h-8 text-coral" />,
      color: "bg-peach/30",
      path: "/resources/my-birth-plan",
    }
  ];

  return (
    <div className="pt-4 pb-4">
      {/* Hero Section */}
      <section className="px-6 py-4 md:py-6 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-peach px-4 py-2 rounded-full text-coral font-medium text-sm mb-6">
            <Heart className="w-4 h-4 fill-current" /> Free Resources
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-charcoal mb-6">
            Educational Materials for Your Journey
          </h1>
          <p className="text-lg md:text-xl text-charcoal/70 mb-8 leading-relaxed">
            Download our free resources designed to support expectant mothers and families during pregnancy, birth, and postpartum preparation.
          </p>
        </motion.div>
      </section>

      {/* Resources Grid */}
      <section className="px-6 pb-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={resource.path}
                className={`block rounded-[32px] p-8 md:p-10 relative overflow-hidden group ${resource.color} hover:shadow-lg transition-all duration-300 border border-white h-full`}
              >
                <div className="bg-white/60 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm backdrop-blur-sm">
                  {resource.icon}
                </div>
                <h2 className="text-2xl font-bold font-heading text-charcoal mb-4">
                  {resource.title}
                </h2>
                <p className="text-charcoal/80 mb-8 leading-relaxed">
                  {resource.description}
                </p>
                
                <div 
                  className="inline-flex items-center gap-2 bg-white text-charcoal font-semibold px-6 py-3 rounded-full hover:shadow-md transition-shadow group-hover:bg-charcoal group-hover:text-white"
                >
                  <Download className="w-4 h-4" />
                  View & Download
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Support CTA */}
      <section className="px-6 py-20 bg-teal text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Need more personalized support?
            </h2>
            <p className="text-lg text-cream/90 mb-8 max-w-2xl mx-auto">
              Our community doulas are here to provide emotional, physical, and informational support throughout your pregnancy and birth journey.
            </p>
            <button
              onClick={() => triggerGetInvolvedModal('Request Support')}
              className="bg-coral text-white px-8 py-4 rounded-full font-semibold hover:bg-coral/90 transition-colors inline-flex items-center gap-2 border-0 cursor-pointer shadow-md"
            >
              Request Doula Support <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
