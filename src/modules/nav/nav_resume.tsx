'use client';

import { usePathname } from 'next/navigation';

import { NavLink } from '@/modules/nav/nav_link';

import { ICDocumentDownload } from '../icons';
import { ICResume } from '../icons/header';

export default function NavResumeLink({
  dTitle,
  rTitle,
  lang,
}: {
  dTitle: string;
  rTitle: string;
  lang: string;
}) {
  const pathname = usePathname();
  return pathname.includes('resume') ? (
    <NavLink
      icon={ICDocumentDownload}
      title={dTitle}
      href={`/resume/download?lang=${lang}`}
    />
  ) : (
    <NavLink icon={ICResume} title={rTitle} href={`/resume?lang=${lang}`} />
  );
}
