import Link from 'next/link';

import { SITE } from '@/config/site';
import { IconGitHub, IconLinkedIn, IconMail } from '@/modules/icons';

const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber';

const monoLink =
  'font-mono text-sm text-fg-muted transition-colors hover:text-amber';

const FOOTER_LINKS = [
  { label: 'Work', href: '/#work' },
  { label: 'Experience', href: '/#experience' },
  { label: 'About', href: '/#about' },
  { label: 'Résumé', href: '/resume/' },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line print:hidden">
      <div className="mx-auto grid max-w-wrap gap-8 px-5 py-12 sm:grid-cols-3 sm:px-8">
        <div>
          <p className="font-mono text-sm">
            <span className="text-fg-muted">ian@nairobi</span>
            <span className="text-fg-faint">:~</span>
            <span className="text-amber">$</span>
          </p>
          <p className="mt-3 text-xs text-fg-faint">{SITE.title}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="space-y-3">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={`${monoLink} ${focusRing}`}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="flex items-start gap-2 font-mono text-xs leading-relaxed text-fg-muted">
            <span
              aria-hidden="true"
              className="mt-1.5 size-2 shrink-0 rounded-full bg-term-green"
            />
            open to opportunities — {SITE.location} · remote-friendly
          </p>

          <p className="mt-4">
            <a
              href={`mailto:${SITE.email}`}
              className={`font-mono text-base text-fg transition-colors hover:text-amber ${focusRing}`}
            >
              {SITE.email}
            </a>
          </p>

          <ul className="mt-6 space-y-3">
            <li>
              <a
                href={SITE.github}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-2 ${monoLink} ${focusRing}`}
              >
                <IconGitHub width={16} height={16} />
                GitHub
              </a>
            </li>
            <li>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-2 ${monoLink} ${focusRing}`}
              >
                <IconLinkedIn width={16} height={16} />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className={`flex items-center gap-2 ${monoLink} ${focusRing}`}
              >
                <IconMail width={16} height={16} />
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-wrap px-5 sm:px-8">
        <div aria-hidden className="h-px w-full bg-line" />
        <div className="flex flex-wrap justify-between gap-2 py-6 text-[11px] text-fg-faint">
          <p>
            © {year} {SITE.name}
          </p>
          <p>Built with Next.js — no trackers, no third-party requests.</p>
        </div>
      </div>
    </footer>
  );
}
