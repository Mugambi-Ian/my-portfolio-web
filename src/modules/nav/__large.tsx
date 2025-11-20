import { IC_Github, IC_Linkedin, IC_Logo } from '../icons/header';
import {
  type HeaderSectionLink,
  HOME_SECTIONS,
  RESUME_DOWNLOAD_PATH,
  RESUME_SECTIONS,
  SOCIAL_LINKS,
} from './config';

function resolveHref(target: string, pathname?: string) {
  const hash = `#${target}`;
  if (!pathname) return hash;
  if (pathname.includes('resume')) return hash;
  return hash;
}

export function LargeHeader({ pathname }: { pathname?: string }) {
  const isResume = pathname?.includes('resume');
  const sectionLinks: HeaderSectionLink[] = isResume
    ? RESUME_SECTIONS
    : HOME_SECTIONS;

  const primaryCta = isResume
    ? { label: 'Download', href: RESUME_DOWNLOAD_PATH }
    : { label: 'Résumé', href: '/resume' };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-6 z-50 hidden justify-center px-4 md:flex">
      <div className="pointer-events-auto flex w-full max-w-6xl items-center gap-6 rounded-full border border-slate-800/60 bg-slate-950/80 px-6 py-3 shadow-[0_30px_80px_-40px_rgba(16,185,129,0.65)] backdrop-blur">
        <a href="/" className="flex items-center gap-3">
          <IC_Logo className="size-8" />
          <span className="font-display text-sm font-semibold uppercase tracking-[0.4em] text-slate-100">
            Ian Mugambi
          </span>
        </a>

        <nav className="hidden flex-1 items-center justify-center gap-2 lg:flex">
          {sectionLinks.map((link) => (
            <a
              key={link.target}
              href={resolveHref(link.target, pathname)}
              className="rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-300 transition hover:text-emerald-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={SOCIAL_LINKS[0]?.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-9 items-center justify-center rounded-full border border-slate-700/60 text-emerald-300 transition hover:border-emerald-300 hover:text-emerald-200"
            >
              <IC_Linkedin className="size-4" />
            </a>
            <a
              href={SOCIAL_LINKS[1]?.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-9 items-center justify-center rounded-full border border-slate-700/60 text-emerald-300 transition hover:border-emerald-300 hover:text-emerald-200"
            >
              <IC_Github className="size-4" />
            </a>
          </div>
          <a
            href={primaryCta.href}
            className="hidden rounded-full border border-emerald-400/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-200 transition hover:border-emerald-300 hover:text-emerald-100 lg:inline-flex"
          >
            {primaryCta.label}
          </a>
        </div>
      </div>
    </header>
  );
}
