import type { IAwardsEntity } from 'graphql/models/resume';
import type { FC } from 'react';
import { Fragment } from 'react';

import { ResumeField } from './hoc_field';

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
      <div className="mb-2 flex w-full lg:mb-1 lg:leading-7">
        <h6 className="text-lg font-semibold text-gray-700">{e.title}</h6>
        <span className="flex-1" />
        <p className="whitespace-nowrap text-xs text-gray-500">
          {parseDate(e.date!)}
        </p>
      </div>
      <div className="flex w-full leading-4">
        <h6 className="text-base font-normal leading-3 text-gray-500">
          {e.award}
        </h6>
      </div>
      <p className="mb-4 mt-2 text-sm text-gray-700 lg:my-4">{e.description}</p>
    </Fragment>
  );
};

export const ResumeAwards: FC<{
  awards: IAwardsEntity[];
}> = ({ awards }) => (
  <ResumeField icon="/assets/images/award.png" title="Awards" showMargin={true}>
    {awards.map((e) => (
      <ResumeAward key={e.id} e={e!} />
    ))}
  </ResumeField>
);
