'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    // Reveal animations observer - immediately reveal all elements so no content is ever hidden
    const revealEls = document.querySelectorAll('.reveal');
    revealEls.forEach((el) => el.classList.add('in'));

    if ('IntersectionObserver' in window) {
      const ro = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            ro.unobserve(e.target);
          }
        });
      }, { threshold: 0.05, rootMargin: '0px 0px 50px 0px' });

      revealEls.forEach((el) => {
        ro.observe(el);
      });
    }

    // Number counters
    const counters = document.querySelectorAll('.count[data-to]');
    const animateCount = (el: Element) => {
      const to = parseFloat(el.getAttribute('data-to') || '0');
      const dec = parseInt(el.getAttribute('data-dec') || '0', 10);
      const suffix = el.getAttribute('data-suffix') || '';
      const dur = 1600;
      let t0: number | null = null;
      function tick(t: number) {
        if (!t0) t0 = t;
        const p = Math.min((t - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = (to * eased).toFixed(dec) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    };

    if ('IntersectionObserver' in window) {
      const co = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            animateCount(e.target);
            co.unobserve(e.target);
          }
        });
      }, { threshold: 0.2 });
      counters.forEach((el) => co.observe(el));
    } else {
      counters.forEach(animateCount);
    }
  }, [pathname]);

  return null;
}
