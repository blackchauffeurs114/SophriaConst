import React from 'react';
import Link from 'next/link';

export default function ServicesPreview() {
  return (
    <section className="section" id="services-preview">
      <div className="container">
        <div className="sec-head reveal">
          <div className="eyebrow">What We Do</div>
          <h2 className="display">One accountable crew &mdash; from first sketch to final handover.</h2>
          <p className="sec-desc">
            Reliable, professional remodeling for kitchens, bathrooms, flooring, basements, decks &amp; beyond across Ontario. Design-build means one partner owns the vision, the budget and the timeline &mdash; no finger-pointing, no surprises, just exceptional spaces delivered with complete transparency.
          </p>
        </div>

        <div className="svc-grid">
          <Link className="svc reveal" href="/services">
            <div className="svc-num">01</div>
            <div className="svc-ico">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                <path d="M3 3h18v18H3z"></path>
                <path d="M3 9h18"></path>
                <path d="M9 21V9"></path>
                <circle cx="6" cy="6" r="1"></circle>
                <circle cx="12" cy="6" r="1"></circle>
              </svg>
            </div>
            <h3>Kitchen Remodeling</h3>
            <p>Custom cabinetry, waterfall quartz islands, chef-grade layouts, and smart storage designed around how you live and cook.</p>
            <span className="svc-link">Explore &rarr;</span>
          </Link>

          <Link className="svc reveal d1" href="/services">
            <div className="svc-num">02</div>
            <div className="svc-ico">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                <path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3a1 1 0 0 1 1-1Z"></path>
                <path d="M6 12V5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v2"></path>
                <circle cx="16" cy="8" r="1"></circle>
              </svg>
            </div>
            <h3>Bathroom Renovation</h3>
            <p>Curbless walk-in showers, freestanding soaking tubs, heated tile floors, and custom floating vanities with spa-grade finishes.</p>
            <span className="svc-link">Explore &rarr;</span>
          </Link>

          <Link className="svc reveal d2" href="/services">
            <div className="svc-num">03</div>
            <div className="svc-ico">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                <path d="M3 10.5 12 3l9 7.5"></path>
                <path d="M5 9.5V20h14V9.5"></path>
                <path d="M9 14h6"></path>
                <path d="M9 17h6"></path>
                <path d="M3 20h18"></path>
              </svg>
            </div>
            <h3>Basement Finishing</h3>
            <p>Turn unfinished lower levels into high-value living spaces — entertainment lounges, legal rental suites, home gyms, or guest quarters.</p>
            <span className="svc-link">Explore &rarr;</span>
          </Link>

          <Link className="svc reveal" href="/services">
            <div className="svc-num">04</div>
            <div className="svc-ico">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                <path d="M3 9h18"></path>
                <path d="M3 15h18"></path>
                <path d="M9 3v6"></path>
                <path d="M15 9v6"></path>
                <path d="M9 15v6"></path>
              </svg>
            </div>
            <h3>Hardwood &amp; Luxury Flooring</h3>
            <p>Engineered hardwood, luxury vinyl plank, porcelain tile, and herringbone layouts installed laser-level and guaranteed silent underfoot.</p>
            <span className="svc-link">Explore &rarr;</span>
          </Link>

          <Link className="svc reveal d1" href="/services">
            <div className="svc-num">05</div>
            <div className="svc-ico">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                <path d="M6 3h12l4 6-10 12L2 9l4-6z"></path>
                <path d="M2 9h20"></path>
                <path d="m10 3 2 6-2 12"></path>
                <path d="m14 3-2 6 2 12"></path>
              </svg>
            </div>
            <h3>Quartz &amp; Quartzite Stonework</h3>
            <p>Bookmatched quartzite slabs, full-height stone backsplashes, and seamless waterfall edges fabricated with millimeter precision.</p>
            <span className="svc-link">Explore &rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
