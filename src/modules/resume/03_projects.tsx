import Link from 'next/link';

import type { IProjectsEntity } from '@/graphql/models/resume';

import { IC_Rocket } from '../icons/resume';
import { ResumeField } from '../shared/section';

interface IResumeProject {
  e: IProjectsEntity;
}
function ResumeProject({ e }: IResumeProject) {
  return (
    <section className="mb-3 flex flex-col">
      <div className=" flex items-center max-sm:flex-col max-sm:items-start">
        <h6 className="flex-1 text-lg font-semibold text-slate-900 dark:text-white lg:leading-5">
          {e.title}
        </h6>
        <Link
          href={e.project_url}
          className="rounded bg-blue-800 px-4 py-1.5 text-xs font-light tracking-widest text-white dark:bg-blue-800 dark:text-white lg:leading-3"
        >
          {e.project_url.replaceAll('https://', '')}
        </Link>
      </div>
      <p className="my-2 text-sm leading-6 tracking-[0.02em] dark:text-white">
        {e.long_description}
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
    <ResumeField Icon={IC_Rocket} title={'Projects'} showMargin={true}>
      {projects.map((e) => (
        <ResumeProject key={e.id} e={e!} />
      ))}
    </ResumeField>
  );
}
