import { Reveal } from './Reveal';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <Reveal>
            <span className="eyebrow">Інженерія комфорту · з 2012 року</span>
            <h1 style={{ marginTop: '22px' }}>
              Від першої труби —<br />
              до ідеального <span className="accent">тепла</span> у вашому <span className="accent-w">домі</span>
            </h1>
            <p className="hero-lead">
              ТеплоХаб проєктує, монтує та обслуговує системи опалення, водопостачання й каналізації «під ключ».
              Комфорт, економія ресурсів і безперебійна робота на роки.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                Безкоштовна консультація <span className="arr">→</span>
              </a>
              <a href="#services" className="btn btn-ghost">Наші послуги</a>
            </div>
            <div className="hero-trust">
              <div className="ht"><b>12+</b><span>років досвіду</span></div>
              <div className="ht"><b>800+</b><span>реалізованих об'єктів</span></div>
              <div className="ht"><b>3 роки</b><span>гарантія на роботи</span></div>
            </div>
          </Reveal>
        </div>
        <Reveal className="hero-visual" delay={2}>
          <div className="hero-img-placeholder" />
          <div className="hero-badge">
            <span className="dot" />
            <p>
              <b>Монтаж «під ключ»</b> — від проєкту й підбору обладнання до пусконалагодження.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
