import type { IWorkExperienceEntity } from '@/graphql/models/resume';
import usePageTranslation from '@/hooks/usePageTranslation';
import { parseDate } from '@/utils';

import { DeparmentRoles } from '../home/modules/experience/content';
import { ICCalendar } from '../icons/resume';
import { ResumeField } from '../shared/section';

interface IProps {
  experience?: IWorkExperienceEntity[];
}

export function ResumeExperiences({ experience }: IProps) {
  const { t } = usePageTranslation('resume', 'Title');
  if (experience === undefined) return <></>;
  return (
    <ResumeField Icon={ICCalendar} title={t('experience')} showMargin={true}>
      {experience.map((exp) => (
        <section
          key={exp.id}
          className="mb-3 flex w-full flex-col max-md:gap-y-2"
        >
          <div className="flex w-full flex-col">
            <span className="flex w-full items-center gap-y-6 py-1 max-md:flex-col-reverse max-md:items-start">
              <h1 className="flex-1 font-bold uppercase tracking-[0.25em] text-black dark:text-white">
                {exp.title}
              </h1>
              <p className="rounded bg-[#787BC7] px-4 py-2 text-xs tracking-[0.05em] text-white dark:bg-secondary-dark max-md:self-end">
                {`${parseDate(exp.start_date)} - ${
                  exp.end_date ? parseDate(exp.end_date) : 'Current'
                }`}
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
          <p className="mb-4 mt-2 text-sm leading-7 tracking-[0.02em] dark:text-white">
            {exp.description}
          </p>
          {exp.roles && <DeparmentRoles roles={exp.roles} hideBG={true} />}
        </section>
      ))}
    </ResumeField>
  );
}
