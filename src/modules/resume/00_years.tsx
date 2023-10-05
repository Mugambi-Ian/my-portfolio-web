import type { IWorkExperienceEntity } from '@/graphql/models/resume';
import usePageTranslation from '@/hooks/usePageTranslation';
import { getDuration } from '@/utils';

import { IC_BriefCase } from '../icons/resume';
import { ResumeField } from '../shared/section';

interface IProps {
  experience?: IWorkExperienceEntity[];
}

export function ResumeYears({ experience }: IProps) {
  const { t } = usePageTranslation('resume', 'Title');
  if (experience === undefined) return <></>;

  const totalExperience = experience.reduce(
    (c, n) =>
      c +
      (new Date(n?.end_date || new Date().getTime()).getTime() -
        new Date(n?.start_date!).getTime()),
    0
  );

  return (
    <ResumeField title={t('years')} Icon={IC_BriefCase}>
      <p className="justify-center text-sm text-gray-700 dark:text-white">
        {getDuration(totalExperience)}
      </p>
    </ResumeField>
  );
}
