import { motion } from 'motion/react';
import { FileText, Calendar } from 'lucide-react';

export default function TermsOfUse() {
  return (
    <div className="flex flex-col min-h-screen bg-cream">
      {/* Page Header */}
      <section className="relative overflow-hidden bg-cream py-12 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-4"
          >
            <div className="p-3 bg-teal/10 text-teal rounded-full">
              <FileText className="w-8 h-8" />
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-heading text-charcoal mb-4"
          >
            Terms of Use
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm text-charcoal/60 uppercase tracking-widest font-semibold flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" /> Effective Date: July 2026
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-12 max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-beige"
        >
          <div className="prose prose-teal max-w-none space-y-10 text-charcoal/80 leading-relaxed">
            
            {/* Welcome */}
            <div>
              <p className="text-lg text-charcoal font-medium leading-relaxed mb-4">
                Welcome to The Doula Project Initiative website.
              </p>
              <p>
                By accessing or using this website, you agree to comply with these Terms of Use.
              </p>
            </div>

            {/* Purpose of the Website */}
            <div>
              <h2 className="text-2xl font-bold font-heading text-teal mb-4 border-b border-beige pb-2">
                Purpose of the Website
              </h2>
              <p className="mb-4">
                This website provides:
              </p>
              <ul className="list-disc pl-6 space-y-2.5">
                <li>Information about doula services</li>
                <li>Maternal health education</li>
                <li>Community resources</li>
                <li>Educational downloads</li>
                <li>Opportunities to request support, volunteer, or partner with the initiative</li>
              </ul>
              <p className="mt-4">
                The information provided is intended for educational and informational purposes.
              </p>
            </div>

            {/* Medical Disclaimer */}
            <div className="bg-sage/10 rounded-2xl p-6 md:p-8 border border-sage/20">
              <h2 className="text-xl font-bold font-heading text-teal mb-3">
                Medical Disclaimer
              </h2>
              <p className="font-semibold text-charcoal mb-3">
                The information provided on this website is <span className="text-coral">not a substitute</span> for professional medical advice, diagnosis, or treatment.
              </p>
              <p className="mb-3">
                Doula services provide emotional, physical, and informational support but <span className="font-semibold text-charcoal">do not replace the care provided by qualified healthcare professionals</span>, including doctors, nurses, or midwives.
              </p>
              <p>
                Always seek advice from a qualified healthcare provider regarding any medical concerns related to pregnancy, childbirth, or postpartum care.
              </p>
            </div>

            {/* Acceptable Use */}
            <div>
              <h2 className="text-2xl font-bold font-heading text-teal mb-4 border-b border-beige pb-2">
                Acceptable Use
              </h2>
              <p className="mb-4">
                You agree to use this website only for lawful purposes. You must not:
              </p>
              <ul className="list-disc pl-6 space-y-2.5">
                <li>Submit false or misleading information</li>
                <li>Attempt unauthorized access to the website or its systems</li>
                <li>Upload malicious software or harmful content</li>
                <li>Disrupt website functionality</li>
                <li>Use the website for unlawful activities</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-2xl font-bold font-heading text-teal mb-4 border-b border-beige pb-2">
                Intellectual Property
              </h2>
              <p className="mb-4">
                Unless otherwise stated, all website content, including:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4 pl-4 font-medium text-charcoal/70">
                <div className="flex items-center gap-2"><span>•</span> Text</div>
                <div className="flex items-center gap-2"><span>•</span> Graphics</div>
                <div className="flex items-center gap-2"><span>•</span> Logos</div>
                <div className="flex items-center gap-2"><span>•</span> Images</div>
                <div className="flex items-center gap-2"><span>•</span> Educational resources</div>
                <div className="flex items-center gap-2"><span>•</span> Documents</div>
                <div className="flex items-center gap-2"><span>•</span> Website design</div>
              </div>
              <p className="mb-3">
                is the property of The Doula Project Initiative or is used with appropriate permission.
              </p>
              <p>
                Content may not be reproduced, distributed, or modified without prior written permission, except for personal, non-commercial use where permitted.
              </p>
            </div>

            {/* Downloadable Resources */}
            <div>
              <h2 className="text-2xl font-bold font-heading text-teal mb-4 border-b border-beige pb-2">
                Downloadable Resources
              </h2>
              <p className="mb-4">
                Resources such as:
              </p>
              <ul className="list-disc pl-6 space-y-2.5 mb-4">
                <li>Hospital Bag Checklist</li>
                <li>My Birth Plan</li>
                <li>Educational materials</li>
              </ul>
              <p className="mb-3">
                are provided for personal educational use.
              </p>
              <p className="italic">
                They may not be sold, altered, or redistributed for commercial purposes without permission.
              </p>
            </div>

            {/* External Links */}
            <div>
              <h2 className="text-2xl font-bold font-heading text-teal mb-4 border-b border-beige pb-2">
                External Links
              </h2>
              <p>
                This website may contain links to third-party websites for additional information. We do not control or endorse the content or practices of external websites and are not responsible for their availability or accuracy.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-2xl font-bold font-heading text-teal mb-4 border-b border-beige pb-2">
                Limitation of Liability
              </h2>
              <p className="mb-3">
                While we strive to ensure that the information on this website is accurate and up to date, we make no guarantees regarding completeness, accuracy, or availability.
              </p>
              <p>
                The Doula Project Initiative shall not be liable for any loss or damage arising from the use of this website or reliance on its content.
              </p>
            </div>

            {/* Changes to These Terms */}
            <div>
              <h2 className="text-2xl font-bold font-heading text-teal mb-4 border-b border-beige pb-2">
                Changes to These Terms
              </h2>
              <p>
                We reserve the right to modify these Terms of Use at any time. Changes become effective immediately upon publication on this page.
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-2xl font-bold font-heading text-teal mb-4 border-b border-beige pb-2">
                Governing Law
              </h2>
              <p>
                These Terms of Use shall be governed by the applicable laws of the country or jurisdiction in which The Doula Project Initiative operates, unless otherwise required by law.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-2xl font-bold font-heading text-teal mb-4 border-b border-beige pb-2">
                Contact
              </h2>
              <p>
                If you have questions regarding these Terms of Use, please contact us through the Contact page on this website.
              </p>
            </div>

          </div>
        </motion.div>
      </section>
    </div>
  );
}
