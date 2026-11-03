import React from 'react';
import Link from 'next/link';

export default function ConsultationBanner() {
  return (
    <section className="cta-banner" id="consultation" style={{ position: 'relative', minHeight: '62vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', overflow: 'hidden', padding: '120px 24px' }}>
      <div
        className="banner-media"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          overflow: 'hidden'
        }}
      >
        <img
          src="/assets/img/projects/canada-detached-luxury-home.jpg"
          alt="Luxury Canadian Custom Detached Home"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 45%',
            display: 'block'
          }}
        />
      </div>
      <div
        className="banner-scrim"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: 'linear-gradient(180deg, rgba(5, 11, 28, 0.42) 0%, rgba(5, 11, 28, 0.68) 100%)',
          backdropFilter: 'blur(0.5px)'
        }}
      ></div>
      <div className="banner-inner" style={{ position: 'relative', zIndex: 2, maxWidth: '840px', margin: '0 auto' }}>
        <div className="eyebrow center reveal" style={{ color: '#83c0ff', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
          YOUR VISION, BUILT
        </div>
        <h2 className="reveal d1" style={{ color: '#fff', fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900, fontFamily: "'kaleko', sans-serif", letterSpacing: '-0.04em', lineHeight: '1.08', marginBottom: '1.25rem' }}>
          Let&apos;s create a space worth keeping.
        </h2>
        <p className="reveal d2" style={{ color: '#cbd5e1', fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: '1.65', maxWidth: '38rem', margin: '0 auto 2.25rem' }}>
          Every great build begins with a conversation. Tell us about your project and we&apos;ll show you what&apos;s possible.
        </p>
        <Link href="/estimate" className="bts-cta-btn reveal d3" style={{ padding: '16px 38px', fontSize: '0.95rem' }}>
          BOOK A PRIVATE CONSULTATION
        </Link>
      </div>
    </section>
  );
}
