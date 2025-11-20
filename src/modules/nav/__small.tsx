'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { IC_Drawer } from '../icons/header';
import NavDrawer from './__drawer';

export function SmallHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4 md:hidden">
        <div
          className={clsx(
            'pointer-events-auto flex w-full max-w-3xl items-center justify-between rounded-full border border-slate-800/60 bg-slate-950/80 px-4 py-3 text-slate-200 shadow-[0_25px_70px_-40px_rgba(16,185,129,0.65)] backdrop-blur'
          )}
        >
          <a href="/" className="flex items-center gap-3">
            <span className="font-display text-xs font-semibold uppercase tracking-[0.45em] text-emerald-300">
              Ian Mugambi
            </span>
          </a>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label={open ? 'Close navigation' : 'Open navigation'}
              onClick={() => setOpen((prev) => !prev)}
              className="flex size-10 items-center justify-center rounded-full border border-slate-700/60 text-slate-100 transition hover:border-emerald-300 hover:text-emerald-200"
            >
              <IC_Drawer className="size-5" />
            </button>
          </div>
        </div>
      </header>

      <NavDrawer
        open={open}
        onClose={() => setOpen(false)}
        pathname={pathname}
      />
    </>
  );
}
