import type { Metadata } from 'next';

import { SITE } from '@/config/site';
import { ResumeDocument } from '@/modules/resume/document';
import { DownloadResumeButton } from '@/modules/resume/download-button';

const RESUME_TITLE = `Résumé | ${SITE.name}`;
const RESUME_DESCRIPTION = `The full résumé of ${SITE.name}, a senior full-stack engineer based in ${SITE.location} — every role, project, and stack, downloadable as a two-page PDF.`;

export const metadata: Metadata = {
  title: 'Résumé',
  description: RESUME_DESCRIPTION,
  alternates: { canonical: '/resume/' },
  openGraph: {
    title: RESUME_TITLE,
    description: RESUME_DESCRIPTION,
    url: '/resume/',
    siteName: SITE.name,
    type: 'profile',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: RESUME_TITLE,
    description: RESUME_DESCRIPTION,
  },
};

export default function ResumePage() {
  return (
    <>
      <div className="mx-auto flex max-w-wrap flex-wrap items-center justify-between gap-4 px-5 py-6 sm:px-8 print:hidden">
        <p className="font-mono text-sm text-fg-muted">
          ~/resume — full history; the PDF trims to two pages
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <DownloadResumeButton />
          <a
            href={`mailto:${SITE.email}`}
            className="font-mono text-sm text-fg-muted transition-colors hover:text-amber focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
          >
            email me
          </a>
        </div>
      </div>
      <div className="bg-paper">
        <ResumeDocument />
      </div>
    </>
  );
}
