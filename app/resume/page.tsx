import { Fragment } from 'react';
import { apolloClient } from 'utils/graphql';
import type { IResumeEntity } from 'utils/graphql/models/resume';
import { GET_RESUME } from 'utils/graphql/queries/fetchResume';

import { ResumeAwards } from './resume_awards';
import { ResumeExperiences } from './resume_experience';
import { ResumeHeader } from './resume_header';
import { ResumeProjects } from './resume_project';
import { ResumeReferences } from './resume_references';
import { ResumeYears } from './resume_years';

async function fetchData() {
  try {
    const { data, error } = await apolloClient.query({
      query: GET_RESUME,
    });
    return { data: data as IResumeEntity, error };
  } catch (error) {
    return { error };
  }
}

export default async function Resume() {
  const { data, error } = await fetchData();

  if (error) return <span>{JSON.stringify([error])}</span>;

  const {
    data: { attributes },
  } = data!.resume;

  return (
    <Fragment>
      <ResumeHeader />
      <ResumeYears expirience={attributes.workExperience!} />
      <ResumeExperiences expirience={attributes.workExperience!} />
      <ResumeProjects projects={attributes.projects!} />
      <ResumeAwards awards={attributes.awards!} />
      <ResumeReferences references={attributes.references!} />
      <span className="h-8" />
    </Fragment>
  );
}
