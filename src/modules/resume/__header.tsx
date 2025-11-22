import clsx from 'clsx';
import Link from 'next/link';

import { appHeaders } from '@/hooks/useAppHeaders';

import { CONTACT_EMAIL, RESUME_DOWNLOAD_PATH } from '../nav/config';

const CONTACT_POINTS = [
  {
    label: 'Email',
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    label: 'Location',
    value: 'Nairobi, Kenya',
  },
  {
    label: 'Portfolio',
    value: 'mugambi-ian.vercel.app',
    href: 'https://mugambi-ian.vercel.app/',
  },
];

export async function ResumeHeader() {
  const { hideHeader } = await appHeaders();
  const hideControls = Boolean(hideHeader);
  const sectionClassName = clsx(
    'relative mx-auto mt-4 w-full max-w-5xl text-slate-900',
    !hideControls &&
      'rounded-[32px] border border-slate-200 bg-white px-8 py-10 shadow-[0_45px_120px_rgba(15,23,42,0.08)]',
    'print:border-0 print:bg-transparent print:p-0 print:shadow-none'
  );
  const headerRowClassName = clsx(
    'flex flex-wrap items-start gap-8',
    hideControls ? 'pt-0' : 'pt-10'
  );

  return (
    <section className={sectionClassName}>
      <div className={headerRowClassName}>
        <div className="flex-1 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
            Ian Mugambi
          </p>
          <div>
            <h1 className="font-display text-4xl font-black leading-tight tracking-tight">
              Senior Product & Fullstack Engineer
            </h1>
            {!hideControls && (
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-700">
                {
                  'I align design, product, and engineering to ship resilient consumer experiences. From 0→1 bets to scale-ups, my focus is on reducing ambiguity, pairing thoughtful systems with measurable delivery, and mentoring teams so velocity never compromises craft.'
                }
              </p>
            )}
          </div>
        </div>
        {!hideControls && (
          <div className="flex flex-col gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-slate-600 print:hidden">
            <Link
              href={RESUME_DOWNLOAD_PATH}
              className="rounded-full border border-slate-900 px-5 py-2 text-center"
            >
              Download PDF
            </Link>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="rounded-full bg-slate-900 px-5 py-2 text-center text-white"
            >
              Let’s Talk
            </a>
          </div>
        )}
      </div>

      <dl
        className={clsx(
          'grid text-sm text-slate-700',
          hideControls ? 'mt-4 gap-1' : 'mt-8 gap-4 sm:grid-cols-2'
        )}
      >
        {CONTACT_POINTS.map((contact) => (
          <div
            key={contact.label}
            className={clsx(
              !hideControls && 'rounded-2xl border border-slate-200 px-5 py-4',
              'print:border-0 print:p-0'
            )}
          >
            <dt className="text-[11px] uppercase tracking-[0.35em] text-slate-500">
              {contact.label}
            </dt>
            {contact.href ? (
              <dd>
                <a
                  href={contact.href}
                  className="mt-2 inline-flex text-sm font-semibold text-slate-900 underline"
                >
                  {contact.value}
                </a>
              </dd>
            ) : (
              <dd className="mt-2 text-sm text-slate-800">{contact.value}</dd>
            )}
          </div>
        ))}
      </dl>
    </section>
  );
}
