import { motion, prefersReducedMotion } from './motion.js';

export function initScrollReveal({
  selector = '.scroll-fade',
  childSelector = '.reveal-child',
  rootMargin = '0px',
  threshold = 0.1,
} = {}) {
  const reduced = prefersReducedMotion();
  const elements = document.querySelectorAll(selector);

  if (reduced) {
    elements.forEach((el) => {
      el.classList.add('visible');
      el.querySelectorAll(childSelector).forEach((child) => child.classList.add('visible'));
    });
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.classList.add('visible');
        const children = el.querySelectorAll(childSelector);
        children.forEach((child, index) => {
          child.style.transitionDelay = `${index * motion.stagger}ms`;
          child.classList.add('visible');
        });
        obs.unobserve(el);
      }
    });
  }, { rootMargin, threshold });

  elements.forEach((el) => observer.observe(el));
}
