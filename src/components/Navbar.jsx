'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Packages', href: '#packages' },
  { name: 'Venues', href: '#venues' },
  { name: 'Vendors', href: '#vendors' },
  { name: 'Testimonials', href: '#testimonials' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass py-3 shadow-lg shadow-black/30'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--gold)] to-[var(--purple)] flex items-center justify-center">
              <span className="text-black font-bold text-lg">T</span>
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-[var(--gold)] transition-colors">
                Tent<span className="text-[var(--gold)]">On</span>Rent
              </span>
              <div className="text-[10px] tracking-[3px] uppercase text-white/40 -mt-1">
                Premium Events
              </div>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-sm text-white/70 hover:text-white transition-colors group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.3 }}
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-[var(--gold)] to-[var(--purple)] group-hover:w-3/4 transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.a
              href="#instant"
              className="btn-outline-glow text-sm !py-2 !px-5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Become a Vendor
            </motion.a>
            <motion.a
              href="#services"
              className="btn-glow text-sm !py-2 !px-5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              Book Now
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              className="w-6 h-0.5 bg-[var(--gold)] block"
              animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-[var(--gold)] block"
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-[var(--gold)] block"
              animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 glass pt-24"
          >
            <div className="flex flex-col items-center gap-6 p-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-xl text-white/80 hover:text-[var(--gold)] transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="flex flex-col gap-3 mt-4 w-full max-w-xs">
                <a href="#instant" className="btn-outline-glow text-center" onClick={() => setMobileOpen(false)}>
                  Become a Vendor
                </a>
                <a href="#services" className="btn-glow text-center" onClick={() => setMobileOpen(false)}>
                  Book Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
