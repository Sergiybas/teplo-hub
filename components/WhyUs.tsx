import { Reveal } from './Reveal';

const reasons = [
  { n: '01', title: "Багаторічний практичний досвід", desc: "Сотні реалізованих об'єктів різної складності — від квартир до промисловості." },
  { n: '02', title: "Якісні матеріали та технології", desc: "Сучасне сертифіковане обладнання й комплектуючі від перевірених виробників." },
  { n: '03', title: "Індивідуальний підхід", desc: "Рішення під ваш об'єкт, бюджет і потреби — без шаблонів і зайвих витрат." },
  { n: '04', title: "Гарантія на роботи", desc: "Письмова гарантія та сервісна підтримка після завершення монтажу." },
  { n: '05', title: "Супровід на кожному етапі", desc: "Від першої консультації до запуску системи — поруч на всьому шляху." },
];

export function WhyUs() {
  return (
    <section className="section" id="why">
      <div className="wrap why-grid">
        <Reveal className="why-copy">
          <span className="eyebrow water">Чому обирають нас</span>
          <h2 style={{ fontSize: 'clamp(28px,3.8vw,46px)', marginTop: '18px' }}>
            Інженерія, якій<br />довіряють дім
          </h2>
          <div className="why-list" style={{ marginTop: '32px' }}>
            {reasons.map((r) => (
              <div key={r.n} className="why-item">
                <span className="wn">{r.n}</span>
                <div>
                  <h3>{r.title}</h3>
                  <p>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal className="why-visual" delay={2}>
          <div className="why-img-placeholder" />
        </Reveal>
      </div>
    </section>
  );
}
