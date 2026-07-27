import clsx from 'clsx';
import Link from 'next/link';

import { SITE } from '@/config/site';
import { EXPERIENCE } from '@/data/experience';
import { Section } from '@/modules/shared/section';
import { formatDate, formatRange } from '@/utils';

const SINCE = formatDate(SITE.professionalSince);
const KICKER = `Building since ${SITE.buildingSince} · professional roles since ${SINCE}.`;

export function Experience() {
  return (
    <Section id="experience" index="03" title="Experience" kicker={KICKER}>
      <ol className="divide-y divide-line">
        {EXPERIENCE.map((e) => {
          const current = e.endDate === null;

          return (
            <li key={e.id} className="py-12 first:pt-0 last:pb-0">
              <div className="grid gap-y-5 lg:grid-cols-12 lg:gap-x-8">
                <div className="lg:col-span-3">
                  <p className="flex items-center gap-2.5 font-mono text-xs text-fg-faint">
                    <span
                      aria-hidden
                      className={clsx(
                        'size-2 shrink-0',
                        current ? 'bg-term-green' : 'bg-line-strong'
                      )}
                    />
                    {formatRange(e.startDate, e.endDate)}
                  </p>
                  {current ? (
                    <p className="ml-[1.125rem] mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-term-green">
                      current
                    </p>
                  ) : null}

                  {/* The stack lives in the date gutter so the entry column
                      keeps a single readable measure and the rail is not empty. */}
                  <ul className="ml-[1.125rem] mt-5 hidden flex-wrap gap-x-2 gap-y-1 lg:flex">
                    {e.stack.map((tech) => (
                      <li
                        key={tech}
                        className="border border-line px-1.5 py-0.5 font-mono text-[10px] text-fg-faint"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-9">
                  <h3 className="text-xl font-semibold text-fg sm:text-2xl">
                    {e.title}
                  </h3>
                  <p className="mt-1 font-mono text-sm text-amber">
                    {e.company}
                  </p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-fg-faint">
                    {e.location}
                  </p>

                  <p className="mt-4 max-w-[62ch] text-sm leading-relaxed text-fg-muted">
                    {e.summary}
                  </p>

                  <ul className="mt-4 max-w-[62ch] space-y-1.5 text-sm leading-relaxed text-fg-muted">
                    {e.highlights.slice(0, 3).map((h) => (
                      <li key={h} className="flex gap-2">
                        <span aria-hidden className="font-mono text-amber/60">
                          –
                        </span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-5 font-mono text-[11px] leading-relaxed text-fg-faint lg:hidden">
                    {e.stack.join(' · ')}
                  </p>

                  {e.caseStudy ? (
                    <Link
                      href={`/work/${e.caseStudy}/`}
                      className="mt-4 inline-block font-mono text-xs text-amber transition-colors hover:text-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
                    >
                      case study →
                    </Link>
                  ) : null}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
