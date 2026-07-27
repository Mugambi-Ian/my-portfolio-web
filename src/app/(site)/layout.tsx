import type { ReactNode } from 'react';

import { SiteFooter } from '@/modules/layout/site-footer';
import { SiteHeader } from '@/modules/layout/site-header';
import { PersonJsonLd } from '@/modules/shared/json-ld';

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter />
      <PersonJsonLd />
    </>
  );
}
