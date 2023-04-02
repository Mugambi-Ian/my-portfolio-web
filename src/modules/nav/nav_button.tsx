'use client';

import { usePathname } from 'next/navigation';

import { NavLink } from '@/modules/nav/nav_link';

import { ICHome, ICResume } from '../icons/header';

export default function NavButton({
  hTitle,
  rTitle,
  lang,
}: {
  hTitle: string;
  rTitle: string;
  lang: string;
}) {
  const pathname = usePathname();
  return pathname.includes('resume') ? (
    <NavLink icon={ICHome} title={hTitle} href={`/${lang}`} />
  ) : (
    <NavLink icon={ICResume} title={rTitle} href={`/resume/${lang}`} />
  );
}
