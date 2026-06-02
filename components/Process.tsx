import { Reveal } from './Reveal';

const steps = [
  { n: '01', title: 'Консультація', desc: "Обговорюємо задачу, виїжджаємо на об'єкт, робимо заміри та аудит." },
  { n: '02', title: 'Проєкт і кошторис', desc: 'Готуємо проєкт системи, підбираємо обладнання та прозорий кошторис.' },
  { n: '03', title: 'Монтаж', desc: "Виконуємо монтаж «під ключ» із дотриманням норм і термінів." },
  { n: '04', title: 'Запуск і сервіс', desc: 'Пусконалагодження, навчання та подальше сервісне обслуговування.' },
];

export function Process() {
  return (
    <section className="section" id="process">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow on-dark">Як ми працюємо</span>
          <h2>Чотири кроки до тепла</h2>
          <p>Прозорий процес — ви завжди знаєте, що відбувається на об&apos;єкті та скільки це коштує.</p>
        </Reveal>
        <Reveal className="steps" delay={1}>
          {steps.map((s, i) => (
            <div key={s.n} className={`step${i % 2 !== 0 ? ' even' : ''}`}>
              <div className="step-n">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
