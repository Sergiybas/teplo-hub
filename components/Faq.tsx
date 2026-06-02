'use client';
import { useState } from 'react';
import { Reveal } from './Reveal';

const faqs = [
  {
    q: "Скільки коштує опалення «під ключ»?",
    a: "Вартість залежить від площі, типу обладнання та складності системи. Після виїзду на об'єкт ми готуємо детальний кошторис без прихованих платежів.",
  },
  {
    q: "Який котел обрати: газовий, електричний чи твердопаливний?",
    a: "Вибір залежить від доступних ресурсів, площі та бюджету. На консультації ми порахуємо витрати на кожен варіант і порекомендуємо оптимальний саме для вашого об'єкта.",
  },
  {
    q: "Скільки часу займає монтаж системи?",
    a: "Для типового приватного будинку — від кількох днів до 1–2 тижнів залежно від обсягу. Точні терміни фіксуємо в договорі.",
  },
  {
    q: "Чи даєте гарантію на роботи?",
    a: "Так. Ми надаємо письмову гарантію на виконані роботи та забезпечуємо подальше сервісне обслуговування системи.",
  },
  {
    q: "Працюєте з комерційними та промисловими об'єктами?",
    a: "Так, ми проєктуємо та монтуємо інженерні системи для приватних будинків, квартир, а також комерційних і промислових об'єктів.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <section className="section" id="faq">
      <div className="wrap faq-grid">
        <Reveal>
          <span className="eyebrow">Питання та відповіді</span>
          <h2 style={{ fontSize: 'clamp(28px,3.6vw,44px)', marginTop: '18px' }}>
            Що варто<br />знати наперед
          </h2>
          <p className="lead" style={{ marginTop: '18px', fontSize: '16px' }}>
            Не знайшли відповідь? Залиште заявку — відповімо протягом дня.
          </p>
        </Reveal>
        <Reveal className="faq-list" delay={1}>
          {faqs.map((f, i) => (
            <div key={i} className={`faq-item${open === i ? ' open' : ''}`}>
              <button className="faq-q" onClick={() => toggle(i)}>
                {f.q}
                <span className="pm">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
              <div
                className="faq-a"
                style={{ maxHeight: open === i ? '400px' : undefined }}
              >
                <div className="faq-a-inner">{f.a}</div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
