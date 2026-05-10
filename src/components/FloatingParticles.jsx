'use client';
import { useEffect, useState } from 'react';

export default function FloatingParticles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 10,
      color: Math.random() > 0.5
        ? 'rgba(212, 168, 83, 0.15)'
        : 'rgba(124, 58, 237, 0.12)',
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            bottom: '-10px',
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            animation: `particle-float ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
