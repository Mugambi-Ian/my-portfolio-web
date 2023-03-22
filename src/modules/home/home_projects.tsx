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
    <section className="flex flex-col items-center px-6 pt-14 max-sm:px-3 max-sm:pt-4">
      <span className="flex w-full pb-3">
        <h1 className="flex-1 text-2xl font-black uppercase tracking-[0.25em] text-white">
          {p.title}
        </h1>
        <Link
          href={p.project_url}
          className="flex items-center gap-2 py-1 px-2 font-normal lowercase tracking-[0.1em] text-white"
        >
          <span className="max-md:hidden">visit-project</span>
          <ICLink className="inherit fill-white " />
        </Link>
      </span>
      <span className="h-[6px] w-full bg-white dark:bg-[#0F4D2F]" />
      <div className="w-full px-3 pr-4 ">
        <div className=" flex w-full items-start gap-x-8 rounded-b-2xl bg-[#505ABA] p-6 dark:bg-black dark:shadow-dark-ring  max-md:flex-col max-md:gap-y-4 max-md:pb-8">
          <div className="flex w-full flex-col ">
            <p className="py-3 px-1 text-lg leading-9 tracking-[0.02em] text-white max-sm:text-sm max-sm:leading-7">
              {p.long_description}
            </p>
            {p.links[0] && (
              <div className="mt-8 flex flex-col gap-y-4">
                <h3 className="w-min bg-[#6D78D7]  py-1 px-6 uppercase tracking-[0.36em] text-white dark:bg-primary-dark max-sm:text-sm">
                  Links
                </h3>
                <div className="flex flex-wrap gap-x-4">
                  {p.links.map((l) => (
                    <Link
                      href={l.link}
                      className="flex items-center gap-x-2 py-1 px-2"
                      key={`prlink${l.id}`}
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
          <span className="relative mt-4 flex w-3/5 self-center max-md:w-4/5">
            <Image
              src={p.project_cover.data.attributes.url}
              alt={p.title}
              width={575}
              height={420}
              className="z-10 w-full rounded-xl object-contain"
            />
            <span className="absolute inset-0 z-20 h-full w-full rounded-xl bg-[#464FA3]/25  dark:bg-[#095C33]/25  " />
          </span>
        </div>
      </div>
    </section>
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
      className="relative flex gap-y-20 px-12 py-[120px] max-md:gap-y-8  max-md:py-9 max-md:px-3"
      background={
        <span className="absolute h-full w-screen bg-[#464FA3] dark:bg-accent-dark/50" />
      }
    >
      <HomeTitle white={true} title={t('title')} number={t('number')} />
      <li className="flex w-full flex-col">
        {projects?.map((p) => (
          <ProjectCard key={`pr${p.id}`} p={p} />
        ))}
      </li>
    </HomeSection>
  );
}
