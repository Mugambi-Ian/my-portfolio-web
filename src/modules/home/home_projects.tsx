import Image from 'next/image';
import Link from 'next/link';

import type { IProjectsEntity } from '@/graphql/models/resume';
import usePageTranslation from '@/hooks/usePageTranslation';

import { ICFigma, ICLink, ICRepo } from '../icons';
import { ICWeb } from '../icons/platform';
import HomeSection from './hoc/hoc_section';
import { HomeTitle } from './home_title';

function ProjectCard({ p }: { p: IProjectsEntity }) {
  return (
    <li className="flex flex-col items-center px-6 pt-14 max-sm:mb-8 max-sm:px-3 max-sm:pt-4">
      <span className="flex w-full pb-3">
        <h1 className="flex-1 text-2xl font-black uppercase tracking-[0.25em] text-white max-sm:text-xl">
          {p.title}
        </h1>
        <Link
          aria-label={p.title}
          href={p.project_url}
          className="flex items-center gap-2 px-2 py-1 font-normal lowercase tracking-[0.1em] text-white"
        >
          <span className="max-md:hidden">visit-project</span>
          <ICLink className="inherit fill-white " />
        </Link>
      </span>
      <span className="h-[6px] w-full bg-white dark:bg-[#0F4D2F]" />
      <div className="w-full px-3 pr-4 ">
        <div className=" flex w-full items-start gap-x-8 rounded-b-2xl bg-[#505ABA] p-6 dark:bg-black dark:shadow-dark-ring  max-md:flex-col max-md:gap-y-2 max-md:px-3 max-md:py-0 max-md:pb-8">
          <div className="flex w-full flex-col ">
            <p className="px-1 py-3 text-lg leading-9 tracking-[0.02em] text-white max-sm:text-sm max-sm:leading-7">
              {p.long_description}
            </p>
            {p.links[0] && (
              <div className="mt-8 flex flex-col gap-y-4 max-md:mt-2">
                <h2 className="w-min bg-[#6D78D7]  px-6 py-1 uppercase tracking-[0.36em] text-white dark:bg-solid-dark max-md:text-sm">
                  Links
                </h2>
                <div className="flex flex-wrap gap-x-4">
                  {p.links.map((l) => (
                    <Link
                      href={l.link}
                      className="flex items-center gap-x-2 px-2 py-1"
                      key={`prlink${l.id}`}
                      aria-label={l.name}
                    >
                      {l.type === 'figma' && (
                        <ICFigma className="inherit fill-white " />
                      )}
                      {l.type === 'repo' && (
                        <ICRepo className="inherit fill-white " />
                      )}
                      {l.type === 'web' && (
                        <ICWeb className="inherit fill-white " />
                      )}
                      <p className="font-normal lowercase tracking-[0.1em] text-white max-sm:text-sm">
                        {l.name}
                      </p>
                      <ICLink className="inherit fill-white " />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <span className="relative mt-4 flex w-3/5 self-center max-md:w-11/12">
            <Image
              src={p.project_cover.data.attributes.url}
              alt={p.title}
              width={575}
              height={420}
              className="z-10 w-full rounded-xl object-contain"
            />
            <span className="absolute inset-0 z-20 h-full w-full rounded-xl bg-primary/25  dark:bg-primary-dark/25  " />
          </span>
        </div>
      </div>
    </li>
  );
}

interface IProps {
  projects?: IProjectsEntity[];
}

export function HomeProjects({ projects }: IProps) {
  const { t } = usePageTranslation('home', 'Projects');
  return (
    <HomeSection
      id="projects"
      className="relative flex gap-y-4 px-12 py-[120px] max-md:gap-y-8  max-md:px-3 max-md:py-9"
      background={
        <span className="absolute h-full w-screen bg-[#464FA3] dark:bg-accent-dark/50" />
      }
    >
      <HomeTitle white={true} title={t('title')} number={t('number')} />
      <ul className="flex w-full flex-col">
        {projects?.map((p) => (
          <ProjectCard key={`pr${p.id}`} p={p} />
        ))}
      </ul>
    </HomeSection>
  );
}
