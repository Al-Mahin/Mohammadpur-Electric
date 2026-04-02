/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Clock, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  MapPin, 
  Star, 
  Menu, 
  X,
  Wrench,
  Lightbulb,
  Building2,
  Home
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const SERVICES = [
  {
    title: "Emergency Repairs",
    description: "Sudden power cuts, short circuits, or burning smells? We're available 24/7 for immediate assistance.",
    icon: Zap,
    color: "bg-amber-100 text-amber-600"
  },
  {
    title: "Residential Wiring",
    description: "Complete house wiring, rewiring, and circuit breaker upgrades for your home's safety.",
    icon: Home,
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Commercial Maintenance",
    description: "Reliable electrical solutions for shops, offices, and restaurants across Mohammadpur.",
    icon: Building2,
    color: "bg-purple-100 text-purple-600"
  },
  {
    title: "Installation Services",
    description: "Expert installation of AC, Geysers, Generators, UPS, and smart home lighting systems.",
    icon: Lightbulb,
    color: "bg-green-100 text-green-600"
  }
];

const REVIEWS = [
  {
    name: "Rahat Ahmed",
    location: "Taj Mahal Road",
    text: "Excellent service! They arrived within 20 minutes for a midnight short circuit emergency. Highly recommended.",
    stars: 5
  },
  {
    name: "Sultana Begum",
    location: "Asad Gate",
    text: "Very professional and clean work. They fixed my AC wiring issues quickly and at a fair price.",
    stars: 5
  },
  {
    name: "Tanvir Hossain",
    location: "Town Hall",
    text: "Reliable team. I used them for my office maintenance. They are now my go-to electricians in Mohammadpur.",
    stars: 4
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phoneNumber = "+8801234567890"; // Placeholder number
  const whatsappNumber = "8801234567890";

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-amber-200">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-amber-500 p-2 rounded-lg">
              <Zap className="w-6 h-6 text-white" fill="currentColor" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Mohammadpur<span className="text-amber-600">Electric</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium hover:text-amber-600 transition-colors">Services</a>
            <a href="#about" className="text-sm font-medium hover:text-amber-600 transition-colors">Why Us</a>
            <a href="#reviews" className="text-sm font-medium hover:text-amber-600 transition-colors">Reviews</a>
            <a 
              href={`tel:${phoneNumber}`}
              className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 transition-all shadow-lg shadow-amber-600/20"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-2xl font-semibold">Services</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-2xl font-semibold">Why Us</a>
              <a href="#reviews" onClick={() => setIsMenuOpen(false)} className="text-2xl font-semibold">Reviews</a>
              <div className="flex flex-col gap-4 mt-8">
                <a 
                  href={`tel:${phoneNumber}`}
                  className="bg-amber-600 text-white py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-3"
                >
                  <Phone className="w-6 h-6" />
                  Call Emergency
                </a>
                <a 
                  href={`https://wa.me/${whatsappNumber}`}
                  className="bg-green-600 text-white py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-3"
                >
                  <MessageSquare className="w-6 h-6" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-400 via-transparent to-transparent blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                <Clock className="w-3.5 h-3.5" />
                24/7 Emergency Service in Mohammadpur
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                Reliable Electricians <br />
                <span className="text-amber-600">At Your Doorstep</span>
              </h1>
              <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
                Expert electrical repairs, wiring, and installations for homes and businesses in Mohammadpur. We arrive within 30 minutes for emergencies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={`tel:${phoneNumber}`}
                  className="group bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-2xl text-lg font-bold flex items-center justify-center gap-3 transition-all shadow-xl shadow-amber-600/30 hover:-translate-y-1"
                >
                  <Phone className="w-5 h-5 group-hover:animate-bounce" />
                  Call Now: {phoneNumber}
                </a>
                <a 
                  href={`https://wa.me/${whatsappNumber}`}
                  className="bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-2xl text-lg font-bold flex items-center justify-center gap-3 transition-all hover:-translate-y-1"
                >
                  <MessageSquare className="w-5 h-5 text-green-600" />
                  WhatsApp
                </a>
              </div>

              <div className="mt-10 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex text-amber-400 mb-0.5">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-slate-500 font-medium">Trusted by 500+ locals in Mohammadpur</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative">
                <img 
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1000" 
                  alt="Professional Electrician" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl">
                  <div className="flex items-center gap-4">
                    <div className="bg-amber-500 p-2 rounded-lg">
                      <ShieldCheck className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold">Certified Experts</p>
                      <p className="text-white/80 text-xs">Licensed & Fully Insured Team</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Clock className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold text-sm">30 Min Response</p>
                    <p className="text-slate-500 text-xs">Anywhere in Mohammadpur</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Professional Services</h2>
            <p className="text-slate-600">From minor repairs to major installations, we provide comprehensive electrical solutions tailored to your needs.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl transition-all"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.color}`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="about" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose Mohammadpur Electric?</h2>
              <div className="space-y-6">
                {[
                  { title: "Local Experts", desc: "We know Mohammadpur inside out. We're your neighbors." },
                  { title: "Upfront Pricing", desc: "No hidden costs. Get a clear estimate before we start." },
                  { title: "Safety First", desc: "All work follows strict safety protocols and standards." },
                  { title: "Satisfaction Guaranteed", desc: "We don't leave until you're 100% happy with the work." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1">
                      <CheckCircle2 className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <a 
                  href={`tel:${phoneNumber}`}
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-2xl font-bold transition-all"
                >
                  Book a Service Now
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-slate-800 p-6 rounded-3xl text-center">
                  <p className="text-4xl font-extrabold text-amber-500 mb-1">10+</p>
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Years Experience</p>
                </div>
                <div className="bg-slate-800 p-6 rounded-3xl text-center">
                  <p className="text-4xl font-extrabold text-amber-500 mb-1">2k+</p>
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Jobs Completed</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-slate-800 p-6 rounded-3xl text-center">
                  <p className="text-4xl font-extrabold text-amber-500 mb-1">30</p>
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Minute Response</p>
                </div>
                <div className="bg-slate-800 p-6 rounded-3xl text-center">
                  <p className="text-4xl font-extrabold text-amber-500 mb-1">24/7</p>
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Emergency Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Your Neighbors Say</h2>
            <p className="text-slate-600">Real feedback from our customers in Mohammadpur.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {REVIEWS.map((review, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col">
                <div className="flex text-amber-400 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < review.stars ? 'fill-current' : 'text-slate-300'}`} />
                  ))}
                </div>
                <p className="text-slate-700 italic mb-6 flex-grow">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center text-amber-700 font-bold">
                    {review.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{review.name}</h4>
                    <p className="text-slate-500 text-xs flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {review.location}, Mohammadpur
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-600 rounded-[3rem] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-amber-600/40">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Need an Electrician Right Now?</h2>
              <p className="text-amber-100 text-lg mb-10 max-w-2xl mx-auto">
                Don't risk your safety with faulty wiring. Call our emergency team now and we'll be there in 30 minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={`tel:${phoneNumber}`}
                  className="bg-white text-amber-600 px-10 py-5 rounded-2xl text-xl font-bold flex items-center justify-center gap-3 hover:bg-slate-50 transition-all shadow-xl"
                >
                  <Phone className="w-6 h-6" />
                  Call: {phoneNumber}
                </a>
                <a 
                  href={`https://wa.me/${whatsappNumber}`}
                  className="bg-slate-900 text-white px-10 py-5 rounded-2xl text-xl font-bold flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-xl"
                >
                  <MessageSquare className="w-6 h-6 text-green-400" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-amber-500 p-1.5 rounded-lg">
                  <Zap className="w-5 h-5 text-white" fill="currentColor" />
                </div>
                <span className="text-xl font-bold tracking-tight text-slate-900">
                  Mohammadpur<span className="text-amber-600">Electric</span>
                </span>
              </div>
              <p className="text-slate-500 max-w-sm mb-6">
                Your trusted local electrical service provider in Mohammadpur, Dhaka. Providing 24/7 emergency support and professional electrical solutions since 2014.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-amber-600 hover:border-amber-600 transition-all cursor-pointer">
                  <Zap className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-amber-600 hover:border-amber-600 transition-all cursor-pointer">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-amber-600 hover:border-amber-600 transition-all cursor-pointer">
                  <Wrench className="w-5 h-5" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Quick Links</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#services" className="hover:text-amber-600 transition-colors">Our Services</a></li>
                <li><a href="#about" className="hover:text-amber-600 transition-colors">Why Choose Us</a></li>
                <li><a href="#reviews" className="hover:text-amber-600 transition-colors">Customer Reviews</a></li>
                <li><a href="#" className="hover:text-amber-600 transition-colors">Emergency Guide</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Contact Info</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-600 shrink-0" />
                  <span>Mohammadpur, Dhaka-1207, Bangladesh</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-amber-600 shrink-0" />
                  <span>{phoneNumber}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-amber-600 shrink-0" />
                  <span>Open 24 Hours / 7 Days</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-10 border-t border-slate-200 flex flex-col md:row justify-between items-center gap-4 text-xs text-slate-400 font-medium">
            <p>© 2026 Mohammadpur Electric Service. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-slate-600">Privacy Policy</a>
              <a href="#" className="hover:text-slate-600">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-4 bg-white/80 backdrop-blur-lg border-t border-slate-100 flex gap-3">
        <a 
          href={`tel:${phoneNumber}`}
          className="flex-1 bg-amber-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-amber-600/30"
        >
          <Phone className="w-5 h-5" />
          Call Now
        </a>
        <a 
          href={`https://wa.me/${whatsappNumber}`}
          className="w-16 bg-green-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center shadow-lg shadow-green-600/30"
        >
          <MessageSquare className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
