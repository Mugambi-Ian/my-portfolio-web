'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

import {
  CONTACT_EMAIL,
  HOME_SECTIONS,
  RESUME_DOWNLOAD_PATH,
  RESUME_SECTIONS,
  SOCIAL_LINKS,
} from './config';

interface NavDrawerProps {
  open: boolean;
  onClose: () => void;
  pathname: string;
}

function resolveHref(target: string, pathname: string) {
  const hash = `#${target}`;
  if (pathname.includes('resume')) return hash;
  return pathname === '/' ? hash : `/#${target}`;
}

export default function NavDrawer({ open, onClose, pathname }: NavDrawerProps) {
  const isResume = pathname.includes('resume');
  const navItems = isResume ? RESUME_SECTIONS : HOME_SECTIONS;

  const primaryCta = isResume
    ? { label: 'Download', href: RESUME_DOWNLOAD_PATH }
    : { label: 'Résumé', href: '/resume' };

  const secondaryCta = isResume
    ? { label: 'Back Home', href: '/' }
    : { label: 'Let’s Talk', href: `mailto:${CONTACT_EMAIL}` };

  return (
    <AnimatePresence>
      {open && (
        <motion.nav
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="fixed inset-0 z-[60] flex flex-col bg-slate-950/95 px-6 py-8 text-slate-100 backdrop-blur-md"
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-xs font-semibold uppercase tracking-[0.45em] text-emerald-300">
              Navigate
            </span>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-slate-700/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-300 transition hover:border-emerald-300 hover:text-emerald-200"
            >
              Close
            </button>
          </div>

          <ul className="mt-10 flex flex-col gap-3">
            {navItems.map((item) => (
              <li key={item.target}>
                <Link
                  href={resolveHref(item.target, pathname)}
                  onClick={onClose}
                  className="flex w-full items-center justify-between rounded-2xl border border-slate-800/70 bg-slate-900/60 px-5 py-4 text-sm font-semibold uppercase tracking-[0.35em] text-slate-200 transition hover:border-emerald-300 hover:text-emerald-200"
                >
                  {item.label}
                  <span className="text-[10px] uppercase tracking-[0.45em] text-emerald-300">
                    Jump
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-col gap-3">
            <Link
              href={primaryCta.href}
              onClick={onClose}
              className="rounded-2xl border border-emerald-400/40 px-5 py-4 text-sm font-semibold uppercase tracking-[0.35em] text-emerald-200 transition hover:border-emerald-300 hover:text-emerald-100"
            >
              {primaryCta.label}
            </Link>
            <a
              href={secondaryCta.href}
              onClick={onClose}
              className="rounded-2xl bg-emerald-400 px-5 py-4 text-center text-sm font-semibold uppercase tracking-[0.35em] text-slate-950 transition hover:bg-emerald-300"
            >
              {secondaryCta.label}
            </a>
          </div>

          <div className="mt-auto grid grid-cols-2 gap-3 pt-10">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 px-5 py-4 text-sm font-semibold uppercase tracking-[0.35em] text-slate-300 transition hover:border-emerald-300 hover:text-emerald-100"
              >
                {social.label}
              </a>
            ))}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
