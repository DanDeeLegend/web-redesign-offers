// Progressive enhancement: the page works without JS; this adds the mobile
// menu, search overlay, sticky-header shadow and scroll reveals.
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const nav = document.getElementById('site-nav');
  const toggle = document.querySelector('.nav-toggle');

  // ---- Mobile menu ----
  const setMenu = (open) => {
    nav.classList.toggle('is-open', open);
    header.toggleAttribute('data-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };
  toggle.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  window.matchMedia('(min-width: 961px)').addEventListener('change', (e) => { if (e.matches) setMenu(false); });

  // ---- Search overlay ----
  const search = document.querySelector('.search');
  const searchInput = search.querySelector('input');
  let lastFocus = null;
  const openSearch = () => {
    lastFocus = document.activeElement;
    search.hidden = false;
    searchInput.focus();
  };
  const closeSearch = () => {
    search.hidden = true;
    if (lastFocus) lastFocus.focus();
  };
  document.querySelector('[data-search-open]').addEventListener('click', openSearch);
  search.querySelector('[data-search-close]').addEventListener('click', closeSearch);
  search.addEventListener('click', (e) => { if (e.target === search) closeSearch(); });

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (!search.hidden) closeSearch();
    else if (nav.classList.contains('is-open')) { setMenu(false); toggle.focus(); }
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

  // ---- Footer year ----
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
});
