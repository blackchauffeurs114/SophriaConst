import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactCTA from '@/components/ContactCTA';
import RoomVisualizer from '@/components/RoomVisualizer';

export const metadata = {
  title: 'Contact Sophria Construction | Free Consultation & Site Measures',
  description: 'Schedule a discovery call or onsite measurement for your upcoming home or flooring project.',
};

export default function ContactPage() {
  return (
    <main>
      <Header />
      <section style={{ padding: '160px 1.5rem 80px', background: '#05080d', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span style={{ color: '#83c0ff', fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
            SOPHRIA CONSTRUCTION
          </span>
          <h1 style={{ color: '#fff', fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 900, fontFamily: "'kaleko', sans-serif", letterSpacing: '-0.04em', lineHeight: '1.08', marginBottom: '1.25rem' }}>
            Contact Our Project Team
          </h1>
          <p style={{ color: '#9ba6b8', fontSize: '1.05rem', lineHeight: '1.65', maxWidth: '42rem', margin: '0 auto' }}>
            Schedule a discovery call or onsite measurement for your upcoming home or flooring project.
          </p>
        </div>
      </section>
      <ContactCTA />
      <Footer />
      <RoomVisualizer />
    </main>
  );
}
