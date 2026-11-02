import type { Metadata } from 'next';
import './globals.css';
import ScrollEffects from '@/components/ScrollEffects';

export const metadata: Metadata = {
  title: 'Sophria Construction | Luxury Renovations & Flooring Vancouver & Ontario',
  description: 'Sophria Construction is an Ontario and Vancouver-based design-build firm specializing in high-end residential renovations and commercial transformations.',
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
      </head>
      <body data-page="home">
        <ScrollEffects />
        {children}
      </body>
    </html>
  );
}
