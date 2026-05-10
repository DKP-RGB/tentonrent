'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function AnimatedCounter({ target, suffix = '', duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = target / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {typeof target === 'number' && target >= 1000
        ? `${(count / 1000).toFixed(count >= target ? 0 : 1)}K`
        : count}
      {suffix}
    </span>
  );
}

const stats = [
  { label: 'Trusted Vendors', value: 500, suffix: '+', icon: '🏪' },
  { label: 'Events Delivered', value: 10000, suffix: '+', icon: '🎉' },
  { label: 'Customer Rating', value: 4.9, suffix: '★', icon: '⭐' },
  { label: 'Instant Booking', value: 100, suffix: '%', icon: '⚡' },
];

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80')`,
          }}
        />
        <div className="hero-overlay absolute inset-0" />
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, var(--purple) 0%, transparent 70%)',
          }}
          animate={{ scale: [1, 1.3, 1], x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, var(--gold) 0%, transparent 70%)',
          }}
          animate={{ scale: [1, 1.2, 1], x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-white/70">Now Live in Indore</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
              style={{ fontFamily: 'var(--font-sora)' }}
            >
              Book{' '}
              <span className="gradient-text">Tents, Decor</span>
              <br />& Events{' '}
              <span className="relative">
                <span className="gradient-text-purple">Instantly</span>
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--purple)]"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-lg text-white/60 mb-8 max-w-lg"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Find trusted decorators, tent houses and wedding planners near you
              in Indore. Your dream event is just one click away.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="glass-card rounded-2xl p-2 mb-8"
            >
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1 flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5">
                  <svg className="w-5 h-5 text-[var(--gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <select className="bg-transparent text-white/80 text-sm outline-none flex-1 cursor-pointer">
                    <option value="" className="bg-[#1a1a2e]">Select City</option>
                    <option value="indore" className="bg-[#1a1a2e]">Indore</option>
                  </select>
                </div>
                <div className="flex-1 flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5">
                  <svg className="w-5 h-5 text-[var(--purple-light)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <select className="bg-transparent text-white/80 text-sm outline-none flex-1 cursor-pointer">
                    <option value="" className="bg-[#1a1a2e]">Event Type</option>
                    <option value="wedding" className="bg-[#1a1a2e]">Wedding</option>
                    <option value="birthday" className="bg-[#1a1a2e]">Birthday</option>
                    <option value="corporate" className="bg-[#1a1a2e]">Corporate</option>
                    <option value="reception" className="bg-[#1a1a2e]">Reception</option>
                  </select>
                </div>
                <div className="flex-1 flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5">
                  <svg className="w-5 h-5 text-[var(--gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <input
                    type="date"
                    className="bg-transparent text-white/80 text-sm outline-none flex-1 cursor-pointer"
                    placeholder="Select Date"
                  />
                </div>
                <motion.button
                  className="btn-glow flex items-center justify-center gap-2 !rounded-xl !px-6"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Search
                </motion.button>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#services"
                className="btn-glow inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Now
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.a>
              <motion.a
                href="#vendors"
                className="btn-outline-glow inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Become a Vendor
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>
          </div>

          {/* Right - Floating Stats */}
          <div className="hidden lg:block relative">
            <div className="relative w-full h-[500px]">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="glass-card rounded-2xl p-5 absolute"
                  style={{
                    top: `${i * 25}%`,
                    left: i % 2 === 0 ? '10%' : '40%',
                    width: '220px',
                  }}
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 1.3 + i * 0.2, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{stat.icon}</span>
                    <span className="text-2xl font-bold text-[var(--gold)]">
                      {stat.label === 'Customer Rating' ? (
                        '4.9★'
                      ) : (
                        <AnimatedCounter
                          target={stat.value}
                          suffix={stat.suffix}
                        />
                      )}
                    </span>
                  </div>
                  <p className="text-sm text-white/50">{stat.label}</p>
                </motion.div>
              ))}
              {/* Decorative ring */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-[var(--gold)]/10"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-[var(--purple)]/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <span className="text-xs text-white/40 tracking-widest uppercase">Scroll to Explore</span>
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1"
            animate={{ borderColor: ['rgba(255,255,255,0.2)', 'rgba(212,168,83,0.5)', 'rgba(255,255,255,0.2)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-3 rounded-full bg-[var(--gold)]"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
