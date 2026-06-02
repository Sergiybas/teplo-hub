/* ТеплоХаб — взаємодія */
(function () {
  // Header shadow on scroll
  const header = document.querySelector('.site-header');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Reveal on scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach((item) => {
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    q.addEventListener('click', () => {
      const open = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach((other) => {
        if (other !== item) { other.classList.remove('open'); other.querySelector('.faq-a').style.maxHeight = null; }
      });
      if (open) { item.classList.remove('open'); a.style.maxHeight = null; }
      else { item.classList.add('open'); a.style.maxHeight = a.scrollHeight + 'px'; }
    });
  });

  // Lead form
  const form = document.getElementById('leadForm');
  const ok = document.getElementById('formOk');
  if (form) {
    form.addEventListener('submit', (ev) => {
      ev.preventDefault();
      const name = form.querySelector('#f-name');
      const phone = form.querySelector('#f-phone');
      let valid = true;
      [name, phone].forEach((f) => {
        if (!f.value.trim()) { f.style.borderColor = 'var(--heat)'; valid = false; }
        else { f.style.borderColor = ''; }
      });
      if (!valid) return;
      form.style.display = 'none';
      ok.classList.add('show');
    });
  }
})();
