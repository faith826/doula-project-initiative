import { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Activity, Baby, BookHeart, Quote, ArrowRight, ShieldCheck, Users, Search, Download, HelpCircle, Newspaper, Calendar, MapPin, Mail, Phone, ChevronRight, CheckSquare, FileText } from 'lucide-react';
import { triggerGetInvolvedModal } from '../components/GetInvolvedModal';
const homeHero = '/src/assets/images/home_hero_1784436332838.jpg';

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let animationFrameId: number;
    
    const startCount = () => {
      const duration = 2000; // 2 seconds animation
      const startTime = performance.now();
      
      const updateCount = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function outQuad
        const easeProgress = progress * (2 - progress);
        const currentCount = Math.floor(easeProgress * value);
        
        setCount(currentCount);
        
        if (progress < 1) {
          animationFrameId = requestAnimationFrame(updateCount);
        } else {
          setCount(value);
        }
      };
      
      animationFrameId = requestAnimationFrame(updateCount);
    };

    if (ref.current) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCount();
            if (observer) {
              observer.unobserve(entry.target);
            }
          }
        });
      }, { threshold: 0.1 });
      
      observer.observe(ref.current);
    }

    return () => {
      if (observer) observer.disconnect();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [value]);

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold mb-1 font-heading">
      {formatNumber(count)}{suffix}
    </div>
  );
}

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-cream py-4 lg:py-6 border-b border-border">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-6xl font-bold font-heading text-charcoal leading-[1.05] tracking-tight mb-6"
              >
                Supporting Mothers.<br />
                Empowering Families.<br />
                <span className="text-teal">Transforming Birth.</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-charcoal/70 leading-relaxed max-w-xl mb-8"
              >
                Providing continuous emotional, physical, and informational support to mothers through trained community doulas in the heart of our community.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                <button
                  onClick={() => triggerGetInvolvedModal('Request Support')}
                  className="bg-coral text-white px-8 py-4 rounded-lg font-semibold hover:bg-coral/95 transition-colors inline-flex items-center cursor-pointer border-0 shadow-sm"
                >
                  Request Support
                </button>
                <Link to="/about" className="bg-transparent border-2 border-teal text-teal px-8 py-4 rounded-lg font-semibold hover:bg-teal hover:text-white transition-colors inline-flex items-center">
                  Our Story
                </Link>
              </motion.div>
            </div>
            
            <div className="w-full lg:w-[450px] h-[340px] rounded-[40px] relative overflow-hidden border-8 border-white shadow-xl shrink-0 mt-8 lg:mt-0">
              <img 
                src={homeHero} 
                alt="Supportive community of Black African mothers and community health workers" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-charcoal/10 mix-blend-multiply" />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="inline-block bg-sage/20 text-teal font-medium px-4 py-1.5 rounded-full text-sm mb-6">
                Our Partnership
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-teal mb-6">
                A Community-Centered Approach to Maternal Health
              </h2>
              <p className="text-charcoal/80 mb-6 text-lg leading-relaxed">
                The Doula Project Initiative is a powerful partnership between <strong className="text-teal">TNL Partnerships</strong> and <strong className="text-teal">Utulivu Women's Group (UWG)</strong>. 
              </p>
              <p className="text-charcoal/80 mb-8">
                Together, we are transforming the birth experience for mothers by ensuring every woman has access to compassionate, dedicated support. We believe that maternal wellbeing is the foundation of a healthy community, and our trained doulas are at the heart of this transformation, providing care that respects culture, dignity, and individual needs.
              </p>
              <Link to="/about" className="text-coral font-semibold hover:text-coral/80 inline-flex items-center gap-2 transition-colors">
                Read Our Story <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&q=80" 
                  alt="Community support" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-cream p-6 rounded-2xl shadow-lg border border-beige">
                <div className="flex items-center gap-4">
                  <div className="bg-coral/20 p-3 rounded-full">
                    <Heart className="w-8 h-8 text-coral" fill="currentColor" />
                  </div>
                  <div>
                    <div className="font-bold font-heading text-teal text-xl">Trusted Care</div>
                    <div className="text-sm text-charcoal/70">For every mother</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Doula Support Matters */}
      <section className="py-20 bg-beige">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-teal mb-6">
              Why Doula Support Matters
            </h2>
            <p className="text-charcoal/80 text-lg">
              Evidence shows that continuous support during childbirth improves health outcomes for both mother and baby. Here is how our doulas help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Emotional Support',
                description: 'Providing reassurance and presence during the entire birth journey.',
                icon: Heart,
                color: 'text-teal',
                bg: 'bg-teal/10'
              },
              {
                title: 'Physical Comfort',
                description: 'Hands-on techniques and movement to facilitate labor and ease pain.',
                icon: Activity,
                color: 'text-sage',
                bg: 'bg-sage/10'
              },
              {
                title: 'Birth Preparation',
                description: 'Empowering parents with evidence-based knowledge to make choices.',
                icon: BookHeart,
                color: 'text-gold',
                bg: 'bg-gold/10'
              },
              {
                title: 'Postpartum Guidance',
                description: 'Transitioning smoothly into parenthood with newborn care support.',
                icon: Baby,
                color: 'text-coral',
                bg: 'bg-coral/10'
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-border">
                <div className={`${feature.bg} w-10 h-10 rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="font-bold text-charcoal mb-2 font-sans text-base">{feature.title}</h3>
                <p className="text-charcoal/60 leading-relaxed text-xs">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-teal mb-4">
                Our Services
              </h2>
              <p className="text-charcoal/80 text-lg">
                Comprehensive support tailored to your unique journey into motherhood.
              </p>
            </div>
            <Link to="/#services" className="text-teal font-semibold hover:text-teal-dark inline-flex items-center gap-2">
              View All Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 overflow-hidden md:grid-cols-2 rounded-2xl border border-beige bg-cream">
            {[
              { title: 'Pregnancy Support', desc: 'Prenatal visits, birth planning, and emotional readiness.', img: 'https://i.postimg.cc/fL9zVkD7/Pregnancy-Support-1.png', link: '/services/pregnancy-support' },
              { title: 'Birth Support', desc: 'Continuous presence, advocacy, and comfort measures during labor.', img: 'https://i.postimg.cc/dQhHTrMJ/birth-support-photo.png', link: '/services/birth-support' },
              { title: 'Postpartum Support', desc: 'In-home visits, feeding support, and maternal recovery.', img: 'https://i.postimg.cc/VvtWZ91z/postpartum-support-photo.png', link: '/services/postpartum-support' },
              { title: 'Family Education', desc: 'Workshops for partners and family members to support the mother.', img: 'https://i.postimg.cc/pTFjP27M/family-education-photo.png', link: '/services/family-education' }
            ].map((service, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row group bg-white border-b border-r border-beige">
                <div className="sm:w-2/5 aspect-square sm:aspect-auto overflow-hidden">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="sm:w-3/5 p-8 flex flex-col justify-center">
                  <h3 className="text-xl font-bold font-heading text-teal mb-2">{service.title}</h3>
                  <p className="text-charcoal/70 mb-6 text-sm">{service.desc}</p>
                  <Link to={service.link} className="text-coral font-medium inline-flex items-center gap-1 hover:gap-2 transition-all mt-auto w-fit">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Snapshot */}
      <section id="impact" className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="w-full bg-teal rounded-3xl p-6 md:p-8 flex flex-col md:flex-row justify-around items-center text-white gap-8 md:gap-0">
            <div className="text-center">
              <AnimatedCounter value={500} suffix="+" />
              <div className="text-[10px] uppercase tracking-widest opacity-80">Mothers Supported</div>
            </div>
            <div className="hidden md:block w-px h-10 bg-white/20"></div>
            <div className="text-center">
              <AnimatedCounter value={42} />
              <div className="text-[10px] uppercase tracking-widest opacity-80">Doulas Trained</div>
            </div>
            <div className="hidden md:block w-px h-10 bg-white/20"></div>
            <div className="text-center">
              <AnimatedCounter value={1200} />
              <div className="text-[10px] uppercase tracking-widest opacity-80">Families Reached</div>
            </div>
            <div className="hidden md:block w-px h-10 bg-white/20"></div>
            <div className="text-center">
              <AnimatedCounter value={15} suffix="+" />
              <div className="text-[10px] uppercase tracking-widest opacity-80">Community Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Success */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Research */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-beige">
              <ShieldCheck className="w-12 h-12 text-teal mb-6" />
              <h2 className="text-3xl font-bold font-heading text-teal mb-4">Evidence-Based Care</h2>
              <p className="text-charcoal/80 mb-6 leading-relaxed">
                Our initiative is grounded in robust Community-Based Participatory Action Research. We continuously monitor maternal health challenges and outcomes to ensure our services directly address the real needs of our community.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-sage/20 p-1 rounded-full"><div className="w-2 h-2 rounded-full bg-sage"></div></div>
                  <span className="text-charcoal/80 text-sm">Lower rates of interventions and complications</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-sage/20 p-1 rounded-full"><div className="w-2 h-2 rounded-full bg-sage"></div></div>
                  <span className="text-charcoal/80 text-sm">Increased maternal satisfaction in birth experiences</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-sage/20 p-1 rounded-full"><div className="w-2 h-2 rounded-full bg-sage"></div></div>
                  <span className="text-charcoal/80 text-sm">Improved postpartum mental health wellness</span>
                </li>
              </ul>
              <Link to="/#resources" className="bg-teal text-white px-6 py-3 rounded-full font-medium hover:bg-teal-dark transition-colors inline-block text-sm">
                View Research Findings
              </Link>
            </div>

            {/* Testimonial */}
            <div className="relative">
              <Quote className="absolute -top-6 -left-6 w-20 h-20 text-coral/20" />
              <h2 className="text-3xl font-bold font-heading text-teal mb-8">Success Stories</h2>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-beige relative z-10">
                <p className="text-lg italic text-charcoal/80 mb-6">
                  "Having a doula from the project changed everything for my family. She listened when I felt unheard, held my hand through the hardest parts, and empowered me to advocate for myself in the delivery room."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center font-bold text-teal font-heading">
                    S
                  </div>
                  <div>
                    <div className="font-bold text-teal">Sarah M.</div>
                    <div className="text-sm text-charcoal/60">First-time mother</div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mt-6 justify-center lg:justify-start">
                <div className="w-3 h-3 rounded-full bg-teal"></div>
                <div className="w-3 h-3 rounded-full bg-teal/20"></div>
                <div className="w-3 h-3 rounded-full bg-teal/20"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-teal mb-6">
              Get Involved
            </h2>
            <p className="text-charcoal/80 text-lg">
              Join us in transforming birth experiences. There are many ways you can support our mission and make a lasting impact in the community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Become a Doula',
                desc: 'Join our training program to support mothers in your community.',
                icon: Heart,
                color: 'text-coral',
                bg: 'bg-coral/10',
                link: 'Apply Now'
              },
              {
                title: 'Volunteer',
                desc: 'Help with community events, administration, and family outreach.',
                icon: Users,
                color: 'text-teal',
                bg: 'bg-teal/10',
                link: 'Sign Up'
              },
              {
                title: 'Donate',
                desc: 'Your financial support ensures more families receive free care.',
                icon: ArrowRight,
                color: 'text-gold',
                bg: 'bg-gold/10',
                link: 'Give Today'
              },
              {
                title: 'Partner With Us',
                desc: 'Organizations integrating our services to improve maternal health.',
                icon: ShieldCheck,
                color: 'text-sage',
                bg: 'bg-sage/10',
                link: 'Inquire'
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-border flex flex-col items-center text-center">
                <div className={`${item.bg} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <h3 className="text-xl font-bold font-heading text-teal mb-3">{item.title}</h3>
                <p className="text-charcoal/60 text-sm mb-6 flex-grow">{item.desc}</p>
                <button 
                  onClick={() => triggerGetInvolvedModal(item.title)}
                  className="text-coral font-medium text-sm flex items-center gap-1 hover:underline cursor-pointer animate-none"
                >
                  {item.link} <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="inline-block bg-peach px-4 py-1.5 rounded-full text-coral font-medium text-sm mb-4">
                Free Educational Materials
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-charcoal mb-4">
                Resources for Your Journey
              </h2>
              <p className="text-charcoal/80 text-lg">
                Download our practical guides and templates to help you prepare for labour, birth, and your postpartum experience.
              </p>
            </div>
            <Link to="/resources" className="text-teal font-semibold hover:text-teal-dark inline-flex items-center gap-2">
              View All Resources <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Hospital Bag Checklist Card */}
            <Link to="/resources/hospital-bag-checklist" className="block bg-sage/20 rounded-[32px] p-8 relative overflow-hidden group hover:shadow-lg transition-all duration-300 border border-white">
              <div className="bg-white/80 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <CheckSquare className="w-7 h-7 text-teal" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-charcoal mb-3">Hospital Bag Checklist</h3>
              <p className="text-charcoal/70 mb-8 leading-relaxed max-w-md">
                A practical checklist to help expectant mothers and birth partners prepare everything needed for labour, birth, and the first days after delivery.
              </p>
              <div 
                className="inline-flex items-center gap-2 bg-white text-charcoal font-semibold px-6 py-3 rounded-full hover:shadow-md transition-shadow group-hover:bg-charcoal group-hover:text-white"
              >
                <Download className="w-4 h-4" />
                View & Download
              </div>
            </Link>

            {/* My Birth Plan Card */}
            <Link to="/resources/my-birth-plan" className="block bg-peach/30 rounded-[32px] p-8 relative overflow-hidden group hover:shadow-lg transition-all duration-300 border border-white">
              <div className="bg-white/80 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <FileText className="w-7 h-7 text-coral" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-charcoal mb-3">My Birth Plan</h3>
              <p className="text-charcoal/70 mb-8 leading-relaxed max-w-md">
                A simple birth plan template that helps mothers communicate their preferences, pain relief choices, birth partner information, feeding plans, and cultural or personal wishes with their healthcare team.
              </p>
              <div 
                className="inline-flex items-center gap-2 bg-white text-charcoal font-semibold px-6 py-3 rounded-full hover:shadow-md transition-shadow group-hover:bg-charcoal group-hover:text-white"
              >
                <Download className="w-4 h-4" />
                View & Download
              </div>
            </Link>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 border border-beige text-center shadow-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold font-heading text-teal mb-4">Equip Yourself for the Journey</h3>
            <p className="text-charcoal/80 mb-8 max-w-2xl mx-auto text-lg">
              These free resources are designed to help you and your support team feel confident, prepared, and empowered throughout your birth experience.
            </p>
            <Link to="/resources" className="bg-teal text-white px-8 py-4 rounded-full font-semibold hover:bg-teal-dark transition-colors inline-flex items-center gap-2 shadow-sm">
              Explore All Materials <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Partners section */}
      <section id="partners" className="py-16 bg-white border-t border-beige">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm font-bold tracking-widest text-sage uppercase mb-8">A Strategic Partnership Between</h2>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60">
            <div className="text-2xl font-bold font-heading text-charcoal flex items-center gap-2">
              <Users className="text-teal" /> TNL Partnerships
            </div>
            <div className="text-2xl font-bold font-heading text-charcoal flex items-center gap-2">
              <Users className="text-coral" /> Utulivu Women's Group
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Preview */}
      <section className="py-24 bg-teal relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-teal-dark rounded-full filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-coral/20 rounded-full filter blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
                Together We Can Improve Maternal Health Outcomes.
              </h2>
              <p className="text-teal-100 text-lg mb-10 max-w-md">
                Whether you need support, want to become a trained doula, or wish to fund our mission, your involvement makes a lasting impact.
              </p>
              <div className="flex gap-6 mb-8 text-teal-100">
                 <div className="flex items-center gap-3">
                   <Phone className="w-5 h-5 text-coral" />
                   <span>+254 700 000 000</span>
                 </div>
                 <div className="flex items-center gap-3">
                   <Mail className="w-5 h-5 text-coral" />
                   <span>hello@doulaproject.org</span>
                 </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 text-center">
              <h3 className="text-2xl font-bold font-heading text-white mb-4">Reach out today</h3>
              <p className="text-teal-100 mb-8 max-w-sm mx-auto">Get in touch with our team for questions, partnerships, or immediate doula support.</p>
              <div className="flex flex-col gap-4 max-w-xs mx-auto">
                <Link to="/contact" className="bg-coral text-white px-8 py-4 rounded-xl font-semibold hover:bg-coral/90 transition-colors shadow-lg shadow-coral/20 w-full">
                  Contact Us
                </Link>
                <Link to="#get-involved" className="bg-white text-teal px-8 py-4 rounded-xl font-semibold hover:bg-cream transition-colors w-full">
                  Donate Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
