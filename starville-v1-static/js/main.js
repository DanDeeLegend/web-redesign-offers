// Progressive enhancement: the page works without JS; this adds the mobile
// menu, the Academics dropdown, the sticky-header shadow and scroll reveals.
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const nav = document.getElementById('site-nav');
  const toggle = document.querySelector('.nav-toggle');
  const mobileQuery = window.matchMedia('(max-width: 1080px)');

  // ---- Mobile menu ----
  const setMenu = (open) => {
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };
  toggle.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  mobileQuery.addEventListener('change', (e) => { if (!e.matches) setMenu(false); });

  // ---- Dropdowns (click/tap to toggle; hover also opens them on desktop via CSS) ----
  const dropdowns = document.querySelectorAll('.nav__item--has-menu');
  const setDropdown = (item, open) => {
    item.classList.toggle('is-open', open);
    item.querySelector('.nav__trigger').setAttribute('aria-expanded', String(open));
  };
  dropdowns.forEach((item) => {
    item.querySelector('.nav__trigger').addEventListener('click', () => {
      setDropdown(item, !item.classList.contains('is-open'));
    });
  });
  document.addEventListener('click', (e) => {
    dropdowns.forEach((item) => { if (!item.contains(e.target)) setDropdown(item, false); });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    const openDropdown = document.querySelector('.nav__item--has-menu.is-open');
    if (openDropdown) {
      setDropdown(openDropdown, false);
      openDropdown.querySelector('.nav__trigger').focus();
    } else if (nav.classList.contains('is-open')) {
      setMenu(false);
      toggle.focus();
    }
  });

  // ---- Header shadow once the page scrolls ----
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // ---- Reveal on scroll ----
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  // ---- Dates that should never go stale ----
  const now = new Date().getFullYear();
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = now;
  const years = document.querySelector('[data-years]');
  if (years) years.textContent = now - 2007;
});
