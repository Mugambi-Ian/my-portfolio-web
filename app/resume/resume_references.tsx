import type { IReferencesEntity } from 'graphql/models/resume';
import Link from 'next/link';
import type { FC } from 'react';
import { Fragment } from 'react';

import { ResumeField } from './hoc_field';

interface IResumeAward {
  e: IReferencesEntity;
}
const ResumeAward: FC<IResumeAward> = ({ e }) => {
  return (
    <Fragment>
      <div className="mb-2 flex w-full lg:mb-1">
        <h6 className="text-lg font-semibold text-gray-700">{e.name}</h6>
        <span className="flex-1" />
        <Link href={`mailto:${e.email}`} className="ml-2 text-sm text-gray-500">
          {e.email}
        </Link>
      </div>
      <div className="mb-3 flex w-full">
        <h6 className="text-base font-normal text-gray-500 lg:leading-3">
          {e.title}
        </h6>
      </div>
    </Fragment>
  );
};

export const ResumeReferences: FC<{
  references: IReferencesEntity[];
}> = ({ references }) => (
  <ResumeField
    icon="/assets/images/link.png"
    title="References"
    showMargin={true}
  >
    {references.map((e) => (
      <ResumeAward key={e.id} e={e!} />
    ))}
  </ResumeField>
);
