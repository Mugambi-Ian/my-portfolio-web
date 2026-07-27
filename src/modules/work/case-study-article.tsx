import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

import { SITE } from '@/config/site';
import type { CaseStudy } from '@/data/types';
import { IconExternal } from '@/modules/icons';
import { GridBackdrop } from '@/modules/shared/grid-backdrop';

const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber';

const microLabel =
  'font-mono text-[11px] uppercase tracking-[0.2em] text-fg-faint';

/**
 * `divide-x`/`divide-y` on a 2-up grid also paints the cells that open a row,
 * doubling the container hairline. These per-cell corrections cancel that.
 */
function cellFix(i: number): string | false {
  if (i === 1) return 'border-t-0';
  if (i === 2) return 'border-l-0 lg:border-l';
  return false;
}

function RuleHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="flex items-center gap-4">
      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
        {children}
      </span>
      <span aria-hidden className="h-px flex-1 bg-line" />
    </h2>
  );
}

function Prose({ text }: { text: string }) {
  return (
    <div className="mt-5 max-w-[68ch] space-y-4 text-[15px] leading-relaxed text-fg-muted sm:text-base">
      {text.split('\n\n').map((paragraph) => (
        <p key={paragraph.slice(0, 32)}>{paragraph}</p>
      ))}
    </div>
  );
}

export function CaseStudyArticle({
  study,
  prev,
  next,
}: {
  study: CaseStudy;
  prev?: CaseStudy;
  next?: CaseStudy;
}) {
  const quote = study.pullQuote;

  const meta: { label: string; value: ReactNode }[] = [
    { label: 'Client', value: study.client },
    { label: 'Role', value: study.role },
    { label: 'Period', value: study.period },
    {
      label: 'Links',
      value: study.links.length ? (
        <span className="flex flex-col gap-1">
          {study.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-1.5 text-amber transition-colors hover:text-fg ${focusRing}`}
            >
              {link.label}
              <IconExternal width={13} height={13} />
            </a>
          ))}
        </span>
      ) : (
        <span className="text-fg-faint">&mdash;</span>
      ),
    },
  ];

  return (
    <article>
      <header className="relative overflow-hidden border-b border-line">
        <GridBackdrop cell={48} />
        <div className="relative mx-auto max-w-wrap px-5 py-14 sm:px-8 sm:py-20">
          <nav
            aria-label="Breadcrumb"
            className="font-mono text-xs text-fg-faint"
          >
            <Link
              href="/"
              className={`transition-colors hover:text-amber ${focusRing}`}
            >
              ~
            </Link>
            <span aria-hidden> / </span>
            <Link
              href="/#work"
              className={`transition-colors hover:text-amber ${focusRing}`}
            >
              work
            </Link>
            <span aria-hidden> / </span>
            <span className="text-fg-muted">{study.slug}</span>
          </nav>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-fg sm:text-6xl">
            {study.name}
          </h1>
          <p className="mt-5 max-w-[62ch] text-lg leading-relaxed text-fg-muted">
            {study.summary}
          </p>

          <dl className="mt-10 grid grid-cols-2 divide-x divide-y divide-line border border-line bg-ink/40 lg:mt-14 lg:grid-cols-4 lg:divide-y-0">
            {meta.map((item, i) => (
              <div key={item.label} className={clsx('p-4', cellFix(i))}>
                <dt className={microLabel}>{item.label}</dt>
                <dd className="mt-2 text-sm text-fg">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <div className="border-b border-line bg-ink-raised">
        <ul className="mx-auto grid max-w-wrap grid-cols-2 divide-x divide-y divide-line lg:grid-cols-4 lg:divide-y-0">
          {study.metrics.map((metric, i) => (
            <li
              key={metric.label}
              className={clsx('px-5 py-6 sm:px-8', cellFix(i))}
            >
              {/*
                At the 360px floor a cell is ~139px wide, which is narrower
                than long monospace values ("2FA + biometrics",
                "Microsoft Dynamics", "microservices"). Drop a step at the base
                breakpoint and let words wrap — and break, as a last resort —
                rather than overflow the cell.
              */}
              <p className="break-words font-mono text-xl leading-tight text-amber sm:text-3xl">
                {metric.value}
              </p>
              <p className={`mt-3 ${microLabel}`}>{metric.label}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto max-w-wrap px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid gap-x-8 gap-y-14 lg:grid-cols-12">
          <div className="space-y-12 lg:col-span-8">
            <section>
              <RuleHeading>Problem</RuleHeading>
              <Prose text={study.problem} />
            </section>

            <section>
              <RuleHeading>Approach</RuleHeading>
              <Prose text={study.approach} />
            </section>

            {quote ? (
              <blockquote className="border-l-2 border-amber py-1 pl-5 font-mono text-sm leading-relaxed text-fg">
                {quote}
              </blockquote>
            ) : null}

            <section>
              <RuleHeading>Outcome</RuleHeading>
              <Prose text={study.outcome} />
            </section>
          </div>

          <aside className="space-y-8 self-start lg:sticky lg:top-24 lg:col-span-4">
            {/*
              Below lg the aside is full-width, so the shot sizes naturally and
              is capped by width — never by height, which used to silently crop
              the bottom off every screenshot. The width cap keeps the pending
              placeholder from taking over the column. At lg the shot lives in
              the sticky sidebar, where `max-h` + `object-contain` scales an
              unusually tall image down instead of cutting it off.
            */}
            {study.screenshots.map((shot) => (
              <div
                key={shot.src}
                className="mx-auto w-full max-w-[520px] border border-line lg:max-w-none"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={shot.width}
                  height={shot.height}
                  sizes="(max-width: 1024px) min(100vw, 520px), 33vw"
                  priority={false}
                  className="h-auto w-full object-contain lg:max-h-[420px]"
                />
              </div>
            ))}

            <div>
              <div className="flex items-center gap-4">
                <span className={microLabel}>Stack</span>
                <span aria-hidden className="h-px flex-1 bg-line" />
              </div>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {study.stack.map((item) => (
                  <li
                    key={item}
                    className="border border-line px-2 py-1 font-mono text-[11px] text-fg-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-line bg-ink-raised p-4">
              <p className="text-[15px] leading-relaxed text-fg-muted">
                Want the full walkthrough? I can screen-share the architecture.
              </p>
              <a
                href={`mailto:${SITE.email}`}
                className={`mt-3 inline-block font-mono text-sm text-amber transition-colors hover:text-fg ${focusRing}`}
              >
                {SITE.email}
              </a>
            </div>
          </aside>
        </div>

        <nav
          aria-label="Case studies"
          className="mt-16 flex items-center justify-between gap-4 border-t border-line pt-8 font-mono text-sm"
        >
          {prev ? (
            <Link
              href={`/work/${prev.slug}/`}
              className={`text-fg-muted transition-colors hover:text-amber ${focusRing}`}
            >
              &larr; {prev.name}
            </Link>
          ) : (
            <span />
          )}
          <Link
            href="/#work"
            className={`text-fg-faint transition-colors hover:text-amber ${focusRing}`}
          >
            all work
          </Link>
          {next ? (
            <Link
              href={`/work/${next.slug}/`}
              className={`text-right text-fg-muted transition-colors hover:text-amber ${focusRing}`}
            >
              {next.name} &rarr;
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </div>
    </article>
  );
}
