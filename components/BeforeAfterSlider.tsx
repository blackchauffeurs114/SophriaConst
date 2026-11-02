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
    window.addEventListener('resize', updateFit);
    return () => window.removeEventListener('resize', updateFit);
  }, [updateFit]);

  return (
    <section className="section ba-section" id="transformations">
      <div className="container">
        <div className="sec-head center reveal">
          <div className="eyebrow center">REAL TRANSFORMATIONS</div>
          <h2 className="display re-section-title">Proof, not promises.</h2>
          <p className="sec-desc re-section-copy">
            Drag the slider to see how Sophria Construction transforms dated rooms into modern architectural living spaces &mdash; fixed pricing, seamless management, and master craft.
          </p>
        </div>

        <div className="reveal mt-2">
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
                <img src="/assets/ba-after.jpg" alt="Modern luxury dining and living space after full renovation" loading="lazy" />
              </picture>
            </div>
            <div className="ba-after" style={{ width: `${sliderPos}%` }}>
              <picture>
                <source srcSet="/assets/ba-before.webp" type="image/webp" />
                <img
                  ref={afterImgRef}
                  src="/assets/ba-before.jpg"
                  alt="Traditional dining room before renovation"
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
            Main-Floor Living &amp; Open-Staircase Renovation &bull; Vancouver &amp; Ontario
          </p>
        </div>
      </div>
    </section>
  );
}
