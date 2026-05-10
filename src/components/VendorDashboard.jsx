'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  { icon: '📋', title: 'Booking Management', desc: 'View, accept or decline incoming event requests in real-time.' },
  { icon: '📅', title: 'Smart Calendar', desc: 'Auto-synced calendar with availability management.' },
  { icon: '💰', title: 'Earnings Dashboard', desc: 'Track revenue, pending payments and withdrawals.' },
  { icon: '🔔', title: 'Order Notifications', desc: 'Instant push notifications for new bookings.' },
  { icon: '📦', title: 'Inventory Uploads', desc: 'Upload and manage your tent, decor and furniture inventory.' },
];

const stats = [
  { label: 'Total Bookings', value: '247', change: '+12%' },
  { label: 'Revenue (MTD)', value: '₹4.8L', change: '+23%' },
  { label: 'Active Listings', value: '32', change: '+5' },
  { label: 'Avg Rating', value: '4.9', change: '0.0' },
];

const bookings = [
  { id: '#TOR-2847', event: 'Wedding Tent Setup', date: 'May 15', amount: '₹45,000', status: 'Confirmed' },
  { id: '#TOR-2846', event: 'Birthday Decoration', date: 'May 14', amount: '₹12,000', status: 'Pending' },
  { id: '#TOR-2845', event: 'Corporate Event', date: 'May 13', amount: '₹28,000', status: 'Completed' },
];

export default function VendorDashboard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="vendors" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--purple)]/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
            <span className="text-sm tracking-[4px] uppercase text-[var(--purple-light)]/80 mb-4 block">For Vendors</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-sora)' }}>
              Grow Your Business with <span className="gradient-text-purple">TentOnRent</span>
            </h2>
            <p className="text-white/50 mb-8 max-w-lg" style={{ fontFamily: 'var(--font-body)' }}>
              Join India&apos;s fastest growing event marketplace. Manage bookings, track earnings, and reach thousands of customers.
            </p>
            <div className="space-y-4 mb-8">
              {features.map((f, i) => (
                <motion.div key={f.title} className="flex items-start gap-4 glass-card rounded-xl p-4"
                  initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 + i * 0.1 }} whileHover={{ x: 5 }}>
                  <span className="text-2xl">{f.icon}</span>
                  <div><h4 className="font-semibold text-white text-sm">{f.title}</h4><p className="text-xs text-white/40">{f.desc}</p></div>
                </motion.div>
              ))}
            </div>
            <motion.button className="btn-glow inline-flex items-center gap-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Register as Vendor <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </motion.button>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.3 }}>
            <div className="glass-card rounded-3xl p-6 dashboard-glow">
              <div className="flex items-center justify-between mb-6">
                <div><h3 className="text-lg font-semibold text-white">Vendor Dashboard</h3><p className="text-xs text-white/40">Welcome back, Sharma Tent House</p></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--purple)] flex items-center justify-center text-sm font-bold text-black">S</div>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {stats.map(s => (
                  <div key={s.label} className="bg-white/5 rounded-xl p-4">
                    <p className="text-xs text-white/40 mb-1">{s.label}</p>
                    <div className="flex items-end gap-2"><span className="text-xl font-bold text-white">{s.value}</span><span className="text-xs text-green-400">{s.change}</span></div>
                  </div>
                ))}
              </div>
              <h4 className="text-sm font-semibold text-white/60 mb-3">Recent Bookings</h4>
              <div className="space-y-2">
                {bookings.map(b => (
                  <div key={b.id} className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-white/30 font-mono">{b.id}</span>
                      <div><p className="text-sm text-white">{b.event}</p><p className="text-xs text-white/30">{b.date}</p></div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-[var(--gold)]">{b.amount}</p>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${b.status === 'Confirmed' ? 'bg-green-500/10 text-green-400' : b.status === 'Pending' ? 'bg-yellow-500/10 text-yellow-400' : 'bg-blue-500/10 text-blue-400'}`}>{b.status}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-white/5 rounded-xl p-4">
                <h4 className="text-sm font-semibold text-white/60 mb-3">May 2026</h4>
                <div className="grid grid-cols-7 gap-1 text-center">
                  {['S','M','T','W','T','F','S'].map((d,i) => <span key={`h${i}`} className="text-[10px] text-white/30 py-1">{d}</span>)}
                  {Array.from({length:31},(_,i)=>i+1).map(day => (
                    <span key={day} className={`text-xs py-1 rounded ${[10,15,22].includes(day) ? 'bg-[var(--gold)]/20 text-[var(--gold)] font-bold' : 'text-white/40'}`}>{day}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
