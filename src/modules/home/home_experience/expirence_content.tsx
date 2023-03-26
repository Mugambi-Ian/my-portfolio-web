'use client';

import Link from 'next/link';

import type {
  IRolesEntity,
  IWorkExperienceEntity,
} from '@/graphql/models/resume';
import { ICLink } from '@/modules/icons';
import { parseDate } from '@/utils';

interface IDeparmentProps {
  roles: IRolesEntity[];
}

function DeparmentRoles({ roles }: IDeparmentProps) {
  return (
    <>
      {roles.map((r) => (
        <section
          className="flex flex-col gap-2.5 pb-4 max-md:gap-1.5"
          key={`role${r.id}`}
        >
          <div className="flex items-center gap-2 px-2 max-md:px-0">
            <h2 className="font-bold uppercase tracking-[0.1em] dark:text-white">
              {r.department}
            </h2>
            <Link
              href={r.project_url}
              className="flex items-center gap-2.5 tracking-[0.1em] text-primary dark:text-primary-dark max-md:text-xs"
            >
              {r.project_url}
              <ICLink className="inherit fill-primary dark:fill-primary-dark" />
            </Link>
          </div>
          <ul className="flex list-disc flex-col p-4 max-md:ml-4 max-md:mt-2 max-md:p-0">
            {r.deparment_roles.data?.map((rd) => (
              <li
                key={`rd${rd.id}`}
                className="mx-4 mb-2 leading-[180%] tracking-[0.1em] dark:text-white max-md:mx-2 max-md:text-sm max-md:leading-6"
              >
                {rd.attributes.role}
              </li>
            ))}
          </ul>
          <div className="mx-2 flex flex-col gap-y-4 rounded-xl bg-secondary py-5 px-3 dark:bg-secondary-dark">
            <p className="text-sm font-medium uppercase tracking-[0.1em] dark:text-white">
              Tech Stack
            </p>
            <span className="my-2 flex flex-wrap gap-2">
              {r.tech_stack.data?.map((t) => (
                <p
                  key={`tech_${t.id}`}
                  className="rounded-md bg-[#787BC7]  p-1.5 capitalize tracking-[0.2em] text-white dark:bg-solid-dark max-md:text-sm max-md:tracking-[0.1em]"
                >
                  {t.attributes.techStack}
                </p>
              ))}
            </span>
          </div>
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
    <section className="flex w-full flex-col gap-y-9 rounded-[16px] bg-white/30 px-[30px] pt-9 pb-12 dark:bg-accent-dark max-md:gap-y-5 max-md:p-6">
      <div className="flex w-full flex-col">
        <span className="flex w-full items-center gap-y-6 py-1 max-md:flex-col-reverse max-md:items-start">
          <h1 className="flex-1 font-bold uppercase tracking-[0.25em] text-black dark:text-white">
            {exp.title}
          </h1>
          <p className="rounded bg-[#787BC7] px-4 py-2 text-xs tracking-[0.05em] text-white dark:bg-secondary-dark max-md:self-end">
            {`${parseDate(exp.start_date)} - ${parseDate(exp.end_date)}`}
          </p>
        </span>
        <span className="flex w-full items-center gap-y-2 py-1 max-md:flex-col max-md:items-start">
          <h1 className="flex-1 text-sm font-bold uppercase tracking-[0.25em] text-primary dark:text-primary-dark ">
            {exp.company}
          </h1>
          <p className="mr-2 text-xs tracking-[0.05em]  text-black dark:text-white">
            {exp.location}
          </p>
        </span>
      </div>
      <p className="leading-8 tracking-[0.05em] dark:text-white max-md:text-sm max-md:leading-6">
        {exp.description}
      </p>
      {exp.roles && <DeparmentRoles roles={exp.roles} />}
    </section>
  );
}
