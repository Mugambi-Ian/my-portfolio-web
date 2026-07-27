import clsx from 'clsx';
import type { ReactNode } from 'react';

interface TerminalPanelProps {
  title: string;
  children: ReactNode;
  className?: string;
}

/**
 * Hairline window chrome. Use it where monospace content carries real
 * information — never as empty decoration.
 */
export function TerminalPanel({
  title,
  children,
  className,
}: TerminalPanelProps) {
  return (
    <div
      className={clsx(
        'overflow-hidden rounded-sm border border-line bg-ink-raised',
        className
      )}
    >
      <div className="flex items-center gap-2 border-b border-line bg-ink-overlay px-3 py-2">
        <span aria-hidden className="size-2 rounded-full bg-line-strong" />
        <span aria-hidden className="size-2 rounded-full bg-line-strong" />
        <span aria-hidden className="size-2 rounded-full bg-line-strong" />
        <span className="ml-1 font-mono text-[11px] text-fg-faint">
          {title}
        </span>
      </div>
      <div className="overflow-x-auto p-4 font-mono text-[13px] leading-relaxed sm:p-5">
        {children}
      </div>
    </div>
  );
}
