'use client';

import React, { useState } from 'react';

const reelsData = [
  {
    id: 1,
    title: 'Luxury Kitchens',
    sub: 'Waterfall marble & custom millwork',
    video: '/assets/bts-kitchen.mp4',
    poster: '/assets/bts-kitchen-poster.jpg'
  },
  {
    id: 2,
    title: 'Spa Bathrooms',
    sub: 'Frameless glass & zero-threshold curbless',
    video: '/assets/bts-bathroom.mp4',
    poster: '/assets/bts-bathroom-poster.jpg'
  },
  {
    id: 3,
    title: 'Architectural Framing',
    sub: 'Load-bearing open concept layouts',
    video: '/assets/bts-framing.mp4',
    poster: '/assets/bts-framing-poster.jpg'
  },
  {
    id: 4,
    title: 'Hardwood & Flooring',
    sub: 'Precision herringbone & engineered oak',
    video: '/assets/bts-flooring.mp4',
    poster: '/assets/bts-flooring-poster.jpg'
  }
];

export default function FeaturedWork() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="section section--feature section--home-compact home-offer-section" id="portfolio">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">WHAT WE OFFER</p>
          <h2 className="section-title">Spaces That Inspire.</h2>
          <p className="section-copy">
            Real on-site craftsmanship captured across Ontario &amp; Vancouver.
          </p>
        </div>

        <div className="featured-work__reels-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
          {reelsData.map((item) => (
            <div
              key={item.id}
              className="featured-work__tile"
              onClick={() => setActiveVideo(item.video)}
              style={{ cursor: 'pointer', borderRadius: '18px', overflow: 'hidden', position: 'relative', background: '#0a0f1d', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div style={{ aspectRatio: '9/16', position: 'relative' }}>
                <video
                  src={item.video}
                  poster={item.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(4,7,12,0.85) 0%, transparent 60%)' }} />
                <div style={{ position: 'absolute', bottom: '1.2rem', left: '1.2rem', right: '1.2rem' }}>
                  <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 800, color: '#fff' }}>{item.title}</h3>
                  <p style={{ margin: '0.3rem 0 0', fontSize: '0.82rem', color: '#9ba6b8' }}>{item.sub}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="re-modal is-open"
          style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.88)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={() => setActiveVideo(null)}
        >
          <div style={{ maxWidth: '420px', width: '90%', position: 'relative' }} onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActiveVideo(null)}
              style={{ position: 'absolute', top: '-40px', right: '0', background: 'none', border: 'none', color: '#fff', fontSize: '2rem', cursor: 'pointer' }}
            >
              ✕
            </button>
            <video
              src={activeVideo}
              autoPlay
              controls
              playsInline
              style={{ width: '100%', borderRadius: '16px', boxShadow: '0 20px 60px rgba(0,0,0,0.8)' }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
