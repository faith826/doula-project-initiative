import { motion } from 'motion/react';
import { ShieldCheck, Calendar } from 'lucide-react';

export default function PrivacyPolicy() {
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
              <ShieldCheck className="w-8 h-8" />
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-heading text-charcoal mb-4"
          >
            Privacy Policy
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
            
            {/* Intro */}
            <div>
              <p className="text-lg text-charcoal font-medium leading-relaxed mb-4">
                The Doula Project Initiative ("we," "our," or "us") is committed to protecting your privacy and safeguarding your personal information.
              </p>
              <p>
                This Privacy Policy explains how we collect, use, store, and protect the information you provide when using our website.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-2xl font-bold font-heading text-teal mb-4 border-b border-beige pb-2">
                Information We Collect
              </h2>
              <p className="mb-4">
                We may collect the following information when you use our website:
              </p>
              <ul className="list-disc pl-6 space-y-2.5">
                <li>Your name</li>
                <li>Email address</li>
                <li>Telephone number</li>
                <li>Organization (where applicable)</li>
                <li>Information submitted through contact forms</li>
                <li>Information submitted when requesting doula support</li>
                <li>Volunteer or partnership application information</li>
                <li>Technical information such as browser type, device information, IP address, and website usage statistics</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="text-2xl font-bold font-heading text-teal mb-4 border-b border-beige pb-2">
                How We Use Your Information
              </h2>
              <p className="mb-4">
                We use your information to:
              </p>
              <ul className="list-disc pl-6 space-y-2.5">
                <li>Respond to enquiries and requests</li>
                <li>Provide information about our services</li>
                <li>Process support, volunteer, or partnership applications</li>
                <li>Improve our website and user experience</li>
                <li>Communicate updates about our programmes and services</li>
                <li>Monitor website performance and security</li>
              </ul>
              <p className="mt-4 italic font-medium text-teal/80">
                We only collect information necessary to provide our services effectively.
              </p>
            </div>

            {/* Sharing Your Information */}
            <div>
              <h2 className="text-2xl font-bold font-heading text-teal mb-4 border-b border-beige pb-2">
                Sharing Your Information
              </h2>
              <p className="mb-4">
                We do not sell, rent, or trade your personal information. Your information may only be shared:
              </p>
              <ul className="list-disc pl-6 space-y-2.5">
                <li>With trusted service providers supporting website operations</li>
                <li>When required by law</li>
                <li>To protect the rights, safety, or security of individuals or the organization</li>
              </ul>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-2xl font-bold font-heading text-teal mb-4 border-b border-beige pb-2">
                Data Security
              </h2>
              <p>
                We implement reasonable administrative, technical, and organizational measures to protect your personal information against unauthorized access, disclosure, alteration, or destruction.
              </p>
              <p className="mt-2.5">
                However, no method of transmitting information over the internet is completely secure.
              </p>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-bold font-heading text-teal mb-4 border-b border-beige pb-2">
                Cookies
              </h2>
              <p className="mb-4">
                Our website may use cookies to:
              </p>
              <ul className="list-disc pl-6 space-y-2.5">
                <li>Improve website performance</li>
                <li>Remember user preferences</li>
                <li>Analyze website traffic</li>
                <li>Enhance your browsing experience</li>
              </ul>
              <p className="mt-4">
                You may disable cookies through your browser settings; however, some website features may not function properly.
              </p>
            </div>

            {/* Third-Party Services */}
            <div>
              <h2 className="text-2xl font-bold font-heading text-teal mb-4 border-b border-beige pb-2">
                Third-Party Services
              </h2>
              <p>
                Our website may contain links to external websites or use trusted third-party services. We are not responsible for the privacy practices or content of external websites.
              </p>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="text-2xl font-bold font-heading text-teal mb-4 border-b border-beige pb-2">
                Children's Privacy
              </h2>
              <p>
                Our website is intended to provide maternal health information and community services. We do not knowingly collect personal information from children without appropriate consent where required.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl font-bold font-heading text-teal mb-4 border-b border-beige pb-2">
                Your Rights
              </h2>
              <p className="mb-4">
                Depending on applicable laws, you may have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2.5">
                <li>Request access to your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information where appropriate</li>
                <li>Withdraw consent for communications</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us using the details provided on our Contact page.
              </p>
            </div>

            {/* Changes to This Policy */}
            <div>
              <h2 className="text-2xl font-bold font-heading text-teal mb-4 border-b border-beige pb-2">
                Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
              </p>
            </div>

            {/* Contact Us */}
            <div>
              <h2 className="text-2xl font-bold font-heading text-teal mb-4 border-b border-beige pb-2">
                Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy or how your information is handled, please contact us through the Contact page on this website.
              </p>
            </div>

          </div>
        </motion.div>
      </section>
    </div>
  );
}
