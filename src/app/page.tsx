import { Fragment } from 'react';

import { apolloClient } from '@/graphql';
import type { IHomepageEntity } from '@/graphql/models/resume';
import { GET_HOMEPAGE_DATA } from '@/graphql/queries/fetchHomepageData';
import usePageTranslation from '@/hooks/usePageTranslation';
import { HomeAbout } from '@/modules/home/home_about';
import { HomeExperience } from '@/modules/home/home_experience';
import { HomeHeader } from '@/modules/home/home_header';
import { HomeProjects } from '@/modules/home/home_projects';
import { HomeServices } from '@/modules/home/home_services';

async function fetchData(locale: string) {
  const { data, error } = await apolloClient.query({
    query: GET_HOMEPAGE_DATA,
    variables: { locale },
    fetchPolicy: 'no-cache',
  });
  const val = data as IHomepageEntity;
  return { data: val.resume.data, error };
}

export default async function HomePage() {
  const { lang } = usePageTranslation('common', 'Header');
  const { data, error } = await fetchData(lang);

  if (error) return <span>{JSON.stringify([error])}</span>;

  const attributes = data && data.attributes;

  return (
    <Fragment>
      <HomeHeader />
      <HomeServices />
      <HomeAbout />
      <HomeExperience experience={attributes?.workExperience} />
      <HomeProjects projects={attributes?.projects} />
    </Fragment>
  );
}

export const revalidate = 120;
