import { Link } from 'react-router-dom';
import { Heart, Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-beige text-charcoal pt-16 pb-8 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand & Mission */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-teal flex-shrink-0"></div>
              <div className="flex flex-col">
                <span className="font-heading text-xl font-bold leading-tight text-teal uppercase tracking-tight">
                  The Doula Project
                </span>
              </div>
            </Link>
            <p className="text-charcoal/70 text-sm leading-relaxed max-w-xs">
              Improving maternal wellbeing through accessible doula services, community engagement, and evidence-based support systems.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-charcoal/50 hover:text-teal transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-charcoal/50 hover:text-teal transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-charcoal/50 hover:text-teal transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-teal uppercase tracking-widest text-[11px]">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-charcoal/70 hover:text-teal transition-colors text-sm">About Us</Link>
              </li>
              <li>
                <Link to="/what-is-a-doula" className="text-charcoal/70 hover:text-teal transition-colors text-sm">What Is a Doula?</Link>
              </li>
              <li>
                <Link to="/#impact" className="text-charcoal/70 hover:text-teal transition-colors text-sm">Impact & Stories</Link>
              </li>
              <li>
                <Link to="/#resources" className="text-charcoal/70 hover:text-teal transition-colors text-sm">Research & Evidence</Link>
              </li>
              <li>
                <Link to="/#partners" className="text-charcoal/70 hover:text-teal transition-colors text-sm">Our Partners</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-teal uppercase tracking-widest text-[11px]">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/#services" className="text-charcoal/70 hover:text-teal transition-colors text-sm">Pregnancy Support</Link>
              </li>
              <li>
                <Link to="/#services" className="text-charcoal/70 hover:text-teal transition-colors text-sm">Birth Support</Link>
              </li>
              <li>
                <Link to="/#services" className="text-charcoal/70 hover:text-teal transition-colors text-sm">Postpartum Support</Link>
              </li>
              <li>
                <Link to="/#services" className="text-charcoal/70 hover:text-teal transition-colors text-sm">Family Education</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-teal uppercase tracking-widest text-[11px]">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                <span className="text-charcoal/70 text-sm">123 Community Hub<br/>Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-teal shrink-0" />
                <span className="text-charcoal/70 text-sm">+254 700 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-teal shrink-0" />
                <span className="text-charcoal/70 text-sm">hello@doulaproject.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-charcoal/50 text-[11px] font-semibold uppercase tracking-widest text-center md:text-left">
            © {new Date().getFullYear()} The Doula Project Initiative. <br className="md:hidden" />
            <span className="text-teal">Primary Partner: TNL Partnerships</span> <span className="mx-2 hidden md:inline">|</span> Community Partner: Utulivu Women's Group (UWG)
          </p>
          <div className="flex gap-6 uppercase tracking-widest text-[11px] font-semibold">
            <Link to="#" className="text-charcoal/50 hover:text-teal transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-charcoal/50 hover:text-teal transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
