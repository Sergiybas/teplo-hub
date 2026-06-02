import { Reveal } from './Reveal';

const services = [
  {
    num: '01',
    title: 'Автономне опалення',
    desc: 'Опалення приватних будинків та квартир із точним розрахунком теплового балансу.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3c2 3 3 4 3 7a3 3 0 0 1-6 0c0-1 .5-2 1-3" />
        <path d="M12 21c-3 0-5-2-5-5 0-3 2-5 5-9 3 4 5 6 5 9 0 3-2 5-5 5Z" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Теплові насоси',
    desc: 'Підбір і монтаж теплових насосів для енергоефективного опалення та ГВП.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M7 8h10M7 12h10M7 16h6" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Котли всіх типів',
    desc: 'Газові, електричні та твердопаливні котли: встановлення й обслуговування.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="3" width="12" height="18" rx="2" />
        <path d="M10 8h4M12 12v0" />
        <circle cx="12" cy="12" r="1.4" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Тепла підлога',
    desc: 'Водяна та електрична тепла підлога з рівномірним розподілом тепла.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6c2 0 2 3 4 3s2-3 4-3 2 3 4 3 2-3 4-3M4 12c2 0 2 3 4 3s2-3 4-3 2 3 4 3 2-3 4-3M4 18c2 0 2 3 4 3" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Водопостачання',
    desc: 'Системи водопостачання та каналізації для будинків і комерції.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3c2 3 4 5 4 8a4 4 0 0 1-8 0c0-3 2-5 4-8Z" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Бойлери та ГВП',
    desc: 'Монтаж бойлерів і систем гарячого водопостачання будь-якої складності.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="3" width="14" height="18" rx="3" />
        <circle cx="12" cy="13" r="3" />
        <path d="M9 7h6" />
      </svg>
    ),
  },
  {
    num: '07',
    title: 'Пусконалагодження',
    desc: 'Введення обладнання в експлуатацію з налаштуванням усіх параметрів.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
        <circle cx="12" cy="12" r="5" />
        <path d="M12 9v3l2 1" />
      </svg>
    ),
  },
  {
    num: '08',
    title: 'Сервіс та ремонт',
    desc: 'Сервісне обслуговування й ремонт інженерних систем будь-яких виробників.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2-2 2.5-2.5Z" />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">Послуги</span>
          <h2>Повний цикл інженерних систем</h2>
          <p className="lead">
            Комплексний монтаж опалення, водопостачання та каналізації — для приватних будинків, квартир, комерційних і промислових об'єктів.
          </p>
        </Reveal>
        <Reveal className="svc-grid" delay={1}>
          {services.map((s, i) => (
            <div key={s.num} className={`svc${i % 2 !== 0 ? ' even' : ''}`}>
              <span className="svc-num">{s.num}</span>
              <div className="svc-ic">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="svc-line" />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
