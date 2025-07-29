import Link from 'next/link';
import { Fragment } from 'react';

import type { IReferencesEntity } from '@/graphql/models/resume';

import { IC_References } from '../icons/resume';
import { ResumeField } from '../shared/section';

interface IResumeAwardProps {
  e: IReferencesEntity;
}
function ResumeAward({ e }: IResumeAwardProps) {
  return (
    <Fragment>
      <div className="my-2 flex w-full lg:mb-1">
        <h6 className="text-lg font-semibold text-slate-900 dark:text-white">
          {e.name}
        </h6>
        <span className="flex-1" />
        <Link
          href={`mailto:${e.email}`}
          className="ml-2 text-sm text-gray-600 dark:text-white"
        >
          {e.email}
        </Link>
      </div>
      <div className="mb-3 flex w-full">
        <h6 className="text-base font-normal text-slate-900 dark:text-white lg:leading-3">
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
    <ResumeField Icon={IC_References} title={'References'} showMargin={true}>
      {references.map((e) => (
        <ResumeAward key={e.id} e={e!} />
      ))}
    </ResumeField>
  );
}
