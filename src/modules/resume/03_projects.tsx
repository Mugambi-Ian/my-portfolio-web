import Link from 'next/link';

import type { IProjectsEntity } from '@/graphql/models/resume';

import { IC_Rocket } from '../icons/resume';
import { ResumeField } from '../shared/section';

interface IResumeProject {
  e: IProjectsEntity;
}
function ResumeProject({ e }: IResumeProject) {
  return (
    <article className="rounded-2xl border border-slate-200/70 bg-white/70 p-5 transition hover:border-emerald-200/60 dark:border-slate-700/60 dark:bg-slate-900/40">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          {e.title}
        </h3>
        {e.project_url && (
          <Link
            href={e.project_url}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300 transition hover:border-emerald-300 hover:text-emerald-200"
          >
            View Live
          </Link>
        )}
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
        {e.long_description}
      </p>
      {e.links && e.links.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.3em] text-slate-400">
          {e.links.map((link) => (
            <li key={link.id}>
              <Link
                href={link.link}
                className="rounded-full border border-slate-200/80 px-3 py-1 text-[11px] font-semibold text-slate-500 transition hover:border-emerald-300 hover:text-emerald-300 dark:border-slate-700/60 dark:text-slate-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
interface IProps {
  projects?: IProjectsEntity[];
}

export function ResumeProjects({ projects }: IProps) {
  if (!projects || projects.length === 0) return <></>;

  return (
    <ResumeField
      Icon={IC_Rocket}
      title="Projects"
      eyebrow="Selected Work"
      description="Experiments and launches that demonstrate how I translate product bets into measurable results."
      showMargin
      id="resume-projects"
    >
      {projects.map((e) => (
        <ResumeProject key={e.id} e={e!} />
      ))}
    </ResumeField>
  );
}
