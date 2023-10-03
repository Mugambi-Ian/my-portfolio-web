/* eslint-disable react-hooks/rules-of-hooks */
import { Fragment } from 'react';

import { apollo_server } from '@/graphql';
import type {
  IResumeAttributesEntity,
  IResumeEntity,
} from '@/graphql/models/resume';
import { GET_RESUME } from '@/graphql/queries/fetchResume';
import usePageTranslation from '@/hooks/usePageTranslation';
import { ResumeAwards } from '@/modules/resume/awards';
import { ResumeExperiences } from '@/modules/resume/experience';
import { ResumeHeader } from '@/modules/resume/header';
import { ResumeProjects } from '@/modules/resume/projects';
import { ResumeReferences } from '@/modules/resume/references';
import { ResumeYears } from '@/modules/resume/years';

async function fetchData(locale: string) {
  let error: unknown | undefined;
  let data: IResumeAttributesEntity | undefined;
  try {
    const res = await apollo_server<IResumeEntity>(GET_RESUME, locale);
    data = res.data?.resume.data.attributes;
    error = res.error;
  } catch (err) {
    error = err;
  }
  return { data, error };
}

export default async function Resume() {
  const { lang } = usePageTranslation('common', 'Header');
  const { data: attributes, error } = await fetchData(lang);

  if (error)
    return (
      <span className="my-12 flex max-w-5xl px-3 text-center text-3xl font-black tracking-wide dark:text-white">
        <p className="w-full">{JSON.stringify(error)}</p>
      </span>
    );

  return (
    <Fragment>
      <ResumeHeader />
      <ResumeYears experience={attributes?.workExperience} />
      <ResumeExperiences experience={attributes?.workExperience} />
      <ResumeProjects projects={attributes?.projects} />
      <ResumeAwards awards={attributes?.awards} />
      <ResumeReferences references={attributes?.references} />
    </Fragment>
  );
}

export const revalidate = 5000;
