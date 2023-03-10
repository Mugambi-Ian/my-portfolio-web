import type { IWorkExperienceEntity } from 'graphql/models/resume';
import Link from 'next/link';
import type { FC } from 'react';
import { Fragment } from 'react';
import { getDuration } from 'utils';

import { ResumeField } from './hoc_field';

interface IResumeExperience {
  e: IWorkExperienceEntity;
}
const ResumeExperience: FC<IResumeExperience> = ({ e }) => {
  const parseDate = (date: string) => {
    return new Date(date).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
    });
  };

  return (
    <Fragment>
      <div className="mb-2 flex w-full leading-6 lg:leading-7">
        <h6 className="text-lg font-semibold leading-4 text-gray-700 lg:text-xl lg:leading-5">
          {e.title}
        </h6>
        <span className="flex-1" />
        <p className="whitespace-nowrap text-end text-xs text-gray-500">
          {parseDate(e.start_date!)} - {parseDate(e.end_date!)}
        </p>
      </div>
      <div className="flex w-full leading-4">
        <h6 className="font-normal leading-3 text-gray-500 lg:text-lg">
          {e.company}
        </h6>
        <span className="flex-1" />
        <p className="flex text-xs text-gray-500">
          {e.location}
          <span className="hidden lg:block">
            {` / ${getDuration(e.start_date!, e.end_date!)}`}
          </span>
        </p>
      </div>
      <p className="mt-3 text-sm text-gray-700">{e.description}</p>
      {e.roles?.map((role) => (
        <Fragment key={role?.id}>
          <span className="mt-4 font-semibold text-gray-700">
            {role?.department}
          </span>
          <Link
            href={role.project_url}
            className="mb-2 text-xs font-medium leading-4 text-gray-500"
          >
            {role?.project_url}
          </Link>
          <ul className="ml-8 list-disc text-sm text-gray-700">
            {role?.deparment_roles?.data?.map((jd) => (
              <li key={jd?.id}>{jd?.attributes.role}</li>
            ))}
          </ul>
          <span className="mt-4 mb-2 font-semibold text-gray-700">
            Tech Stack
          </span>
          <div className="mb-5 flex flex-wrap text-xs text-gray-600">
            {role.tech_stack.data?.map((ts) => (
              <p
                className="mr-2 mb-2 whitespace-nowrap rounded p-1 shadow-card"
                key={ts?.id}
              >
                {ts?.attributes.techStack}
              </p>
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

export const ResumeExperiences: FC<{
  expirience: IWorkExperienceEntity[];
}> = ({ expirience }) => (
  <ResumeField
    icon="/assets/images/calendar.png"
    title="Work Experience"
    showMargin={true}
  >
    {expirience.map((e) => (
      <ResumeExperience key={e.id} e={e!} />
    ))}
  </ResumeField>
);
