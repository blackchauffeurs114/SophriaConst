'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ContactCTA() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="pad" id="contact" style={{ background: '#05080d' }}>
      <div className="container">
        <div className="sec-head" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span className="eyebrow" style={{ color: '#83c0ff', display: 'block', marginBottom: '0.75rem' }}>START YOUR PROJECT</span>
          <h2 className="display" style={{ fontFamily: "'kaleko', sans-serif", fontWeight: 900, letterSpacing: '-0.04em' }}>
            Let's build something extraordinary.
          </h2>
          <p className="sec-desc" style={{ maxWidth: '44rem', margin: '0 auto', color: '#9ba6b8' }}>
            Ready to remodel your kitchen, finish your basement, or build an addition? Reach out to our team today.
          </p>
        </div>

        <div style={{ maxWidth: '580px', margin: '0 auto', background: '#080f1e', padding: '2.5rem 2rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <span style={{ fontSize: '3rem' }}>✓</span>
              <h3 style={{ color: '#fff', margin: '1rem 0 0.5rem' }}>Message Received!</h3>
              <p style={{ color: '#9ba6b8' }}>Thank you. A project manager will contact you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div>
                <label style={{ display: 'block', color: '#ccd5e2', fontSize: '0.85rem', marginBottom: '0.4rem', fontWeight: 600 }}>Your Name</label>
                <input required type="text" placeholder="John Smith" style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '12px', background: '#05080d', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ display: 'block', color: '#ccd5e2', fontSize: '0.85rem', marginBottom: '0.4rem', fontWeight: 600 }}>Phone Number</label>
                <input required type="tel" placeholder="(604) 739-4477" style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '12px', background: '#05080d', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ display: 'block', color: '#ccd5e2', fontSize: '0.85rem', marginBottom: '0.4rem', fontWeight: 600 }}>Email Address</label>
                <input required type="email" placeholder="john@example.com" style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '12px', background: '#05080d', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ display: 'block', color: '#ccd5e2', fontSize: '0.85rem', marginBottom: '0.4rem', fontWeight: 600 }}>Project Details</label>
                <textarea rows={4} placeholder="Describe your renovation or flooring needs..." style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '12px', background: '#05080d', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', boxSizing: 'border-box' }}></textarea>
              </div>
              <button type="submit" style={{ padding: '1rem 2rem', borderRadius: '999px', background: '#4c92ff', color: '#fff', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', marginTop: '0.5rem' }}>
                Send Consultation Request
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
