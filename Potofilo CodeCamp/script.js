// Theme Toggle
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  themeBtn.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark);
});
// persist
if (localStorage.getItem('theme') === 'true') {
  document.body.classList.add('dark');
  themeBtn.textContent = '☀️';
}

// Mobile Nav Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// Reveal on scroll
const revealObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll('[data-reveal]').forEach(el =>
  revealObserver.observe(el)
);

// Scroll‑spy for active link
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('#navbar a');
const navObserver = new IntersectionObserver(
  entries => {
    entries.forEach(e => {
      const link = document.querySelector(
        `#navbar a[href="#${e.target.id}"]`
      );
      if (e.isIntersecting) {
        navLinks.forEach(a => a.classList.remove('active'));
        link && link.classList.add('active');
      }
    });
  },
  { threshold: 0.5 }
);
sections.forEach(s => navObserver.observe(s));

// Back to top button
const toTop = document.getElementById('to-top');
window.addEventListener('scroll', () => {
  toTop.classList.toggle('show', window.scrollY > window.innerHeight);
});
toTop.addEventListener('click', () =>
  window.scrollTo({ top: 0, behavior: 'smooth' })
);
