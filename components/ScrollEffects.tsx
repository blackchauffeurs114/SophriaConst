'use client';

import { useEffect } from 'react';

export default function ScrollEffects() {
  useEffect(() => {
    // 1. Reveal animations observer
    const revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      const ro = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('in');
              ro.unobserve(e.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
      );

      revealEls.forEach((el) => {
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

    // 2. Number counters
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
      const co = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              animateCount(e.target);
              co.unobserve(e.target);
            }
          });
        },
        { threshold: 0.3 }
      );
      counters.forEach((el) => co.observe(el));
    }

    // 3. Roomvo Footer Smooth Fade (Native IntersectionObserver: zero CPU, zero freeze)
    let isHidden = false;

    const setRoomvoHidden = (hide: boolean) => {
      if (isHidden === hide) return;
      isHidden = hide;
      const popup =
        (document.getElementById('assistantPopup') as HTMLElement | null) ||
        (document.querySelector('iframe[src*="roomvo"]') as HTMLElement | null);
      if (!popup) return;

      if (hide) {
        popup.style.setProperty('opacity', '0', 'important');
        popup.style.setProperty('visibility', 'hidden', 'important');
        popup.style.setProperty('pointer-events', 'none', 'important');
        popup.style.setProperty('transform', 'translateY(40px) scale(0.85)', 'important');
        popup.style.setProperty('transition', 'opacity 0.35s ease, transform 0.35s ease', 'important');
        popup.style.setProperty('z-index', '-1', 'important');
      } else {
        popup.style.setProperty('opacity', '1', 'important');
        popup.style.setProperty('visibility', 'visible', 'important');
        popup.style.setProperty('pointer-events', 'all', 'important');
        popup.style.setProperty('transform', 'none', 'important');
        popup.style.setProperty('transition', 'opacity 0.35s ease, transform 0.35s ease', 'important');
        popup.style.setProperty('z-index', '2147483646', 'important');
      }
    };

    const footer = document.getElementById('site-footer');
    let footerIO: IntersectionObserver | null = null;

    if (footer && 'IntersectionObserver' in window) {
      footerIO = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // When footer is visible, smoothly fade out Roomvo
            setRoomvoHidden(entry.isIntersecting);
          });
        },
        { threshold: 0.05, rootMargin: '0px 0px 50px 0px' }
      );
      footerIO.observe(footer);
    }

    return () => {
      if (footerIO && footer) footerIO.unobserve(footer);
    };
  }, []);

  return null;
}
