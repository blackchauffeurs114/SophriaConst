'use client';

import React, { useState } from 'react';

export default function RoomVisualizer() {
  const [modalOpen, setModalOpen] = useState(false);
  const [photoSelected, setPhotoSelected] = useState<string | null>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setPhotoSelected(url);
    }
  };

  return (
    <>
      {/* Floating Pill Widget (Matching Evolved Floors) */}
      <aside
        onClick={() => setModalOpen(true)}
        style={{
          position: 'fixed',
          bottom: '22px',
          right: '22px',
          zIndex: 9990,
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '8px 16px 8px 20px',
          borderRadius: '999px',
          background: 'rgba(8, 15, 30, 0.94)',
          border: '1px solid rgba(131, 192, 255, 0.35)',
          boxShadow: '0 16px 40px rgba(0,0,0,0.65), 0 0 24px rgba(76,146,255,0.25)',
          cursor: 'pointer',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          transition: 'transform 0.25s ease'
        }}
      >
        <span style={{ color: '#fff', fontSize: '13px', fontWeight: 700, letterSpacing: '0.02em', whiteSpace: 'nowrap' }}>
          See our products in your space
        </span>
        <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>
          <span style={{ fontSize: '20px' }}>📱</span>
        </div>
      </aside>

      {/* Visualizer Modal */}
      {modalOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(0,0,0,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            backdropFilter: 'blur(12px)'
          }}
          onClick={() => setModalOpen(false)}
        >
          <div
            style={{
              background: '#080f1e',
              border: '1px solid rgba(131, 192, 255, 0.3)',
              borderRadius: '24px',
              maxWidth: '540px',
              width: '100%',
              padding: '2rem',
              position: 'relative',
              boxShadow: '0 25px 60px rgba(0,0,0,0.8)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', color: '#fff', fontSize: '1.5rem', cursor: 'pointer' }}
            >
              ✕
            </button>

            <span style={{ color: '#83c0ff', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase' }}>
              AI ROOM VISUALIZER
            </span>
            <h3 style={{ color: '#fff', fontSize: '1.6rem', fontWeight: 900, margin: '0.5rem 0 1rem' }}>
              Preview Flooring in Your Room
            </h3>
            <p style={{ color: '#9ba6b8', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Snap or upload a photo of your living room, kitchen, or bedroom to visualize luxury hardwood and tile planks directly in your home.
            </p>

            {photoSelected ? (
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ aspectRatio: '16/10', borderRadius: '16px', overflow: 'hidden', position: 'relative' }}>
                  <img src={photoSelected} alt="Room" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ marginTop: '1rem', display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '8px' }}>
                  {['European Oak', 'Walnut Plank', 'Chevron Luxury', 'Stone Tile'].map((f) => (
                    <button key={f} style={{ padding: '8px 16px', borderRadius: '999px', background: '#122444', border: '1px solid #83c0ff', color: '#fff', fontSize: '12px', whiteSpace: 'nowrap', cursor: 'pointer' }}>
                      {f}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <label
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '2.5rem 1.5rem',
                  borderRadius: '16px',
                  border: '2px dashed rgba(131, 192, 255, 0.4)',
                  background: 'rgba(18, 36, 68, 0.3)',
                  cursor: 'pointer',
                  marginBottom: '1.5rem'
                }}
              >
                <span style={{ fontSize: '2.5rem', marginBottom: '0.6rem' }}>📸</span>
                <span style={{ color: '#fff', fontWeight: 700, fontSize: '1rem' }}>Take or Upload Room Photo</span>
                <span style={{ color: '#68778d', fontSize: '0.82rem', marginTop: '0.3rem' }}>Supports PNG, JPG, HEIC</span>
                <input type="file" accept="image/*" onChange={handlePhotoUpload} style={{ display: 'none' }} />
              </label>
            )}

            <button
              onClick={() => setModalOpen(false)}
              style={{ width: '100%', padding: '0.9rem', borderRadius: '999px', background: '#4c92ff', color: '#fff', fontWeight: 800, fontSize: '0.9rem', border: 'none', cursor: 'pointer' }}
            >
              Done / Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
