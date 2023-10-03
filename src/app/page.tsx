/* eslint-disable react-hooks/rules-of-hooks */
import { Fragment } from 'react';

import { apollo_server } from '@/graphql';
import type {
  IHomepageAttributesEntity,
  IHomepageEntity,
} from '@/graphql/models/resume';
import { GET_HOMEPAGE_DATA } from '@/graphql/queries/fetchHomepageData';
import usePageTranslation from '@/hooks/usePageTranslation';
import { HomeAbout } from '@/modules/home/about';
import { HomeHeader } from '@/modules/home/header';
import { HomeExperience } from '@/modules/home/modules/experience/page';
import { HomeProjects } from '@/modules/home/projects';
import { HomeServices } from '@/modules/home/services';

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
      <HomeHeader />
      <HomeServices />
      <HomeAbout />
      <HomeExperience experience={attributes?.workExperience} />
      <HomeProjects projects={attributes?.projects} />
    </Fragment>
  );
}

export const revalidate = 60;
