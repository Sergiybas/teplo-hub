import { Reveal } from './Reveal';

const brands = ['Bosch', 'Viessmann', 'Vaillant', 'Daikin', 'Grundfos', 'Wilo', 'Buderus'];

export function LogoStrip() {
  return (
    <section className="logos">
      <Reveal className="logos-inner">
        <span className="logos-label">Працюємо з обладнанням</span>
        {brands.map((b) => (
          <span key={b} className="logo-pill">{b}</span>
        ))}
      </Reveal>
    </section>
  );
}
