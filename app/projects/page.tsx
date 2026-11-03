import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import ConsultationBanner from '@/components/ConsultationBanner';

export const metadata = {
  title: 'Completed Renovation & Flooring Projects | Sophria Construction',
  description: 'Explore our portfolio of completed luxury kitchen remodels, spa bathrooms, hardwood flooring, and home additions across Vancouver & Ontario.',
};

const projectsList = [
  {
    title: 'The Danforth Architectural Kitchen',
    category: 'Kitchen & Main Floor',
    location: 'Toronto, ON',
    img: '/assets/img/projects/danforth-kitchen.jpg',
    desc: 'Complete main-floor gut renovation featuring custom white oak millwork, bookmatched quartz waterfall island, and hidden butler pantry.'
  },
  {
    title: 'Spa Ensuite & Walk-In Glass Retreat',
    category: 'Bathroom Renovation',
    location: 'Vancouver, BC',
    img: '/assets/img/projects/danforth-shower.jpg',
    desc: 'Schluter-certified curbless walk-in shower with matte black fixtures, floating vanity with dual undermount sinks, and Italian porcelain slab tiles.'
  },
  {
    title: 'Laneway Home & Interior Addition',
    category: 'Full Home Transformation',
    location: 'Vancouver, BC',
    img: '/assets/img/projects/laneway-hero.jpg',
    desc: 'Complete ground-up secondary dwelling transformation maximizing every inch of space with open-concept architecture and silent engineered oak.'
  },
  {
    title: 'Modern Floating Staircase & Entry',
    category: 'Structural Architectural',
    location: 'Oakville, ON',
    img: '/assets/img/projects/danforth-stairs.jpg',
    desc: 'Open-tread modern hardwood staircase with 12mm tempered architectural glass railing and integrated step LED wash lighting.'
  },
  {
    title: 'Mochi Commercial & Boutique Space',
    category: 'Commercial & Retail',
    location: 'Downtown Vancouver',
    img: '/assets/img/projects/mochi-td-interior-1.jpg',
    desc: 'High-traffic commercial storefront transformation with bespoke display millwork, durable epoxy and commercial-grade vinyl plank flooring.'
  },
  {
    title: 'Garden Suite & Sunlit Living Lounge',
    category: 'Home Addition',
    location: 'Mississauga, ON',
    img: '/assets/img/projects/garden-hero.jpg',
    desc: 'Rear house extension with floor-to-ceiling glass sliding doors connecting seamless indoor living to the outdoor stone patio terrace.'
  }
];

export default function ProjectsPage() {
  return (
    <main>
      <Header />

      {/* Hero Header */}
      <section style={{ padding: '160px 1.5rem 70px', background: 'linear-gradient(180deg, #040813 0%, #081024 100%)', textAlign: 'center' }}>
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          <span style={{ color: '#83c0ff', fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
            PORTFOLIO
          </span>
          <h1 style={{ color: '#fff', fontSize: 'clamp(34px, 5.5vw, 64px)', fontWeight: 900, fontFamily: "'kaleko', var(--font-display), sans-serif", letterSpacing: '-0.04em', lineHeight: '1.05', margin: '0 0 1.25rem' }}>
            Proof, Not Promises.
          </h1>
          <p style={{ color: '#9ba6b8', fontSize: '1.15rem', lineHeight: '1.7', maxWidth: '44rem', margin: '0 auto 2rem' }}>
            A curated showcase of luxury residential renovations, bespoke kitchens, master bathrooms, and architectural spaces delivered on time and on budget.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/estimate" className="re-hero-btn re-hero-btn--accent" style={{ padding: '14px 32px' }}>
              Request a Project Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Before / After Section */}
      <BeforeAfterSlider />

      {/* Projects Showcase Grid */}
      <section style={{ padding: '80px 1.5rem 100px', background: '#050a17' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div className="eyebrow center">FEATURED BUILDS</div>
            <h2 className="display" style={{ color: '#fff', marginTop: '10px' }}>Recent Handover Highlights</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '30px' }}>
            {projectsList.map((proj, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(10, 18, 38, 0.75)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }}>
                  <img
                    src={proj.img}
                    alt={proj.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', top: '14px', left: '14px', background: 'rgba(5, 11, 24, 0.85)', backdropFilter: 'blur(8px)', padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(131,192,255,0.25)', color: '#83c0ff', fontWeight: 700, fontSize: '0.8rem' }}>
                    {proj.category}
                  </div>
                  <div style={{ position: 'absolute', top: '14px', right: '14px', background: 'rgba(5, 11, 24, 0.85)', backdropFilter: 'blur(8px)', padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.1)', color: '#cbd5e1', fontSize: '0.8rem' }}>
                    📍 {proj.location}
                  </div>
                </div>

                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={{ color: '#fff', fontSize: '1.35rem', fontWeight: 800, margin: '0 0 10px', fontFamily: "'kaleko', sans-serif" }}>
                    {proj.title}
                  </h3>
                  <p style={{ color: '#9ba6b8', fontSize: '0.96rem', lineHeight: '1.6', margin: '0 0 20px', flexGrow: 1 }}>
                    {proj.desc}
                  </p>
                  <Link
                    href="/estimate"
                    className="svc-link"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#60a5fa', fontWeight: 700, textDecoration: 'none' }}
                  >
                    Build Something Similar &rarr;
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
