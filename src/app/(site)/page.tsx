import type { Metadata } from 'next';

import { SITE } from '@/config/site';
import { About } from '@/modules/home/about';
import { Contact } from '@/modules/home/contact';
import { Experience } from '@/modules/home/experience';
import { Hero } from '@/modules/home/hero';
import { OpenSource } from '@/modules/home/open-source';
import { Range } from '@/modules/home/range';
import { SelectedWork } from '@/modules/home/selected-work';

// Title and description come from the root layout defaults; only the
// canonical and the og:url are page-specific. `openGraph` replaces the
// parent block wholesale, so siteName/locale/type are repeated here.
export const metadata: Metadata = {
  alternates: { canonical: '/' },
  openGraph: {
    title: `${SITE.name} — ${SITE.title}`,
    description: SITE.description,
    url: '/',
    siteName: SITE.name,
    type: 'website',
    locale: 'en_US',
  },
};

export default function Page() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Range />
      <Experience />
      <OpenSource />
      <About />
      <Contact />
    </>
  );
}
