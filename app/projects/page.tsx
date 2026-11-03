'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import ConsultationBanner from '@/components/ConsultationBanner';

const projectsList = [
  {
    title: 'Architectural Terrazzo Concourse',
    category: 'Terrazzo Flooring',
    type: 'flooring',
    location: 'Mississauga, ON',
    img: '/assets/svc-terrazzo-800-C62jRl7J.webp',
    desc: 'Seamless diamond-ground and polished marble aggregate terrazzo poured in place for a high-traffic civic concourse.',
    link: '/services/terrazzo',
  },
  {
    title: 'Executive Chef Kitchen & Waterfall Island',
    category: 'Kitchen Remodeling',
    type: 'renovation',
    location: 'Oakville, ON',
    img: '/assets/service-kitchen.jpg',
    desc: 'Custom architectural millwork, bookmatched quartz waterfall island, concealed pantry, and integrated smart appliances.',
    link: '/services/kitchen-remodeling',
  },
  {
    title: 'Curbless Spa Ensuite & Italian Porcelain Bath',
    category: 'Bathroom Renovation',
    type: 'renovation',
    location: 'Mississauga, ON',
    img: '/assets/service-bathroom.jpg',
    desc: 'Schluter-certified waterproof wet room with linear trench drain, heated porcelain floors, and freestanding soaking tub.',
    link: '/services/bathroom-renovations',
  },
  {
    title: 'Seamless Industrial Epoxy Floor System',
    category: 'Epoxy Flooring',
    type: 'flooring',
    location: 'Brampton, ON',
    img: '/assets/svc-epoxy-600-BCPc_BC8.webp',
    desc: 'Heavy-duty chemical-resistant seamless epoxy resin with shot-blasted concrete substrate prep and high-traction finish.',
    link: '/services/epoxy',
  },
  {
    title: 'Corporate Acoustic Carpet Tile Installation',
    category: 'Carpet Tile Flooring',
    type: 'flooring',
    location: 'Downtown Toronto, ON',
    img: '/assets/svc-carpet-tile-600-BP0COmyG.webp',
    desc: 'Modular acoustic carpet tile layout with custom directional wayfinding for a modern corporate office headquarters.',
    link: '/services/carpet-tile',
  },
  {
    title: 'Legal Secondary Suite & Finished Basement',
    category: 'Basement Finishing',
    type: 'renovation',
    location: 'Milton, ON',
    img: '/assets/img/projects/garden-hero.jpg',
    desc: 'Turnkey OBC-compliant lower level conversion featuring soundproof joists, subfloor thermal break, and guest suite.',
    link: '/services/basement-finishing',
  },
  {
    title: 'Institutional Modular VCT Corridor',
    category: 'VCT Flooring',
    type: 'flooring',
    location: 'Mississauga, ON',
    img: '/assets/svc-vct-600-Dg52_NNC.webp',
    desc: 'Durable vinyl composition tile laid with precision strip-and-wax system for an institutional healthcare facility.',
    link: '/services/vct',
  },
  {
    title: 'High-Impact Sports & Fitness Rubber Flooring',
    category: 'Rubber Flooring',
    type: 'flooring',
    location: 'Burlington, ON',
    img: '/assets/svc-rubber-600-B3bguWQ3.webp',
    desc: 'Dense shock-absorbing vulcanized rubber flooring offering superior traction wet or dry in a luxury athletic club.',
    link: '/services/rubber',
  },
  {
    title: 'Sterile Clinical Sheet Vinyl with Coved Base',
    category: 'Sheet Vinyl Flooring',
    type: 'flooring',
    location: 'Oakville, ON',
    img: '/assets/svc-sheet-vinyl-600-vTzrFdvU.webp',
    desc: 'Heat-welded wide-roll vinyl continuous floor-to-wall barrier designed for sterile healthcare and cleanroom specifications.',
    link: '/services/sheet-vinyl',
  },
  {
    title: 'Custom Detached Home Renovation & Addition',
    category: 'Full Home Renovation',
    type: 'renovation',
    location: 'Mississauga, ON',
    img: '/assets/img/projects/canada-detached-luxury-home.jpg',
    desc: 'Full-scale architectural interior remodel, open-concept load-bearing wall removal, and luxury exterior transformation.',
    link: '/services/full-home-renovation',
  },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'flooring' | 'renovation'>('all');

  const filteredProjects = activeFilter === 'all'
    ? projectsList
    : projectsList.filter(p => p.type === activeFilter);

  return (
    <main style={{ background: '#05080d', color: '#fff', minHeight: '100vh' }}>
      <Header />

      {/* Hero Header */}
      <section style={{ padding: '160px 1.5rem 70px', background: 'radial-gradient(circle at 50% 10%, rgba(20, 45, 95, 0.45) 0%, rgba(5, 8, 13, 0.98) 70%)', textAlign: 'center' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <span style={{ color: '#83c0ff', fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
            PROJECT PORTFOLIO &middot; MISSISSAUGA &amp; ONTARIO
          </span>
          <h1 style={{ color: '#fff', fontSize: 'clamp(34px, 5.5vw, 64px)', fontWeight: 900, fontFamily: "'kaleko', sans-serif", letterSpacing: '-0.04em', lineHeight: '1.08', margin: '0 0 1.25rem' }}>
            Proof, Not Promises.
          </h1>
          <p style={{ color: '#9ba6b8', fontSize: '1.15rem', lineHeight: '1.7', maxWidth: '44rem', margin: '0 auto 2rem' }}>
            A curated showcase of specialized commercial flooring systems and luxury residential renovations completed across Mississauga and Ontario.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/estimate" className="bts-cta-btn" style={{ padding: '15px 36px', fontSize: '0.95rem' }}>
              Request a Project Quote
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
              Call (437) 605-4750
            </a>
          </div>
        </div>
      </section>

      {/* Before / After Section */}
      <BeforeAfterSlider />

      {/* Projects Showcase Grid */}
      <section style={{ padding: '80px 1.5rem 100px', background: '#05080d' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ color: '#83c0ff', fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
              RECENT HANDOVERS
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, fontFamily: "'kaleko', sans-serif", color: '#fff', margin: 0 }}>
              Completed Work by Trade &amp; Discipline
            </h2>
          </div>

          {/* Filter Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '45px', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              style={{
                padding: '10px 22px',
                borderRadius: '999px',
                border: activeFilter === 'all' ? '1px solid #3b82f6' : '1px solid rgba(255,255,255,0.12)',
                background: activeFilter === 'all' ? 'linear-gradient(135deg, #2563eb, #1d4ed8)' : 'rgba(255,255,255,0.04)',
                color: '#fff',
                fontSize: '0.88rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              All Projects ({projectsList.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('flooring')}
              style={{
                padding: '10px 22px',
                borderRadius: '999px',
                border: activeFilter === 'flooring' ? '1px solid #3b82f6' : '1px solid rgba(255,255,255,0.12)',
                background: activeFilter === 'flooring' ? 'linear-gradient(135deg, #2563eb, #1d4ed8)' : 'rgba(255,255,255,0.04)',
                color: '#fff',
                fontSize: '0.88rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              Flooring Systems (6)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('renovation')}
              style={{
                padding: '10px 22px',
                borderRadius: '999px',
                border: activeFilter === 'renovation' ? '1px solid #3b82f6' : '1px solid rgba(255,255,255,0.12)',
                background: activeFilter === 'renovation' ? 'linear-gradient(135deg, #2563eb, #1d4ed8)' : 'rgba(255,255,255,0.04)',
                color: '#fff',
                fontSize: '0.88rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              Architectural Renovations (4)
            </button>
          </div>

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '30px' }}>
            {filteredProjects.map((proj, idx) => (
              <div
                key={idx}
                style={{
                  background: 'linear-gradient(160deg, rgba(16, 28, 58, 0.75), rgba(8, 15, 34, 0.65))',
                  border: '1px solid rgba(156, 194, 251, 0.18)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 45px rgba(0,0,0,0.5)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                }}
              >
                <div>
                  <div style={{ position: 'relative', height: '230px', overflow: 'hidden' }}>
                    <img
                      src={proj.img}
                      alt={proj.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        background: 'rgba(5, 10, 22, 0.88)',
                        backdropFilter: 'blur(8px)',
                        padding: '4px 12px',
                        borderRadius: '999px',
                        border: '1px solid rgba(131, 192, 255, 0.3)',
                        fontSize: '0.74rem',
                        fontWeight: 800,
                        color: '#83c0ff',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {proj.category}
                    </div>
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '12px',
                        right: '12px',
                        background: 'rgba(0, 0, 0, 0.75)',
                        backdropFilter: 'blur(6px)',
                        padding: '3px 10px',
                        borderRadius: '6px',
                        fontSize: '0.72rem',
                        color: '#cbd5e1',
                      }}
                    >
                      {proj.location}
                    </div>
                  </div>

                  <div style={{ padding: '24px' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, fontFamily: "'kaleko', sans-serif", margin: '0 0 10px', color: '#fff' }}>
                      {proj.title}
                    </h3>
                    <p style={{ color: '#9ba6b8', fontSize: '0.92rem', lineHeight: '1.6', margin: 0 }}>
                      {proj.desc}
                    </p>
                  </div>
                </div>

                <div style={{ padding: '0 24px 24px' }}>
                  <Link
                    href={proj.link}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: '#60a5fa',
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      textDecoration: 'none',
                    }}
                  >
                    View System / Service Details &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationBanner />
      <Footer />
    </main>
  );
}
