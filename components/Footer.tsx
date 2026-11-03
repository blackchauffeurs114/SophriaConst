import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="site-footer">
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link className="brand" href="/" aria-label="Sophria Construction Home">
              <img
                src="/assets/sophria-logo.png"
                alt="Sophria Private Limited"
                style={{ height: '56px', width: 'auto', objectFit: 'contain', display: 'block', marginBottom: '16px' }}
              />
            </Link>
            <p style={{ color: '#9ba6b8', fontSize: '0.92rem', lineHeight: '1.65', maxWidth: '320px' }}>
              Sophria Private Limited &mdash; sourcing, installing and repairing terrazzo, tile, stone, resilient flooring and bespoke residential renovations across Mississauga and Ontario for over 25 years.
            </p>
          </div>

          <div>
            <h4>Systems &amp; Flooring</h4>
            <ul>
              <li><Link href="/services/terrazzo">Terrazzo Flooring</Link></li>
              <li><Link href="/services/vct">VCT Flooring</Link></li>
              <li><Link href="/services/carpet-tile">Carpet Tile Flooring</Link></li>
              <li><Link href="/services/rubber">Rubber Flooring</Link></li>
              <li><Link href="/services/sheet-vinyl">Sheet Vinyl</Link></li>
              <li><Link href="/services/epoxy">Epoxy Flooring</Link></li>
            </ul>
          </div>

          <div>
            <h4>Renovations</h4>
            <ul>
              <li><Link href="/services/kitchen-remodeling">Kitchen Remodeling</Link></li>
              <li><Link href="/services/bathroom-renovations">Bathroom Renovations</Link></li>
              <li><Link href="/services/basement-finishing">Basement Finishing</Link></li>
              <li><Link href="/services/quartz-stonework">Quartz &amp; Stonework</Link></li>
              <li><Link href="/services/full-home-renovation">Full Home Renovations</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contact &amp; Hours</h4>
            <div className="foot-contact">
              <p>📍 226-6465 Millcreek Dr., Mississauga, Ontario, CA, L5N 5R3</p>
              <p><a href="tel:+14376054750">📞 +1 (437) 605-4750</a></p>
              <p><a href="mailto:estimating@sophria.ca">✉️ estimating@sophria.ca</a></p>
              <p className="foot-hours">🕒 Monday &ndash; Friday : 8am &ndash; 4pm</p>
            </div>
          </div>
        </div>

        <div className="foot-bottom">
          <p>&copy; {new Date().getFullYear()} Sophria Private Limited. All rights reserved. Flooring &amp; Renovation solutions &mdash; Mississauga, Ontario, Canada.</p>
          <div className="foot-links" style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <Link href="/services">Services</Link>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>&middot;</span>
            <Link href="/projects">Projects</Link>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>&middot;</span>
            <Link href="/about">About</Link>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>&middot;</span>
            <Link href="/estimate">Free Quote</Link>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>&middot;</span>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
