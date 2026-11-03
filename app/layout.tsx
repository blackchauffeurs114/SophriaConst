import type { Metadata } from 'next';
import './globals.css';
import ScrollEffects from '@/components/ScrollEffects';

export const metadata: Metadata = {
  metadataBase: new URL('https://sophria-const.vercel.app'),
  title: 'Sophria Private Limited | Commercial Flooring & Luxury Renovations Mississauga & Ontario',
  description: 'Sophria Private Limited — Sourcing, installing and repairing terrazzo, tile, stone, resilient flooring and luxury bespoke renovations across Mississauga and Ontario for over 25 years.',
  applicationName: 'Sophria Private Limited',
  authors: [{ name: 'Sophria Private Limited' }],
  icons: {
    icon: [
      { url: '/assets/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/assets/favicon-180.png', sizes: '180x180', type: 'image/png' },
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/assets/favicon-32.png',
  },
  openGraph: {
    title: 'Sophria Private Limited | Commercial Flooring & Luxury Renovations Mississauga & Ontario',
    description: 'Sophria Private Limited — Sourcing, installing and repairing terrazzo, tile, stone, resilient flooring and bespoke residential renovations across Mississauga and Ontario for over 25 years.',
    url: 'https://sophria-const.vercel.app',
    siteName: 'Sophria Private Limited',
    images: [
      {
        url: '/assets/og-share.png',
        width: 1200,
        height: 630,
        alt: 'Sophria Private Limited - Commercial Flooring & Luxury Renovations',
      },
      {
        url: '/assets/og-square.png',
        width: 800,
        height: 800,
        alt: 'Sophria Private Limited',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sophria Private Limited | Commercial Flooring & Luxury Renovations Mississauga & Ontario',
    description: 'Sophria Private Limited — Sourcing, installing and repairing terrazzo, tile, stone, resilient flooring and bespoke renovations across Mississauga and Ontario for over 25 years.',
    images: ['/assets/og-share.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        
        {/* Favicon & Touch Icons - Solid Dark Background */}
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="180x180" href="/assets/favicon-180.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon-180.png" />
        <link rel="shortcut icon" href="/assets/favicon-32.png" />

        {/* Explicit Social / WhatsApp OpenGraph Tags (Solid Black #05080d) */}
        <meta property="og:title" content="Sophria Private Limited | Commercial Flooring & Luxury Renovations Mississauga & Ontario" />
        <meta property="og:description" content="Sophria Private Limited — Sourcing, installing and repairing terrazzo, tile, stone, resilient flooring and luxury bespoke renovations across Mississauga and Ontario for over 25 years." />
        <meta property="og:image" content="https://sophria-const.vercel.app/assets/og-share.png" />
        <meta property="og:image:secure_url" content="https://sophria-const.vercel.app/assets/og-share.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image" content="https://sophria-const.vercel.app/assets/og-square.png" />
        <meta property="og:image:secure_url" content="https://sophria-const.vercel.app/assets/og-square.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="800" />
        <meta property="og:url" content="https://sophria-const.vercel.app/" />
        <meta property="og:site_name" content="Sophria Private Limited" />
        <meta property="og:type" content="website" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600;1,700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Alegreya+Sans:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400;1,500&family=Didact+Gothic&display=swap"
          rel="stylesheet"
        />

        {/* Official Roomvo AI Visualizer Widget */}
        <script
          async
          id="roomvoAssistant"
          type="text/javascript"
          data-locale="en-ca"
          data-position="bottom-right"
          src="https://www.roomvo.com/static/scripts/b2b/common/assistant.js"
        ></script>
      </head>
      <body data-page="home">
        <ScrollEffects />
        {children}
      </body>
    </html>
  );
}
