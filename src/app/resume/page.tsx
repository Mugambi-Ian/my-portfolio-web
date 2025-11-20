/* eslint-disable react-hooks/rules-of-hooks */
import { Fragment } from 'react';

import { resumeData } from '@/data/resume';
import { ResumeHeader } from '@/modules/resume/__header';
import { ResumeYears } from '@/modules/resume/00_years';
import { ResumeExperiences } from '@/modules/resume/01_experience';
import { ResumeEducation } from '@/modules/resume/02_education';
import { ResumeProjects } from '@/modules/resume/03_projects';
import { ResumeAwards } from '@/modules/resume/04_awards';
import { ResumeReferences } from '@/modules/resume/05_references';
import { AnalyticEvent } from '@/modules/shared/analytics';

export default async function Resume() {
  const attributes = resumeData;

  return (
    <Fragment>
      <main className="bg-[#f9f6ef] text-slate-900 print:bg-white print:text-black">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 pb-24 pt-10 sm:px-6 lg:px-0 print:max-w-full print:px-0 print:pb-10">
          <ResumeHeader />
          <div className="grid gap-8 lg:grid-cols-[260px,1fr]">
            <aside className="space-y-8">
              <ResumeYears experience={attributes?.workExperience} />
              <ResumeEducation education={attributes?.education} />
              <ResumeAwards awards={attributes?.awards} />
              <ResumeReferences references={attributes?.references} />
            </aside>
            <section className="space-y-8">
              <ResumeExperiences experience={attributes?.workExperience} />
              <ResumeProjects projects={attributes?.projects} />
            </section>
          </div>
        </div>
      </main>
      <AnalyticEvent type="navigate" title="resume" />
    </Fragment>
  );
}

export const revalidate = 5000;
