import clsx from 'clsx';

interface GridBackdropProps {
  className?: string;
  /** Grid cell size in px. */
  cell?: number;
}

const HAIRLINE = 'rgba(148,163,184,0.07)';

/**
 * Decorative hairline grid for hero/contact bands. Purely CSS, never
 * interactive: the parent must be `relative overflow-hidden`.
 */
export function GridBackdrop({ className, cell = 64 }: GridBackdropProps) {
  const size = `${cell}px`;
  const fade =
    'linear-gradient(to bottom, #000 0%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0) 100%)';

  return (
    <div
      aria-hidden
      className={clsx(
        'pointer-events-none absolute inset-0 select-none',
        className
      )}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: [
            `repeating-linear-gradient(to right, ${HAIRLINE} 0 1px, transparent 1px ${size})`,
            `repeating-linear-gradient(to bottom, ${HAIRLINE} 0 1px, transparent 1px ${size})`,
          ].join(', '),
          WebkitMaskImage: fade,
          maskImage: fade,
        }}
      />
    </div>
  );
}
