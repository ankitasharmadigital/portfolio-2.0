const els = document.querySelectorAll(
  '.hero-copy, .hero-visual, .statement, .section-heading, .two-column > *, .approach-grid article, .case, .capability-list > div, .principle-stack p, .contact'
);
els.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

els.forEach(el => observer.observe(el));
