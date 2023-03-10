import type { IWorkExperienceEntity } from 'graphql/models/resume';
import type { FC } from 'react';
import { getDuration } from 'utils';

import { ResumeField } from './hoc_field';

export const ResumeYears: FC<{
  expirience: IWorkExperienceEntity[];
}> = ({ expirience }) => {
  const totalExpirence = expirience.reduce(
    (c, n) =>
      c +
      (new Date(n?.end_date!).getTime() - new Date(n?.start_date!).getTime()),
    0
  );
  return (
    <ResumeField title="Total Experience" icon="/assets/images/briefcase.png">
      <p className="text-sm text-gray-700">{getDuration(totalExpirence)}</p>
    </ResumeField>
  );
};
