import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ConsultationBanner from '@/components/ConsultationBanner';
import { flooringList, renovationList } from '@/data/servicesData';

export const metadata = {
  title: 'Commercial Flooring Systems & Luxury Renovations | Sophria Private Limited',
  description: 'Sourcing, installing and repairing terrazzo, tile, stone, resilient flooring and luxury residential renovations across Mississauga and Ontario for over 25 years.',
};

export default function ServicesPage() {
  return (
    <main style={{ background: '#05080d', color: '#fff', minHeight: '100vh' }}>
      <Header />

      {/* Page Hero */}
      <section
        style={{
          padding: '160px 1.5rem 80px',
          background: 'radial-gradient(circle at 50% 10%, rgba(20, 45, 95, 0.45) 0%, rgba(5, 8, 13, 0.98) 70%)',
          textAlign: 'center',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <span
            style={{
              color: '#83c0ff',
              fontSize: '0.82rem',
              fontWeight: 800,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '1rem',
            }}
          >
            OUR EXPERTISE &middot; MISSISSAUGA &amp; ONTARIO
          </span>

          <h1
            style={{
              color: '#fff',
              fontSize: 'clamp(36px, 6vw, 64px)',
              fontWeight: 900,
              fontFamily: "'kaleko', sans-serif",
              letterSpacing: '-0.04em',
              lineHeight: '1.05',
              marginBottom: '1.5rem',
            }}
          >
            Master Craftsmanship <br />
            <span style={{ background: 'linear-gradient(135deg, #60a5fa 0%, #38bdf8 60%, #93c5fd 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Across Every Square Foot.
            </span>
          </h1>

          <p
            style={{
              color: '#9ba6b8',
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              lineHeight: '1.7',
              maxWidth: '46rem',
              margin: '0 auto 2.5rem',
            }}
          >
            Sophria Private Limited &mdash; sourcing, installing and repairing specialized commercial flooring systems and turnkey residential renovations across Ontario for over 25 years.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/estimate" className="bts-cta-btn" style={{ padding: '15px 36px', fontSize: '0.95rem' }}>
              GET A FREE ESTIMATE
            </Link>
            <a
              href="tel:+14376054750"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '15px 32px',
                borderRadius: '50px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.16)',
                color: '#fff',
                fontWeight: 700,
                fontSize: '0.95rem',
                textDecoration: 'none',
              }}
            >
              CALL (437) 605-4750
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 1: SPECIALIZED COMMERCIAL FLOORING SYSTEMS */}
      <section className="page-section-pad" style={{ maxWidth: '1240px', margin: '0 auto', width: '100%' }}>
        <div style={{ marginBottom: '50px' }}>
          <span
            style={{
              color: '#83c0ff',
              fontSize: '0.82rem',
              fontWeight: 800,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '0.75rem',
            }}
          >
            CORE SPECIALTY &middot; 25+ YEARS
          </span>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 800,
              fontFamily: "'kaleko', sans-serif",
              letterSpacing: '-0.03em',
              margin: '0 0 1rem',
            }}
          >
            Specialized Commercial &amp; Resilient Flooring Systems
          </h2>
          <p style={{ color: '#9ba6b8', fontSize: '1.05rem', lineHeight: '1.65', maxWidth: '44rem', margin: 0 }}>
            Precision subfloor preparation, professional supply, certified installation, and diamond grinding repairs across Ontario.
          </p>
        </div>

        <div className="responsive-card-grid">
          {flooringList.map((svc, idx) => (
            <div
              key={svc.slug}
              style={{
                background: 'linear-gradient(160deg, rgba(16, 28, 58, 0.75), rgba(8, 15, 34, 0.65))',
                border: '1px solid rgba(156, 194, 251, 0.2)',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 20px 45px rgba(0,0,0,0.5)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  <img
                    src={svc.image}
                    alt={svc.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'rgba(5, 10, 22, 0.85)',
                      backdropFilter: 'blur(8px)',
                      padding: '4px 12px',
                      borderRadius: '999px',
                      border: '1px solid rgba(131, 192, 255, 0.3)',
                      color: '#83c0ff',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    0{idx + 1} &middot; Flooring System
                  </div>
                </div>

                <div style={{ padding: '28px 24px 20px' }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '10px', color: '#fff' }}>
                    {svc.title}
                  </h3>
                  <p style={{ color: '#cbd5e1', fontSize: '0.94rem', lineHeight: '1.6', marginBottom: '18px' }}>
                    {svc.lead}
                  </p>

                  {/* Specs Pill List */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '18px', background: 'rgba(5, 10, 22, 0.45)', padding: '12px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                    {svc.specs.slice(0, 4).map((spec, sIdx) => (
                      <div key={sIdx} style={{ fontSize: '0.8rem' }}>
                        <span style={{ color: '#64748b', display: 'block' }}>{spec.label}</span>
                        <span style={{ color: '#e2e8f0', fontWeight: 700 }}>{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ padding: '0 24px 24px' }}>
                <Link
                  href={`/services/${svc.slug}`}
                  className="bts-cta-btn"
                  style={{ width: '100%', padding: '12px', fontSize: '0.88rem', display: 'block', textAlign: 'center' }}
                >
                  VIEW SYSTEM DETAILS &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: ARCHITECTURAL RENOVATION SERVICES */}
      <section style={{ padding: '80px 1.5rem 100px', background: 'rgba(8, 15, 34, 0.55)', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ marginBottom: '50px' }}>
            <span
              style={{
                color: '#83c0ff',
                fontSize: '0.82rem',
                fontWeight: 800,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '0.75rem',
              }}
            >
              DESIGN &middot; BUILD &middot; TRANSFORM
            </span>
            <h2
              style={{
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 800,
                fontFamily: "'kaleko', sans-serif",
                letterSpacing: '-0.03em',
                margin: '0 0 1rem',
              }}
            >
              Full-Scope Residential Renovations
            </h2>
            <p style={{ color: '#9ba6b8', fontSize: '1.05rem', lineHeight: '1.65', maxWidth: '44rem', margin: 0 }}>
              Turnkey architectural project management from permit acquisition and structural engineering to luxury bespoke finishes.
            </p>
          </div>

          <div className="responsive-card-grid">
            {renovationList.map((svc, idx) => (
              <div
                key={svc.slug}
                style={{
                  background: 'linear-gradient(160deg, rgba(16, 28, 58, 0.75), rgba(8, 15, 34, 0.65))',
                  border: '1px solid rgba(156, 194, 251, 0.2)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 45px rgba(0,0,0,0.5)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                    <img
                      src={svc.image}
                      alt={svc.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        background: 'rgba(5, 10, 22, 0.85)',
                        backdropFilter: 'blur(8px)',
                        padding: '4px 12px',
                        borderRadius: '999px',
                        border: '1px solid rgba(131, 192, 255, 0.3)',
                        color: '#83c0ff',
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Renovation &middot; 0{idx + 1}
                    </div>
                  </div>

                  <div style={{ padding: '28px 24px 20px' }}>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '10px', color: '#fff' }}>
                      {svc.title}
                    </h3>
                    <p style={{ color: '#cbd5e1', fontSize: '0.94rem', lineHeight: '1.6', marginBottom: '18px' }}>
                      {svc.lead}
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '18px', background: 'rgba(5, 10, 22, 0.45)', padding: '12px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                      {svc.specs.slice(0, 4).map((spec, sIdx) => (
                        <div key={sIdx} style={{ fontSize: '0.8rem' }}>
                          <span style={{ color: '#64748b', display: 'block' }}>{spec.label}</span>
                          <span style={{ color: '#e2e8f0', fontWeight: 700 }}>{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{ padding: '0 24px 24px' }}>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="bts-cta-btn"
                    style={{ width: '100%', padding: '12px', fontSize: '0.88rem', display: 'block', textAlign: 'center' }}
                  >
                    EXPLORE SERVICE &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <ConsultationBanner />

      <Footer />
    </main>
  );
}
