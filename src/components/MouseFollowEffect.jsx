'use client';
import { useEffect, useState } from 'react';

export default function MouseFollowEffect() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    window.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseleave', handleLeave);
    document.addEventListener('mouseenter', handleEnter);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseleave', handleLeave);
      document.removeEventListener('mouseenter', handleEnter);
    };
  }, [visible]);

  if (typeof window === 'undefined') return null;

  return (
    <div
      className="fixed pointer-events-none z-[2] transition-opacity duration-300"
      style={{
        left: pos.x - 150,
        top: pos.y - 150,
        width: 300,
        height: 300,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212,168,83,0.04) 0%, transparent 70%)',
        opacity: visible ? 1 : 0,
        transition: 'left 0.15s ease-out, top 0.15s ease-out, opacity 0.3s',
      }}
    />
  );
}
