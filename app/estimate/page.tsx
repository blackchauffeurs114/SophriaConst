'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ConsultationBanner from '@/components/ConsultationBanner';

export default function EstimatePage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [callbackSubmitted, setCallbackSubmitted] = useState(false);
  const [cbName, setCbName] = useState('');
  const [cbPhone, setCbPhone] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    type: 'Terrazzo Flooring',
    address: '',
    timeline: 'Within 1-3 Months',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleCallback = (e: React.FormEvent) => {
    e.preventDefault();
    if (cbPhone.trim()) {
      setCallbackSubmitted(true);
    }
  };

  return (
    <main style={{ background: '#05080d', color: '#fff', minHeight: '100vh' }}>
      <Header />

      {/* Hero Header */}
      <section
        style={{
          padding: '160px 1.5rem 70px',
          background: 'radial-gradient(circle at 50% 10%, rgba(20, 45, 95, 0.45) 0%, rgba(5, 8, 13, 0.98) 70%)',
          textAlign: 'center',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <span
            style={{
              color: '#83c0ff',
              fontSize: '0.82rem',
              fontWeight: 800,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '1.25rem',
            }}
          >
            GET A PROJECT ESTIMATE &middot; MISSISSAUGA &amp; ONTARIO
          </span>
          <h1
            style={{
              color: '#fff',
              fontSize: 'clamp(34px, 5.5vw, 64px)',
              fontWeight: 900,
              fontFamily: "'kaleko', sans-serif",
              letterSpacing: '-0.04em',
              lineHeight: '1.08',
              marginBottom: '1.25rem',
            }}
          >
            Request Your <span style={{ background: 'linear-gradient(135deg, #60a5fa 0%, #38bdf8 60%, #93c5fd 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Complimentary Quote</span>
          </h1>
          <p
            style={{
              color: '#9ba6b8',
              fontSize: '1.15rem',
              lineHeight: '1.65',
              maxWidth: '38rem',
              margin: '0 auto',
            }}
          >
            Tell us about your space. Sourcing, installing and repairing terrazzo, tile, stone, resilient flooring and luxury renovations across Ontario for over 25 years.
          </p>
        </div>
      </section>

      {/* Main Dual-Form Section (Exact Homepage System) */}
      <section className="page-section-pad" style={{ maxWidth: '1240px', margin: '0 auto', width: '100%' }}>
        <div className="responsive-split-grid">
          
          {/* Left Column: Direct Info + Quick 30-min Callback Form */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
              <div style={{ color: '#83c0ff', fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                START THE CONVERSATION
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 900, fontFamily: "'kaleko', sans-serif", letterSpacing: '-0.03em', lineHeight: '1.15', margin: '0 0 1rem', color: '#fff' }}>
                Let&apos;s build something <br />worth keeping.
              </h2>
              <p style={{ color: '#9ba6b8', fontSize: '1.05rem', lineHeight: '1.65', margin: '0 0 1.5rem' }}>
                Tell us about your project. We&apos;ll arrange a private consultation to explore your vision, your space and the possibilities ahead.
              </p>

              {/* Direct Contacts */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', background: 'rgba(10, 18, 38, 0.65)', border: '1px solid rgba(131, 192, 255, 0.18)', borderRadius: '18px', padding: '24px' }}>
                <a
                  href="tel:+14376054750"
                  style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#83c0ff', textDecoration: 'none', fontWeight: 700, fontSize: '1.05rem' }}
                >
                  <span style={{ display: 'inline-flex', padding: '8px', borderRadius: '50%', background: 'rgba(96, 165, 250, 0.15)' }}>
                    📞
                  </span>
                  +1 (437) 605-4750
                </a>

                <a
                  href="mailto:estimating@sophria.ca"
                  style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#e2e8f0', textDecoration: 'none', fontSize: '0.95rem' }}
                >
                  <span style={{ display: 'inline-flex', padding: '8px', borderRadius: '50%', background: 'rgba(96, 165, 250, 0.15)' }}>
                    ✉️
                  </span>
                  estimating@sophria.ca
                </a>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.4' }}>
                  <span style={{ display: 'inline-flex', padding: '8px', borderRadius: '50%', background: 'rgba(96, 165, 250, 0.15)' }}>
                    📍
                  </span>
                  226-6465 Millcreek Dr., Mississauga, Ontario, CA, L5N 5R3
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#94a3b8', fontSize: '0.9rem' }}>
                  <span style={{ display: 'inline-flex', padding: '8px', borderRadius: '50%', background: 'rgba(96, 165, 250, 0.15)' }}>
                    🕒
                  </span>
                  Monday – Friday : 8am – 4pm
                </div>

                <a
                  href="https://wa.me/14376054750"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#4ade80', fontSize: '0.92rem', fontWeight: 700, textDecoration: 'none', marginTop: '6px' }}
                >
                  Prefer WhatsApp? Send us photos of your space &rarr;
                </a>
              </div>
            </div>

            {/* Quick 30-Min Callback Form */}
            <div style={{ background: 'linear-gradient(160deg, rgba(16, 28, 58, 0.85), rgba(8, 15, 34, 0.8))', border: '1px solid rgba(74, 222, 128, 0.3)', borderRadius: '20px', padding: '28px 24px', boxShadow: '0 15px 35px rgba(0,0,0,0.4)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#4ade80', fontWeight: 800, fontSize: '1.05rem', marginBottom: '6px' }}>
                <span>⚡</span> Prefer we call you?
              </div>
              <p style={{ color: '#cbd5e1', fontSize: '0.88rem', lineHeight: '1.5', margin: '0 0 16px' }}>
                Leave your number &mdash; we&apos;ll call you back within <b>30 minutes</b> (Mon&ndash;Fri, 8am&ndash;4pm).
              </p>

              {callbackSubmitted ? (
                <div style={{ background: 'rgba(74, 222, 128, 0.15)', border: '1px solid rgba(74, 222, 128, 0.4)', borderRadius: '10px', padding: '14px', textAlign: 'center', color: '#86efac', fontWeight: 700, fontSize: '0.92rem' }}>
                  ✓ Got it! We&apos;ll call you back shortly.
                </div>
              ) : (
                <form onSubmit={handleCallback} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={cbName}
                    onChange={(e) => setCbName(e.target.value)}
                    style={{ width: '100%', padding: '12px 14px', background: 'rgba(5, 10, 22, 0.8)', border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: '8px', color: '#fff', fontSize: '0.9rem', outline: 'none' }}
                  />
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <input
                      type="tel"
                      required
                      placeholder="Phone number"
                      value={cbPhone}
                      onChange={(e) => setCbPhone(e.target.value)}
                      style={{ flex: 1, padding: '12px 14px', background: 'rgba(5, 10, 22, 0.8)', border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: '8px', color: '#fff', fontSize: '0.9rem', outline: 'none' }}
                    />
                    <button
                      type="submit"
                      style={{ padding: '12px 20px', background: '#22c55e', color: '#050a16', fontWeight: 800, fontSize: '0.9rem', border: 'none', borderRadius: '8px', cursor: 'pointer', whiteSpace: 'nowrap' }}
                    >
                      Call Me
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Full Detailed Request a Consultation Form */}
          <div style={{ background: 'linear-gradient(160deg, rgba(16, 28, 58, 0.85), rgba(8, 15, 34, 0.75))', border: '1px solid rgba(156, 194, 251, 0.22)', borderRadius: '24px', padding: '40px 32px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, fontFamily: "'kaleko', sans-serif", margin: '0 0 8px', color: '#fff' }}>
              Request a Consultation
            </h2>
            <p style={{ color: '#9ba6b8', fontSize: '0.94rem', margin: '0 0 28px' }}>
              Tell us about your project specifications for a comprehensive site measure and fixed-price quote.
            </p>

            {formSubmitted ? (
              <div style={{ background: 'rgba(34, 197, 94, 0.12)', border: '1px solid rgba(34, 197, 94, 0.35)', borderRadius: '14px', padding: '36px 24px', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>✓</div>
                <h3 style={{ color: '#86efac', fontSize: '1.35rem', fontWeight: 800, marginBottom: '8px' }}>
                  Thank You, {formData.name || 'Valued Client'}!
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                  Your consultation request has been delivered to our estimating team. We will review your project and get in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '6px' }}>Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{ width: '100%', padding: '14px 16px', background: 'rgba(5, 10, 22, 0.65)', border: '1px solid rgba(156, 194, 251, 0.25)', borderRadius: '10px', color: '#fff', fontSize: '0.95rem', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '6px' }}>Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="(437) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{ width: '100%', padding: '14px 16px', background: 'rgba(5, 10, 22, 0.65)', border: '1px solid rgba(156, 194, 251, 0.25)', borderRadius: '10px', color: '#fff', fontSize: '0.95rem', outline: 'none' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '6px' }}>Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="you@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{ width: '100%', padding: '14px 16px', background: 'rgba(5, 10, 22, 0.65)', border: '1px solid rgba(156, 194, 251, 0.25)', borderRadius: '10px', color: '#fff', fontSize: '0.95rem', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '6px' }}>Project Type</label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      style={{ width: '100%', padding: '14px 16px', background: 'rgba(5, 10, 22, 0.95)', border: '1px solid rgba(156, 194, 251, 0.25)', borderRadius: '10px', color: '#fff', fontSize: '0.95rem', outline: 'none' }}
                    >
                      <optgroup label="Specialized Flooring Systems">
                        <option value="Terrazzo Flooring">Terrazzo Flooring</option>
                        <option value="VCT Flooring">VCT Flooring</option>
                        <option value="Carpet Tile Flooring">Carpet Tile Flooring</option>
                        <option value="Rubber Flooring">Rubber Flooring</option>
                        <option value="Sheet Vinyl">Sheet Vinyl</option>
                        <option value="Epoxy Flooring">Epoxy &amp; Resin Floors</option>
                      </optgroup>
                      <optgroup label="Architectural Renovations">
                        <option value="Kitchen Remodeling">Kitchen Remodeling</option>
                        <option value="Bathroom Renovations">Bathroom Renovations</option>
                        <option value="Basement Finishing">Basement Finishing &amp; Suites</option>
                        <option value="Quartz & Stonework">Quartz &amp; Stonework</option>
                        <option value="Full Home Renovation">Full Home Renovation</option>
                      </optgroup>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '6px' }}>Project Address / City</label>
                    <input
                      type="text"
                      placeholder="e.g. Mississauga, ON"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      style={{ width: '100%', padding: '14px 16px', background: 'rgba(5, 10, 22, 0.65)', border: '1px solid rgba(156, 194, 251, 0.25)', borderRadius: '10px', color: '#fff', fontSize: '0.95rem', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '6px' }}>Target Timeline</label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      style={{ width: '100%', padding: '14px 16px', background: 'rgba(5, 10, 22, 0.95)', border: '1px solid rgba(156, 194, 251, 0.25)', borderRadius: '10px', color: '#fff', fontSize: '0.95rem', outline: 'none' }}
                    >
                      <option value="Immediate">Immediate / Emergency (Within 2 Weeks)</option>
                      <option value="Within 1 Month">Within 1 Month</option>
                      <option value="Within 1-3 Months">Within 1–3 Months</option>
                      <option value="3-6 Months">3–6 Months</option>
                      <option value="Planning Stage">Planning / Budgeting Stage</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '6px' }}>Project Details &amp; Approximate Area</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your project, approx. square footage, current subfloor or space condition..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ width: '100%', padding: '14px 16px', background: 'rgba(5, 10, 22, 0.65)', border: '1px solid rgba(156, 194, 251, 0.25)', borderRadius: '10px', color: '#fff', fontSize: '0.95rem', outline: 'none', resize: 'vertical' }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  style={{
                    background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '12px',
                    padding: '16px 28px',
                    fontSize: '1rem',
                    fontWeight: 800,
                    letterSpacing: '0.04em',
                    cursor: 'pointer',
                    boxShadow: '0 8px 24px rgba(37, 99, 235, 0.45)',
                    transition: 'all 0.2s',
                    marginTop: '8px',
                  }}
                >
                  Request Consultation &rarr;
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <ConsultationBanner />
      <Footer />
    </main>
  );
}
