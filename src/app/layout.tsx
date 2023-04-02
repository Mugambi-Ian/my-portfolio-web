import './global.css';

import clsx from 'clsx';
import type { Metadata } from 'next';

import { useAppHeaders } from '@/hooks/useAppHeaders';
import usePageTranslation from '@/hooks/usePageTranslation';
import { Header } from '@/modules/layout/app_header';

import { gordita } from './fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const { darkMode, hideHeader } = useAppHeaders();
  const { lang } = usePageTranslation('common', 'Header');

  return (
    <html
      lang={lang}
      style={gordita.style}
      className={darkMode === null || darkMode !== 'false' ? ' dark' : ''}
    >
      <body className="relative flex h-screen w-screen flex-col antialiased dark:bg-black">
        <Header />
        <main
          className={clsx(
            'flex w-full flex-col overflow-x-clip',
            hideHeader && 'fixed inset-x-0 top-0 h-fit',
            !hideHeader && 'relative h-full overflow-y-auto'
          )}
        >
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
