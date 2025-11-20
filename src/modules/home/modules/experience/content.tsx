'use client';

import clsx from 'clsx';
import Link from 'next/link';

import type {
  IRolesEntity,
  IWorkExperienceEntity,
} from '@/graphql/models/resume';
import { IC_Link } from '@/modules/icons';
import { AnalyticEvent } from '@/modules/shared/analytics';
import { parseDate } from '@/utils';

interface IDeparmentProps {
  roles: IRolesEntity[];
  hideBG?: boolean;
}

export function DeparmentRoles({ roles, hideBG }: IDeparmentProps) {
  return (
    <>
      {roles.map((r) => (
        <section className="flex flex-col gap-1 py-2" key={`role${r.id}`}>
          <div className="flex items-center gap-2 px-1 max-sm:flex-col max-sm:items-start max-sm:px-0">
            <h2 className="flex-1 font-bold uppercase tracking-widest dark:text-white">
              {r.department}
            </h2>
            <Link
              href={r.project_url ?? ''}
              className="flex items-center gap-2.5 text-sm tracking-widest text-blue-800 dark:text-blue-600 max-sm:text-xs"
            >
              {r.project_url}
              <IC_Link className="inherit fill-blue-800 dark:fill-blue-600" />
            </Link>
          </div>
          <ul className="mx-4 my-1 flex list-disc flex-col max-sm:mx-2">
            {r.deparment_roles.data?.map((rd) => (
              <li
                key={`rd${rd.id}`}
                className="mx-4 mb-1 px-2 text-sm leading-6 tracking-[0.02em] dark:text-white"
              >
                {rd.attributes.role}
              </li>
            ))}
          </ul>
          {r.tech_stack.data?.length !== 0 && (
            <div
              className={clsx(
                'mx-2 mb-4 mt-1.5 flex flex-col gap-y-1 rounded-xl max-sm:mx-px',
                !hideBG && 'bg-secondary px-3 py-5 dark:bg-blue-600'
              )}
            >
              <p className="text-sm font-medium uppercase dark:text-white">
                Tech Stack
              </p>
              <span className="mb-3 mt-1 flex flex-wrap gap-2">
                {r.tech_stack.data?.map((t) => (
                  <p
                    key={`tech_${t.id}`}
                    className="rounded bg-[#787BC7]  p-1 px-2 text-xs capitalize tracking-widest text-white dark:bg-blue-800 "
                  >
                    {t.attributes.techStack}
                  </p>
                ))}
              </span>
            </div>
          )}
        </section>
      ))}
    </>
  );
}

interface IProps {
  exp?: IWorkExperienceEntity;
}

export function HomeExperienceContent({ exp }: IProps) {
  if (exp === undefined) return <></>;
  return (
    <section className="flex w-full flex-col gap-y-9 rounded-[16px] bg-white/30 px-[30px] pb-12 pt-9 dark:bg-blue-800 max-sm:gap-y-5 max-sm:p-6">
      <div className="flex w-full flex-col">
        <span className="flex w-full items-center gap-y-6 py-1 max-sm:flex-col-reverse max-sm:items-start">
          <h1 className="flex-1 font-bold uppercase tracking-[0.25em] text-black dark:text-white">
            {exp.title}
          </h1>
          <p className="rounded bg-[#787BC7] px-4 py-2 text-xs tracking-wider text-white dark:bg-blue-600 max-sm:self-end">
            {`${parseDate(exp.start_date)} - ${
              exp.end_date ? parseDate(exp.end_date) : 'Current'
            }`}
          </p>
        </span>
        <span className="flex w-full items-center gap-y-2 py-1 max-sm:flex-col max-sm:items-start">
          <h1 className="flex-1 text-sm font-bold uppercase tracking-[0.25em] text-blue-800 dark:text-blue-600 ">
            {exp.company}
          </h1>
          <p className="mr-2 text-xs tracking-wider  text-black dark:text-white">
            {exp.location}
          </p>
        </span>
      </div>
      <p className="leading-8 tracking-wider dark:text-white max-sm:text-sm max-sm:leading-6">
        {exp.description}
      </p>

      {<AnalyticEvent type="scroll" title={`home_expirence_${exp.title}`} />}
      {exp.roles && <DeparmentRoles roles={exp.roles} />}
    </section>
  );
}
