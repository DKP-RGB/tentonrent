'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Bride',
    event: 'Wedding',
    rating: 5,
    text: 'TentOnRent made our dream wedding come true! The decoration was beyond our expectations. Every single detail was taken care of. Highly recommended for anyone planning a wedding in Indore.',
    avatar: '👰',
  },
  {
    name: 'Rajesh Patel',
    role: 'Event Organizer',
    event: 'Corporate Event',
    rating: 5,
    text: 'We booked the full event setup for our company annual day. The team was professional, punctual, and the quality was outstanding. Will definitely use again!',
    avatar: '👨‍💼',
  },
  {
    name: 'Anita Verma',
    role: 'Mother',
    event: 'Birthday Party',
    rating: 5,
    text: 'My daughter loved her unicorn-themed birthday! The balloon arch and photo zone were Instagram-worthy. The vendor arrived on time and the cleanup was spotless.',
    avatar: '👩',
  },
  {
    name: 'Vikram Singh',
    role: 'Groom',
    event: 'Reception',
    rating: 5,
    text: 'The Royal Package was worth every rupee. Drone shots, bridal makeup, catering — everything was world-class. Our guests were blown away by the setup!',
    avatar: '🤵',
  },
  {
    name: 'Meera Joshi',
    role: 'Wedding Planner',
    event: 'Destination Wedding',
    rating: 5,
    text: 'As a wedding planner, I have high standards. TentOnRent exceeded them all. Their vendor network is reliable and the platform makes coordination effortless.',
    avatar: '💃',
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--gold)]/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
          <span className="text-sm tracking-[4px] uppercase text-[var(--gold)]/80 mb-4 block">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-sora)' }}>
            Loved by <span className="gradient-text">Thousands</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            Real stories from real customers who trusted us with their most special moments.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className={`glass-card rounded-3xl p-8 md:p-10 ${i === active ? 'block' : 'hidden'}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={i === active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-lg text-white/80 mb-6 leading-relaxed italic" style={{ fontFamily: 'var(--font-body)' }}>
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[var(--gold)]/20 to-[var(--purple)]/20 flex items-center justify-center text-2xl">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-white">{t.name}</h4>
                  <p className="text-sm text-white/40">{t.role} • {t.event}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === active ? 'bg-[var(--gold)] w-8' : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
