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
      <div className="mb-2 flex w-full flex-col">
        <h6 className="text-lg font-semibold text-slate-900">{e.school}</h6>
        <p className="whitespace-nowrap text-xs uppercase tracking-[0.35em] text-slate-400">
          {parseDate(e.end_date!)}
        </p>
      </div>
      <div className="mb-2 flex w-full leading-5">
        <h6 className="text-base font-semibold text-slate-900">{e.course}</h6>
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
    <ResumeField Icon={IC_Award} title="Education" id="education">
      <EducationView e={education} />
    </ResumeField>
  );
}
