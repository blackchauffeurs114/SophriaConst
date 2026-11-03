'use client';

import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero re-hero">
      <div className="hero__media">
        <video className="hero__video hero__video--desktop" autoPlay muted loop playsInline preload="auto">
          <source src="/assets/hero-bg-desktop.mp4" type="video/mp4" />
        </video>
        <video className="hero__video hero__video--mobile" autoPlay muted loop playsInline preload="auto">
          <source src="/assets/hero-bg-mobile.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero__shade"></div>
      <div className="hero__grid"></div>
      <div className="hero__orb hero__orb--one"></div>
      <div className="hero__orb hero__orb--two"></div>
      <div className="hero__fade"></div>
      <div className="container hero__content">
        <div className="hero__stack re-hero__stack">
          <h1 className="hero__title re-hero__title">
            <span className="re-hero__title-white">More than</span>
            <span className="re-hero__title-blue">Flooring</span>
          </h1>
          <p className="hero__copy re-hero__copy">
            Flooring. Kitchens. Bathrooms.<br />Expertly Renovated.
          </p>
          <div className="button-row hero__actions re-hero__actions">
            <a href="tel:+14376054750" className="re-hero-btn re-hero-btn--accent">Call Now</a>
            <Link href="/estimate" className="re-hero-btn re-hero-btn--outline">Get Quote</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
