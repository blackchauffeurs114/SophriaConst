'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header className="re-site-header" id="site-header">
      <div className="re-pill-container">
        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className={`re-menu-btn ${drawerOpen ? 'open' : ''}`}
          id="hamburger"
          aria-label="Toggle navigation"
          aria-expanded={drawerOpen}
          aria-controls="mobileDrawer"
          onClick={() => setDrawerOpen(!drawerOpen)}
        >
          <span className="re-menu-line"></span>
          <span className="re-menu-line"></span>
        </button>

        {/* Desktop Nav Left */}
        <nav className="re-nav-desktop re-nav-desktop--left" aria-label="Primary navigation">
          <Link href="/" className="re-nav-link active">Home</Link>
          <Link href="/services" className="re-nav-link">Services</Link>
          <Link href="/projects" className="re-nav-link">Projects</Link>
        </nav>

        {/* Brand Logo & Name */}
        <Link href="/" className="re-pill-brand" aria-label="Sophria Construction Home">
          <img
            src="/assets/sophria-logo.png"
            alt="Sophria Construction Logo"
            className="re-pill-brand-icon"
            style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
          />
          <span className="re-pill-brand-name">SophriaConst</span>
        </Link>

        {/* Desktop Nav Right */}
        <nav className="re-nav-desktop re-nav-desktop--right" aria-label="Secondary navigation">
          <Link href="/about" className="re-nav-link">About</Link>
          <Link href="/contact" className="re-nav-link">Contact</Link>
          <Link href="/estimate" className="re-nav-btn">Free Quote</Link>
        </nav>

        {/* Mobile Spacer */}
        <div className="re-pill-spacer" aria-hidden="true"></div>
      </div>

      {/* Mobile Drawer */}
      <nav
        className={`re-mobile-drawer ${drawerOpen ? 'open' : ''}`}
        id="mobileDrawer"
        aria-label="Mobile navigation"
        style={drawerOpen ? { display: 'block', opacity: 1, pointerEvents: 'auto' } : undefined}
      >
        <ul className="re-drawer-links">
          <li><Link href="/" onClick={() => setDrawerOpen(false)} className="active">Home</Link></li>
          <li><Link href="/services" onClick={() => setDrawerOpen(false)}>Services</Link></li>
          <li><Link href="/projects" onClick={() => setDrawerOpen(false)}>Projects</Link></li>
          <li><Link href="/about" onClick={() => setDrawerOpen(false)}>About</Link></li>
          <li><Link href="/estimate" onClick={() => setDrawerOpen(false)}>Instant Estimate</Link></li>
          <li><Link href="/contact" onClick={() => setDrawerOpen(false)}>Contact</Link></li>
        </ul>
        <div className="re-drawer-cta">
          <a href="tel:6047394477" className="re-drawer-call">📞 (604) 739-4477</a>
          <Link href="/estimate" onClick={() => setDrawerOpen(false)} className="re-drawer-quote">Get a Free Quote</Link>
        </div>
      </nav>
    </header>
  );
}
