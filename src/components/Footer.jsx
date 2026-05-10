'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Packages', href: '#packages' },
  { name: 'Venues', href: '#venues' },
  { name: 'For Vendors', href: '#vendors' },
  { name: 'Testimonials', href: '#testimonials' },
];

const serviceLinks = [
  'Tent Rentals', 'Wedding Decoration', 'Birthday Decoration',
  'DJ & Sound', 'Photography', 'Catering', 'Furniture Rentals',
  'Bridal Makeup', 'Venue Booking', 'Full Wedding Planning',
];

const socials = [
  { name: 'Instagram', icon: '📸', href: '#' },
  { name: 'Facebook', icon: '📘', href: '#' },
  { name: 'WhatsApp', icon: '💬', href: '#' },
  { name: 'YouTube', icon: '🎥', href: '#' },
];

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--gold)]/30 to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[var(--purple)]/5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[var(--gold)]/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--gold)] to-[var(--purple)] flex items-center justify-center">
                <span className="text-black font-bold text-lg">T</span>
              </div>
              <div>
                <span className="text-lg font-bold text-white">Tent<span className="text-[var(--gold)]">On</span>Rent</span>
                <div className="text-[10px] tracking-[3px] uppercase text-white/40 -mt-1">Premium Events</div>
              </div>
            </div>
            <p className="text-sm text-white/40 mb-6" style={{ fontFamily: 'var(--font-body)' }}>
              India&apos;s most premium event-tech marketplace. Book tents, decor & events instantly in Indore.
            </p>
            <div className="flex gap-3">
              {socials.map(s => (
                <motion.a key={s.name} href={s.href} className="w-10 h-10 rounded-xl glass flex items-center justify-center text-lg hover:bg-white/10 transition-colors" whileHover={{ scale: 1.1, y: -2 }} title={s.name}>
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(l => (
                <li key={l.name}>
                  <a href={l.href} className="text-sm text-white/40 hover:text-[var(--gold)] transition-colors">{l.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wider uppercase">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map(s => (
                <li key={s}>
                  <a href="#services" className="text-sm text-white/40 hover:text-[var(--gold)] transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wider uppercase">Stay Updated</h4>
            <p className="text-sm text-white/40 mb-4">Subscribe for exclusive deals, new vendor launches, and event tips.</p>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white/70 outline-none focus:border-[var(--gold)]/50 transition-colors placeholder:text-white/20"
              />
              <motion.button className="btn-glow !py-2.5 !px-4 !rounded-xl" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </motion.button>
            </div>
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white mb-3 tracking-wider uppercase">Contact</h4>
              <p className="text-sm text-white/40 flex items-center gap-2 mb-1">📍 Vijay Nagar, Indore, MP</p>
              <p className="text-sm text-white/40 flex items-center gap-2 mb-1">📞 +91 98765 43210</p>
              <p className="text-sm text-white/40 flex items-center gap-2">✉️ hello@tentonrent.in</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">© 2026 TentOnRent. All rights reserved. Made with ❤️ in Indore.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">Terms of Service</a>
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
