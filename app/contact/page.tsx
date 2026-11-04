'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ConsultationBanner from '@/components/ConsultationBanner';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Terrazzo Flooring',
    address: '',
    timeline: 'Within 1-3 Months',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 800);
  };

  return (
    <main style={{ background: '#05080d', color: '#fff', minHeight: '100vh' }}>
      <Header />

      {/* Hero */}
      <section style={{ padding: '160px 1.5rem 70px', background: 'radial-gradient(circle at 50% 10%, rgba(20, 45, 95, 0.45) 0%, rgba(5, 8, 13, 0.98) 70%)', textAlign: 'center' }}>
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          <span style={{ color: '#83c0ff', fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase', display: 'block', marginBottom: '1.25rem' }}>
            CONNECT WITH US &middot; MISSISSAUGA &amp; ONTARIO
          </span>
          <h1 style={{ color: '#fff', fontSize: 'clamp(34px, 5.5vw, 60px)', fontWeight: 900, fontFamily: "'kaleko', sans-serif", letterSpacing: '-0.04em', lineHeight: '1.08', marginBottom: '1.25rem' }}>
            Get your <span style={{ background: 'linear-gradient(135deg, #60a5fa 0%, #38bdf8 60%, #93c5fd 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>free quote &amp; consultation</span> in Mississauga &amp; Ontario.
          </h1>
          <p style={{ color: '#9ba6b8', fontSize: '1.15rem', lineHeight: '1.65', maxWidth: '38rem', margin: '0 auto' }}>
            Tell us about your space and project specifications. Sourcing, installing and repairing commercial flooring and bespoke residential renovations across Ontario for over 25 years.
          </p>
        </div>
      </section>

      {/* Contact Grid: Form + Info Cards */}
      <section className="page-section-pad" style={{ maxWidth: '1240px', margin: '0 auto', width: '100%' }}>
        <div className="responsive-split-grid">
          
          {/* Form Card */}
          <div style={{ background: 'linear-gradient(160deg, rgba(16, 28, 58, 0.75), rgba(8, 15, 34, 0.65))', border: '1px solid rgba(156, 194, 251, 0.2)', borderRadius: '24px', padding: '40px 32px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, fontFamily: "'kaleko', sans-serif", marginBottom: '8px' }}>
              Request a Consultation
            </h2>
            <p style={{ color: '#9ba6b8', fontSize: '0.94rem', marginBottom: '28px' }}>
              Fill in your details below for a prompt callback and site measure booking.
            </p>

            {status === 'success' ? (
              <div style={{ background: 'rgba(34, 197, 94, 0.12)', border: '1px solid rgba(34, 197, 94, 0.35)', borderRadius: '14px', padding: '28px 24px', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>🎉</div>
                <h3 style={{ color: '#86efac', fontSize: '1.3rem', fontWeight: 800, marginBottom: '8px' }}>Thank You! Request Received.</h3>
                <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                  A Sophria project manager will review your project scope and call you back within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '6px' }}>Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. David Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ width: '100%', padding: '14px 16px', background: 'rgba(5, 10, 22, 0.65)', border: '1px solid rgba(156, 194, 251, 0.25)', borderRadius: '10px', color: '#fff', fontSize: '0.95rem', outline: 'none' }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '6px' }}>Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="(437) 605-4750"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{ width: '100%', padding: '14px 16px', background: 'rgba(5, 10, 22, 0.65)', border: '1px solid rgba(156, 194, 251, 0.25)', borderRadius: '10px', color: '#fff', fontSize: '0.95rem', outline: 'none' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '6px' }}>Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="david@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{ width: '100%', padding: '14px 16px', background: 'rgba(5, 10, 22, 0.65)', border: '1px solid rgba(156, 194, 251, 0.25)', borderRadius: '10px', color: '#fff', fontSize: '0.95rem', outline: 'none' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '6px' }}>Service Needed</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      style={{ width: '100%', padding: '14px 16px', background: '#081124', border: '1px solid rgba(156, 194, 251, 0.25)', borderRadius: '10px', color: '#fff', fontSize: '0.95rem', outline: 'none' }}
                    >
                      <optgroup label="Flooring Systems">
                        <option value="Terrazzo Flooring">Terrazzo Flooring</option>
                        <option value="VCT Flooring">VCT Flooring</option>
                        <option value="Carpet Tile Flooring">Carpet Tile Flooring</option>
                        <option value="Rubber Flooring">Rubber Flooring</option>
                        <option value="Sheet Vinyl">Sheet Vinyl</option>
                        <option value="Epoxy Flooring">Epoxy Flooring</option>
                      </optgroup>
                      <optgroup label="Renovations">
                        <option value="Kitchen Remodeling">Kitchen Remodeling</option>
                        <option value="Bathroom Renovations">Bathroom Renovations</option>
                        <option value="Basement Finishing">Basement Finishing &amp; Suites</option>
                        <option value="Quartz Stonework">Quartz &amp; Stonework</option>
                        <option value="Full Home Renovation">Full Home Renovation</option>
                      </optgroup>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '6px' }}>Desired Timeline</label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      style={{ width: '100%', padding: '14px 16px', background: '#081124', border: '1px solid rgba(156, 194, 251, 0.25)', borderRadius: '10px', color: '#fff', fontSize: '0.95rem', outline: 'none' }}
                    >
                      <option>As soon as possible</option>
                      <option>Within 1-3 Months</option>
                      <option>3-6 Months</option>
                      <option>Planning / Budgeting Phase</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '6px' }}>Project City / Postal Code</label>
                  <input
                    type="text"
                    placeholder="e.g. Mississauga (L5N), Oakville, Toronto"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    style={{ width: '100%', padding: '14px 16px', background: 'rgba(5, 10, 22, 0.65)', border: '1px solid rgba(156, 194, 251, 0.25)', borderRadius: '10px', color: '#fff', fontSize: '0.95rem', outline: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '6px' }}>Project Scope / Notes</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what you'd like to install or renovate (approximate square footage, desired materials, special features)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ width: '100%', padding: '14px 16px', background: 'rgba(5, 10, 22, 0.65)', border: '1px solid rgba(156, 194, 251, 0.25)', borderRadius: '10px', color: '#fff', fontSize: '0.95rem', outline: 'none', resize: 'vertical' }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="bts-cta-btn"
                  style={{ width: '100%', padding: '16px', fontSize: '1rem', marginTop: '8px', cursor: 'pointer' }}
                >
                  {status === 'submitting' ? 'Submitting...' : 'SUBMIT CONSULTATION REQUEST'}
                </button>
              </form>
            )}
          </div>

          {/* Direct Details & Contact Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Phone Card */}
            <div style={{ background: 'linear-gradient(160deg, rgba(16, 28, 58, 0.6), rgba(8, 15, 34, 0.5))', border: '1px solid rgba(156, 194, 251, 0.16)', borderRadius: '18px', padding: '28px' }}>
              <div style={{ color: '#60a5fa', fontSize: '1.6rem', marginBottom: '10px' }}>📞</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '6px' }}>Direct Phone &amp; Estimating</h3>
              <p style={{ color: '#9ba6b8', fontSize: '0.92rem', marginBottom: '14px' }}>Speak directly with our senior project estimator.</p>
              <a href="tel:+14376054750" style={{ color: '#fff', fontSize: '1.35rem', fontWeight: 800, textDecoration: 'none', display: 'inline-block' }}>
                +1 (437) 605-4750
              </a>
            </div>

            {/* Email Card */}
            <div style={{ background: 'linear-gradient(160deg, rgba(16, 28, 58, 0.6), rgba(8, 15, 34, 0.5))', border: '1px solid rgba(156, 194, 251, 0.16)', borderRadius: '18px', padding: '28px' }}>
              <div style={{ color: '#60a5fa', fontSize: '1.6rem', marginBottom: '10px' }}>✉️</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '6px' }}>Email Inquiries</h3>
              <p style={{ color: '#9ba6b8', fontSize: '0.92rem', marginBottom: '14px' }}>Send floor plans, specifications, and project briefs.</p>
              <a href="mailto:estimating@sophria.ca" style={{ color: '#60a5fa', fontSize: '1.1rem', fontWeight: 700, textDecoration: 'none' }}>
                estimating@sophria.ca
              </a>
            </div>

            {/* Office & Showroom Location */}
            <div style={{ background: 'linear-gradient(160deg, rgba(16, 28, 58, 0.6), rgba(8, 15, 34, 0.5))', border: '1px solid rgba(156, 194, 251, 0.16)', borderRadius: '18px', padding: '28px' }}>
              <div style={{ color: '#60a5fa', fontSize: '1.6rem', marginBottom: '10px' }}>📍</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '6px' }}>Mississauga Office &amp; Operations</h3>
              <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '12px' }}>
                226-6465 Millcreek Dr.,<br />
                Mississauga, Ontario, CA, L5N 5R3
              </p>
              <div style={{ color: '#9ba6b8', fontSize: '0.88rem' }}>
                <strong>Operating Hours:</strong> Monday &ndash; Friday : 8am &ndash; 4pm
              </div>
            </div>

            {/* Service Areas Badge */}
            <div style={{ background: 'rgba(96, 165, 250, 0.08)', border: '1px solid rgba(96, 165, 250, 0.2)', borderRadius: '16px', padding: '22px' }}>
              <h4 style={{ color: '#93c5fd', fontSize: '0.92rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
                Ontario Service Coverage
              </h4>
              <p style={{ color: '#9ba6b8', fontSize: '0.88rem', lineHeight: '1.6', margin: 0 }}>
                Mississauga, Oakville, Burlington, Milton, Brampton, Toronto, Vaughan, Markham, Richmond Hill, Hamilton &amp; Greater Ontario.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Consultation Banner */}
      <ConsultationBanner />

      <Footer />
    </main>
  );
}
