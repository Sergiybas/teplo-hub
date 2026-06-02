'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`} id="top">
      <nav className="nav">
        <Link className="brand" href="#top" aria-label="ТеплоХаб">
          <Image src="/logo.png" alt="ТеплоХаб" width={160} height={48} className="brand-logo" priority />
        </Link>
        <div className="nav-links">
          <a href="#services">Послуги</a>
          <a href="#why">Чому ми</a>
          <a href="#gallery">Роботи</a>
          <a href="#process">Як працюємо</a>
          <a href="#faq">Питання</a>
        </div>
        <div className="nav-cta">
          <a href="tel:+380969428474" className="nav-phone">+38 096 942 84 74</a>
          <a href="#contact" className="btn btn-primary" style={{ padding: '12px 22px', fontSize: '15px' }}>
            Залишити заявку
          </a>
        </div>
      </nav>
    </header>
  );
}
