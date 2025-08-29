import type { IWorkExperienceEntity } from '@/graphql/models/resume';
import { getDuration } from '@/utils';

import { IC_BriefCase } from '../icons/resume';
import { ResumeField } from '../shared/section';

interface IProps {
  experience?: IWorkExperienceEntity[];
}

export function ResumeYears({ experience }: IProps) {
  if (experience === undefined) return <></>;

  const totalExperience = experience.reduce(
    (c, n) =>
      c +
      (new Date(n?.end_date || new Date()).getTime() -
        new Date(n?.start_date!).getTime()),
    3 * 365 * 24 * 60 * 60 * 1000
  );
  return (
    <ResumeField title={'Total Experience'} Icon={IC_BriefCase}>
      <p className="justify-center text-sm text-slate-900 dark:text-white">
        {getDuration(totalExperience)}
      </p>
    </ResumeField>
  );
}
