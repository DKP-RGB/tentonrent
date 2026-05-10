'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SectionReveal({ children, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
