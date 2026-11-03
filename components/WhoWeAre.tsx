import React from 'react';

export default function WhoWeAre() {
  return (
    <section id="about" className="pad about-section re-about-section">
      <div className="container">
        <div className="sec-head center reveal">
          <div className="eyebrow center">WHO WE ARE</div>
          <h2 className="display re-section-title">Craftsmanship is in the details you never see.</h2>
          <p className="sec-desc re-section-copy">
            Sophria Private Limited is a Mississauga, Ontario-based master flooring and renovation firm specializing in commercial flooring systems and bespoke residential transformations across Ontario for over 25 years. We were founded on a simple belief: that every space should be crafted with the same care, transparency and precision with which it will be lived in.
          </p>
        </div>

        <div className="about-story-center reveal mt-2">
          <p className="re-story-lead">
            From specialized terrazzo, VCT, epoxy and resilient flooring to luxury kitchen remodels and spa bathrooms, every project is guided by unwavering attention to detail, proactive communication, and an ironclad standard of quality &mdash; delivered on time and on budget.
          </p>
        </div>

        <div className="stats reveal d2">
          <div className="stat">
            <b>25+ Yrs</b>
            <span>Ontario Legacy</span>
          </div>
          <div className="stat">
            <b>Design+Build</b>
            <span>One In-House Crew</span>
          </div>
          <div className="stat">
            <b>Fixed Quote</b>
            <span>Zero Hidden Fees</span>
          </div>
          <div className="stat">
            <b>Mississauga</b>
            <span>Ontario &amp; Beyond</span>
          </div>
        </div>
      </div>
    </section>
  );
}
