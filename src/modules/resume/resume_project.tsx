import Link from 'next/link';

import type { IProjectsEntity } from '@/graphql/models/resume';

import { ICRocket } from '../icons/resume';
import { ResumeField } from './hoc/hoc_field';

interface IResumeProject {
  e: IProjectsEntity;
}
function ResumeProject({ e }: IResumeProject) {
  return (
    <section className="mb-4 flex flex-col">
      <h6 className="mb-2 text-lg font-semibold text-gray-700 dark:text-white lg:leading-5">
        {e.title}
      </h6>
      <Link
        href={e.project_url}
        className="text-xs font-light tracking-widest text-gray-500 dark:text-white lg:leading-3"
      >
        {e.project_url}
      </Link>
      <div className="flex w-full lg:leading-4"></div>
      <p className="mt-2 text-sm text-gray-700 dark:text-white lg:my-4">
        {e.short_description}
      </p>
    </section>
  );
}
interface IProps {
  projects?: IProjectsEntity[];
}

export function ResumeProjects({ projects }: IProps) {
  if (projects === undefined) return <></>;
  return (
    <ResumeField icon={ICRocket} title="Projects" showMargin={true}>
      {projects.map((e) => (
        <ResumeProject key={e.id} e={e!} />
      ))}
    </ResumeField>
  );
}
