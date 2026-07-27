'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';

interface TypedLineProps {
  /** Shell command typed after the prompt, without the leading "$". */
  command: string;
  className?: string;
}

export function TypedLine({ command, className }: TypedLineProps) {
  // SSR renders the full command so markup matches on hydration; the effect
  // then replays the typing animation unless the user prefers reduced motion.
  const [shown, setShown] = useState(command);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return () => {};
    }
    let count = 0;
    setShown('');
    const interval = window.setInterval(() => {
      count += 1;
      setShown(command.slice(0, count));
      if (count >= command.length) {
        window.clearInterval(interval);
      }
    }, 35);
    return () => window.clearInterval(interval);
  }, [command]);

  return (
    <span className={clsx('relative inline-block font-mono', className)}>
      {/* The only copy exposed to assistive tech; both visual layers below are
          decorative duplicates of it. */}
      <span className="sr-only">{command}</span>
      {/* Invisible full copy reserves the line so typing never reflows. */}
      <span aria-hidden className="invisible whitespace-pre">
        <span>$</span>
        {` ${command}`}
        <span>▊</span>
      </span>
      <span aria-hidden className="absolute inset-0 whitespace-pre">
        <span className="text-term-green">$</span>
        {` ${shown}`}
        <span className="text-amber motion-safe:animate-caret">▊</span>
      </span>
    </span>
  );
}
