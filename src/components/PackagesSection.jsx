'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const packages = [
  {
    name: 'Silver',
    price: '₹49,999',
    tag: 'Essential',
    color: 'from-gray-400 to-gray-300',
    borderColor: 'border-gray-500/30',
    glowColor: 'rgba(156,163,175,0.2)',
    features: [
      'Tent setup (200 sq ft)',
      'Stage decoration (basic)',
      '300 chairs arrangement',
      'Basic lighting setup',
      'Sound system (basic)',
      'Welcome gate setup',
    ],
    icon: '🥈',
  },
  {
    name: 'Gold',
    price: '₹1,29,999',
    tag: 'Most Popular',
    popular: true,
    color: 'from-[var(--gold)] to-amber-400',
    borderColor: 'border-[var(--gold)]/50',
    glowColor: 'rgba(212,168,83,0.3)',
    features: [
      'Premium floral decor',
      'Premium stage with LED',
      'DJ & sound setup',
      'Photography (8 hrs)',
      '500 chairs + sofas',
      'Welcome gate + pathway',
      'Bridal room setup',
      'Valet parking signs',
    ],
    icon: '🥇',
  },
  {
    name: 'Royal',
    price: '₹3,49,999',
    tag: 'Luxury',
    color: 'from-[var(--purple)] to-[var(--purple-light)]',
    borderColor: 'border-[var(--purple)]/50',
    glowColor: 'rgba(124,58,237,0.3)',
    features: [
      'Full luxury wedding planning',
      'Multi-cuisine catering (500 pax)',
      'Drone photography & videography',
      'Celebrity bridal makeup',
      'Complete event management',
      'Luxury car decoration',
      'Fireworks & confetti',
      'Honeymoon suite setup',
      '24/7 coordinator',
      'Live entertainment',
    ],
    icon: '👑',
  },
];

export default function PackagesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="packages" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--purple)]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm tracking-[4px] uppercase text-[var(--gold)]/80 mb-4 block">
            Wedding Packages
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-sora)' }}
          >
            Choose Your <span className="gradient-text">Dream Package</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            Curated wedding packages designed to make your special day truly unforgettable.
            Every detail, perfectly planned.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              className={`relative glass-card rounded-3xl overflow-hidden package-shimmer ${pkg.borderColor} ${
                pkg.popular ? 'md:-mt-4 md:mb-0' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{
                scale: 1.03,
                boxShadow: `0 20px 60px ${pkg.glowColor}`,
              }}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--gold)] via-amber-400 to-[var(--gold)]" />
              )}

              <div className="p-8">
                {/* Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className={`text-xs tracking-widest uppercase px-3 py-1 rounded-full bg-gradient-to-r ${pkg.color} text-black font-semibold`}
                  >
                    {pkg.tag}
                  </span>
                  <span className="text-3xl">{pkg.icon}</span>
                </div>

                {/* Name & Price */}
                <h3
                  className="text-2xl font-bold text-white mb-1"
                  style={{ fontFamily: 'var(--font-sora)' }}
                >
                  {pkg.name} Package
                </h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span
                    className={`text-3xl font-bold bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`}
                  >
                    {pkg.price}
                  </span>
                  <span className="text-sm text-white/40">/event</span>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/10 mb-6" />

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-sm text-white/60">
                      <svg
                        className={`w-5 h-5 mt-0.5 flex-shrink-0 bg-gradient-to-r ${pkg.color} bg-clip-text`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        style={{ color: pkg.popular ? 'var(--gold)' : 'var(--purple-light)' }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  className={`w-full py-3 rounded-xl font-semibold transition-all ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-[var(--gold)] to-amber-400 text-black'
                      : 'border border-white/20 text-white hover:border-white/40 hover:bg-white/5'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book {pkg.name} Package
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison hint */}
        <motion.p
          className="text-center text-sm text-white/30 mt-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          All packages are customizable. Contact us for personalized quotes.
        </motion.p>
      </div>
    </section>
  );
}
