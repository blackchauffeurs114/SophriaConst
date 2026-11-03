import type { Metadata } from 'next';
import './globals.css';
import ScrollEffects from '@/components/ScrollEffects';

export const metadata: Metadata = {
  title: 'Sophria Private Limited | Commercial Flooring & Luxury Renovations Mississauga & Ontario',
  description: 'Sophria Private Limited — Sourcing, installing and repairing terrazzo, tile, stone, resilient flooring and luxury renovations across Mississauga and Ontario for over 25 years.',
  icons: {
    icon: '/assets/favicon-32.png',
    apple: '/assets/favicon-180.png',
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
