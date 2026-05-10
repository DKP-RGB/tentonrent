'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    name: 'Tent Rentals',
    desc: 'Premium shamianas, waterproof tents & luxury pandals for every occasion.',
    icon: '⛺',
    gradient: 'from-amber-500/20 to-yellow-600/20',
    borderColor: 'hover:border-amber-500/40',
  },
  {
    name: 'Wedding Decoration',
    desc: 'Stunning floral, LED & traditional mandap decor to make your day magical.',
    icon: '💐',
    gradient: 'from-pink-500/20 to-rose-600/20',
    borderColor: 'hover:border-pink-500/40',
  },
  {
    name: 'Birthday Decoration',
    desc: 'Theme-based birthday setups with balloon arches, backdrops & photo zones.',
    icon: '🎂',
    gradient: 'from-purple-500/20 to-violet-600/20',
    borderColor: 'hover:border-purple-500/40',
  },
  {
    name: 'Wedding Venues',
    desc: 'Discover top-rated marriage gardens, resorts & banquet halls near you.',
    icon: '🏛️',
    gradient: 'from-blue-500/20 to-indigo-600/20',
    borderColor: 'hover:border-blue-500/40',
  },
  {
    name: 'Full Wedding Planning',
    desc: 'End-to-end wedding management from haldi to reception, we handle it all.',
    icon: '💍',
    gradient: 'from-[var(--gold)]/20 to-amber-700/20',
    borderColor: 'hover:border-[var(--gold)]/40',
  },
  {
    name: 'Catering Services',
    desc: 'Multi-cuisine catering with live counters, veg/non-veg & Rajasthani thali.',
    icon: '🍽️',
    gradient: 'from-orange-500/20 to-red-600/20',
    borderColor: 'hover:border-orange-500/40',
  },
  {
    name: 'DJ & Sound',
    desc: 'Professional DJ setups, speakers & lighting systems for unforgettable nights.',
    icon: '🎵',
    gradient: 'from-cyan-500/20 to-blue-600/20',
    borderColor: 'hover:border-cyan-500/40',
  },
  {
    name: 'Photography',
    desc: 'Candid, cinematic & drone photography to capture every precious moment.',
    icon: '📸',
    gradient: 'from-teal-500/20 to-emerald-600/20',
    borderColor: 'hover:border-teal-500/40',
  },
  {
    name: 'Furniture Rentals',
    desc: 'Elegant chairs, sofas, tables & stage setups for any event size.',
    icon: '🪑',
    gradient: 'from-stone-500/20 to-zinc-600/20',
    borderColor: 'hover:border-stone-500/40',
  },
  {
    name: 'Bridal Makeup',
    desc: 'Celebrity-style bridal makeup artists with HD, airbrush & traditional looks.',
    icon: '💄',
    gradient: 'from-fuchsia-500/20 to-pink-600/20',
    borderColor: 'hover:border-fuchsia-500/40',
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* BG decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--gold)]/20 to-transparent" />
      <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-[var(--purple)]/5 blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 rounded-full bg-[var(--gold)]/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block text-sm tracking-[4px] uppercase text-[var(--gold)]/80 mb-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Our Services
          </motion.span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-sora)' }}
          >
            Everything for Your{' '}
            <span className="gradient-text">Perfect Event</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            From intimate birthdays to grand weddings, we bring together
            India&apos;s finest event professionals at your fingertips.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              className={`glass-card rounded-2xl p-6 group cursor-pointer relative overflow-hidden ${service.borderColor}`}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
              />

              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-[var(--gold)] transition-colors">
                  {service.name}
                </h3>
                <p className="text-sm text-white/40 group-hover:text-white/60 transition-colors mb-4 line-clamp-2">
                  {service.desc}
                </p>
                <motion.span
                  className="inline-flex items-center gap-1 text-sm text-[var(--gold)]/70 group-hover:text-[var(--gold)] transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Explore
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.span>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(212,168,83,0.08) 0%, transparent 70%)',
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
