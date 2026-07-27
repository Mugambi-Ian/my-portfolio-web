import Link from 'next/link';

import { CASE_STUDIES } from '@/data/case-studies';
import type { Metric } from '@/data/types';
import { IconArrow } from '@/modules/icons';
import { Reveal } from '@/modules/shared/reveal';
import { Section } from '@/modules/shared/section';

/** Cross-project totals, drawn from the case studies below. */
const RAIL: Metric[] = [
  { value: '5+ yrs', label: 'shipping to production' },
  { value: '3', label: 'fintech, retail, pensions' },
  { value: '5', label: 'languages in production' },
  { value: 'CI/CD', label: 'set up on all three' },
];

export function SelectedWork() {
  return (
    <Section
      id="work"
      index="01"
      title="Selected Work"
      kicker="Three production systems I can walk through end to end — architecture, trade-offs, and what shipped."
    >
      <dl className="grid grid-cols-2 gap-px border border-line bg-line lg:grid-cols-4">
        {RAIL.map((m) => (
          <div key={m.label} className="flex flex-col-reverse bg-ink p-5">
            <dt className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-fg-faint">
              {m.label}
            </dt>
            <dd className="font-mono text-2xl text-amber sm:text-3xl">
              {m.value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-10 grid gap-6 sm:mt-12 lg:grid-cols-3">
        {CASE_STUDIES.map((s, i) => (
          <Reveal key={s.slug} delayMs={i * 70} className="h-full">
            {/* `isolate` gives the card its own stacking context so the link
                overlay can sit behind the copy without slipping behind the
                card surface itself. */}
            <article className="group relative isolate flex h-full flex-col border border-line bg-ink-raised p-6 transition-colors hover:border-line-strong hover:bg-ink-overlay">
              <span
                aria-hidden
                className="pointer-events-none absolute right-5 top-4 select-none font-mono text-5xl leading-none text-line-strong/60"
              >
                {s.index}
              </span>

              <h3 className="max-w-[70%] text-2xl font-semibold text-fg transition-colors group-hover:text-amber">
                <Link
                  href={`/work/${s.slug}/`}
                  className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
                >
                  {s.name}
                  {/* Painted behind the card copy (negative z-index) so the
                      summary, metrics and stack stay drag-selectable. */}
                  <span className="absolute inset-0 -z-10">
                    <span className="sr-only">— read case study</span>
                  </span>
                </Link>
              </h3>

              <p className="mt-2 font-mono text-[11px] text-fg-faint">
                {s.client} · {s.period}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-fg-muted">
                {s.summary}
              </p>

              <div aria-hidden className="mt-5 h-px w-full bg-line" />

              <dl className="mt-5 grid grid-cols-2 gap-4">
                {s.metrics.slice(0, 2).map((m) => (
                  // justify-end keeps the labels on a shared baseline even when
                  // one value wraps to two lines.
                  <div
                    key={m.label}
                    className="flex flex-col-reverse justify-end"
                  >
                    <dt className="mt-1 text-[11px] leading-snug text-fg-faint">
                      {m.label}
                    </dt>
                    <dd className="font-mono text-sm leading-snug text-amber">
                      {m.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-auto pt-8">
                <p className="font-mono text-[11px] leading-relaxed text-fg-faint">
                  {s.stack.slice(0, 6).join(' · ')}
                </p>
                <p
                  aria-hidden
                  className="mt-4 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-amber"
                >
                  read case study
                  <IconArrow className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
