'use client';

import React, { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ConsultationBanner from '@/components/ConsultationBanner';

type ProjectType = 'flooring' | 'kitchen' | 'bathroom' | 'basement' | 'fullhome';
type TierType = 'premium' | 'luxury' | 'signature';

interface ProjectOption {
  id: ProjectType;
  title: string;
  unit: string;
  defaultQty: number;
  minQty: number;
  maxQty: number;
  stepQty: number;
  rates: {
    premium: [number, number];
    luxury: [number, number];
    signature: [number, number];
  };
  details: string;
}

const projects: ProjectOption[] = [
  {
    id: 'flooring',
    title: 'Hardwood & Luxury Flooring',
    unit: 'sq. ft.',
    defaultQty: 850,
    minQty: 300,
    maxQty: 3500,
    stepQty: 50,
    rates: {
      premium: [9, 13],       // SPC vinyl / standard hardwood
      luxury: [14, 19],       // Wide-plank European oak
      signature: [20, 28]     // French herringbone / chevron bespoke
    },
    details: 'Includes laser subfloor leveling, premium acoustic membrane, supply & certified dustless installation.'
  },
  {
    id: 'kitchen',
    title: 'Kitchen Remodeling',
    unit: 'linear ft. cabinetry',
    defaultQty: 25,
    minQty: 12,
    maxQty: 50,
    stepQty: 1,
    rates: {
      premium: [1000, 1400],
      luxury: [1500, 2100],
      signature: [2200, 3200]
    },
    details: 'Includes custom millwork, quartz waterfall island, plumbing/gas reconnections, and LED lighting.'
  },
  {
    id: 'bathroom',
    title: 'Bathroom Renovation',
    unit: 'bathrooms',
    defaultQty: 1,
    minQty: 1,
    maxQty: 4,
    stepQty: 1,
    rates: {
      premium: [16000, 22000],
      luxury: [23000, 32000],
      signature: [33000, 48000]
    },
    details: 'Includes Schluter waterproof curbless walk-in shower, linear drain, heated floor, and floating vanity.'
  },
  {
    id: 'basement',
    title: 'Basement Finishing & Suite',
    unit: 'sq. ft.',
    defaultQty: 900,
    minQty: 400,
    maxQty: 2500,
    stepQty: 50,
    rates: {
      premium: [42, 58],
      luxury: [60, 80],
      signature: [82, 115]
    },
    details: 'Includes framing, spray insulation, full 3-piece bathroom, subfloor, soundproofing, and drywall.'
  },
  {
    id: 'fullhome',
    title: 'Full Home Remodel / Addition',
    unit: 'sq. ft.',
    defaultQty: 1800,
    minQty: 800,
    maxQty: 5000,
    stepQty: 100,
    rates: {
      premium: [110, 150],
      luxury: [155, 210],
      signature: [215, 310]
    },
    details: 'Complete turnkey architectural overhaul including layout restructuring, MEP, and high-end finishes.'
  }
];

export default function EstimatePage() {
  const [selectedProject, setSelectedProject] = useState<ProjectType>('flooring');
  const [tier, setTier] = useState<TierType>('luxury');
  const [quantity, setQuantity] = useState<number>(850);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', postal: '' });

  const currentConfig = useMemo(() => {
    return projects.find((p) => p.id === selectedProject) || projects[0];
  }, [selectedProject]);

  // When project changes, adjust quantity to reasonable default
  const handleProjectChange = (id: ProjectType) => {
    setSelectedProject(id);
    const cfg = projects.find((p) => p.id === id);
    if (cfg) setQuantity(cfg.defaultQty);
  };

  const calculatedCost = useMemo(() => {
    const rateRange = currentConfig.rates[tier];
    const low = Math.round(rateRange[0] * quantity);
    const high = Math.round(rateRange[1] * quantity);
    return { low, high };
  }, [currentConfig, tier, quantity]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main style={{ background: '#05080d', color: '#fff', minHeight: '100vh' }}>
      <Header />

      {/* Hero */}
      <section style={{ padding: '160px 1.5rem 60px', background: 'radial-gradient(circle at 50% 10%, rgba(20, 45, 95, 0.45) 0%, rgba(5, 8, 13, 0.98) 70%)', textAlign: 'center' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <span style={{ color: '#83c0ff', fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase', display: 'block', marginBottom: '1.25rem' }}>
            TRANSPARENT PRICING &middot; ESTIMATE CALCULATOR
          </span>
          <h1 style={{ color: '#fff', fontSize: 'clamp(34px, 5.5vw, 60px)', fontWeight: 900, fontFamily: "'kaleko', sans-serif", letterSpacing: '-0.04em', lineHeight: '1.08', marginBottom: '1.25rem' }}>
            Instant Online <span style={{ background: 'linear-gradient(135deg, #60a5fa 0%, #38bdf8 60%, #93c5fd 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Renovation Estimate</span>
          </h1>
          <p style={{ color: '#9ba6b8', fontSize: '1.15rem', lineHeight: '1.65', maxWidth: '40rem', margin: '0 auto' }}>
            Choose your project scope, square footage, and desired finish tier for an instant, data-backed Canadian cost projection.
          </p>
        </div>
      </section>

      {/* Interactive Calculator Section */}
      <section style={{ padding: '20px 1.5rem 100px', maxWidth: '1180px', margin: '0 auto' }}>
        <div style={{ background: 'linear-gradient(160deg, rgba(16, 28, 58, 0.75), rgba(8, 15, 34, 0.65))', border: '1px solid rgba(156, 194, 251, 0.22)', borderRadius: '24px', padding: '42px 36px', boxShadow: '0 25px 60px rgba(0,0,0,0.5)' }}>
          
          {/* Step 1: Select Category */}
          <div style={{ marginBottom: '36px' }}>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#83c0ff', marginBottom: '14px' }}>
              Step 1: Select Renovation Type
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
              {projects.map((p) => {
                const active = selectedProject === p.id;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => handleProjectChange(p.id)}
                    style={{
                      padding: '16px 14px',
                      borderRadius: '12px',
                      border: active ? '1px solid #60a5fa' : '1px solid rgba(255,255,255,0.1)',
                      background: active ? 'rgba(96, 165, 250, 0.16)' : 'rgba(255,255,255,0.03)',
                      color: active ? '#fff' : '#94a3b8',
                      fontWeight: active ? 800 : 600,
                      fontSize: '0.92rem',
                      cursor: 'pointer',
                      transition: 'all 0.25s',
                      textAlign: 'center'
                    }}
                  >
                    {p.title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Scale / Quantity */}
          <div style={{ marginBottom: '36px', background: 'rgba(5, 10, 22, 0.5)', padding: '24px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap', gap: '10px' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#83c0ff' }}>
                Step 2: Project Size / Scope
              </label>
              <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#60a5fa', fontFamily: "'kaleko', sans-serif" }}>
                {quantity.toLocaleString()} {currentConfig.unit}
              </div>
            </div>

            <input
              type="range"
              min={currentConfig.minQty}
              max={currentConfig.maxQty}
              step={currentConfig.stepQty}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              style={{ width: '100%', accentColor: '#60a5fa', height: '8px', cursor: 'pointer', marginBottom: '12px' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748b', fontSize: '0.82rem' }}>
              <span>{currentConfig.minQty} {currentConfig.unit}</span>
              <span>{currentConfig.maxQty} {currentConfig.unit}</span>
            </div>
            <p style={{ color: '#9ba6b8', fontSize: '0.86rem', marginTop: '12px', marginBottom: 0 }}>
              💡 {currentConfig.details}
            </p>
          </div>

          {/* Step 3: Tier Selection */}
          <div style={{ marginBottom: '40px' }}>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#83c0ff', marginBottom: '14px' }}>
              Step 3: Craftsmanship &amp; Finish Tier
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
              {[
                { id: 'premium' as TierType, name: 'Premium Standard', desc: 'Commercial-grade materials, durable designer finishes, and master certified trade installation.' },
                { id: 'luxury' as TierType, name: 'Luxury Architectural', desc: 'Imported European oak, seamless quartz waterfall slabs, curbless linear drains & smart integration.' },
                { id: 'signature' as TierType, name: 'Signature Ultra-Custom', desc: 'One-of-a-kind bespoke millwork, bookmatched natural quartzite, heated slabs, zero tolerances.' },
              ].map((t) => {
                const active = tier === t.id;
                return (
                  <div
                    key={t.id}
                    onClick={() => setTier(t.id)}
                    style={{
                      padding: '22px 20px',
                      borderRadius: '14px',
                      border: active ? '1px solid #60a5fa' : '1px solid rgba(255,255,255,0.08)',
                      background: active ? 'rgba(96, 165, 250, 0.14)' : 'rgba(255,255,255,0.02)',
                      cursor: 'pointer',
                      transition: 'all 0.25s'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontWeight: 800, color: active ? '#fff' : '#cbd5e1', fontSize: '1.05rem' }}>{t.name}</span>
                      {active && <span style={{ color: '#60a5fa', fontWeight: 900 }}>● Active</span>}
                    </div>
                    <p style={{ color: '#94a3b8', fontSize: '0.84rem', lineHeight: '1.5', margin: 0 }}>{t.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dynamic Estimate Result Box */}
          <div style={{ background: 'linear-gradient(135deg, rgba(20, 45, 95, 0.6), rgba(8, 15, 34, 0.85))', border: '1px solid rgba(131, 192, 255, 0.35)', borderRadius: '20px', padding: '34px 28px', textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ color: '#93c5fd', fontSize: '0.86rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
              ESTIMATED PROJECT INVESTMENT (CAD)
            </span>
            <div style={{ fontSize: 'clamp(36px, 5vw, 62px)', fontWeight: 900, fontFamily: "'kaleko', sans-serif", color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '12px' }}>
              <span style={{ color: '#60a5fa' }}>${calculatedCost.low.toLocaleString()}</span> &ndash; <span style={{ color: '#93c5fd' }}>${calculatedCost.high.toLocaleString()}</span>
            </div>
            <p style={{ color: '#9ba6b8', fontSize: '0.92rem', maxWidth: '38rem', margin: '0 auto' }}>
              Ballpark estimate includes turnkey supply, labor, site preparation, dust containment, and clean-up. Exact price locked in after our free onsite measure.
            </p>
          </div>

          {/* Lead Booking Form */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '36px' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, fontFamily: "'kaleko', sans-serif", marginBottom: '6px' }}>
              Lock in this estimate &amp; book a free site measure
            </h3>
            <p style={{ color: '#9ba6b8', fontSize: '0.92rem', marginBottom: '24px' }}>
              We will bring physical wood &amp; tile samples directly to your home and deliver a binding fixed-price contract.
            </p>

            {submitted ? (
              <div style={{ background: 'rgba(34, 197, 94, 0.12)', border: '1px solid rgba(34, 197, 94, 0.35)', borderRadius: '14px', padding: '24px', textAlign: 'center' }}>
                <h4 style={{ color: '#86efac', fontSize: '1.25rem', fontWeight: 800, marginBottom: '6px' }}>Estimate Saved &amp; Request Sent!</h4>
                <p style={{ color: '#cbd5e1', fontSize: '0.94rem', margin: 0 }}>
                  We have logged your ${calculatedCost.low.toLocaleString()} &ndash; ${calculatedCost.high.toLocaleString()} CAD estimate. Our Vancouver team will reach out within 24 hours to arrange your onsite measure.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={{ padding: '14px 16px', background: 'rgba(5, 10, 22, 0.65)', border: '1px solid rgba(156, 194, 251, 0.25)', borderRadius: '10px', color: '#fff', fontSize: '0.95rem', outline: 'none' }}
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  style={{ padding: '14px 16px', background: 'rgba(5, 10, 22, 0.65)', border: '1px solid rgba(156, 194, 251, 0.25)', borderRadius: '10px', color: '#fff', fontSize: '0.95rem', outline: 'none' }}
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  style={{ padding: '14px 16px', background: 'rgba(5, 10, 22, 0.65)', border: '1px solid rgba(156, 194, 251, 0.25)', borderRadius: '10px', color: '#fff', fontSize: '0.95rem', outline: 'none' }}
                />
                <input
                  type="text"
                  placeholder="City / Postal Code"
                  value={form.postal}
                  onChange={(e) => setForm({ ...form, postal: e.target.value })}
                  style={{ padding: '14px 16px', background: 'rgba(5, 10, 22, 0.65)', border: '1px solid rgba(156, 194, 251, 0.25)', borderRadius: '10px', color: '#fff', fontSize: '0.95rem', outline: 'none' }}
                />
                <div style={{ gridColumn: '1 / -1' }}>
                  <button
                    type="submit"
                    className="bts-cta-btn"
                    style={{ width: '100%', padding: '16px', fontSize: '1rem', cursor: 'pointer' }}
                  >
                    LOCK IN ESTIMATE &amp; BOOK FREE SITE MEASURE
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Consultation Banner */}
      <ConsultationBanner />

      <Footer />
    </main>
  );
}
