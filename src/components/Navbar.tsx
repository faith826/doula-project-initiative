import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { triggerGetInvolvedModal } from './GetInvolvedModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'What Is a Doula?', path: '/what-is-a-doula' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-cream border-b border-border py-2">
      <div className="px-6 lg:px-10">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-teal flex-shrink-0"></div>
              <span className="font-bold text-lg tracking-tight text-teal uppercase">
                The Doula Project
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="flex items-center gap-8 font-medium text-sm text-charcoal/80">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <Link
                    to={link.path}
                    className={`flex items-center transition-colors ${
                      isActive(link.path)
                        ? 'text-teal font-bold'
                        : 'hover:text-teal'
                    }`}
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          
          <div className="hidden md:flex items-center">
            <button
              onClick={() => triggerGetInvolvedModal('Request Support')}
              className="px-6 py-2.5 bg-coral text-white text-sm font-semibold rounded-full shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              Request Support
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-teal hover:text-teal-dark hover:bg-beige focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-cream border-t border-beige"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      isActive(link.path)
                        ? 'text-teal bg-teal/10'
                        : 'text-charcoal hover:bg-beige'
                    }`}
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
              <div className="mt-4 px-3">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    triggerGetInvolvedModal('Request Support');
                  }}
                  className="block w-full text-center bg-coral text-white px-5 py-3 rounded-md font-medium hover:bg-coral/90 transition-colors cursor-pointer border-0"
                >
                  Request Support
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
