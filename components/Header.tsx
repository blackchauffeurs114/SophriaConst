'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [flooringSubOpen, setFlooringSubOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileFlooringOpen, setMobileFlooringOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
        setFlooringSubOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Sync drawer-open class to body and hide Roomvo widget when menu is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.classList.add('drawer-open');
    } else {
      document.body.classList.remove('drawer-open');
    }

    const targets: HTMLElement[] = [];
    const popupEl = document.getElementById('assistantPopup');
    if (popupEl) targets.push(popupEl);
    Array.from(document.querySelectorAll('iframe[src*="roomvo"], iframe[title*="Roomvo"], div[id*="roomvo"], div[class*="roomvo"], launch-sequence')).forEach(el => targets.push(el as HTMLElement));

    targets.forEach((popup) => {
      if (drawerOpen) {
        popup.style.setProperty('opacity', '0', 'important');
        popup.style.setProperty('visibility', 'hidden', 'important');
        popup.style.setProperty('pointer-events', 'none', 'important');
        popup.style.setProperty('transform', 'translateY(40px) scale(0.85)', 'important');
        popup.style.setProperty('transition', 'opacity 0.35s ease, transform 0.35s ease, visibility 0.35s ease', 'important');
        popup.style.setProperty('z-index', '-9999', 'important');
      } else {
        if (!document.body.classList.contains('footer-active')) {
          popup.style.setProperty('opacity', '1', 'important');
          popup.style.setProperty('visibility', 'visible', 'important');
          popup.style.setProperty('pointer-events', 'all', 'important');
          popup.style.setProperty('transform', 'none', 'important');
          popup.style.setProperty('transition', 'opacity 0.35s ease, transform 0.35s ease, visibility 0.35s ease', 'important');
          popup.style.setProperty('z-index', '2147483646', 'important');
        }
      }
    });

    return () => {
      document.body.classList.remove('drawer-open');
    };
  }, [drawerOpen]);

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
          <Link href="/" className="re-nav-link">Home</Link>

          {/* Services Dropdown - Click to Reveal / Click to Hide */}
          <div
            ref={dropdownRef}
            className="re-nav-dropdown-wrapper"
            style={{ position: 'relative' }}
          >
            <button
              type="button"
              className="re-nav-link"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                font: 'inherit',
                color: servicesDropdownOpen ? '#83c0ff' : 'inherit',
                padding: '0 12px',
                lineHeight: 'inherit',
                outline: 'none',
              }}
              onClick={() => {
                setServicesDropdownOpen(prev => !prev);
                if (servicesDropdownOpen) {
                  setFlooringSubOpen(false);
                }
              }}
              aria-expanded={servicesDropdownOpen}
              aria-haspopup="true"
            >
              Services
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ transition: 'transform 0.2s', transform: servicesDropdownOpen ? 'rotate(180deg)' : 'none' }}>
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {servicesDropdownOpen && (
              <div
                className="re-dropdown-menu"
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '0',
                  marginTop: '12px',
                  minWidth: '280px',
                  background: 'rgba(5, 10, 22, 0.95)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(131, 192, 255, 0.22)',
                  borderRadius: '16px',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.75), 0 0 30px rgba(96, 165, 250, 0.12)',
                  padding: '12px',
                  zIndex: 100,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                }}
              >
                {/* 1. Flooring with Sub-Dropdown */}
                <div
                  style={{ position: 'relative' }}
                  onMouseEnter={() => setFlooringSubOpen(true)}
                  onMouseLeave={() => setFlooringSubOpen(false)}
                >
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      setFlooringSubOpen(prev => !prev);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      color: '#83c0ff',
                      fontWeight: 700,
                      fontSize: '0.88rem',
                      background: flooringSubOpen ? 'rgba(96, 165, 250, 0.12)' : 'transparent',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center' }}>
                      Flooring Systems
                    </span>
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                      <path d="M1 1L5 5L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  {/* Sub-dropdown for Flooring */}
                  {flooringSubOpen && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '0',
                        left: '100%',
                        marginLeft: '8px',
                        minWidth: '240px',
                        background: 'rgba(5, 10, 22, 0.97)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        border: '1px solid rgba(131, 192, 255, 0.22)',
                        borderRadius: '16px',
                        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.75)',
                        padding: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2px',
                        zIndex: 101,
                      }}
                    >
                      <div style={{ padding: '6px 12px 4px', fontSize: '0.72rem', fontWeight: 800, color: '#64748b', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                        Specialized Systems
                      </div>
                      <Link
                        href="/services/terrazzo"
                        className="re-sub-item"
                        style={{ padding: '8px 12px', borderRadius: '8px', color: '#e2e8f0', fontSize: '0.85rem', textDecoration: 'none', fontWeight: 600, display: 'block' }}
                        onClick={() => setServicesDropdownOpen(false)}
                      >
                        Terrazzo Flooring
                      </Link>
                      <Link
                        href="/services/vct"
                        className="re-sub-item"
                        style={{ padding: '8px 12px', borderRadius: '8px', color: '#e2e8f0', fontSize: '0.85rem', textDecoration: 'none', fontWeight: 600, display: 'block' }}
                        onClick={() => setServicesDropdownOpen(false)}
                      >
                        VCT Flooring
                      </Link>
                      <Link
                        href="/services/carpet-tile"
                        className="re-sub-item"
                        style={{ padding: '8px 12px', borderRadius: '8px', color: '#e2e8f0', fontSize: '0.85rem', textDecoration: 'none', fontWeight: 600, display: 'block' }}
                        onClick={() => setServicesDropdownOpen(false)}
                      >
                        Carpet Tile Flooring
                      </Link>
                      <Link
                        href="/services/rubber"
                        className="re-sub-item"
                        style={{ padding: '8px 12px', borderRadius: '8px', color: '#e2e8f0', fontSize: '0.85rem', textDecoration: 'none', fontWeight: 600, display: 'block' }}
                        onClick={() => setServicesDropdownOpen(false)}
                      >
                        Rubber Flooring
                      </Link>
                      <Link
                        href="/services/sheet-vinyl"
                        className="re-sub-item"
                        style={{ padding: '8px 12px', borderRadius: '8px', color: '#e2e8f0', fontSize: '0.85rem', textDecoration: 'none', fontWeight: 600, display: 'block' }}
                        onClick={() => setServicesDropdownOpen(false)}
                      >
                        Sheet Vinyl
                      </Link>
                      <Link
                        href="/services/epoxy"
                        className="re-sub-item"
                        style={{ padding: '8px 12px', borderRadius: '8px', color: '#e2e8f0', fontSize: '0.85rem', textDecoration: 'none', fontWeight: 600, display: 'block' }}
                        onClick={() => setServicesDropdownOpen(false)}
                      >
                        Epoxy Flooring
                      </Link>
                    </div>
                  )}
                </div>

                <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.08)', margin: '4px 6px' }}></div>

                {/* Direct Renovation Links */}
                <div style={{ padding: '6px 14px 2px', fontSize: '0.72rem', fontWeight: 800, color: '#64748b', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  Renovation Services
                </div>
                <Link
                  href="/services/kitchen-remodeling"
                  className="re-sub-item"
                  style={{ padding: '8px 14px', borderRadius: '8px', color: '#e2e8f0', fontSize: '0.85rem', textDecoration: 'none', fontWeight: 600, display: 'block' }}
                  onClick={() => setServicesDropdownOpen(false)}
                >
                  Kitchen Remodeling
                </Link>
                <Link
                  href="/services/bathroom-renovations"
                  className="re-sub-item"
                  style={{ padding: '8px 14px', borderRadius: '8px', color: '#e2e8f0', fontSize: '0.85rem', textDecoration: 'none', fontWeight: 600, display: 'block' }}
                  onClick={() => setServicesDropdownOpen(false)}
                >
                  Bathroom Renovations
                </Link>
                <Link
                  href="/services/basement-finishing"
                  className="re-sub-item"
                  style={{ padding: '8px 14px', borderRadius: '8px', color: '#e2e8f0', fontSize: '0.85rem', textDecoration: 'none', fontWeight: 600, display: 'block' }}
                  onClick={() => setServicesDropdownOpen(false)}
                >
                  Basement Finishing
                </Link>
                <Link
                  href="/services/quartz-stonework"
                  className="re-sub-item"
                  style={{ padding: '8px 14px', borderRadius: '8px', color: '#e2e8f0', fontSize: '0.85rem', textDecoration: 'none', fontWeight: 600, display: 'block' }}
                  onClick={() => setServicesDropdownOpen(false)}
                >
                  Quartz &amp; Stonework
                </Link>
                <Link
                  href="/services/full-home-renovation"
                  className="re-sub-item"
                  style={{ padding: '8px 14px', borderRadius: '8px', color: '#e2e8f0', fontSize: '0.85rem', textDecoration: 'none', fontWeight: 600, display: 'block' }}
                  onClick={() => setServicesDropdownOpen(false)}
                >
                  Full Home Renovations
                </Link>

                <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.08)', margin: '4px 6px' }}></div>
                <Link
                  href="/services"
                  style={{ padding: '8px 14px', borderRadius: '8px', color: '#60a5fa', fontSize: '0.82rem', textDecoration: 'none', fontWeight: 700, display: 'block', textAlign: 'center' }}
                  onClick={() => setServicesDropdownOpen(false)}
                >
                  View All Services &rarr;
                </Link>
              </div>
            )}
          </div>

          <Link href="/projects" className="re-nav-link">Projects</Link>
        </nav>

        {/* Center Brand: Only Client Logo */}
        <Link href="/" className="re-pill-brand" aria-label="Sophria Construction Home">
          <img
            src="/assets/sophria-logo.png"
            alt="Sophria Construction"
            className="re-pill-brand-icon"
            style={{ height: '42px', width: 'auto', objectFit: 'contain', display: 'block' }}
          />
        </Link>

        {/* Desktop Nav Right */}
        <nav className="re-nav-desktop re-nav-desktop--right" aria-label="Secondary navigation">
          <Link href="/about" className="re-nav-link">About</Link>
          <Link href="/contact" className="re-nav-link">Contact</Link>
          <Link href="/estimate" className="re-nav-btn">Get Estimate</Link>
        </nav>

        {/* Mobile Spacer */}
        <div className="re-pill-spacer" aria-hidden="true"></div>
      </div>

      {/* Mobile Drawer with Accordion Dropdowns - Fully scrollable when open, completely invisible & non-blocking when closed */}
      <nav
        className={`re-mobile-drawer ${drawerOpen ? 'open' : ''}`}
        id="mobileDrawer"
        aria-label="Mobile navigation"
        style={
          drawerOpen
            ? {
                display: 'block',
                opacity: 1,
                visibility: 'visible',
                pointerEvents: 'auto',
                zIndex: 2147483647,
                maxHeight: 'calc(100vh - 96px)',
                overflowY: 'auto',
                WebkitOverflowScrolling: 'touch',
                touchAction: 'pan-y',
              }
            : {
                display: 'none',
                opacity: 0,
                visibility: 'hidden',
                pointerEvents: 'none',
                zIndex: -9999,
              }
        }
      >
        <ul className="re-drawer-links">
          <li><Link href="/" onClick={() => setDrawerOpen(false)} className="active">Home</Link></li>
          
          {/* Mobile Services Accordion */}
          <li>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0' }}>
              <Link href="/services" onClick={() => setDrawerOpen(false)} style={{ color: '#fff', textDecoration: 'none', fontSize: '1.25rem', fontWeight: 800 }}>
                Services
              </Link>
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                style={{ background: 'none', border: 'none', color: '#83c0ff', fontSize: '1.2rem', padding: '4px 10px', cursor: 'pointer' }}
              >
                {mobileServicesOpen ? '▲' : '▼'}
              </button>
            </div>

            {mobileServicesOpen && (
              <div style={{ paddingLeft: '16px', borderLeft: '2px solid rgba(131, 192, 255, 0.25)', marginBottom: '12px' }}>
                {/* Flooring Accordion */}
                <div>
                  <div
                    onClick={() => setMobileFlooringOpen(!mobileFlooringOpen)}
                    style={{ color: '#83c0ff', fontWeight: 700, fontSize: '1rem', padding: '8px 0', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                  >
                    <span>Flooring Systems</span>
                    <span>{mobileFlooringOpen ? '–' : '+'}</span>
                  </div>
                  {mobileFlooringOpen && (
                    <div style={{ paddingLeft: '12px', display: 'flex', flexDirection: 'column', gap: '8px', paddingBottom: '8px' }}>
                      <Link href="/services/terrazzo" onClick={() => setDrawerOpen(false)} style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem' }}>Terrazzo Flooring</Link>
                      <Link href="/services/vct" onClick={() => setDrawerOpen(false)} style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem' }}>VCT Flooring</Link>
                      <Link href="/services/carpet-tile" onClick={() => setDrawerOpen(false)} style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem' }}>Carpet Tile Flooring</Link>
                      <Link href="/services/rubber" onClick={() => setDrawerOpen(false)} style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem' }}>Rubber Flooring</Link>
                      <Link href="/services/sheet-vinyl" onClick={() => setDrawerOpen(false)} style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem' }}>Sheet Vinyl</Link>
                      <Link href="/services/epoxy" onClick={() => setDrawerOpen(false)} style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem' }}>Epoxy Flooring</Link>
                    </div>
                  )}
                </div>

                {/* Direct Renovation Links */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingTop: '6px' }}>
                  <Link href="/services/kitchen-remodeling" onClick={() => setDrawerOpen(false)} style={{ color: '#e2e8f0', textDecoration: 'none', fontSize: '0.92rem' }}>Kitchen Remodeling</Link>
                  <Link href="/services/bathroom-renovations" onClick={() => setDrawerOpen(false)} style={{ color: '#e2e8f0', textDecoration: 'none', fontSize: '0.92rem' }}>Bathroom Renovations</Link>
                  <Link href="/services/basement-finishing" onClick={() => setDrawerOpen(false)} style={{ color: '#e2e8f0', textDecoration: 'none', fontSize: '0.92rem' }}>Basement Finishing</Link>
                  <Link href="/services/quartz-stonework" onClick={() => setDrawerOpen(false)} style={{ color: '#e2e8f0', textDecoration: 'none', fontSize: '0.92rem' }}>Quartz &amp; Stonework</Link>
                  <Link href="/services/full-home-renovation" onClick={() => setDrawerOpen(false)} style={{ color: '#e2e8f0', textDecoration: 'none', fontSize: '0.92rem' }}>Full Home Renovations</Link>
                </div>
              </div>
            )}
          </li>

          <li><Link href="/projects" onClick={() => setDrawerOpen(false)}>Projects</Link></li>
          <li><Link href="/about" onClick={() => setDrawerOpen(false)}>About</Link></li>
          <li><Link href="/estimate" onClick={() => setDrawerOpen(false)}>Get Estimate</Link></li>
          <li><Link href="/contact" onClick={() => setDrawerOpen(false)}>Contact</Link></li>
        </ul>
        <div className="re-drawer-cta">
          <a href="tel:+14376054750" className="re-drawer-call">+1 (437) 605-4750</a>
          <Link href="/estimate" onClick={() => setDrawerOpen(false)} className="re-drawer-quote">Get Estimate</Link>
        </div>
      </nav>
    </header>
  );
}
