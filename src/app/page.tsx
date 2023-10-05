/* eslint-disable react-hooks/rules-of-hooks */
import { Fragment } from 'react';

import { apollo_server } from '@/graphql';
import type {
  IHomepageAttributesEntity,
  IHomepageEntity,
} from '@/graphql/models/resume';
import { GET_HOMEPAGE_DATA } from '@/graphql/queries/fetchHomepageData';
import usePageTranslation from '@/hooks/usePageTranslation';
import { HomePlatforms } from '@/modules/home/__platform';
import { HomeServices } from '@/modules/home/__services';
import { HomeTech } from '@/modules/home/00_tech';
import { HomeDeploy } from '@/modules/home/01_deploy';
import { HomeTools } from '@/modules/home/02_tools';
import { HomeAbout } from '@/modules/home/03_about';
import { HomeUI } from '@/modules/home/04_ui';
import { HomeExperience } from '@/modules/home/05_expirence';
import { HomeProjects } from '@/modules/home/06_projects';
import { AnalyticEvent } from '@/modules/shared/analytics';

async function fetchData(locale: string) {
  let error: unknown | undefined;
  let data: IHomepageAttributesEntity | undefined;
  try {
    const res = await apollo_server<IHomepageEntity>(GET_HOMEPAGE_DATA, locale);
    data = res.data?.resume.data.attributes;
    error = res.error;
  } catch (err) {
    error = err;
  }
  return { data, error };
}

export default async function Page() {
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
      <HomePlatforms />
      <HomeServices />
      <HomeTech />
      <HomeDeploy />
      <HomeTools />
      <HomeAbout />
      <HomeUI />
      <AnalyticEvent type="navigate" title="homepage" />
      <HomeExperience experience={attributes?.workExperience} />
      <HomeProjects projects={attributes?.projects} />
    </Fragment>
  );
}

export const revalidate = 60;
