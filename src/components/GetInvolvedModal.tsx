import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2 } from 'lucide-react';

interface GetInvolvedModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType: string;
}

export default function GetInvolvedModal({ isOpen, onClose, initialType }: GetInvolvedModalProps) {
  const [typeOfInvolvement, setTypeOfInvolvement] = useState(initialType);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      if (initialType === 'Request a Doula' || initialType === 'Request Support') {
        setTypeOfInvolvement('Request Support');
      } else {
        setTypeOfInvolvement(initialType);
      }
      setIsSuccess(false);
    }
  }, [isOpen, initialType]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const isRequestingSupport = typeOfInvolvement === 'Request Support';

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-white rounded-[32px] shadow-2xl z-[101] max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8 md:p-10">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-beige text-charcoal/60 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {isSuccess ? (
                <div className="text-center py-10">
                  <div className="w-20 h-20 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-sage" />
                  </div>
                  <h2 className="text-2xl font-bold font-heading text-teal mb-4">Submission Successful</h2>
                  <p className="text-charcoal/80 text-lg mb-8">
                    {isRequestingSupport 
                      ? "Thank you for requesting support. A member of our community response team will contact you soon with care options."
                      : "Thank you for your interest in The Doula Project Initiative. A member of our team will contact you soon."}
                  </p>
                  <button
                    onClick={onClose}
                    className="bg-teal text-white px-8 py-3.5 rounded-full font-medium hover:bg-teal-dark transition-colors inline-block"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold font-heading text-teal mb-3">
                      {isRequestingSupport 
                        ? "Request Doula Support" 
                        : "Get Involved With The Doula Project Initiative"}
                    </h2>
                    <p className="text-charcoal/70">
                      {isRequestingSupport 
                        ? "Please complete the details below and our friendly community response team will reach out directly to support you."
                        : "Thank you for your interest. Please complete the form below and our team will contact you shortly."}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-1.5" htmlFor="fullName">Full Name *</label>
                        <input required type="text" id="fullName" className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-teal/50 bg-cream focus:bg-white transition-colors" placeholder="Jane Doe" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-1.5" htmlFor="email">Email Address *</label>
                        <input required type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-teal/50 bg-cream focus:bg-white transition-colors" placeholder="jane@example.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-1.5" htmlFor="phone">Phone Number *</label>
                        <input required type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-teal/50 bg-cream focus:bg-white transition-colors" placeholder="+254 700 000 000" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-1.5" htmlFor="location">Location / County</label>
                        <input type="text" id="location" className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-teal/50 bg-cream focus:bg-white transition-colors" placeholder="Nairobi" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-1.5" htmlFor="prefContact">Preferred Contact Method</label>
                        <select id="prefContact" className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-teal/50 bg-cream focus:bg-white transition-colors appearance-none">
                          <option value="Email">Email</option>
                          <option value="Phone">Phone</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-1.5" htmlFor="typeOfInvolvement">Type of Involvement</label>
                        <select 
                          id="typeOfInvolvement" 
                          value={typeOfInvolvement}
                          onChange={(e) => setTypeOfInvolvement(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-teal/50 bg-cream focus:bg-white transition-colors appearance-none"
                        >
                          <option value="Request Support">Request Doula Support</option>
                          <option value="Become a Doula">Become a Doula</option>
                          <option value="Volunteer">Volunteer</option>
                          <option value="Donate">Donate</option>
                          <option value="Partner With Us">Partner With Us</option>
                        </select>
                      </div>
                    </div>

                    <AnimatePresence>
                      {typeOfInvolvement === 'Partner With Us' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-2">
                            <label className="block text-sm font-medium text-charcoal mb-1.5" htmlFor="organization">Organization Name</label>
                            <input type="text" id="organization" className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-teal/50 bg-cream focus:bg-white transition-colors" placeholder="Your Organization" />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1.5" htmlFor="message">Message / Comments</label>
                      <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-teal/50 bg-cream focus:bg-white transition-colors" placeholder="How would you like to be involved?"></textarea>
                    </div>

                    <div className="flex items-start gap-3 pt-2">
                      <div className="flex items-center h-5 mt-1">
                        <input required id="consent" type="checkbox" className="w-4 h-4 rounded border-border text-teal focus:ring-teal" />
                      </div>
                      <label htmlFor="consent" className="text-sm text-charcoal/70">
                        I agree to be contacted regarding this inquiry by The Doula Project Initiative team.
                      </label>
                    </div>

                    <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 pt-6 border-t border-border">
                      <button
                        type="button"
                        onClick={onClose}
                        className="px-6 py-3 rounded-xl font-medium text-charcoal hover:bg-beige transition-colors w-full sm:w-auto"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-8 py-3 rounded-xl font-medium bg-coral text-white hover:bg-coral/90 transition-colors shadow-sm disabled:opacity-70 disabled:cursor-not-allowed w-full sm:w-auto"
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export const triggerGetInvolvedModal = (type: string = 'Become a Doula') => {
  const event = new CustomEvent('open-get-involved', { detail: { type } });
  window.dispatchEvent(event);
};

