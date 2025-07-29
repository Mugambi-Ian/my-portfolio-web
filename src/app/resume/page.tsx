/* eslint-disable react-hooks/rules-of-hooks */
import { Fragment } from 'react';

import { apollo_server } from '@/graphql';
import type {
  IResumeAttributesEntity,
  IResumeEntity,
} from '@/graphql/models/resume';
import { GET_RESUME } from '@/graphql/queries/fetchResume';
import { ResumeHeader } from '@/modules/resume/__header';
import { ResumeYears } from '@/modules/resume/00_years';
import { ResumeExperiences } from '@/modules/resume/01_experience';
import { ResumeEducation } from '@/modules/resume/02_education';
import { ResumeProjects } from '@/modules/resume/03_projects';
import { ResumeAwards } from '@/modules/resume/04_awards';
import { ResumeReferences } from '@/modules/resume/05_references';
import { AnalyticEvent } from '@/modules/shared/analytics';
import { locale_resolve } from '@/utils';

async function fetchData(locale: string) {
  let error: unknown | undefined;
  let data: IResumeAttributesEntity | undefined;
  try {
    const res = await apollo_server<IResumeEntity>(
      GET_RESUME,
      locale_resolve(locale)
    );
    data = res.data?.resume.data.attributes;
    error = res.error;
  } catch (err) {
    error = err;
  }
  return { data, error };
}

export default async function Resume() {
  const { data: attributes, error } = await fetchData('en');

  if (error)
    return (
      <span className="my-12 flex max-w-5xl px-3 text-center text-3xl font-black tracking-wide dark:text-white">
        <p className="w-full">{JSON.stringify(error)}</p>
      </span>
    );

  return (
    <Fragment>
      <ResumeHeader />
      <AnalyticEvent type="navigate" title="resume" />
      <ResumeYears experience={attributes?.workExperience} />
      <ResumeExperiences experience={attributes?.workExperience} />
      <ResumeEducation education={attributes?.education} />
      <ResumeProjects projects={attributes?.projects} />
      <ResumeAwards awards={attributes?.awards} />
      <ResumeReferences references={attributes?.references} />
    </Fragment>
  );
}

export const revalidate = 5000;
