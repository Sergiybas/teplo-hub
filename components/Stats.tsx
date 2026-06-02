import { Reveal } from './Reveal';

const stats = [
  { value: '12+',    label: "років на ринку інженерних систем", variant: 'heat' },
  { value: '800+',   label: "успішно завершених об'єктів",      variant: 'water' },
  { value: '3 роки', label: "гарантія на виконані роботи",      variant: 'heat' },
  { value: '24/7',   label: "сервісна підтримка клієнтів",      variant: 'water' },
];

export function Stats() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="stats">
          {stats.map((s, i) => (
            <Reveal key={s.value} className={`stat ${s.variant}`} delay={i > 0 ? (i as 1 | 2 | 3) : undefined}>
              <b>{s.value}</b>
              <span>{s.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
