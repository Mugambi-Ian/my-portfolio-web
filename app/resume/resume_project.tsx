import type { IProjectsEntity } from 'graphql/models/resume';
import Link from 'next/link';
import type { FC } from 'react';
import { Fragment } from 'react';

import { ResumeField } from './hoc_field';

interface IResumeProject {
  e: IProjectsEntity;
}
const ResumeProject: FC<IResumeProject> = ({ e }) => {
  return (
    <Fragment>
      <div className="flex w-full lg:mb-1 lg:leading-7">
        <h6 className="text-lg font-semibold text-gray-700 lg:leading-5">
          {e.title}
        </h6>
      </div>
      <div className="flex w-full lg:leading-4">
        <Link
          href={e.project_url}
          className="text-sm font-normal text-gray-500 lg:leading-3"
        >
          {e.project_url}
        </Link>
      </div>
      <p className="mt-2 mb-4 text-sm text-gray-700 lg:my-4">{e.description}</p>
    </Fragment>
  );
};

export const ResumeProjects: FC<{
  projects: IProjectsEntity[];
}> = ({ projects }) => (
  <ResumeField
    icon="/assets/images/rocket.png"
    title="Projects"
    showMargin={true}
  >
    {projects.map((e) => (
      <ResumeProject key={e.id} e={e!} />
    ))}
  </ResumeField>
);
