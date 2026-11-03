import type { Metadata } from 'next';
import './globals.css';
import ScrollEffects from '@/components/ScrollEffects';

export const metadata: Metadata = {
  metadataBase: new URL('https://sophria-const.vercel.app'),
  title: 'Sophria Private Limited | Commercial Flooring & Luxury Renovations Mississauga & Ontario',
  description: 'Sophria Private Limited — Sourcing, installing and repairing terrazzo, tile, stone, resilient flooring and luxury bespoke renovations across Mississauga and Ontario for over 25 years.',
  applicationName: 'Sophria Private Limited',
  authors: [{ name: 'Sophria Private Limited' }],
  keywords: [
    'Terrazzo Flooring Mississauga',
    'Commercial Flooring Ontario',
    'VCT Flooring',
    'Carpet Tile',
    'Rubber Flooring',
    'Sheet Vinyl',
    'Epoxy Flooring',
    'Kitchen Remodeling Mississauga',
    'Bathroom Renovations Mississauga',
    'Basement Finishing Ontario',
    'Quartz Countertops Mississauga',
  ],
  icons: {
    icon: [
      { url: '/assets/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/sophria-logo.png', type: 'image/png' },
    ],
    apple: [
      { url: '/assets/favicon-180.png', sizes: '180x180', type: 'image/png' },
      { url: '/assets/sophria-logo.png', type: 'image/png' },
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
        url: '/assets/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sophria Private Limited - Commercial Flooring & Luxury Renovations',
      },
      {
        url: '/assets/sophria-logo.png',
        width: 500,
        height: 180,
        alt: 'Sophria Logo',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sophria Private Limited | Commercial Flooring & Luxury Renovations Mississauga & Ontario',
    description: 'Sophria Private Limited — Sourcing, installing and repairing terrazzo, tile, stone, resilient flooring and bespoke renovations across Mississauga and Ontario for over 25 years.',
    images: ['/assets/og-image.png'],
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
        
        {/* Favicon & Touch Icons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32.png" />
        <link rel="icon" type="image/png" href="/assets/sophria-logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon-180.png" />
        <link rel="shortcut icon" href="/assets/favicon-32.png" />

        {/* Explicit Social / WhatsApp OpenGraph Tags */}
        <meta property="og:title" content="Sophria Private Limited | Commercial Flooring & Luxury Renovations Mississauga & Ontario" />
        <meta property="og:description" content="Sophria Private Limited — Sourcing, installing and repairing terrazzo, tile, stone, resilient flooring and luxury bespoke renovations across Mississauga and Ontario for over 25 years." />
        <meta property="og:image" content="https://sophria-const.vercel.app/assets/og-image.png" />
        <meta property="og:image:secure_url" content="https://sophria-const.vercel.app/assets/og-image.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
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
