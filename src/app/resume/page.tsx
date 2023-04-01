import { Fragment } from 'react';

import { apolloClient } from '@/graphql';
import type { IResumeEntity } from '@/graphql/models/resume';
import { GET_RESUME } from '@/graphql/queries/fetchResume';
import usePageTranslation from '@/hooks/usePageTranslation';
import { ResumeAwards } from '@/modules/resume/resume_awards';
import { ResumeExperiences } from '@/modules/resume/resume_experience';
import { ResumeHeader } from '@/modules/resume/resume_header';
import { ResumeProjects } from '@/modules/resume/resume_project';
import { ResumeReferences } from '@/modules/resume/resume_references';
import { ResumeYears } from '@/modules/resume/resume_years';

async function fetchData(locale: string) {
  try {
    const { data, error } = await apolloClient.query({
      query: GET_RESUME,
      variables: { locale },
    });
    const val = data as IResumeEntity;
    return { data: val.resume.data, error };
  } catch (error) {
    return { error };
  }
}

export default async function Resume() {
  const { lang } = usePageTranslation('common', 'Header');
  const { data, error } = await fetchData(lang);

  if (error) return <span>{JSON.stringify([error])}</span>;

  const attributes = data && data.attributes;

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
