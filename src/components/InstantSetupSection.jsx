'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const nearbyVendors = [
  { name: 'Sharma Tent House', distance: '2.3 km', rating: 4.8, eta: '45 min' },
  { name: 'Royal Decorators', distance: '3.1 km', rating: 4.9, eta: '30 min' },
  { name: 'Shree Events', distance: '1.8 km', rating: 4.7, eta: '20 min' },
  { name: 'Maharaja Tents', distance: '4.5 km', rating: 4.6, eta: '1 hr' },
];

function CountdownTimer() {
  const [time, setTime] = useState({ h: 2, m: 30, s: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        let { h, m, s } = prev;
        if (s > 0) s--;
        else if (m > 0) { m--; s = 59; }
        else if (h > 0) { h--; m = 59; s = 59; }
        else { h = 2; m = 30; s = 0; } // Reset
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-3">
      {[
        { label: 'HRS', value: time.h },
        { label: 'MIN', value: time.m },
        { label: 'SEC', value: time.s },
      ].map((unit) => (
        <div key={unit.label} className="text-center">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-b from-orange-500/20 to-red-600/20 border border-orange-500/30 flex items-center justify-center">
            <span className="text-2xl font-bold text-orange-400">
              {String(unit.value).padStart(2, '0')}
            </span>
          </div>
          <span className="text-[10px] tracking-widest text-white/40 mt-1 block">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function InstantSetupSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [activeVendor, setActiveVendor] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveVendor((prev) => (prev + 1) % nearbyVendors.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="instant" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-950/10 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.span
                className="text-3xl"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ⚡
              </motion.span>
              <span className="text-sm tracking-[4px] uppercase text-orange-400">
                Instant Setup
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-sora)' }}
            >
              Need a Setup{' '}
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Right Now?
              </span>
            </h2>

            <p className="text-white/50 mb-8 max-w-lg" style={{ fontFamily: 'var(--font-body)' }}>
              Emergency event setup within hours. Get nearby vendors notified
              instantly and have your event ready in record time.
            </p>

            {/* Countdown */}
            <div className="mb-8">
              <p className="text-sm text-white/40 mb-3">Next available slot in:</p>
              <CountdownTimer />
            </div>

            {/* Quick Form */}
            <motion.div
              className="urgent-glow rounded-2xl p-6 bg-gradient-to-br from-orange-950/30 to-red-950/20"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="grid grid-cols-2 gap-3 mb-4">
                <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white/70 outline-none focus:border-orange-500/50 transition-colors">
                  <option className="bg-[#1a1a2e]">Event Type</option>
                  <option className="bg-[#1a1a2e]">Wedding</option>
                  <option className="bg-[#1a1a2e]">Birthday</option>
                  <option className="bg-[#1a1a2e]">Reception</option>
                  <option className="bg-[#1a1a2e]">Corporate</option>
                </select>
                <input
                  type="text"
                  placeholder="Location"
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white/70 outline-none focus:border-orange-500/50 transition-colors placeholder:text-white/30"
                />
                <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white/70 outline-none focus:border-orange-500/50 transition-colors">
                  <option className="bg-[#1a1a2e]">Budget Range</option>
                  <option className="bg-[#1a1a2e]">₹10K - ₹25K</option>
                  <option className="bg-[#1a1a2e]">₹25K - ₹50K</option>
                  <option className="bg-[#1a1a2e]">₹50K - ₹1L</option>
                  <option className="bg-[#1a1a2e]">₹1L+</option>
                </select>
                <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white/70 outline-none focus:border-orange-500/50 transition-colors">
                  <option className="bg-[#1a1a2e]">Time Needed</option>
                  <option className="bg-[#1a1a2e]">Within 2 hours</option>
                  <option className="bg-[#1a1a2e]">Within 6 hours</option>
                  <option className="bg-[#1a1a2e]">Today</option>
                  <option className="bg-[#1a1a2e]">Tomorrow</option>
                </select>
              </div>
              <motion.button
                className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(251,146,60,0.4)' }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Find Nearby Vendors Instantly
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right - Live Vendor Feed */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-6">
                <motion.div
                  className="w-3 h-3 rounded-full bg-green-400"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-sm text-white/60">Live — Vendors receiving your request</span>
              </div>

              <div className="space-y-3">
                {nearbyVendors.map((vendor, i) => (
                  <motion.div
                    key={vendor.name}
                    className={`flex items-center justify-between p-4 rounded-xl transition-all duration-500 ${
                      i === activeVendor
                        ? 'bg-orange-500/10 border border-orange-500/30'
                        : 'bg-white/5 border border-transparent'
                    }`}
                    animate={i === activeVendor ? { x: [0, 5, 0] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${
                        i === activeVendor ? 'bg-orange-500/20' : 'bg-white/5'
                      }`}>
                        🏪
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">{vendor.name}</p>
                        <p className="text-xs text-white/40">{vendor.distance} away</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-[var(--gold)]">⭐ {vendor.rating}</p>
                      <p className="text-xs text-white/40">ETA: {vendor.eta}</p>
                    </div>
                    {i === activeVendor && (
                      <motion.div
                        className="absolute right-8 w-2 h-2 rounded-full bg-orange-400"
                        animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Pulse animation */}
              <div className="mt-6 flex items-center justify-center gap-2">
                <motion.div
                  className="w-2 h-2 rounded-full bg-orange-400"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                />
                <motion.div
                  className="w-2 h-2 rounded-full bg-orange-400"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                />
                <motion.div
                  className="w-2 h-2 rounded-full bg-orange-400"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                />
                <span className="text-xs text-white/40 ml-2">Scanning nearby vendors...</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
