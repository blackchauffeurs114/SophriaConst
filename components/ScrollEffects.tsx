'use client';

import { useEffect } from 'react';

export default function ScrollEffects() {
  useEffect(() => {
    // Reveal animations observer
    const revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      const ro = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            ro.unobserve(e.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

      revealEls.forEach((el) => {
        // If element is already in viewport, mark in immediately
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('in');
        } else {
          ro.observe(el);
        }
      });
    } else {
      revealEls.forEach((el) => el.classList.add('in'));
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
      }, { threshold: 0.3 });
      counters.forEach((el) => co.observe(el));
    }
  }, []);

  return null;
}
