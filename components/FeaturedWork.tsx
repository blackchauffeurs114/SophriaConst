'use client';

import React, { useState } from 'react';

interface ReelItem {
  video: string;
  title: string;
  desc: string;
}

export default function FeaturedWork() {
  const [activeReel, setActiveReel] = useState<ReelItem | null>(null);

  const openModal = (reel: ReelItem) => {
    setActiveReel(reel);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveReel(null);
    document.body.style.overflow = '';
  };

  return (
    <>
      <section className="section section--feature section--home-compact home-offer-section" id="portfolio">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">WHAT WE OFFER</p>
            <h2 className="section-title">Spaces That Inspire.</h2>
            <p className="section-copy">Real on-site craftsmanship, chef-grade kitchens, and spa bathroom retreats.</p>
          </div>
          <div className="featured-work">
            <div className="featured-work__middle">
              {/* Group 1: Kitchen & Bath */}
              <div className="featured-work__group">
                <div className="featured-work__header">
                  <div className="featured-work__header-copy">
                    <p className="featured-work__header-label">Kitchen &amp; Bath</p>
                    <p className="featured-work__header-note">Chef-grade kitchens &amp; custom spa retreats.</p>
                  </div>
                </div>
                <div className="featured-work__reels">
                  <div
                    className="featured-work__tile featured-work__tile--reel"
                    onClick={() => openModal({
                      video: '/assets/bts-kitchen.mp4',
                      title: 'Kitchen Remodel',
                      desc: 'Custom cabinetry, quartz waterfall island & chef-grade finishes.'
                    })}
                  >
                    <div className="media-shell" style={{ aspectRatio: '9 / 16' }}>
                      <video src="/assets/bts-kitchen.mp4" className="featured-work__tile-asset" autoPlay loop playsInline preload="metadata" muted></video>
                    </div>
                    <div className="featured-work__tile-overlay"></div>
                    <div className="featured-work__tile-cta">
                      <button type="button" className="featured-work__tile-button">Watch Full</button>
                    </div>
                  </div>
                  <div
                    className="featured-work__tile featured-work__tile--reel"
                    onClick={() => openModal({
                      video: '/assets/bts-bathroom.mp4',
                      title: 'Spa Bathroom',
                      desc: 'Curbless walk-in showers, freestanding tubs & Italian porcelain tile.'
                    })}
                  >
                    <div className="media-shell" style={{ aspectRatio: '9 / 16' }}>
                      <video src="/assets/bts-bathroom.mp4" className="featured-work__tile-asset" autoPlay loop playsInline preload="metadata" muted></video>
                    </div>
                    <div className="featured-work__tile-overlay"></div>
                    <div className="featured-work__tile-cta">
                      <button type="button" className="featured-work__tile-button">Watch Full</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Group 2: Flooring & Framing */}
              <div className="featured-work__group">
                <div className="featured-work__header">
                  <div className="featured-work__header-copy">
                    <p className="featured-work__header-label">Flooring &amp; Framing</p>
                    <p className="featured-work__header-note">Precision hardwood &amp; structural transformations.</p>
                  </div>
                </div>
                <div className="featured-work__trust">
                  <div
                    className="featured-work__tile featured-work__tile--reel"
                    onClick={() => openModal({
                      video: '/assets/bts-flooring.mp4',
                      title: 'Hardwood & Flooring',
                      desc: 'Engineered hardwood, custom vinyl plank & precision tile installations.'
                    })}
                  >
                    <div className="media-shell" style={{ aspectRatio: '9 / 16' }}>
                      <video src="/assets/bts-flooring.mp4" className="featured-work__tile-asset" autoPlay loop playsInline preload="metadata" muted></video>
                    </div>
                    <div className="featured-work__tile-overlay"></div>
                    <div className="featured-work__tile-cta">
                      <button type="button" className="featured-work__tile-button">Watch Full</button>
                    </div>
                  </div>
                  <div
                    className="featured-work__tile featured-work__tile--reel"
                    onClick={() => openModal({
                      video: '/assets/bts-framing.mp4',
                      title: 'Structural Framing',
                      desc: 'Complete layout reconfigurations, load-bearing removal & framing.'
                    })}
                  >
                    <div className="media-shell" style={{ aspectRatio: '9 / 16' }}>
                      <video src="/assets/bts-framing.mp4" className="featured-work__tile-asset" autoPlay loop playsInline preload="metadata" muted></video>
                    </div>
                    <div className="featured-work__tile-overlay"></div>
                    <div className="featured-work__tile-cta">
                      <button type="button" className="featured-work__tile-button">Watch Full</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Video Player Modal */}
      {activeReel && (
        <div
          className="featured-work-preview is-open"
          id="reMediaPreview"
          role="dialog"
          aria-modal="true"
          onClick={closeModal}
        >
          <div className="featured-work-preview__panel featured-work-preview__panel--portrait" onClick={(e) => e.stopPropagation()}>
            <div className="featured-work-preview__head">
              <p className="featured-work-preview__eyebrow" id="reMediaPreviewEyebrow">{activeReel.title.toUpperCase()}</p>
              <button type="button" className="featured-work-preview__close" onClick={closeModal} aria-label="Close modal">
                Close &times;
              </button>
            </div>
            <div className="featured-work-preview__stage featured-work-preview__stage--portrait">
              <video id="reMediaPreviewVideo" className="featured-work-preview__media" controls autoPlay playsInline src={activeReel.video}></video>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
