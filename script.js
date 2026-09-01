const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');
const navLinks = [...document.querySelectorAll('#primary-nav a[href^="#"]')];

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  header?.classList.toggle('menu-open', !isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    header?.classList.remove('menu-open');
  });
});

const observedSections = navLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navLinks.forEach((link) => {
        const active = link.getAttribute('href') === `#${visible.target.id}`;
        link.toggleAttribute('aria-current', active);
      });
    },
    { rootMargin: '-20% 0px -65%', threshold: [0, 0.25, 0.6] },
  );
  observedSections.forEach((section) => observer.observe(section));
}

const yearNode = document.querySelector('#current-year');
if (yearNode) yearNode.textContent = String(new Date().getFullYear());
