import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <Link className="brand" href="#top">
            <Image src="/logo.png" alt="ТеплоХаб" width={160} height={52} className="footer-logo" />
          </Link>
          <p className="footer-about">
            Професійна інженерія комфорту. Проєктування, монтаж та сервіс систем опалення, водопостачання й каналізації «під ключ».
          </p>
        </div>
        <div>
          <h4>Послуги</h4>
          <ul>
            <li><a href="#services">Опалення</a></li>
            <li><a href="#services">Теплові насоси</a></li>
            <li><a href="#services">Монтаж котлів</a></li>
            <li><a href="#services">Тепла підлога</a></li>
            <li><a href="#services">Водопостачання</a></li>
            <li><a href="#services">Сервіс і ремонт</a></li>
          </ul>
        </div>
        <div>
          <h4>Контакти</h4>
          <ul>
            <li><a href="tel:+380969428474">+38 096 942 84 74</a></li>
            <li><a href="mailto:hello@teplohub.ua">hello@teplohub.ua</a></li>
            <li><a href="#contact">Залишити заявку</a></li>
            <li><span>Нововолинськ, Волинська обл.</span></li>
            <li><span>Пн–Сб, 9:00–19:00</span></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 ТеплоХаб. Усі права захищено.</span>
        <span>Опалення · Котельні · Монтаж · Сервіс</span>
      </div>
    </footer>
  );
}
