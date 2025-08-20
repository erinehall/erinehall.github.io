export const motion = {
  durations: {
    short: 200,
    medium: 300,
  },
  easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  distance: 12,
  stagger: 60,
};

export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
