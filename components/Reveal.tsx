'use client';
import { useEffect, useRef } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: 1 | 2 | 3 | 4;
}

export function Reveal({ children, className = '', delay }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in');
          io.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const delayClass = delay ? `d${delay}` : '';
  const cls = `reveal ${delayClass} ${className}`.trim();

  return (
    <div ref={ref} className={cls}>
      {children}
    </div>
  );
}
