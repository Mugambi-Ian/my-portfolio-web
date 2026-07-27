import clsx from 'clsx';
import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  /** Two-digit chapter number, e.g. "01". */
  index: string;
  title: string;
  /** Optional standfirst paragraph under the title. */
  kicker?: string;
  /** Raised surface band, for alternating chapter tone. */
  band?: boolean;
  className?: string;
  children: ReactNode;
}

/**
 * Chapter shell: hairline band, 12-column header rail (index + slug on the
 * left, title + kicker on the right), then the caller's own layout.
 */
export function Section({
  id,
  index,
  title,
  kicker,
  band = false,
  className,
  children,
}: SectionProps) {
  const slug = id.replace(/-/g, ' ');

  return (
    <section
      id={id}
      className={clsx(
        'scroll-mt-20 border-t border-line',
        band ? 'bg-ink-raised' : 'bg-ink',
        className
      )}
    >
      <div className="mx-auto max-w-wrap px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-y-5 lg:grid-cols-12 lg:gap-x-8">
          <div aria-hidden className="lg:col-span-3">
            <p className="font-mono text-2xl leading-none text-amber sm:text-3xl">
              {index}
            </p>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted sm:text-xs">
              {`// ${slug}`}
            </p>
          </div>
          <div className="lg:col-span-9">
            <h2 className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
              {title}
            </h2>
            {kicker ? (
              <p className="mt-4 max-w-[62ch] text-[15px] leading-relaxed text-fg-muted sm:text-base">
                {kicker}
              </p>
            ) : null}
          </div>
        </div>
        <div aria-hidden className="mt-8 h-px w-full bg-line sm:mt-10" />
        <div className="mt-10 sm:mt-14">{children}</div>
      </div>
    </section>
  );
}
