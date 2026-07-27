'use client';

import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

import { IconDownload } from '@/modules/icons';

export function DownloadResumeButton({ className }: { className?: string }) {
  const frameRef = useRef<HTMLIFrameElement | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => () => frameRef.current?.remove(), []);

  const handleClick = () => {
    setBusy(true);
    frameRef.current?.remove();

    const iframe = document.createElement('iframe');
    iframe.src = '/resume/print/';
    // Firefox refuses to print display:none iframes, so give the frame a real
    // A4-sized box and hide it with opacity/z-index instead.
    Object.assign(iframe.style, {
      position: 'fixed',
      right: '0',
      bottom: '0',
      width: '210mm',
      height: '297mm',
      opacity: '0',
      pointerEvents: 'none',
      border: '0',
      zIndex: '-1',
    });
    iframe.setAttribute('aria-hidden', 'true');
    iframe.title = 'Résumé print frame';
    // No sandbox attribute: sandboxed frames block the print dialog.

    // Exactly one of the two paths below may ever reach a print dialog.
    let cancelled = false;

    const teardown = () => {
      iframe.onload = null;
      iframe.remove();
      if (frameRef.current === iframe) frameRef.current = null;
    };

    const timeout = window.setTimeout(() => {
      cancelled = true;
      // Detaching the frame and dropping its handler is what makes the two
      // paths exclusive: a frame that finishes loading at 10.1s would
      // otherwise still call win.print() on top of the fallback, giving the
      // user two print dialogs.
      teardown();
      setBusy(false);
      // Deliberately NOT window.open() here. This runs 10s after the click, so
      // it is outside the transient user-activation window and popup blockers
      // kill it — the fallback would fail precisely when it is needed.
      // Navigating the current tab always lands, and /resume/print/?print=1
      // auto-prints on load, so the user still gets the PDF.
      window.location.assign('/resume/print/?print=1');
    }, 10000);

    iframe.onload = async () => {
      if (cancelled) return;
      window.clearTimeout(timeout);

      try {
        const win = iframe.contentWindow;
        if (!win) throw new Error('no window');
        const doc = win.document;
        if (doc.fonts && doc.fonts.ready) await doc.fonts.ready;
        await new Promise<void>((resolve) => {
          requestAnimationFrame(() => setTimeout(resolve, 150));
        });
        win.focus();
        // print() blocks until the dialog closes in Chrome but returns
        // immediately where the preview is async (Firefox, Safari), so wait
        // for afterprint before tearing the frame down — removing it mid-job
        // cancels the print. The guard covers browsers that never fire it.
        await new Promise<void>((resolve) => {
          let guard = 0;
          const done = () => {
            window.clearTimeout(guard);
            resolve();
          };
          guard = window.setTimeout(done, 60000);
          win.addEventListener('afterprint', done, { once: true });
          win.print();
        });
      } catch {
        // Still within the activation window that the click opened, so this
        // window.open() is not treated as an unsolicited popup.
        window.open('/resume/print/?print=1', '_blank', 'noopener');
      } finally {
        // The frame is aria-hidden but its links stay focusable, so leaving it
        // mounted trips axe's aria-hidden-focus rule.
        teardown();
        setBusy(false);
      }
    };

    frameRef.current = iframe;
    document.body.appendChild(iframe);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={busy}
      className={clsx(
        'inline-flex items-center gap-2 border border-amber px-5 py-2.5 font-mono text-sm text-amber transition-colors hover:bg-amber hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber',
        className
      )}
    >
      <IconDownload className="size-4" />
      {busy ? 'preparing…' : 'download PDF'}
    </button>
  );
}
