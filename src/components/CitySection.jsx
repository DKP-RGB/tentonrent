'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const cities = [
  { name: 'Indore', active: true, events: '10K+', vendors: '500+' },
  { name: 'Bhopal', active: false },
  { name: 'Ujjain', active: false },
  { name: 'Dewas', active: false },
  { name: 'Jaipur', active: false },
];

export default function CitySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm tracking-[4px] uppercase text-[var(--gold)]/80 mb-4 block">
            Available Cities
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-sora)' }}
          >
            Select Your <span className="gradient-text">City</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            Currently live in Indore. Expanding to more cities soon.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
          {cities.map((city, i) => (
            <motion.div
              key={city.name}
              className={`relative rounded-2xl p-6 min-w-[180px] text-center cursor-pointer transition-all duration-500 ${
                city.active
                  ? 'glass-card border-[var(--gold)]/30 animate-pulse-glow'
                  : 'glass-card opacity-50'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: city.active ? 1 : 0.5, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={city.active ? { scale: 1.05, y: -5 } : {}}
            >
              {city.active && (
                <motion.div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[var(--gold)] to-[var(--purple)] text-black text-xs font-bold px-3 py-1 rounded-full"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  LIVE
                </motion.div>
              )}

              <div className="text-3xl mb-3">
                {city.active ? '📍' : '🔒'}
              </div>
              <h3 className="text-xl font-semibold text-white mb-1">{city.name}</h3>

              {city.active ? (
                <div className="flex gap-4 justify-center mt-3">
                  <div>
                    <p className="text-sm font-bold text-[var(--gold)]">{city.events}</p>
                    <p className="text-[10px] text-white/40">Events</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[var(--gold)]">{city.vendors}</p>
                    <p className="text-[10px] text-white/40">Vendors</p>
                  </div>
                </div>
              ) : (
                <span className="text-xs text-white/30 mt-2 block">Coming Soon</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
