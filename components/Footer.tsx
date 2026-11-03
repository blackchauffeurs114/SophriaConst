import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      id="site-footer"
      style={{
        background: '#040711',
        color: '#fff',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '80px 1.5rem 30px',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        {/* Main 4-Column Grid (Atena Construction Style) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '48px',
            alignItems: 'start',
            marginBottom: '60px',
          }}
        >
          {/* Column 1: Brand & Glossy RE-Media Container */}
          <div>
            <Link
              href="/"
              aria-label="Sophria Private Limited Home"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01))',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(131, 192, 255, 0.22)',
                borderRadius: '18px',
                padding: '14px 22px',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.12)',
                marginBottom: '20px',
                textDecoration: 'none',
              }}
            >
              <img
                src="/assets/sophria-logo.png"
                alt="Sophria Private Limited"
                style={{
                  height: '46px',
                  width: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </Link>

            <p
              style={{
                color: '#94a3b8',
                fontSize: '0.9rem',
                lineHeight: '1.65',
                maxWidth: '320px',
                margin: 0,
              }}
            >
              Mississauga &amp; Ontario design-build firm crafting bespoke luxury homes, commercial flooring systems, and turnkey residential transformations with integrity for over 25 years.
            </p>
          </div>

          {/* Column 2: BUILD WITH US (Services) */}
          <div>
            <div
              style={{
                color: '#60a5fa',
                fontSize: '0.78rem',
                fontWeight: 800,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}
            >
              BUILD WITH US
            </div>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <li>
                <Link href="/services/terrazzo" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.92rem', transition: 'color 0.2s' }}>
                  Terrazzo Flooring
                </Link>
              </li>
              <li>
                <Link href="/services/vct" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.92rem', transition: 'color 0.2s' }}>
                  VCT Flooring
                </Link>
              </li>
              <li>
                <Link href="/services/carpet-tile" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.92rem', transition: 'color 0.2s' }}>
                  Carpet Tile Systems
                </Link>
              </li>
              <li>
                <Link href="/services/rubber" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.92rem', transition: 'color 0.2s' }}>
                  Rubber Flooring
                </Link>
              </li>
              <li>
                <Link href="/services/sheet-vinyl" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.92rem', transition: 'color 0.2s' }}>
                  Sheet Vinyl &amp; Cleanrooms
                </Link>
              </li>
              <li>
                <Link href="/services/epoxy" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.92rem', transition: 'color 0.2s' }}>
                  Epoxy &amp; Resin Systems
                </Link>
              </li>
              <li>
                <Link href="/services/kitchen-remodeling" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.92rem', transition: 'color 0.2s' }}>
                  Kitchen &amp; Bath Remodels
                </Link>
              </li>
              <li>
                <Link href="/services/basement-finishing" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.92rem', transition: 'color 0.2s' }}>
                  Basement Finishing &amp; Suites
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: COMPANY */}
          <div>
            <div
              style={{
                color: '#60a5fa',
                fontSize: '0.78rem',
                fontWeight: 800,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}
            >
              COMPANY
            </div>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <li>
                <Link href="/" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.92rem', transition: 'color 0.2s' }}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.92rem', transition: 'color 0.2s' }}>
                  About Sophria
                </Link>
              </li>
              <li>
                <Link href="/services" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.92rem', transition: 'color 0.2s' }}>
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/projects" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.92rem', transition: 'color 0.2s' }}>
                  Project Portfolio
                </Link>
              </li>
              <li>
                <Link href="/estimate" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.92rem', transition: 'color 0.2s' }}>
                  Get Estimate
                </Link>
              </li>
              <li>
                <Link href="/contact" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.92rem', transition: 'color 0.2s' }}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: GET IN TOUCH */}
          <div>
            <div
              style={{
                color: '#60a5fa',
                fontSize: '0.78rem',
                fontWeight: 800,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}
            >
              GET IN TOUCH
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <a
                href="tel:+14376054750"
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  transition: 'color 0.2s',
                }}
              >
                +1 (437) 605-4750
              </a>

              <a
                href="mailto:estimating@sophria.ca"
                style={{
                  color: '#94a3b8',
                  textDecoration: 'none',
                  fontSize: '0.92rem',
                  transition: 'color 0.2s',
                }}
              >
                estimating@sophria.ca
              </a>

              <div style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.5' }}>
                226-6465 Millcreek Dr., Unit #5<br />
                Mississauga, ON L5N 5R3
              </div>

              <div style={{ color: '#64748b', fontSize: '0.85rem' }}>
                Mon&ndash;Fri: 8:00 AM &ndash; 4:00 PM
              </div>

              {/* Social Icons Row (Atena Construction Style) */}
              <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                {/* Instagram */}
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/14376054750"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar (Atena Construction Style) */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '0.85rem',
            color: '#64748b',
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} Sophria Private Limited. All rights reserved.
          </div>
          <div style={{ color: '#475569', fontSize: '0.82rem' }}>
            Design &middot; Build &middot; Remodel &mdash; Mississauga, Ontario, Canada
          </div>
        </div>
      </div>
    </footer>
  );
}
