import React from 'react';

export default function Process() {
  const steps = [
    { num: '01', title: 'Consultation & Vision', desc: 'We review architectural plans, discuss material preferences, and provide upfront budget clarity.' },
    { num: '02', title: 'Design & Engineering', desc: 'Permit applications, structural load calculations, and photorealistic 3D visualization.' },
    { num: '03', title: 'Dedicated Construction', desc: 'Licensed in-house trades working on daily scheduled milestones with zero downtime.' },
    { num: '04', title: 'Final Handover', desc: 'Comprehensive multi-point quality punch list walkthrough with complete warranty documentation.' },
  ];

  return (
    <section className="pad process-section" id="process">
      <div className="container">
        <div className="sec-head" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="eyebrow" style={{ color: '#83c0ff', display: 'block', marginBottom: '0.75rem' }}>THE PROCESS</span>
          <h2 className="display" style={{ fontFamily: "'kaleko', sans-serif", fontWeight: 900, letterSpacing: '-0.04em' }}>
            From first sketch to final handover.
          </h2>
          <p className="sec-desc" style={{ maxWidth: '44rem', margin: '0 auto', color: '#9ba6b8' }}>
            A disciplined 4-stage path with fixed pricing and zero surprises — so you always know what's happening.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
          {steps.map((s) => (
            <div key={s.num} style={{ background: '#0a0f1d', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '18px', padding: '1.8rem 1.5rem' }}>
              <span style={{ color: '#83c0ff', fontSize: '1.6rem', fontWeight: 900, display: 'block', marginBottom: '0.8rem' }}>{s.num}</span>
              <h3 style={{ color: '#fff', fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.6rem' }}>{s.title}</h3>
              <p style={{ color: '#9ba6b8', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
