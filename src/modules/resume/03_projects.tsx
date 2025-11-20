import Link from 'next/link';

import type { IProjectsEntity } from '@/graphql/models/resume';

import { IC_Rocket } from '../icons/resume';
import { ResumeField } from '../shared/section';

interface IResumeProject {
  e: IProjectsEntity;
}
function ResumeProject({ e }: IResumeProject) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white/90 p-5 text-slate-800 shadow-sm print:border-0 print:bg-transparent print:p-0 print:shadow-none">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-lg font-semibold text-slate-900">{e.title}</h3>
        {e.project_url && (
          <Link
            href={e.project_url}
            className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-700 underline"
          >
            View Live
          </Link>
        )}
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-600">
        {e.long_description}
      </p>
      {e.links && e.links.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.3em] text-slate-500">
          {e.links.map((link) => (
            <li key={link.id}>
              <Link
                href={link.link}
                className="rounded-full border border-slate-200 px-3 py-1 text-[11px] font-semibold text-slate-600"
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
      id="resume-projects"
    >
      {projects.map((e) => (
        <ResumeProject key={e.id} e={e!} />
      ))}
    </ResumeField>
  );
}
