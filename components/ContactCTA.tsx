'use client';

import React, { useState } from 'react';

export default function ContactCTA() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [callbackSubmitted, setCallbackSubmitted] = useState(false);
  const [cbName, setCbName] = useState('');
  const [cbPhone, setCbPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleCallback = () => {
    if (cbPhone.trim()) {
      setCallbackSubmitted(true);
    }
  };

  return (
    <section id="contact" className="pad">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-left">
            <div className="eyebrow reveal">Start the Conversation</div>
            <h2 className="reveal d1">Let&apos;s build something<br />worth keeping.</h2>
            <p className="reveal d2">
              Tell us about your project. We&apos;ll arrange a private consultation to explore your vision, your space and the possibilities ahead.
            </p>
            <div className="cinfo reveal d3">
              <a href="tel:+14376054750">
                <span className="ci-ico">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"></path>
                  </svg>
                </span>
                +1 (437) 605-4750
              </a>
              <a href="mailto:estimating@sophria.ca">
                <span className="ci-ico">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="m22 7-10 6L2 7"></path>
                  </svg>
                </span>
                estimating@sophria.ca
              </a>
              <div>
                <span className="ci-ico">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </span>
                226-6465 Millcreek Dr., Mississauga, Ontario, CA, L5N 5R3
              </div>
            </div>
          </div>

          <form className="lead reveal d2" id="homeConsultForm" onSubmit={handleSubmit}>
            <h3>Request a Consultation</h3>
            <div className="row2">
              <div className="field">
                <label htmlFor="hcf-name">Full Name</label>
                <input type="text" name="name" id="hcf-name" autoComplete="name" required placeholder="Your name" />
              </div>
              <div className="field">
                <label htmlFor="hcf-phone">Phone</label>
                <input type="tel" name="phone" id="hcf-phone" autoComplete="tel" required placeholder="(437) 000-0000" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="hcf-email">Email</label>
              <input type="email" name="email" id="hcf-email" autoComplete="email" required placeholder="you@email.com" />
            </div>
            <div className="field">
              <label htmlFor="hcf-type">Project Type</label>
              <select name="type" id="hcf-type" defaultValue="Flooring">
                <option value="Terrazzo Flooring">Terrazzo Flooring</option>
                <option value="VCT Flooring">VCT Flooring</option>
                <option value="Carpet Tile Flooring">Carpet Tile Flooring</option>
                <option value="Rubber Flooring">Rubber Flooring</option>
                <option value="Sheet Vinyl">Sheet Vinyl</option>
                <option value="Epoxy Floors">Epoxy &amp; Resin Floors</option>
                <option value="Kitchen Renovation">Kitchen Renovation</option>
                <option value="Bathroom Renovation">Bathroom Renovation</option>
                <option value="Basement Finishing">Basement Finishing &amp; Suites</option>
                <option value="Quartz Countertops">Quartz &amp; Quartzite Stonework</option>
                <option value="Full Home Renovation">Full Home Renovation</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="hcf-message">Tell us about your project</label>
              <textarea name="message" id="hcf-message" placeholder="Location, scope, timeline, vision…"></textarea>
            </div>
            <button type="submit" id="hcf-btn" className="bts-cta-btn" style={{ width: '100%', textAlign: 'center' }}>
              Send Inquiry
            </button>
            <a
              href="https://wa.me/14376054750?text=Hi%2C%20I%27d%20like%20a%20free%20estimate"
              target="_blank"
              rel="noopener noreferrer"
              className="home-wa-link"
            >
              Prefer WhatsApp? Send us photos of your space &rarr;
            </a>

            <div className="home-trust-note">
              Serving Mississauga, Ontario &amp; Canada &middot; Licensed &amp; Insured &middot; 25+ Years Experience<br />
              2,500+ Completed Projects &middot; 1-Year Installation Guarantee &middot; Free In-Home Estimates
            </div>

            <div className="home-cb-box" id="homeCbBox">
              <div className="home-cb-title">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"></path>
                </svg>
                Prefer we call you?
              </div>
              <div className="home-cb-sub">
                Leave your number &mdash; we&apos;ll call you back within 30 minutes (Mon&ndash;Fri, 8am&ndash;4pm).
              </div>
              <div className="home-cb-inputs">
                <input
                  type="text"
                  id="h-cb-name"
                  placeholder="Name"
                  value={cbName}
                  onChange={(e) => setCbName(e.target.value)}
                />
                <input
                  type="tel"
                  id="h-cb-phone"
                  placeholder="Phone"
                  value={cbPhone}
                  onChange={(e) => setCbPhone(e.target.value)}
                />
                <button type="button" className="home-cb-btn" id="h-cb-btn" onClick={handleCallback}>
                  Call Me
                </button>
              </div>
              {callbackSubmitted && (
                <div className="home-cb-msg" style={{ display: 'block', color: '#10b981', marginTop: '10px' }}>
                  ✓ Got it! We will call you within 30 minutes.
                </div>
              )}
            </div>

            {formSubmitted && (
              <div className="form-ok-msg" style={{ display: 'block' }}>
                Thank you! Your consultation request has been received. We will contact you shortly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
