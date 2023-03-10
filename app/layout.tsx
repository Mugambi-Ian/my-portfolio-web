import './global.css';

import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={montserrat.style}>
      <body className="flex flex-col antialiased ">{children}</body>
    </html>
  );
}

const { PROJECT_URI } = process.env;
export const metadata: Metadata = {
  title: {
    default: 'Eyecan',
    template: '%s | Eyecan',
  },
  description: 'A Companion For Life',
  openGraph: {
    title: 'Eyecan',
    description: 'A Companion For Life',
    url: PROJECT_URI,
    siteName: 'Lee Robinson',
    images: [
      {
        url: `${PROJECT_URI}/og.jpg`,
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Eyecan',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
};
