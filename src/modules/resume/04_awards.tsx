import type { FC } from 'react';
import { Fragment } from 'react';

import type { IAwardsEntity } from '@/graphql/models/resume';

import { IC_Award } from '../icons/resume';
import { ResumeField } from '../shared/section';

interface IResumeAward {
  e: IAwardsEntity;
}
const ResumeAward: FC<IResumeAward> = ({ e }) => {
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
          {e.title}
        </h6>
        <span className="flex-1" />
        <p className="whitespace-nowrap text-xs text-gray-600 dark:text-white">
          {parseDate(e.date!)}
        </p>
      </div>
      <div className="flex w-full leading-4">
        <h6 className="text-base font-normal leading-3 text-slate-900 dark:text-white">
          {e.award}
        </h6>
      </div>
      <p className="mt-4 text-justify text-sm leading-7 tracking-[0.02em] dark:text-white max-sm:leading-6">
        {e.description}
      </p>
    </Fragment>
  );
};
interface IProps {
  awards?: IAwardsEntity[];
}

export function ResumeAwards({ awards }: IProps) {
  if (awards === undefined) return <></>;
  return (
    <ResumeField Icon={IC_Award} title={'Awards'} showMargin={true}>
      {awards.map((e) => (
        <ResumeAward key={e.id} e={e!} />
      ))}
    </ResumeField>
  );
}
