import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: '#04070c', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '4rem 1.5rem 2.5rem' }}>
      <div className="container" style={{ maxWidth: '1180px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '1.2rem' }}>
              <img src="/assets/cfr-mark.svg" alt="SophriaConst" style={{ width: '32px', height: 'auto' }} />
              <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>SophriaConst</span>
            </div>
            <p style={{ color: '#8896aa', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Ontario &amp; Vancouver design-build contractor specializing in bespoke residential renovations, luxury flooring, and architectural additions.
            </p>
          </div>
          <div>
            <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, marginBottom: '1.2rem' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              <li><Link href="/" style={{ color: '#9ba6b8', textDecoration: 'none' }}>Home</Link></li>
              <li><Link href="/services" style={{ color: '#9ba6b8', textDecoration: 'none' }}>Services</Link></li>
              <li><Link href="/projects" style={{ color: '#9ba6b8', textDecoration: 'none' }}>Projects</Link></li>
              <li><Link href="/about" style={{ color: '#9ba6b8', textDecoration: 'none' }}>About</Link></li>
              <li><Link href="/estimate" style={{ color: '#9ba6b8', textDecoration: 'none' }}>Instant Quote Calculator</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, marginBottom: '1.2rem' }}>Contact Info</h4>
            <p style={{ color: '#9ba6b8', fontSize: '0.9rem', lineHeight: '1.7', margin: 0 }}>
              📞 (604) 739-4477<br />
              ✉ info@sophriaconst.com<br />
              📍 Toronto, Ontario &amp; Vancouver, BC
            </p>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.8rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', color: '#68778d', fontSize: '0.85rem' }}>
          <span>&copy; {new Date().getFullYear()} Sophria Construction. All rights reserved.</span>
          <span>Architectural Renovation &amp; Master Flooring</span>
        </div>
      </div>
    </footer>
  );
}
