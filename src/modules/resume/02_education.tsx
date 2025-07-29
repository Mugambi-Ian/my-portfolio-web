import type { FC } from 'react';
import { Fragment } from 'react';

import type { IEducationEntity } from '@/graphql/models/resume';

import { IC_Award } from '../icons/resume';
import { ResumeField } from '../shared/section';

interface IResumeEducation {
  e: IEducationEntity;
}
const EducationView: FC<IResumeEducation> = ({ e }) => {
  const parseDate = (date: string) => {
    return new Date(date).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
    });
  };

  return (
    <Fragment>
      <div className="mb-2 flex w-full leading-6">
        <h6 className="text-lg font-semibold text-slate-900 dark:text-white">
          {e.school}
        </h6>
        <span className="flex-1" />
        <p className="whitespace-nowrap text-xs text-gray-600 dark:text-white">
          {parseDate(e.end_date!)}
        </p>
      </div>
      <div className="mb-6 flex w-full leading-4">
        <h6 className="text-base font-normal leading-3 text-slate-900 dark:text-white">
          {e.course}
        </h6>
      </div>
    </Fragment>
  );
};
interface IProps {
  education?: IEducationEntity;
}

export function ResumeEducation({ education }: IProps) {
  if (education === undefined) return <></>;
  return (
    <ResumeField Icon={IC_Award} title={'Education'} showMargin={true}>
      <EducationView e={education} />
    </ResumeField>
  );
}
