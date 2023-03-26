import Link from 'next/link';
import { Fragment } from 'react';

import type { IReferencesEntity } from '@/graphql/models/resume';

import { ResumeField } from './hoc/hoc_field';

interface IResumeAwardProps {
  e: IReferencesEntity;
}
function ResumeAward({ e }: IResumeAwardProps) {
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
}
interface IProps {
  references?: IReferencesEntity[];
}
export function ResumeReferences({ references }: IProps) {
  if (references === undefined) return <></>;
  return (
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
}