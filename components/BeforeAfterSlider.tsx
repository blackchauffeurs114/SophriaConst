'use client';

import React, { useState, useRef, useCallback } from 'react';

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const isDragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePos = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pct);
  }, []);

  const handlePointerDown = () => {
    isDragging.current = true;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    updatePos(e.clientX);
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  return (
    <section className="section ba-section" id="transformations">
      <div className="container">
        <div className="sec-head" style={{ textAlign: 'center' }}>
          <span className="eyebrow" style={{ color: '#83c0ff', display: 'block', marginBottom: '0.75rem' }}>
            REAL TRANSFORMATIONS
          </span>
          <h2 className="display" style={{ fontFamily: "'kaleko', sans-serif", fontWeight: 900, letterSpacing: '-0.04em' }}>
            Proof, not promises.
          </h2>
          <p className="sec-desc" style={{ maxWidth: '44rem', margin: '0 auto', color: '#9ba6b8' }}>
            Drag the slider to see how Sophria Construction transforms dated rooms into modern architectural living spaces — fixed pricing, seamless management, and master craft.
          </p>
        </div>

        <div
          className="ba"
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          style={{ touchAction: 'none' }}
        >
          {/* Base: AFTER image */}
          <div className="ba-before">
            <picture>
              <source srcSet="/assets/ba-after.webp" type="image/webp" />
              <img src="/assets/ba-after.jpg" alt="Modern renovated open staircase living space after" loading="lazy" />
            </picture>
          </div>

          {/* Left Overlay: BEFORE image clipped */}
          <div className="ba-after" style={{ width: `${sliderPos}%` }}>
            <picture>
              <source srcSet="/assets/ba-before.webp" type="image/webp" />
              <img src="/assets/ba-before.jpg" alt="Dated Vancouver dining room before renovation" loading="lazy" />
            </picture>
          </div>

          <span className="ba-tag before">BEFORE</span>
          <span className="ba-tag after">AFTER</span>

          <div className="ba-handle" style={{ left: `${sliderPos}%` }}>
            <span className="ba-knob" aria-hidden="true">↔</span>
          </div>
        </div>

        <p className="ba-caption" style={{ textAlign: 'center', marginTop: '1.25rem', color: '#68778d', fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          MAIN-FLOOR LIVING &amp; OPEN-STAIRCASE RENOVATION · VANCOUVER &amp; ONTARIO
        </p>
      </div>
    </section>
  );
}
