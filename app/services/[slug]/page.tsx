import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ConsultationBanner from '@/components/ConsultationBanner';
import { allServices, allServicesList } from '@/data/servicesData';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allServicesList.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = allServices[slug];
  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.title} | Sophria Construction Mississauga & Ontario`,
    description: service.lead,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = allServices[slug];

  if (!service) {
    notFound();
  }

  // Get other services for recommendation
  const otherServices = allServicesList
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <main style={{ background: '#05080d', color: '#fff', minHeight: '100vh' }}>
      <Header />

      {/* Hero Header */}
      <section
        style={{
          padding: '160px 1.5rem 70px',
          background: 'radial-gradient(circle at 50% 10%, rgba(20, 45, 95, 0.45) 0%, rgba(5, 8, 13, 0.98) 70%)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          {/* Breadcrumbs */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.85rem',
              color: '#94a3b8',
              marginBottom: '1.25rem',
            }}
          >
            <Link href="/" style={{ color: '#94a3b8', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <Link href="/services" style={{ color: '#94a3b8', textDecoration: 'none' }}>Services</Link>
            <span>/</span>
            <span style={{ color: '#83c0ff', fontWeight: 600 }}>{service.title}</span>
          </nav>

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
            {service.categoryLabel} &middot; MISSISSAUGA &amp; ONTARIO
          </span>

          <h1
            style={{
              color: '#fff',
              fontSize: 'clamp(34px, 5.5vw, 62px)',
              fontWeight: 900,
              fontFamily: "'kaleko', sans-serif",
              letterSpacing: '-0.04em',
              lineHeight: '1.08',
              marginBottom: '1.5rem',
            }}
          >
            {service.title}
          </h1>

          <p
            style={{
              color: '#cbd5e1',
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              lineHeight: '1.7',
              maxWidth: '48rem',
              marginBottom: '2.5rem',
            }}
          >
            {service.lead}
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
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
                transition: 'all 0.3s',
              }}
            >
              📞 (437) 605-4750
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Split: Overview, Narrative, Specs, Best For */}
      <section className="page-section-pad" style={{ maxWidth: '1240px', margin: '0 auto', width: '100%' }}>
        <div className="responsive-split-grid">
          
          {/* Left Column: Narrative Paragraphs */}
          <div>
            <span
              style={{
                color: '#83c0ff',
                fontSize: '0.82rem',
                fontWeight: 800,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '1rem',
              }}
            >
              SYSTEM OVERVIEW
            </span>
            <h2
              style={{
                fontSize: 'clamp(26px, 3.8vw, 40px)',
                fontWeight: 800,
                fontFamily: "'kaleko', sans-serif",
                letterSpacing: '-0.03em',
                lineHeight: '1.2',
                marginBottom: '2rem',
              }}
            >
              Master Engineering &amp; Certified Installation
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
              {service.paras.map((p, idx) => (
                <p
                  key={idx}
                  style={{
                    color: '#9ba6b8',
                    fontSize: '1.05rem',
                    lineHeight: '1.8',
                    margin: 0,
                  }}
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Ideal Applications / Best For */}
            {service.bestFor.length > 0 && (
              <div
                style={{
                  marginTop: '40px',
                  padding: '32px 28px',
                  borderRadius: '18px',
                  background: 'linear-gradient(160deg, rgba(16, 28, 58, 0.6), rgba(8, 15, 34, 0.5))',
                  border: '1px solid rgba(131, 192, 255, 0.2)',
                }}
              >
                <h3
                  style={{
                    color: '#83c0ff',
                    fontSize: '0.9rem',
                    fontWeight: 800,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    marginBottom: '18px',
                  }}
                >
                  Recommended Applications &amp; Environments
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
                  {service.bestFor.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        color: '#f1f5f9',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                      }}
                    >
                      <span style={{ color: '#60a5fa', fontSize: '1.1rem' }}>✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: High-Res Image + Technical Specs Card */}
          <div style={{ position: 'sticky', top: '100px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {/* Service Image Card */}
            <div
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid rgba(156, 194, 251, 0.22)',
                boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                style={{
                  width: '100%',
                  height: '360px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>

            {/* Technical Specs Card */}
            {service.specs.length > 0 && (
              <div
                style={{
                  background: 'linear-gradient(160deg, rgba(16, 28, 58, 0.75), rgba(8, 15, 34, 0.65))',
                  border: '1px solid rgba(156, 194, 251, 0.2)',
                  borderRadius: '20px',
                  padding: '30px 26px',
                }}
              >
                <h3
                  style={{
                    color: '#fff',
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    fontFamily: "'kaleko', sans-serif",
                    marginBottom: '16px',
                  }}
                >
                  System Specifications
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {service.specs.map((spec, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '10px 0',
                        borderBottom: idx !== service.specs.length - 1 ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
                      }}
                    >
                      <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{spec.label}</span>
                      <span style={{ color: '#f8fafc', fontWeight: 700, fontSize: '0.92rem', textAlign: 'right' }}>
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Contact Box */}
            <div
              style={{
                background: 'rgba(96, 165, 250, 0.08)',
                border: '1px solid rgba(96, 165, 250, 0.25)',
                borderRadius: '16px',
                padding: '24px',
                textAlign: 'center',
              }}
            >
              <h4 style={{ color: '#fff', fontSize: '1.05rem', fontWeight: 800, marginBottom: '8px' }}>
                Need a site measure or architectural consultation?
              </h4>
              <p style={{ color: '#9ba6b8', fontSize: '0.88rem', lineHeight: '1.5', marginBottom: '16px' }}>
                Serving Mississauga, Oakville, Toronto &amp; all Ontario regions for over 25 years.
              </p>
              <Link
                href="/estimate"
                className="bts-cta-btn"
                style={{ width: '100%', padding: '13px', fontSize: '0.9rem', display: 'block', textAlign: 'center' }}
              >
                REQUEST INSTANT ESTIMATE
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Explore Other Services */}
      <section className="page-section-pad" style={{ background: 'rgba(8, 15, 34, 0.5)', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '36px', flexWrap: 'wrap', gap: '14px' }}>
            <div>
              <span style={{ color: '#83c0ff', fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                EXPAND YOUR PROJECT
              </span>
              <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 800, fontFamily: "'kaleko', sans-serif", marginTop: '6px' }}>
                Explore Related Systems
              </h2>
            </div>
            <Link href="/services" style={{ color: '#60a5fa', fontWeight: 700, fontSize: '0.92rem', textDecoration: 'none' }}>
              View All 11 Services &rarr;
            </Link>
          </div>

          <div className="responsive-card-grid">
            {otherServices.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                style={{
                  background: 'linear-gradient(160deg, rgba(16, 28, 58, 0.65), rgba(8, 15, 34, 0.52))',
                  border: '1px solid rgba(156, 194, 251, 0.16)',
                  borderRadius: '18px',
                  padding: '24px',
                  textDecoration: 'none',
                  color: '#fff',
                  transition: 'all 0.3s',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <span style={{ color: '#83c0ff', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    {item.categoryLabel}
                  </span>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '8px 0 10px', color: '#fff' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: '#9ba6b8', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                    {item.lead.slice(0, 120)}...
                  </p>
                </div>
                <div style={{ marginTop: '20px', color: '#60a5fa', fontSize: '0.88rem', fontWeight: 700 }}>
                  Explore System &rarr;
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Canadian Home Consultation Banner */}
      <ConsultationBanner />

      <Footer />
    </main>
  );
}
