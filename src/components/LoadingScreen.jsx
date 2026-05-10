'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0f]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated Logo */}
          <motion.div
            className="relative mb-6"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--gold)] to-[var(--purple)] flex items-center justify-center"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="text-3xl font-bold text-black">T</span>
            </motion.div>
            {/* Ring */}
            <motion.div
              className="absolute -inset-4 rounded-3xl border-2 border-[var(--gold)]/30"
              animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-2xl font-bold text-white mb-1">
              Tent<span className="text-[var(--gold)]">On</span>Rent
            </h1>
            <p className="text-xs tracking-[4px] uppercase text-white/30">
              Premium Events
            </p>
          </motion.div>

          {/* Progress Bar */}
          <motion.div className="w-48 h-0.5 bg-white/10 rounded-full mt-8 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[var(--gold)] to-[var(--purple)] rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
