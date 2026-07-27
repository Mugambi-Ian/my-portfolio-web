import clsx from 'clsx';

import { SITE } from '@/config/site';
import { EXPERIENCE } from '@/data/experience';
import {
  AWARD,
  EDUCATION,
  OPEN_SOURCE,
  REFERENCES_NOTE,
} from '@/data/projects';
import { SKILLS } from '@/data/skills';
import { formatDate, formatRange } from '@/utils';

const H2_STYLE =
  'font-mono text-xs uppercase tracking-[0.2em] text-paper-accent border-b border-paper-ink/10 pb-1 mb-4';

// Contact links sit inline with plain text, so they need a non-colour cue to
// read as links. The underline is a class, which beats the `a { text-decoration:
// none }` element rule in global.css's print block and so survives on paper.
// The focus ring uses paper-accent — amber is a screen-only token.
const CONTACT_LINK =
  'underline underline-offset-2 decoration-paper-muted/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper-accent';

export function ResumeDocument() {
  return (
    <div className="bg-paper text-paper-ink print:text-[12px]">
      <div className="mx-auto max-w-4xl px-6 py-10 print:max-w-none print:p-0">
        <header>
          <h1 className="text-3xl font-semibold">{SITE.name}</h1>
          <p className="mt-1 font-mono text-sm text-paper-accent">
            {SITE.title}
          </p>
          <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-paper-muted">
            <a href={`mailto:${SITE.email}`} className={CONTACT_LINK}>
              {SITE.email}
            </a>
            <a href={SITE.url} className={CONTACT_LINK}>
              {SITE.url}
            </a>
            <span>{SITE.location}</span>
            <a
              href={SITE.github}
              rel="noreferrer"
              className={clsx('print-show-url', CONTACT_LINK)}
            >
              GitHub
            </a>
            <a
              href={SITE.linkedin}
              rel="noreferrer"
              className={clsx('print-show-url', CONTACT_LINK)}
            >
              LinkedIn
            </a>
          </p>
        </header>

        <div className="mt-8">
          <h2 className={H2_STYLE}>Experience</h2>
          <div className="space-y-5">
            {EXPERIENCE.map((job) => (
              <article key={job.id} className="break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <strong className="text-sm font-semibold">
                    {job.title} — {job.company}
                  </strong>
                  <span className="font-mono text-xs text-paper-muted">
                    {formatRange(job.startDate, job.endDate)}
                  </span>
                </div>
                <p className="font-mono text-[11px] text-paper-muted">
                  {job.location}
                </p>
                <p className="mt-1 text-[13px] leading-snug text-paper-muted">
                  {job.summary}
                </p>
                <ul className="mt-1.5 list-disc pl-4 text-[13px] leading-snug">
                  {job.highlights.map((highlight, i) => (
                    // Highlights past the fourth are web-only: the PDF has a
                    // two-page budget.
                    <li
                      key={highlight}
                      className={clsx(i >= 4 && 'print:hidden')}
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
                <p className="mt-1.5 font-mono text-[11px] text-paper-muted">
                  {job.stack.join(' · ')}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className={H2_STYLE}>Skills</h2>
          <div className="space-y-1">
            {SKILLS.map((group) => (
              <p key={group.title} className="text-[13px]">
                <strong className="font-semibold">{group.title}:</strong>{' '}
                {group.items.join(', ')}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className={H2_STYLE}>Education</h2>
          <p className="text-[13px]">
            {EDUCATION.course} — {EDUCATION.school},{' '}
            {formatDate(EDUCATION.endDate)}
          </p>
        </div>

        <div className="mt-8">
          <h2 className={H2_STYLE}>Award</h2>
          <p className="text-[13px]">
            {AWARD.title} — {AWARD.award}, {formatDate(AWARD.date)}
          </p>
          <p className="mt-1 text-[13px] leading-snug text-paper-muted">
            {AWARD.description}
          </p>
        </div>

        <div className="mt-8">
          <h2 className={H2_STYLE}>Open Source</h2>
          <div className="space-y-2">
            {OPEN_SOURCE.map((project) => (
              <div key={project.name}>
                <p className="text-[13px]">
                  <strong className="font-mono font-semibold">
                    {project.name}
                  </strong>{' '}
                  — {project.description}
                </p>
                {project.npmUrl ? (
                  <a
                    href={project.npmUrl}
                    rel="noreferrer"
                    className="font-mono text-[11px] text-paper-muted"
                  >
                    {project.npmUrl}
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 text-[12px] text-paper-muted">{REFERENCES_NOTE}</p>
      </div>
    </div>
  );
}
