import type { IWorkExperienceEntity } from '@/graphql/models/resume';
import { getDuration } from '@/utils';

import { IC_BriefCase } from '../icons/resume';
import { ResumeField } from '../shared/section';

interface IProps {
  experience?: IWorkExperienceEntity[];
}

export function ResumeYears({ experience }: IProps) {
  if (!experience || experience.length === 0) return <></>;

  const totalExperience = experience.reduce(
    (c, n) =>
      c +
      (new Date(n?.end_date || new Date()).getTime() -
        new Date(n?.start_date!).getTime()),
    365 * 24 * 60 * 60 * 1000
  );

  return (
    <ResumeField
      title="Total Experience"
      eyebrow="Snapshot"
      description="Years spent leading product engineering, design systems, and resilient delivery."
      Icon={IC_BriefCase}
      id="total-experience"
    >
      <p className="text-4xl font-black tracking-tight text-emerald-400">
        {getDuration(totalExperience)}
      </p>
    </ResumeField>
  );
}
