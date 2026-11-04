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

    // 3. Roomvo Footer Smooth Fade (Native IntersectionObserver + passive scroll: zero CPU, zero freeze)
    let isFooterActive = false;

    const setRoomvoState = (hide: boolean) => {
      if (isFooterActive === hide) return;
      isFooterActive = hide;

      document.body.classList.toggle('footer-active', hide);

      const targets: HTMLElement[] = [];
      const popupEl = document.getElementById('assistantPopup');
      if (popupEl) targets.push(popupEl);
      Array.from(document.querySelectorAll('iframe[src*="roomvo"], iframe[title*="Roomvo"], div[id*="roomvo"], div[class*="roomvo"], launch-sequence')).forEach(el => targets.push(el as HTMLElement));

      targets.forEach((el) => {
        if (hide) {
          el.style.setProperty('opacity', '0', 'important');
          el.style.setProperty('visibility', 'hidden', 'important');
          el.style.setProperty('pointer-events', 'none', 'important');
          el.style.setProperty('transform', 'translateY(40px) scale(0.85)', 'important');
          el.style.setProperty('transition', 'opacity 0.35s ease, transform 0.35s ease, visibility 0.35s ease', 'important');
          el.style.setProperty('z-index', '-9999', 'important');
        } else {
          // If drawer is open, keep Roomvo hidden
          if (document.body.classList.contains('drawer-open')) return;
          el.style.setProperty('opacity', '1', 'important');
          el.style.setProperty('visibility', 'visible', 'important');
          el.style.setProperty('pointer-events', 'all', 'important');
          el.style.setProperty('transform', 'none', 'important');
          el.style.setProperty('transition', 'opacity 0.35s ease, transform 0.35s ease, visibility 0.35s ease', 'important');
          el.style.setProperty('z-index', '2147483646', 'important');
        }
      });
    };

    const footer = document.getElementById('site-footer');
    let footerIO: IntersectionObserver | null = null;

    if (footer && 'IntersectionObserver' in window) {
      footerIO = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setRoomvoState(entry.isIntersecting);
          });
        },
        { threshold: 0.01, rootMargin: '0px 0px 80px 0px' }
      );
      footerIO.observe(footer);
    }

    // Scroll listener backup (pure math, requestAnimationFrame, zero CPU)
    let ticking = false;
    const checkScrollPosition = () => {
      if (footer) {
        const rect = footer.getBoundingClientRect();
        const nearBottom = rect.top <= (window.innerHeight + 50);
        setRoomvoState(nearBottom);
      } else {
        const scrollY = window.scrollY || window.pageYOffset;
        const windowH = window.innerHeight;
        const docH = document.documentElement.scrollHeight;
        const nearBottom = scrollY + windowH >= docH - 650;
        setRoomvoState(nearBottom);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(checkScrollPosition);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      if (footerIO && footer) footerIO.unobserve(footer);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return null;
}
