import type { IWorkExperienceEntity } from '@/graphql/models/resume';
import { getDuration } from '@/utils';

import { ResumeField } from './hoc/hoc_field';

interface IProps {
  experience?: IWorkExperienceEntity[];
}

export function ResumeYears({ experience }: IProps) {
  if (experience === undefined) return <></>;

  const totalExperience = experience.reduce(
    (c, n) =>
      c +
      (new Date(n?.end_date!).getTime() - new Date(n?.start_date!).getTime()),
    0
  );

  return (
    <ResumeField title="Total Experience" icon="/assets/images/briefcase.png">
      <p className="text-sm text-gray-700">{getDuration(totalExperience)}</p>
    </ResumeField>
  );
}
