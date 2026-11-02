import React from 'react';
import Link from 'next/link';

export default function ConsultationBanner() {
  return (
    <section className="cta-banner" id="consultation">
      <div className="banner-media" style={{ backgroundImage: "url('/assets/img/projects/ext-rear.jpg')" }}></div>
      <div className="banner-scrim"></div>
      <div className="banner-inner">
        <div className="eyebrow center reveal">YOUR VISION, BUILT</div>
        <h2 className="reveal d1">Let&apos;s create a space worth keeping.</h2>
        <p className="reveal d2">
          Every great build begins with a conversation. Tell us about your project and we&apos;ll show you what&apos;s possible.
        </p>
        <Link href="/estimate" className="bts-cta-btn reveal d3">
          BOOK A PRIVATE CONSULTATION
        </Link>
      </div>
    </section>
  );
}
