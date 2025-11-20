/* eslint-disable react-hooks/rules-of-hooks */
import { Fragment } from 'react';

import { resumeData } from '@/data/resume';
import { HomePlatforms } from '@/modules/home/__platform';
import { HomeTech } from '@/modules/home/00_tech';
import { HomeAbout } from '@/modules/home/03_about';
import { HomeUI } from '@/modules/home/04_ui';
import { HomeExperience } from '@/modules/home/05_expirence';
import { HomeProjects } from '@/modules/home/06_projects';
import { HomePortfolioStack } from '@/modules/home/07_portfolio';
import { AnalyticEvent } from '@/modules/shared/analytics';

export default async function Page() {
  const attributes = resumeData;
  return (
    <Fragment>
      <div className="flex flex-col ">
        <HomePlatforms />
        <HomePortfolioStack />
        <HomeTech />
        <HomeAbout />
        <HomeUI />
        <HomeExperience workExperience={attributes.workExperience} />
        <HomeProjects projects={attributes.projects} />
      </div>
      <AnalyticEvent type="navigate" title="homepage" />
    </Fragment>
  );
}

export const revalidate = 60;
