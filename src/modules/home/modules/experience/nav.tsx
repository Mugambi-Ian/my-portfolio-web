'use client';

import clsx from 'clsx';
import { Fragment, useState } from 'react';

import type { IWorkExperienceEntity } from '@/graphql/models/resume';
import type { AppSliderInstance } from '@/modules/shared/slider';
import { AppSlider, SliderNav, ThumbnailPlugin } from '@/modules/shared/slider';

import { HomeExperienceContent } from './content';

interface IDesktopNavProps {
  current: number;
  setCurrent?: (x: number) => void;
  positions?: { company: string; id: string }[];
}

function NavDesktop({ current, positions, setCurrent }: IDesktopNavProps) {
  if (positions === undefined) return <></>;
  const dividerHeight = (positions.length - 1) * 80 + 60;

  return (
    <div className="flex basis-3/5 gap-x-9 max-lg:hidden max-lg:gap-x-4 ">
      <div
        className="relative flex flex-col"
        style={{ height: `${dividerHeight}px` }}
      >
        <span className="absolute h-full w-[1px] self-center bg-solid dark:bg-solid-dark" />
        {positions.map((_, id) => (
          <span
            key={id}
            className={clsx(
              'w-6 flex-1',
              id !== current && 'py-5',
              id === current &&
                'mb-2 mt-1 rounded-2xl bg-solid dark:bg-solid-dark'
            )}
          />
        ))}
      </div>
      <div className="flex w-full max-w-xs flex-col">
        {positions.map((p, i) => {
          const active = i === current;
          return (
            <button
              key={p.id}
              onClick={() => setCurrent && setCurrent(i)}
              className={clsx(
                ' px-7 text-start uppercase tracking-[0.15em]',
                !active &&
                  'w-min whitespace-nowrap py-7 font-light text-black dark:text-white',
                active &&
                  'w-full  rounded-2xl bg-solid py-5  font-bold  text-white  dark:bg-solid-dark'
              )}
            >
              {p.company}
            </button>
          );
        })}
      </div>
    </div>
  );
}

interface IProps {
  experience?: IWorkExperienceEntity[];
}

export function ExperienceContent({ experience }: IProps) {
  const [current, setCurrent] = useState(0);
  const [instance, setInstance] = useState<AppSliderInstance>();
  if (!experience) return <></>;
  return (
    <Fragment>
      <div className={clsx('mx-2 hidden w-full py-2 max-lg:flex')}>
        {instance && (
          <AppSlider
            options={{
              rtl: false,
              loop: false,
              mode: 'snap',
              slides: { perView: 'auto' },
            }}
            lastEmpty={1}
            className={{ child: 'min-w-max max-w-max px-3' }}
            keys={experience.map((r) => r.id)}
            plugins={[ThumbnailPlugin(instance)]}
          >
            {experience?.map(({ company, id }, i) => (
              <SliderNav
                key={id}
                title={company}
                active={current === i}
                setCurrent={() => instance?.current?.moveToIdx(i)}
              />
            ))}
          </AppSlider>
        )}
      </div>
      <AppSlider
        setInsatnceRef={setInstance}
        keys={experience.map((r) => r.id)}
        options={{
          slideChanged: (x) => {
            setCurrent(x.track.details.rel);
          },
        }}
      >
        {experience.map((exp) => (
          <HomeExperienceContent exp={exp} key={exp.id} />
        ))}
      </AppSlider>
      <NavDesktop
        current={current}
        setCurrent={instance?.current?.moveToIdx}
        positions={experience?.map(({ company, id }) => ({
          company,
          id,
        }))}
      />
    </Fragment>
  );
}
