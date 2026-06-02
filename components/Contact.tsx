'use client';
import { useState, FormEvent } from 'react';
import { Reveal } from './Reveal';

const services = [
  'Опалення «під ключ»',
  'Тепловий насос',
  'Монтаж котла',
  'Тепла підлога',
  'Водопостачання та каналізація',
  'Бойлер / ГВП',
  'Сервіс та ремонт',
  'Інше / консультація',
];

export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim();
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value.trim();
    if (!name || !phone) return;
    setSent(true);
  };

  return (
    <section className="section" id="contact">
      <div className="wrap cta-grid">
        <Reveal className="cta-copy">
          <span className="eyebrow on-dark">Заявка</span>
          <h2 style={{ marginTop: '18px' }}>
            Порахуємо ваш<br />проєкт безкоштовно
          </h2>
          <p>Залиште контакти — інженер зв'яжеться з вами, відповість на питання та запропонує рішення під ваш об'єкт.</p>
          <div className="cta-contacts">
            <a className="cta-contact" href="tel:+380969428474">
              <span className="ci">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.5a16 16 0 0 0 6 6l1-1.2a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7A2 2 0 0 1 22 16.9Z" />
                </svg>
              </span>
              <span>
                <span className="cl">Телефон</span>
                <span className="cv">+38 096 942 84 74</span>
              </span>
            </a>
            <a className="cta-contact" href="mailto:hello@teplohub.ua">
              <span className="ci">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </span>
              <span>
                <span className="cl">Email</span>
                <span className="cv">hello@teplohub.ua</span>
              </span>
            </a>
            <div className="cta-contact">
              <span className="ci">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s-7-5.3-7-11a7 7 0 0 1 14 0c0 5.7-7 11-7 11Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>
              <span>
                <span className="cl">Регіон обслуговування</span>
                <span className="cv">Нововолинськ, Волинська обл.</span>
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal className="form-card" delay={2}>
          {!sent ? (
            <form onSubmit={handleSubmit} noValidate>
              <h3>Залишити заявку</h3>
              <p className="fc-sub">Відповідаємо протягом робочого дня.</p>
              <div className="field">
                <label htmlFor="f-name">Ім'я</label>
                <input id="f-name" name="name" type="text" placeholder="Як до вас звертатися" required />
              </div>
              <div className="field">
                <label htmlFor="f-phone">Телефон</label>
                <input id="f-phone" name="phone" type="tel" placeholder="Ваш номер телефону" required />
              </div>
              <div className="field">
                <label htmlFor="f-service">Послуга</label>
                <select id="f-service" name="service">
                  {services.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div className="field">
                <label htmlFor="f-msg">Коментар</label>
                <textarea id="f-msg" name="message" placeholder="Коротко про об'єкт і задачу (необов'язково)" />
              </div>
              <button type="submit" className="btn btn-primary">
                Надіслати заявку <span className="arr">→</span>
              </button>
              <p className="form-note">Надсилаючи форму, ви погоджуєтесь на обробку даних.</p>
            </form>
          ) : (
            <div className="form-ok show">
              <div className="ok-ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="m5 12 5 5L20 7" />
                </svg>
              </div>
              <h3>Дякуємо за заявку!</h3>
              <p>Інженер ТеплоХаб зв'яжеться з вами найближчим часом.</p>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
