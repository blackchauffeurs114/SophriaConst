import React from 'react';

export default function WhoWeAre() {
  return (
    <section className="pad about-section re-about-section" id="about">
      <div className="container">
        <div className="sec-head re-sec-head" style={{ textAlign: 'center' }}>
          <span className="eyebrow" style={{ color: '#83c0ff', display: 'block', marginBottom: '0.75rem' }}>
            WHO WE ARE
          </span>
          <h2 className="display" style={{ fontFamily: "'kaleko', sans-serif", fontWeight: 900, letterSpacing: '-0.04em' }}>
            Craftsmanship is in the details you never see.
          </h2>
          <p className="sec-desc re-section-copy" style={{ maxWidth: '44rem', margin: '0 auto 1.2rem', color: '#9ba6b8' }}>
            Sophria Construction is an Ontario and Vancouver-based design-build firm specializing in high-end residential renovations and commercial transformations. We were founded on a simple belief: that a home should be renovated with the same care, transparency and precision with which it will be lived in.
          </p>
          <p className="re-story-lead" style={{ maxWidth: '44rem', margin: '0 auto 2.5rem', color: 'rgba(245, 248, 252, 0.72)' }}>
            From luxury kitchen remodels and spa bathrooms to custom stonework and home additions, every project is guided by unwavering attention to detail, proactive communication, and an ironclad standard of quality — delivered on time and on budget.
          </p>
        </div>

        <div className="stats re-stats-grid">
          <div className="stat-card">
            <span className="stat-num">100%</span>
            <span className="stat-lbl">Custom Built</span>
          </div>
          <div className="stat-card">
            <span className="stat-num">Design+Build</span>
            <span className="stat-lbl">One In-House Crew</span>
          </div>
          <div className="stat-card">
            <span className="stat-num">15+</span>
            <span className="stat-lbl">Years Experience</span>
          </div>
          <div className="stat-card">
            <span className="stat-num">5.0 ★</span>
            <span className="stat-lbl">Client Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}
