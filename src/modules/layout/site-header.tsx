'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import { SITE } from '@/config/site';
import { IconClose, IconGitHub, IconLinkedIn, IconMenu } from '@/modules/icons';

const NAV_LINKS = [
  { label: 'Work', href: '/#work' },
  { label: 'Experience', href: '/#experience' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
] as const;

const RESUME_HREF = '/resume/';

const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber';

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

const underline =
  'relative after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-amber after:transition-transform hover:after:scale-x-100';

function LogoMark() {
  return (
    <>
      <span className="text-fg-muted transition-colors group-hover:text-fg">
        ian@nairobi
      </span>
      <span className="text-fg-faint">:~</span>
      <span className="text-amber">$</span>
    </>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return () => {};
    // Captured now so the cleanup can hand focus back even if the drawer is
    // closed by a nav link that unmounts the whole subtree.
    const trigger = triggerRef.current;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
        return;
      }
      if (event.key !== 'Tab') return;
      const drawer = drawerRef.current;
      if (!drawer) return;
      // Queried per keystroke: the drawer's focusable set is not static.
      const nodes = Array.from(
        drawer.querySelectorAll<HTMLElement>(FOCUSABLE)
      ).filter((node) => node.tabIndex >= 0);
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (!first || !last) return;
      const active = document.activeElement;
      const inside = active instanceof Node && drawer.contains(active);
      if (event.shiftKey) {
        if (!inside || active === first) {
          event.preventDefault();
          last.focus();
        }
      } else if (!inside || active === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener('keydown', onKeyDown);
    document.body.classList.add('overflow-hidden');
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.classList.remove('overflow-hidden');
      trigger?.focus();
    };
  }, [open]);

  const onResume = pathname.startsWith('/resume');

  return (
    <header
      className={clsx(
        'sticky top-0 z-40 border-b border-line bg-ink/80',
        // backdrop-filter would make this element the containing block for the
        // fixed drawer, so it is dropped while the drawer is mounted.
        !open && 'backdrop-blur-md'
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-amber focus:px-3 focus:py-2 focus:font-mono focus:text-sm focus:text-ink"
      >
        skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-wrap items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className={`group font-mono text-sm transition-colors hover:text-fg ${focusRing}`}
          aria-label="Ian Mugambi — home"
        >
          <LogoMark />
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <nav aria-label="Primary">
            <ul className="flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`font-mono text-[13px] text-fg-muted transition-colors hover:text-fg ${underline} ${focusRing}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <span aria-hidden className="h-4 w-px bg-line" />

          <div className="flex items-center gap-4">
            <a
              href={SITE.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className={`text-fg-muted transition-colors hover:text-amber ${focusRing}`}
            >
              <IconGitHub className="size-4" />
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className={`text-fg-muted transition-colors hover:text-amber ${focusRing}`}
            >
              <IconLinkedIn className="size-4" />
            </a>
          </div>

          <Link
            href={RESUME_HREF}
            aria-current={onResume ? 'page' : undefined}
            className={clsx(
              'border px-3 py-1.5 font-mono text-[13px] transition-colors',
              onResume
                ? 'border-amber bg-amber text-ink'
                : 'border-amber/60 text-amber hover:bg-amber hover:text-ink',
              focusRing
            )}
          >
            résumé
          </Link>
        </div>

        <button
          ref={triggerRef}
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          // The drawer only exists while open, so the relationship is only
          // advertised while its target is in the DOM.
          aria-controls={open ? 'site-drawer' : undefined}
          aria-label="Open menu"
          className={`text-fg md:hidden ${focusRing}`}
        >
          <IconMenu />
        </button>
      </div>

      {open && (
        <div
          ref={drawerRef}
          id="site-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-ink"
        >
          <div className="mx-auto flex h-16 w-full max-w-wrap items-center justify-between border-b border-line px-5 sm:px-8">
            <span className="group font-mono text-sm">
              <LogoMark />
            </span>
            <button
              type="button"
              autoFocus
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className={`text-fg ${focusRing}`}
            >
              <IconClose />
            </button>
          </div>

          <nav
            aria-label="Primary"
            className="mx-auto w-full max-w-wrap px-5 sm:px-8"
          >
            <ul className="divide-y divide-line">
              {NAV_LINKS.map((link) => (
                <li key={link.href} className="py-4">
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`font-mono text-2xl text-fg-muted transition-colors hover:text-amber ${focusRing}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mx-auto mt-auto w-full max-w-wrap px-5 pb-10 sm:px-8">
            <Link
              href={RESUME_HREF}
              onClick={() => setOpen(false)}
              aria-current={onResume ? 'page' : undefined}
              className={clsx(
                'block border p-3 text-center font-mono text-sm transition-colors',
                onResume
                  ? 'border-amber bg-amber text-ink'
                  : 'border-amber/60 text-amber hover:bg-amber hover:text-ink',
                focusRing
              )}
            >
              résumé
            </Link>
            <div className="mt-8 flex items-center gap-6 border-t border-line pt-6">
              <a
                href={SITE.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className={`text-fg-muted transition-colors hover:text-amber ${focusRing}`}
              >
                <IconGitHub />
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className={`text-fg-muted transition-colors hover:text-amber ${focusRing}`}
              >
                <IconLinkedIn />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
