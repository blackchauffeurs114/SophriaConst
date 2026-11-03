'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ConsultationBanner from '@/components/ConsultationBanner';

export default function EstimateQuotePage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Terrazzo Flooring',
    address: '',
    timeline: 'Within 1-3 Months',
    message: '',
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

      {/* Hero Header */}
      <section style={{ padding: '150px 1.5rem 60px', background: 'radial-gradient(circle at 50% 10%, rgba(20, 45, 95, 0.45) 0%, rgba(5, 8, 13, 0.98) 70%)', textAlign: 'center' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <span style={{ color: '#83c0ff', fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase', display: 'block', marginBottom: '1.25rem' }}>
            COMPLIMENTARY CONSULTATION &middot; MISSISSAUGA &amp; ONTARIO
          </span>
          <h1 style={{ color: '#fff', fontSize: 'clamp(34px, 5.5vw, 60px)', fontWeight: 900, fontFamily: "'kaleko', sans-serif", letterSpacing: '-0.04em', lineHeight: '1.1', marginBottom: '1.25rem' }}>
            Request Your <span style={{ background: 'linear-gradient(135deg, #60a5fa 0%, #38bdf8 60%, #93c5fd 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Free Project Quote</span>
          </h1>
          <p style={{ color: '#9ba6b8', fontSize: '1.15rem', lineHeight: '1.65', maxWidth: '38rem', margin: '0 auto' }}>
            Tell us about your flooring or renovation project. Sophria Private Limited delivers transparent, fixed-price proposals backed by over 25 years of master craftsmanship.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section style={{ padding: '20px 1.5rem 100px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'start' }}>
          
          {/* Main Form */}
          <div style={{ background: 'linear-gradient(160deg, rgba(16, 28, 58, 0.75), rgba(8, 15, 34, 0.65))', border: '1px solid rgba(156, 194, 251, 0.2)', borderRadius: '24px', padding: '40px 32px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, fontFamily: "'kaleko', sans-serif", marginBottom: '8px' }}>
              Project Information
            </h2>
            <p style={{ color: '#9ba6b8', fontSize: '0.94rem', marginBottom: '28px' }}>
              Fill in your specifications below for a prompt callback and site measure consultation.
            </p>

            {status === 'success' ? (
              <div style={{ background: 'rgba(34, 197, 94, 0.12)', border: '1px solid rgba(34, 197, 94, 0.35)', borderRadius: '14px', padding: '36px 24px', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>✓</div>
                <h3 style={{ color: '#86efac', fontSize: '1.35rem', fontWeight: 800, marginBottom: '8px' }}>Quote Request Submitted!</h3>
                <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                  Thank you, <b>{formData.name || 'Valued Client'}</b>. An estimating specialist from Sophria will review your project details and get in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
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

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '6px' }}>Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{ width: '100%', padding: '14px 16px', background: 'rgba(5, 10, 22, 0.65)', border: '1px solid rgba(156, 194, 251, 0.25)', borderRadius: '10px', color: '#fff', fontSize: '0.95rem', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '6px' }}>Service Required</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      style={{ width: '100%', padding: '14px 16px', background: 'rgba(5, 10, 22, 0.95)', border: '1px solid rgba(156, 194, 251, 0.25)', borderRadius: '10px', color: '#fff', fontSize: '0.95rem', outline: 'none' }}
                    >
                      <optgroup label="Specialized Flooring Systems">
                        <option value="Terrazzo Flooring">Terrazzo Flooring</option>
                        <option value="VCT Flooring">VCT Flooring</option>
                        <option value="Carpet Tile Flooring">Carpet Tile Flooring</option>
                        <option value="Rubber Flooring">Rubber Flooring</option>
                        <option value="Sheet Vinyl">Sheet Vinyl</option>
                        <option value="Epoxy Flooring">Epoxy Flooring</option>
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

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '6px' }}>Project City / Postal Code</label>
                    <input
                      type="text"
                      placeholder="e.g. Mississauga, L5N 5R3"
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
                      <option value="Immediate / Emergency">Immediate (Within 2 Weeks)</option>
                      <option value="Within 1 Month">Within 1 Month</option>
                      <option value="Within 1-3 Months">Within 1–3 Months</option>
                      <option value="3-6 Months">3–6 Months</option>
                      <option value="Planning / Budgeting Stage">Planning / Budgeting Stage</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '6px' }}>Project Details &amp; Approximate Square Footage</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your space, dimensions, current condition, or design preferences..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ width: '100%', padding: '14px 16px', background: 'rgba(5, 10, 22, 0.65)', border: '1px solid rgba(156, 194, 251, 0.25)', borderRadius: '10px', color: '#fff', fontSize: '0.95rem', outline: 'none', resize: 'vertical' }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
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
                  {status === 'submitting' ? 'Submitting Request...' : 'Request Free Quote & Consultation →'}
                </button>
              </form>
            )}
          </div>

          {/* Right Info Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ background: 'rgba(11, 20, 42, 0.75)', border: '1px solid rgba(156, 194, 251, 0.15)', borderRadius: '20px', padding: '32px 28px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '14px', color: '#83c0ff' }}>
                Why Work With Sophria?
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <li style={{ display: 'flex', gap: '10px', fontSize: '0.94rem', color: '#cbd5e1', lineHeight: '1.5' }}>
                  <span style={{ color: '#60a5fa', fontWeight: 'bold' }}>✓</span>
                  <span><b>25+ Years Legacy:</b> Sourcing, installing and repairing across Ontario since 2001.</span>
                </li>
                <li style={{ display: 'flex', gap: '10px', fontSize: '0.94rem', color: '#cbd5e1', lineHeight: '1.5' }}>
                  <span style={{ color: '#60a5fa', fontWeight: 'bold' }}>✓</span>
                  <span><b>Fixed-Price Quotes:</b> Guaranteed contract pricing with zero hidden change-order traps.</span>
                </li>
                <li style={{ display: 'flex', gap: '10px', fontSize: '0.94rem', color: '#cbd5e1', lineHeight: '1.5' }}>
                  <span style={{ color: '#60a5fa', fontWeight: 'bold' }}>✓</span>
                  <span><b>Certified Installation:</b> Red Seal trades, Schluter-certified, and full OBC compliance.</span>
                </li>
                <li style={{ display: 'flex', gap: '10px', fontSize: '0.94rem', color: '#cbd5e1', lineHeight: '1.5' }}>
                  <span style={{ color: '#60a5fa', fontWeight: 'bold' }}>✓</span>
                  <span><b>Fast Turnaround:</b> Prompt on-site measures and detailed written proposals within 24 hours.</span>
                </li>
              </ul>
            </div>

            <div style={{ background: 'rgba(11, 20, 42, 0.75)', border: '1px solid rgba(156, 194, 251, 0.15)', borderRadius: '20px', padding: '32px 28px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '14px', color: '#fff' }}>
                Direct Contact
              </h3>
              <p style={{ color: '#9ba6b8', fontSize: '0.92rem', marginBottom: '16px' }}>
                Prefer to speak directly with our estimating department?
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href="tel:+14376054750" style={{ color: '#83c0ff', textDecoration: 'none', fontWeight: 700, fontSize: '1.05rem' }}>
                  +1 (437) 605-4750
                </a>
                <a href="mailto:estimating@sophria.ca" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.92rem' }}>
                  estimating@sophria.ca
                </a>
                <div style={{ color: '#94a3b8', fontSize: '0.88rem', marginTop: '6px' }}>
                  226-6465 Millcreek Dr., Mississauga, Ontario, CA, L5N 5R3<br />
                  Monday – Friday : 8am – 4pm
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationBanner />
      <Footer />
    </main>
  );
}
