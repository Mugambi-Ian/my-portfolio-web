'use client';

import clsx from 'clsx';
import { Fragment, useState } from 'react';

import type { IWorkExperienceEntity } from '@/graphql/models/resume';

import { HomeExperienceContent } from './expirence_content';

interface IHomeExperienceNavProps {
  current: number;
  setCurrent: (x: number) => void;
  positions?: { company: string; id: string }[];
}

function HomeExperienceNav({
  positions,
  setCurrent,
  current,
}: IHomeExperienceNavProps) {
  if (positions === undefined) return <></>;
  const dividerHeight = (positions.length - 1) * 80 + 60;

  return (
    <div className="flex gap-x-9">
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
                'mt-1 mb-2 rounded-2xl bg-solid dark:bg-solid-dark'
            )}
          />
        ))}
      </div>
      <div className="flex w-80 flex-col">
        {positions.map((p, i) => {
          const active = i === current;
          return (
            <button
              key={p.id}
              onClick={() => setCurrent(i)}
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

export function HomeExperienceContext({ experience }: IProps) {
  const [current, setCurrent] = useState(0);
  if (experience === undefined) return <></>;
  return (
    <Fragment>
      <HomeExperienceContent exp={experience[current]} />
      <HomeExperienceNav
        current={current}
        setCurrent={setCurrent}
        positions={experience?.map(({ company, id }) => ({
          company,
          id,
        }))}
      />
    </Fragment>
  );
}
