import type { IWorkExperienceEntity } from '@/graphql/models/resume';
import { parseDate } from '@/utils';

import { DeparmentRoles } from '../home/modules/experience/content';
import { IC_Calendar } from '../icons/resume';
import { ResumeField } from '../shared/section';

interface IProps {
  experience?: IWorkExperienceEntity[];
}

export function ResumeExperiences({ experience }: IProps) {
  if (!experience || experience.length === 0) return <></>;

  return (
    <ResumeField
      Icon={IC_Calendar}
      title="Work Experience"
      eyebrow="Career Milestones"
      description="Product leadership across fintech, logistics, and SaaS — guiding teams from discovery to dependable launches."
      showMargin
      id="work-experience"
    >
      {experience.map((exp) => (
        <article
          key={exp.id}
          className="rounded-2xl border border-slate-200/70 bg-white/70 p-5 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.55)] transition hover:border-emerald-200/60 dark:border-slate-700/60 dark:bg-slate-900/40"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {exp.title}
              </h3>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
                {exp.company}
              </p>
            </div>
            <div className="flex flex-col items-start text-xs uppercase tracking-[0.3em] text-slate-400 sm:items-end">
              <span>
                {parseDate(exp.start_date)} –{' '}
                {exp.end_date ? parseDate(exp.end_date) : 'Current'}
              </span>
              {exp.location && (
                <span className="mt-1 text-[10px]">{exp.location}</span>
              )}
            </div>
          </div>

          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
            {exp.description}
          </p>

          {exp.roles && (
            <div className="mt-4">
              <DeparmentRoles roles={exp.roles} hideBG={true} />
            </div>
          )}
        </article>
      ))}
    </ResumeField>
  );
}
