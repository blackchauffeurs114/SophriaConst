import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ConsultationBanner from '@/components/ConsultationBanner';

export const metadata = {
  title: 'About Sophria Private Limited | Master Flooring & Renovation Leaders Mississauga & Ontario',
  description: 'Meet Sophria Private Limited — Sourcing, installing and repairing terrazzo, tile, stone, resilient flooring and bespoke residential renovations across Mississauga and Ontario for over 25 years.',
};

const stats = [
  { value: '25+ Yrs', label: 'Ontario Track Record' },
  { value: '2,500+', label: 'Delivered Projects' },
  { value: '100%', label: 'Fixed-Price Guarantee' },
  { value: '1-Yr', label: 'Comprehensive Warranty' },
];

const pillars = [
  {
    num: '01',
    title: 'Fixed-Price Certainty',
    desc: 'No sudden surprise invoices or mid-build change order traps. The comprehensive proposal you approve is the price you pay — down to the exact dollar.'
  },
  {
    num: '02',
    title: 'Clean & Dust-Free Sites',
    desc: 'We treat your property like a sanctuary. Industrial HEPA negative-air scrubbers, sealed zip-wall containment barriers, and daily floor-runner protection.'
  },
  {
    num: '03',
    title: 'Single Point of Contact',
    desc: 'You never have to chase multiple subcontractors. Your dedicated Ontario project manager provides clear daily updates and direct phone access.'
  },
  {
    num: '04',
    title: 'Master Artisans & Certification',
    desc: 'Certified terrazzo and stone specialists, licensed Red Seal electricians, master cabinetmakers, and engineered wood installers with decades of combined skill.'
  }
];

export default function AboutPage() {
  return (
    <main style={{ background: '#05080d', color: '#fff', minHeight: '100vh' }}>
      <Header />

      {/* Page Hero */}
      <section style={{ padding: '160px 1.5rem 80px', background: 'radial-gradient(circle at 50% 10%, rgba(20, 45, 95, 0.45) 0%, rgba(5, 8, 13, 0.98) 70%)', textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <span style={{ color: '#83c0ff', fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase', display: 'block', marginBottom: '1.25rem' }}>
            WHO WE ARE &middot; SOPHRIA PRIVATE LIMITED
          </span>
          <h1 style={{ color: '#fff', fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 900, fontFamily: "'kaleko', sans-serif", letterSpacing: '-0.04em', lineHeight: '1.05', marginBottom: '1.5rem' }}>
            A Mississauga, Ontario leader &mdash; <br />
            <span style={{ background: 'linear-gradient(135deg, #60a5fa 0%, #38bdf8 60%, #93c5fd 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              the crew that actually calls back.
            </span>
          </h1>
          <p style={{ color: '#9ba6b8', fontSize: 'clamp(1.05rem, 2vw, 1.25rem)', lineHeight: '1.7', maxWidth: '44rem', margin: '0 auto 2.5rem' }}>
            Licensed, fully insured, and built on fixed-price honesty. Sourcing, installing and repairing terrazzo, tile, stone, resilient flooring and luxury residential renovations across Mississauga and Ontario for over 25 years.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/estimate" className="bts-cta-btn" style={{ padding: '15px 36px', fontSize: '0.95rem' }}>
              GET A FREE ESTIMATE
            </Link>
            <Link href="/projects" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '15px 32px', borderRadius: '50px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.14)', color: '#fff', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', transition: 'all 0.3s' }}>
              VIEW OUR PORTFOLIO
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(9, 17, 36, 0.6)', padding: '40px 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', textAlign: 'center' }}>
          {stats.map((s, i) => (
            <div key={i}>
              <div style={{ fontSize: 'clamp(36px, 4.5vw, 52px)', fontWeight: 900, fontFamily: "'kaleko', sans-serif", color: '#60a5fa', letterSpacing: '-0.03em', lineHeight: 1 }}>
                {s.value}
              </div>
              <div style={{ color: '#9ba6b8', fontSize: '0.92rem', fontWeight: 600, marginTop: '8px', letterSpacing: '0.04em' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Origin Story Split Section */}
      <section style={{ padding: '100px 1.5rem', maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'center' }}>
          <div>
            <span style={{ color: '#83c0ff', fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
              OUR STORY
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, fontFamily: "'kaleko', sans-serif", letterSpacing: '-0.03em', lineHeight: '1.15', marginBottom: '1.5rem' }}>
              Built in Mississauga, Ontario &mdash; <span style={{ color: '#60a5fa' }}>built different.</span>
            </h2>
            <p style={{ color: '#9ba6b8', fontSize: '1.05rem', lineHeight: '1.75', marginBottom: '1.25rem' }}>
              Sophria Private Limited was founded over 25 years ago in Ontario on a commitment to uncompromising trade mastery. Sourcing, installing and repairing terrazzo, tile, stone, and resilient flooring, we built our reputation on doing the difficult jobs right the first time.
            </p>
            <p style={{ color: '#9ba6b8', fontSize: '1.05rem', lineHeight: '1.75', marginBottom: '1.75rem' }}>
              As our clients requested the same standard of craftsmanship for their whole spaces, we expanded into full residential renovations — luxury kitchens, spa bathrooms, basement finishing, and custom stonework. We execute every project with architectural precision and guaranteed fixed pricing.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(96, 165, 250, 0.1)', border: '1px solid rgba(96, 165, 250, 0.25)', padding: '10px 18px', borderRadius: '8px', color: '#93c5fd', fontSize: '0.88rem', fontWeight: 700 }}>
                ✓ $5,000,000 Commercial Liability Insured
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(96, 165, 250, 0.1)', border: '1px solid rgba(96, 165, 250, 0.25)', padding: '10px 18px', borderRadius: '8px', color: '#93c5fd', fontSize: '0.88rem', fontWeight: 700 }}>
                ✓ WSIB Ontario In Good Standing
              </div>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(131, 192, 255, 0.2)', boxShadow: '0 25px 60px -15px rgba(0,0,0,0.7)' }}>
              <img
                src="/assets/about-team.jpg"
                alt="Sophria master builders on site"
                style={{ width: '100%', height: '480px', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', background: 'linear-gradient(135deg, #101c3a, #080f22)', border: '1px solid rgba(131, 192, 255, 0.3)', borderRadius: '16px', padding: '20px 26px', boxShadow: '0 15px 35px rgba(0,0,0,0.6)' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#60a5fa', fontFamily: "'kaleko', sans-serif" }}>25+ Years</div>
              <div style={{ fontSize: '0.82rem', color: '#cbd5e1', fontWeight: 600 }}>Serving Mississauga &amp; Ontario</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Excellence */}
      <section style={{ padding: '80px 1.5rem 120px', background: 'rgba(8, 15, 34, 0.5)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ color: '#83c0ff', fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem' }}>
              HOW WE OPERATE
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, fontFamily: "'kaleko', sans-serif", letterSpacing: '-0.03em' }}>
              The Sophria Standard of Care
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '28px' }}>
            {pillars.map((p, idx) => (
              <div
                key={idx}
                style={{
                  background: 'linear-gradient(160deg, rgba(16, 28, 58, 0.65), rgba(8, 15, 34, 0.52))',
                  border: '1px solid rgba(156, 194, 251, 0.16)',
                  borderRadius: '20px',
                  padding: '36px 28px',
                  position: 'relative'
                }}
              >
                <div style={{ fontSize: '0.85rem', fontWeight: 900, color: '#60a5fa', letterSpacing: '0.1em', marginBottom: '1rem' }}>
                  {p.num}
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff', marginBottom: '0.85rem' }}>
                  {p.title}
                </h3>
                <p style={{ color: '#9ba6b8', fontSize: '0.98rem', lineHeight: '1.65', margin: 0 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Banner with Canadian Luxury Home */}
      <ConsultationBanner />

      <Footer />
    </main>
  );
}
