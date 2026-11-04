'use client';

import { useEffect } from 'react';

export default function ScrollEffects() {
  useEffect(() => {
    // 1. Reveal animations observer
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

    // 3. MASTER ROOMVO AI CONTROLLER: Smooth footer fade & drawer hide
    let lastHiddenState: boolean | null = null;

    const getRoomvoElements = (): HTMLElement[] => {
      const elements: HTMLElement[] = [];
      const popup = document.getElementById('assistantPopup');
      if (popup) elements.push(popup);
      const iframes = document.querySelectorAll<HTMLElement>(
        'iframe[src*="roomvo"], iframe[title*="Roomvo"], iframe[aria-label*="Roomvo"]'
      );
      iframes.forEach((f) => {
        if (!elements.includes(f)) elements.push(f);
      });
      const customEls = document.querySelectorAll<HTMLElement>(
        'launch-sequence, [class*="roomvo"]'
      );
      customEls.forEach((l) => {
        if (!elements.includes(l)) elements.push(l);
      });
      return elements;
    };

    const isNearFooter = (): boolean => {
      const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      const windowH = window.innerHeight || document.documentElement.clientHeight || 0;
      const docH = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight
      );

      // Within 260px of the very bottom of the document
      if (scrollY + windowH >= docH - 260) {
        return true;
      }

      // Or if footer enters lower viewport
      const footer = document.getElementById('site-footer');
      if (footer) {
        const rect = footer.getBoundingClientRect();
        if (rect.top <= windowH - 120) {
          return true;
        }
      }

      return false;
    };

    const syncRoomvoVisibility = () => {
      const isDrawerOpen = document.body.classList.contains('drawer-open');
      const nearFooter = isNearFooter();
      const shouldHide = isDrawerOpen || nearFooter;

      // Only update body class if changed
      if (nearFooter && !document.body.classList.contains('hide-roomvo')) {
        document.body.classList.add('hide-roomvo');
      } else if (!nearFooter && document.body.classList.contains('hide-roomvo')) {
        document.body.classList.remove('hide-roomvo');
      }

      // State guard: if state hasn't changed and elements exist, do nothing!
      const els = getRoomvoElements();
      if (els.length === 0) return;
      if (lastHiddenState === shouldHide) return;
      lastHiddenState = shouldHide;

      els.forEach((el) => {
        if (shouldHide) {
          el.style.setProperty('opacity', '0', 'important');
          el.style.setProperty('visibility', 'hidden', 'important');
          el.style.setProperty('pointer-events', 'none', 'important');
          el.style.setProperty('transform', 'translateY(35px) scale(0.85)', 'important');
          el.style.setProperty(
            'transition',
            'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.4s ease',
            'important'
          );
          el.style.setProperty('z-index', '-1', 'important');
        } else {
          el.style.setProperty('opacity', '1', 'important');
          el.style.setProperty('visibility', 'visible', 'important');
          el.style.setProperty('pointer-events', 'all', 'important');
          el.style.setProperty('transform', 'translateY(0) scale(1)', 'important');
          el.style.setProperty(
            'transition',
            'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.4s ease',
            'important'
          );
          el.style.setProperty('z-index', '2147483646', 'important');
        }
      });
    };

    // Event listeners
    window.addEventListener('scroll', syncRoomvoVisibility, { passive: true });
    window.addEventListener('resize', syncRoomvoVisibility, { passive: true });

    // MutationObserver only on direct body children and class attribute
    const mutationObserver = new MutationObserver(() => {
      syncRoomvoVisibility();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: false,
      attributes: true,
      attributeFilter: ['class'],
    });

    // Check periodically during first 10 seconds to ensure Roomvo is caught
    const intervalId = setInterval(syncRoomvoVisibility, 500);
    const timeoutId = setTimeout(() => {
      clearInterval(intervalId);
    }, 10000);

    // Initial sync
    syncRoomvoVisibility();

    return () => {
      window.removeEventListener('scroll', syncRoomvoVisibility);
      window.removeEventListener('resize', syncRoomvoVisibility);
      mutationObserver.disconnect();
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  return null;
}
