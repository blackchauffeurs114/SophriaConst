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
                alt="Sophria Construction"
                style={{ height: '48px', width: 'auto', objectFit: 'contain', display: 'block', marginBottom: '18px' }}
              />
            </Link>
            <p>
              Vancouver&apos;s premier luxury renovation and master flooring crew. We turn tired spaces into architectural living environments &mdash; on time, on budget, and built to the highest standard.
            </p>
          </div>

          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/estimate">Instant Estimate</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4>Renovations</h4>
            <ul>
              <li><Link href="/services#service-kitchen">Kitchen Remodeling</Link></li>
              <li><Link href="/services#service-bathroom">Bathroom Renovations</Link></li>
              <li><Link href="/services#service-basement">Basement Finishing</Link></li>
              <li><Link href="/services#service-flooring">Hardwood &amp; Luxury Flooring</Link></li>
              <li><Link href="/services#service-stone">Quartz &amp; Quartzite Stonework</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contact &amp; Hours</h4>
            <div className="foot-contact">
              <p>Unit 260 &ndash; 1916 West Broadway, Vancouver, BC</p>
              <p><a href="tel:6047394477">📞 (604) 739-4477</a></p>
              <p><a href="mailto:info@sophriaconstruction.ca">✉️ info@sophriaconstruction.ca</a></p>
              <p className="foot-hours">Mon &ndash; Fri: 8:00am &ndash; 6:00pm<br />Sat: 9:00am &ndash; 4:00pm</p>
            </div>
          </div>
        </div>

        <div className="foot-bottom">
          <p>&copy; {new Date().getFullYear()} Sophria Construction. All rights reserved.</p>
          <div className="foot-links">
            <Link href="/services">Services</Link>
            <Link href="/estimate">Free Quote</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
