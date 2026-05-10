'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const venues = [
  {
    name: 'Sayaji Palace Garden',
    type: 'Marriage Garden',
    location: 'Vijay Nagar, Indore',
    price: '₹2,50,000',
    rating: 4.9,
    capacity: '500-1500',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&q=80',
  },
  {
    name: 'Lemon Tree Resort',
    type: 'Resort',
    location: 'AB Road, Indore',
    price: '₹3,00,000',
    rating: 4.8,
    capacity: '300-800',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80',
  },
  {
    name: 'Royal Orchid Banquet',
    type: 'Banquet Hall',
    location: 'Rau, Indore',
    price: '₹1,80,000',
    rating: 4.7,
    capacity: '200-600',
    image: 'https://images.unsplash.com/photo-1530023367847-a683933f4172?w=600&q=80',
  },
  {
    name: 'Green Valley Farmhouse',
    type: 'Farmhouse',
    location: 'Simrol Road, Indore',
    price: '₹1,50,000',
    rating: 4.6,
    capacity: '100-400',
    image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&q=80',
  },
];

export default function VenueSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="venues" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--gold)]/20 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[var(--purple)]/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm tracking-[4px] uppercase text-[var(--gold)]/80 mb-4 block">
            Top Venues
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-sora)' }}
          >
            Stunning <span className="gradient-text">Venues</span> in Indore
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            Handpicked venues for your dream celebration. From grand gardens to intimate farmhouses.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {venues.map((venue, i) => (
            <motion.div
              key={venue.name}
              className="glass-card rounded-2xl overflow-hidden group venue-card cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-full object-cover venue-card-img"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent" />

                {/* Type Badge */}
                <div className="absolute top-3 left-3 glass px-3 py-1 rounded-full">
                  <span className="text-xs text-[var(--gold)]">{venue.type}</span>
                </div>

                {/* Rating */}
                <div className="absolute top-3 right-3 glass px-2 py-1 rounded-full flex items-center gap-1">
                  <span className="text-yellow-400 text-xs">⭐</span>
                  <span className="text-xs text-white">{venue.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-white mb-1 group-hover:text-[var(--gold)] transition-colors">
                  {venue.name}
                </h3>
                <div className="flex items-center gap-1 text-xs text-white/40 mb-3">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  {venue.location}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-[var(--gold)]">{venue.price}</span>
                    <span className="text-xs text-white/30 block">Starting from</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-white/40">{venue.capacity}</span>
                    <span className="text-xs text-white/30 block">Guests</span>
                  </div>
                </div>

                <motion.button
                  className="w-full mt-4 py-2.5 rounded-xl border border-white/10 text-sm text-white/70 hover:border-[var(--gold)]/50 hover:text-[var(--gold)] transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
