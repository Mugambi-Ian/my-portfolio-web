import type { IWorkExperienceEntity } from '@/graphql/models/resume';
import { parseDate } from '@/utils';

import { DeparmentRoles } from '../home/modules/experience/content';
import { IC_Calendar } from '../icons/resume';
import { ResumeField } from '../shared/section';

interface IProps {
  experience?: IWorkExperienceEntity[];
}

export function ResumeExperiences({ experience }: IProps) {
  if (experience === undefined) return <></>;
  return (
    <ResumeField Icon={IC_Calendar} title={'Work Experience'} showMargin={true}>
      {experience.map((exp) => (
        <section
          key={exp.id}
          className="mb-1 flex w-full flex-col max-sm:gap-y-2"
        >
          <div className="flex w-full flex-col">
            <span className="flex w-full items-center gap-y-6 py-1 max-sm:flex-col-reverse max-sm:items-start">
              <h1 className="flex-1 font-bold uppercase tracking-wider text-black dark:text-white">
                {exp.title}
              </h1>
              <p className="rounded bg-[#787BC7] px-4 py-2 text-xs tracking-wider text-white dark:bg-blue-600 max-sm:self-end">
                {`${parseDate(exp.start_date)} - ${
                  exp.end_date ? parseDate(exp.end_date) : 'Current'
                }`}
              </p>
            </span>
            <span className="flex w-full items-center gap-y-2 py-1 max-sm:flex-col max-sm:items-start">
              <h1 className="flex-1 text-sm font-bold uppercase tracking-[0.15em] text-blue-800 dark:text-blue-600 ">
                {exp.company}
              </h1>
              <p className="mr-2 text-xs tracking-wider  text-black dark:text-white">
                {exp.location}
              </p>
            </span>
          </div>
          <p className="mb-2 mt-1 text-sm leading-7 tracking-[0.02em] dark:text-white">
            {exp.description}
          </p>
          {exp.roles && <DeparmentRoles roles={exp.roles} hideBG={true} />}
        </section>
      ))}
    </ResumeField>
  );
}
