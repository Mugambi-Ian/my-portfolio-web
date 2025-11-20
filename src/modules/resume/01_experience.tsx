import clsx from 'clsx';
import Link from 'next/link';

import type { IWorkExperienceEntity } from '@/graphql/models/resume';
import { IC_Link } from '@/modules/icons';
import { parseDate } from '@/utils';

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
          className="grid gap-4 border-l border-slate-200 pl-6 text-slate-800"
        >
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                {exp.title}
              </h3>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                {exp.company}
              </p>
            </div>
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              <span>
                {parseDate(exp.start_date)} –{' '}
                {exp.end_date ? parseDate(exp.end_date) : 'Current'}
              </span>
              {exp.location && (
                <span className="mt-1 block text-[10px] tracking-[0.4em]">
                  {exp.location}
                </span>
              )}
            </div>
          </div>

          <p className="text-sm leading-6 text-slate-700">{exp.description}</p>

          {exp.roles && (
            <div className="space-y-4">
              {exp.roles.map((role) => (
                <div key={role.id} className="space-y-2">
                  <div className="flex items-center gap-2 px-1 max-sm:flex-col max-sm:items-start max-sm:px-0">
                    <h2 className="flex-1 font-bold uppercase tracking-widest ">
                      {role.department}
                    </h2>
                    {role.project_url && (
                      <Link
                        href={role.project_url}
                        className="flex items-center gap-2.5 text-sm tracking-widest text-blue-800 dark:text-blue-600 max-sm:text-xs"
                      >
                        {role.project_url}
                        <IC_Link className="inherit fill-blue-800 dark:fill-blue-600" />
                      </Link>
                    )}
                  </div>
                  {role.deparment_roles.data && (
                    <ul className="list-disc space-y-1 pl-5 text-[13px] text-slate-700">
                      {role.deparment_roles.data.map((r) => (
                        <li key={r.id}>{r.attributes.role}</li>
                      ))}
                    </ul>
                  )}
                  {role.tech_stack.data?.length !== 0 && (
                    <div
                      className={clsx(
                        'mx-2 mb-4 mt-1.5 flex flex-col gap-y-1 rounded-xl max-sm:mx-px'
                      )}
                    >
                      <p className="text-sm font-medium uppercase">
                        Tech Stack
                      </p>
                      <span className="mb-3 mt-1 flex flex-wrap gap-2">
                        {role.tech_stack.data?.map((t) => (
                          <p
                            key={`tech_${t.id}`}
                            style={{ backgroundColor: '#9e9e9e' }}
                            className="rounded  p-1 px-2 text-xs capitalize tracking-widest text-white"
                          >
                            {t.attributes.techStack}
                          </p>
                        ))}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </article>
      ))}
    </ResumeField>
  );
}
