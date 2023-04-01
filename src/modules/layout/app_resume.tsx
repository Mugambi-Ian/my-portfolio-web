'use client';

import { usePathname } from 'next/navigation';
import useTranslation from 'next-translate/useTranslation';

import { AppNav } from '@/components/app-nav';

import { ICDocumentDownload } from '../icons';
import { ICResume } from '../icons/header';

export default function ResumeLink({
  dTitle,
  rTitle,
}: {
  dTitle: string;
  rTitle: string;
}) {
  const { lang } = useTranslation('common');
  const pathname = usePathname();
  return pathname.includes('resume') ? (
    <AppNav
      icon={ICDocumentDownload}
      title={dTitle}
      href={`/resume/download?lang=${lang}`}
    />
  ) : (
    <AppNav icon={ICResume} title={rTitle} href={`/resume?lang=${lang}`} />
  );
}
