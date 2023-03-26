import './global.css';

import type { Metadata } from 'next';

import usePageTranslation from '@/hooks/usePageTranslation';
import { Header } from '@/modules/layout/app_header';

import { gordita } from './fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const { lang } = usePageTranslation('common', 'Header');
  return (
    <html lang={lang} style={gordita.style} className="dark">
      <body className="relative flex h-screen w-screen flex-col antialiased dark:bg-black">
        <Header />
        <main className="relative flex h-full w-full flex-col overflow-y-auto overflow-x-clip">
          {children}
        </main>
      </body>
    </html>
  );
}

const { PROJECT_URI } = process.env;
export const metadata: Metadata = {
  title: {
    default: 'Ian Mugambi',
    template: '%s | Ian Mugambi',
  },
  description: 'A Fullstack Developer And UI/UX Designer',
  openGraph: {
    title: 'Ian Mugambi',
    description: 'A Fullstack Developer And UI/UX Designer',
    url: PROJECT_URI,
    siteName: 'Ian Mugambi',
    images: [
      {
        url: `${PROJECT_URI}/og.jpg`,
        width: 1920,
        height: 1080,
      },
    ],
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
    title: 'Ian Mugambi',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
};
