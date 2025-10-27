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
    value: 'ianmugambi.com',
    href: 'https://ianmugambi.com',
  },
  {
    label: 'Availability',
    value: 'Open to senior product engineering roles',
  },
];

export async function ResumeHeader() {
  const { hideHeader } = await appHeaders();
  const hideControls = Boolean(hideHeader);

  return (
    <section className="relative mx-auto mt-24 w-full max-w-6xl overflow-hidden rounded-[2.5rem] border border-slate-800/60 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-8 py-12 text-slate-100 shadow-[0_45px_120px_-50px_rgba(16,185,129,0.6)] sm:px-12">
      <div className="absolute -left-32 top-0 size-[420px] rounded-full bg-gradient-to-br from-emerald-400/40 via-transparent to-transparent blur-3xl" />
      <div className="absolute -right-16 bottom-0 size-[340px] rounded-full bg-gradient-to-tl from-sky-500/30 via-transparent to-transparent blur-3xl" />

      <div className="relative flex flex-col gap-10 lg:flex-row lg:items-start">
        <div className="flex-1 space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-emerald-200">
            Professional Résumé
          </span>
          <div className="space-y-4">
            <h1 className="font-display text-4xl font-black leading-tight tracking-[-0.02em] text-white md:text-5xl">
              Ian Mugambi — Senior Fullstack & Product Engineer
            </h1>
            <p className="max-w-2xl text-lg text-slate-300">
              I merge product strategy, interaction design, and reliable code to
              ship experiences teams can scale. Seven years in, I still obsess
              over the detail that keeps users confident and roadmaps on track.
            </p>
          </div>

          {!hideControls && (
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={RESUME_DOWNLOAD_PATH}
                className="rounded-full border border-emerald-400/50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-200 transition hover:border-emerald-300 hover:text-emerald-100"
              >
                Download PDF
              </Link>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="rounded-full bg-emerald-400 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-950 transition hover:bg-emerald-300"
              >
                Let’s Talk
              </a>
            </div>
          )}
        </div>

        <div className="grid gap-4 text-sm text-slate-200">
          {CONTACT_POINTS.map((contact) => (
            <div
              key={contact.label}
              className="rounded-2xl border border-slate-800/60 bg-slate-900/60 px-5 py-4"
            >
              <p className="text-[11px] uppercase tracking-[0.4em] text-slate-400">
                {contact.label}
              </p>
              {contact.href ? (
                <a
                  href={contact.href}
                  className="mt-1 block text-sm font-medium text-emerald-200 transition hover:text-emerald-100"
                >
                  {contact.value}
                </a>
              ) : (
                <p className="mt-1 text-sm font-medium text-slate-100">
                  {contact.value}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
