'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const isDragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const afterImgRef = useRef<HTMLImageElement>(null);

  const updateFit = useCallback(() => {
    if (containerRef.current && afterImgRef.current) {
      afterImgRef.current.style.width = `${containerRef.current.clientWidth}px`;
    }
  }, []);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(2, Math.min(98, (x / rect.width) * 100));
    setSliderPos(pct);
  }, []);

  useEffect(() => {
    updateFit();
    const t1 = setTimeout(updateFit, 60);
    const t2 = setTimeout(updateFit, 200);
    const t3 = setTimeout(updateFit, 600);
    window.addEventListener('resize', updateFit);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener('resize', updateFit);
    };
  }, [updateFit]);

  return (
    <section className="section ba-section" id="transformations" style={{ background: '#05080d', width: '100%', boxSizing: 'border-box' }}>
      <div className="container" style={{ width: '100%', maxWidth: '1240px', margin: '0 auto', boxSizing: 'border-box' }}>
        <div className="sec-head center" style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div className="eyebrow center" style={{ color: '#83c0ff', fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            REAL TRANSFORMATIONS
          </div>
          <h2 className="display re-section-title" style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, fontFamily: "'kaleko', sans-serif", color: '#fff', margin: '0.5rem 0 1rem' }}>
            Before &amp; After Showcase
          </h2>
          <p className="sec-desc re-section-copy" style={{ color: '#9ba6b8', fontSize: '1.05rem', lineHeight: '1.65', maxWidth: '42rem', margin: '0 auto' }}>
            Drag the slider to see how Sophria Construction transforms dated spaces into modern luxury finishes &mdash; fixed pricing, seamless management, and master craft.
          </p>
        </div>

        <div className="mt-2" style={{ width: '100%', maxWidth: '960px', margin: '1.5rem auto 0', boxSizing: 'border-box' }}>
          <div
            ref={containerRef}
            className="ba tall"
            role="slider"
            aria-label="Before and after renovation comparison"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(sliderPos)}
            tabIndex={0}
            onPointerDown={(e) => {
              isDragging.current = true;
              (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
              handleMove(e.clientX);
            }}
            onPointerMove={(e) => {
              if (isDragging.current) handleMove(e.clientX);
            }}
            onPointerUp={() => { isDragging.current = false; }}
            onPointerCancel={() => { isDragging.current = false; }}
          >
            <div className="ba-before">
              <picture>
                <source srcSet="/assets/ba-after.webp" type="image/webp" />
                <img src="/assets/ba-after.jpg" alt="Modern luxury dining and living space after full renovation" width={1200} height={800} loading="lazy" />
              </picture>
            </div>
            <div className="ba-after" style={{ width: `${sliderPos}%` }}>
              <picture>
                <source srcSet="/assets/ba-before.webp" type="image/webp" />
                <img
                  ref={afterImgRef}
                  src="/assets/ba-before.jpg"
                  alt="Traditional dining room before renovation"
                  width={1200}
                  height={800}
                  loading="lazy"
                  onLoad={updateFit}
                />
              </picture>
            </div>
            <span className="ba-tag before">Before</span>
            <span className="ba-tag after">After</span>
            <div className="ba-handle" style={{ left: `${sliderPos}%` }}>
              <span className="ba-knob">&harr;</span>
            </div>
          </div>
          <p
            className="ba-note center"
            style={{
              textAlign: 'center',
              marginTop: '16px',
              fontSize: '0.85rem',
              color: 'var(--muted, #9ba6b8)',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            Main-Floor Living &amp; Open-Staircase Renovation &bull; Mississauga &amp; Ontario
          </p>
        </div>
      </div>
    </section>
  );
}
