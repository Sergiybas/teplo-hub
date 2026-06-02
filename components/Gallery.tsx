import { Reveal } from './Reveal';

export function Gallery() {
  return (
    <section className="section" id="gallery">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">Наші роботи</span>
          <h2>Реалізовані об'єкти</h2>
          <p className="lead">
            Монтаж систем опалення, водопостачання та каналізації для приватних будинків і комерційних об'єктів Нововолинська і Волинської області.
          </p>
        </Reveal>
        <Reveal className="gallery-grid" delay={1}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="gallery-item" />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
