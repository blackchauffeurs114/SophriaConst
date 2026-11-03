import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ConsultationBanner from '@/components/ConsultationBanner';

export const metadata = {
  title: 'Luxury Renovation & Master Flooring Services | Sophria Construction',
  description: 'Full-scope design-build services across Vancouver & Ontario — kitchens, spa bathrooms, hardwood flooring, basements, and custom stonework.',
};

const servicesList = [
  {
    id: 'kitchen',
    num: '01',
    title: 'Kitchen Remodeling',
    tagline: 'Chef-grade layouts, bespoke cabinetry & waterfall quartz.',
    desc: 'The kitchen is the center of your home. We craft chef-inspired culinary spaces with floor-to-ceiling custom millwork, integrated smart appliances, soft-close hardware, and precision waterfall island counters built to withstand a lifetime of entertaining.',
    img: '/assets/service-kitchen.jpg',
    features: [
      'Custom architectural cabinetry & soft-close hardware',
      'Waterfall quartz & quartzite stone islands',
      'Under-cabinet LED task lighting & smart outlets',
      'Plumbing, gas line re-routing & electrical upgrades',
      'Designer tile backsplashes & hidden walk-in pantries'
    ]
  },
  {
    id: 'bathroom',
    num: '02',
    title: 'Bathroom Renovations',
    tagline: 'Spa-grade sanctuary design, curbless showers & freestanding tubs.',
    desc: 'Transform dated bathrooms into serene, five-star luxury retreats. From Schluter-certified waterproof curbless walk-in showers with linear drains to heated porcelain floors, rainfall shower heads, and floating custom double vanities.',
    img: '/assets/service-bathroom.jpg',
    features: [
      'Zero-threshold curbless walk-in showers with linear drains',
      '10mm frameless architectural tempered glass enclosures',
      'Electric in-floor radiant heating with smart digital thermostats',
      'Deep freestanding acrylic & stone soaking tubs',
      'Full Schluter-Kerdi waterproof backing guarantee'
    ]
  },
  {
    id: 'flooring',
    num: '03',
    title: 'Hardwood & Luxury Flooring',
    tagline: 'Precision engineered oak, herringbone patterns & luxury vinyl.',
    desc: 'Master flooring is the foundation of every great room. We supply and install premium European white oak engineered hardwood, bespoke herringbone patterns, and 100% waterproof luxury vinyl plank (SPC) — installed laser-level and guaranteed silent underfoot.',
    img: '/assets/service-flooring.jpg',
    features: [
      'Wide-plank European white oak engineered hardwood',
      'Classic French herringbone & chevron architectural layouts',
      'High-traffic waterproof SPC luxury vinyl plank with acoustic underlayment',
      'Subfloor leveling, soundproofing & silent-walk membrane system',
      'Custom stained stair treads, risers, and flush-mount vents'
    ]
  },
  {
    id: 'basement',
    num: '04',
    title: 'Basement Finishing',
    tagline: 'Legal secondary rental suites, home theaters & living spaces.',
    desc: 'Unlock your lower level’s true square footage and market value. We handle complete basement conversions from structural framing, sub-slab plumbing, spray foam moisture insulation, egress windows, to self-contained rental suites and entertainment bars.',
    img: '/assets/service-basement.jpg',
    features: [
      'Full city permit management & Ontario / BC Building Code compliance',
      'Soundproofing ceiling channels & Roxul Safe’n’Sound insulation',
      'Custom wet bars, media lounges & climate-controlled wine displays',
      'Legal separate exterior walkout entrances (below grade)',
      'High-efficiency sub-slab moisture barrier and sump systems'
    ]
  },
  {
    id: 'stone',
    num: '05',
    title: 'Quartz & Quartzite Stonework',
    tagline: 'Bookmatched slabs, mitered edges & seamless backsplashes.',
    desc: 'Elevate your interior surfaces with premium engineered quartz and natural quartzite. Fabricated with CNC laser precision to ensure hairline seams, seamless bookmatched veining, and 2-inch mitered island edges that command immediate attention.',
    img: '/assets/service-stone.jpg',
    features: [
      'Bookmatched natural quartzite & luxury engineered quartz slabs',
      'Seamless 2-inch and 3-inch mitered waterfall island drops',
      'Full-height stone wall cladding and fireplace hearth surrounds',
      'Undermount sink laser cutouts with polished drainboard grooves',
      'Stain-resistant sealer treatments and lifetime fabrication warranty'
    ]
  },
  {
    id: 'addition',
    num: '06',
    title: 'Full-Home Renovations & Additions',
    tagline: 'Open-concept reconfigurations & structural expansions.',
    desc: 'From removing load-bearing walls and installing steel flush beams to multi-room full gut renovations and rear house extensions. One accountable crew owns the architecture, city permits, engineering inspections, and master finishes.',
    img: '/assets/service-addition.jpg',
    features: [
      'Structural steel beam installation & load-bearing wall removal',
      'Rear house extensions & sunroom additions',
      'HVAC, 200-amp panel upgrades & whole-home rewiring',
      'Architectural plans, 3D renderings & municipal permits',
      'Single point of accountability from demolition to final cleaning'
    ]
  }
];

export default function ServicesPage() {
  return (
    <main>
      <Header />

      {/* Hero Header */}
      <section style={{ padding: '160px 1.5rem 70px', background: 'linear-gradient(180deg, #040813 0%, #081024 100%)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '840px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <span style={{ color: '#83c0ff', fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
            WHAT WE DO
          </span>
          <h1 style={{ color: '#fff', fontSize: 'clamp(34px, 5.5vw, 64px)', fontWeight: 900, fontFamily: "'kaleko', var(--font-display), sans-serif", letterSpacing: '-0.04em', lineHeight: '1.05', margin: '0 0 1.25rem' }}>
            Master Craftsmanship Across Every Square Foot.
          </h1>
          <p style={{ color: '#9ba6b8', fontSize: '1.15rem', lineHeight: '1.7', maxWidth: '44rem', margin: '0 auto 2rem' }}>
            One dedicated in-house design-build team for luxury kitchens, spa bathrooms, master flooring, and structural home transformations across Vancouver &amp; Ontario.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/estimate" className="re-hero-btn re-hero-btn--accent" style={{ padding: '14px 32px' }}>
              Get a Free Quote
            </Link>
            <a href="tel:6047394477" className="re-hero-btn re-hero-btn--outline" style={{ padding: '14px 32px' }}>
              Call (604) 739-4477
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '80px 1.5rem 100px', background: '#050a17' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
            {servicesList.map((svc, idx) => (
              <div
                key={svc.id}
                id={`service-${svc.id}`}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '40px',
                  alignItems: 'center',
                  background: 'rgba(11, 20, 42, 0.65)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '24px',
                  padding: 'clamp(24px, 4vw, 44px)',
                  boxShadow: '0 24px 60px rgba(0,0,0,0.4)'
                }}
              >
                {/* Media (left on odd, right on even on desktop) */}
                <div style={{ order: idx % 2 === 1 ? 2 : 1, position: 'relative', borderRadius: '18px', overflow: 'hidden', aspectRatio: '16/11', border: '1px solid rgba(131, 192, 255, 0.15)' }}>
                  <img
                    src={svc.img}
                    alt={svc.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', top: '16px', left: '16px', background: 'rgba(6, 12, 26, 0.85)', backdropFilter: 'blur(10px)', padding: '6px 14px', borderRadius: '999px', border: '1px solid rgba(131,192,255,0.3)', color: '#83c0ff', fontWeight: 800, fontSize: '0.85rem' }}>
                    SERVICE {svc.num}
                  </div>
                </div>

                {/* Content */}
                <div style={{ order: idx % 2 === 1 ? 1 : 2 }}>
                  <span style={{ color: '#83c0ff', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                    {svc.tagline}
                  </span>
                  <h2 style={{ color: '#fff', fontSize: 'clamp(26px, 3.2vw, 38px)', fontWeight: 800, margin: '0 0 16px', fontFamily: "'kaleko', sans-serif", letterSpacing: '-0.03em' }}>
                    {svc.title}
                  </h2>
                  <p style={{ color: '#a6b4c9', fontSize: '1.02rem', lineHeight: '1.65', marginBottom: '24px' }}>
                    {svc.desc}
                  </p>

                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {svc.features.map((feat, fIdx) => (
                      <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#e2e8f0', fontSize: '0.94rem', lineHeight: '1.5' }}>
                        <span style={{ color: '#38bdf8', fontWeight: 900, marginTop: '1px' }}>✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                    <Link
                      href="/estimate"
                      className="bts-cta-btn"
                      style={{ padding: '12px 26px', fontSize: '0.92rem' }}
                    >
                      Get a Quote for {svc.title} &rarr;
                    </Link>
                  </div>
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
