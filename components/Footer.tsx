import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="site-footer">
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link className="brand" href="/">
              <img
                src="/assets/sophria-logo.png"
                alt="SophriaConst logo"
                style={{ height: '40px', width: 'auto', objectFit: 'contain' }}
              />
              <span className="wordmark grad-silver">
                SophriaConst<small>Flooring · Kitchens · Bathrooms</small>
              </span>
            </Link>
            <p>
              Vancouver&apos;s premier luxury renovation and flooring crew. We turn tired rooms into the reason you rush home &mdash; on time, on budget, and built to be stared at.
            </p>
            <span className="script" style={{ fontSize: '1.6rem' }}>Building Better Spaces</span>
          </div>

          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/estimate">Instant Estimate</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4>Renovations</h4>
            <ul>
              <li><Link href="/services">Kitchen Remodeling</Link></li>
              <li><Link href="/services">Bathroom Renovations</Link></li>
              <li><Link href="/services">Basement Finishing</Link></li>
              <li><Link href="/services">Hardwood &amp; Luxury Flooring</Link></li>
              <li><Link href="/services">Quartz &amp; Quartzite Stonework</Link></li>
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
          <p>&copy; {new Date().getFullYear()} Sophria Construction (SophriaConst). All rights reserved.</p>
          <div className="foot-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/sitemap.xml">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
