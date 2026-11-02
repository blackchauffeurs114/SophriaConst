import type { Metadata } from 'next';
import './globals.css';

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
      </head>
      <body data-page="home">
        {children}
      </body>
    </html>
  );
}
