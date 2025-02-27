'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { useState } from 'react';

import type { IProjectsEntity } from '@/graphql/models/resume';
import { analytics_log_event } from '@/utils/firebase/analytics';

import { IC_Figma, IC_Link, IC_Repo } from '../icons';
import { HomeSection } from '../shared/section';
import type { AppSliderInstance } from '../shared/slider';
import { AppSlider, SliderNav, ThumbnailPlugin } from '../shared/slider';
import { AppTitle } from '../shared/title';
import { IC_Web } from './icons/platform';

function ProjectCard({ p }: { p: IProjectsEntity }) {
  return (
    <li className="flex flex-col items-center px-6 py-14 max-sm:mb-8 max-sm:px-3 max-sm:pt-4">
      <span className="flex w-full pb-3">
        <h1 className="flex-1 text-2xl font-black uppercase tracking-[0.25em] text-primary dark:text-white max-sm:text-xl">
          {p.title}
        </h1>
        <Link
          aria-label={p.title}
          href={p.project_url}
          className="flex items-center gap-2 px-2 py-1 font-normal lowercase tracking-[0.1em] text-primary dark:text-white"
        >
          <span className="max-sm:hidden">visit-project</span>
          <IC_Link className="inherit fill-white " />
        </Link>
      </span>
      <span className="h-[6px] w-full bg-primary dark:bg-[#0F4D2F]" />
      <div className="relative w-full px-3  pr-4">
        <div className=" flex w-full items-start gap-x-8 rounded-b-2xl bg-[#505ABA] p-6 dark:bg-black dark:shadow-dark-ring  max-lg:flex-col max-sm:gap-y-2 max-sm:px-3 max-sm:py-0 max-sm:pb-8">
          <div
            className={clsx(
              'flex w-full flex-col',
              p.project_cover && 'pr-96 max-lg:pr-0'
            )}
          >
            <p className="px-1 py-3 text-lg leading-9 tracking-[0.02em] text-white max-sm:text-sm max-sm:leading-7">
              {p.long_description}
            </p>
            {p.links[0] && (
              <div className="mt-8 flex flex-col gap-y-4 max-sm:mt-2">
                <h2 className="w-min bg-[#6D78D7]  px-6 py-1 uppercase tracking-[0.36em] text-white dark:bg-solid-dark max-sm:text-sm">
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
                        <IC_Figma className="inherit fill-white " />
                      )}
                      {l.type === 'repo' && (
                        <IC_Repo className="inherit fill-white " />
                      )}
                      {l.type === 'web' && (
                        <IC_Web className="inherit fill-white " />
                      )}
                      <p className="font-normal lowercase tracking-[0.1em] text-white max-sm:text-sm">
                        {l.name}
                      </p>
                      <IC_Link className="inherit fill-white " />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          {p.project_cover && (
            <span className="absolute right-[-200px] mt-4 flex w-[600px] self-center max-lg:relative max-lg:right-0 max-lg:w-11/12">
              <Link
                target="_blank"
                href={p.project_cover}
                className="flex w-full"
              >
                <Image
                  src={p.project_cover}
                  alt={p.title}
                  width={575}
                  height={420}
                  className="z-10 w-full rounded-xl object-contain"
                />
              </Link>
            </span>
          )}
        </div>
      </div>
    </li>
  );
}

interface IProps {
  projects?: IProjectsEntity[];
}

export function HomeProjects({ projects }: IProps) {
  const { t } = useTranslation('home');
  const [current, setCurrent] = useState(0);
  const [instance, setInstance] = useState<AppSliderInstance>();
  return (
    <HomeSection
      parentClass="sticky bg-white dark:bg-black -top-24"
      className="relative flex gap-y-4 px-12 py-[120px] max-sm:gap-y-8  max-sm:px-3 max-sm:py-9"
    >
      <span className="flex w-full items-center gap-4 max-lg:flex-col max-lg:items-start">
        <AppTitle title={t('Projects_title')} number={t('Projects_number')} />
        {instance && (
          <AppSlider
            options={{
              rtl: false,
              loop: false,
              mode: 'snap',
              slides: { perView: 'auto' },
              slideChanged: () =>
                analytics_log_event('scroll', 'home_projects'),
            }}
            keys={['1', '2', '3']}
            plugins={[ThumbnailPlugin(instance)]}
            className={{
              parent: 'flex-1 justify-end gap-2 max-sm:justify-start  ',
              child: 'min-w-max max-w-max',
            }}
          >
            {projects!.map((p, i) => (
              <SliderNav
                key={p.id}
                title={p.title}
                active={current === i}
                setCurrent={() => instance?.current?.moveToIdx(i)}
              />
            ))}
          </AppSlider>
        )}
      </span>

      <AppSlider
        setInsatnceRef={setInstance}
        keys={projects!.map((r) => r.id)}
        options={{
          slideChanged: (x) => {
            setCurrent(x.track.details.rel);
          },
        }}
      >
        {projects!.map((p) => (
          <ProjectCard key={`pr${p.id}`} p={p} />
        ))}
      </AppSlider>
    </HomeSection>
  );
}
