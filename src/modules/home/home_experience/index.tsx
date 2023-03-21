import Link from 'next/link';

import type { IWorkExperienceEntity } from '@/graphql/models/resume';
import usePageTranslation from '@/hooks/usePageTranslation';
import { ICDocumentDownload } from '@/modules/icons';

import HomeSection from '../hoc/hoc_section';
import { HomeTitle } from '../home_title';
import { HomeExperienceContext } from './experience_nav';

interface IProps {
  experience?: IWorkExperienceEntity[];
}

export function HomeExperience({ experience }: IProps) {
  const { t } = usePageTranslation('home', 'Experience');
  return (
    <HomeSection
      id="exp"
      className="relative flex gap-y-20 px-12 py-[120px]"
      background={
        <span className="absolute h-full w-screen bg-secondary dark:bg-secondary-dark" />
      }
    >
      <span className="flex w-full items-center">
        <HomeTitle title={t('title')} number={t('number')} />
        <span className="flex-1" />
        <Link
          href={'/resume/download'}
          className="flex gap-x-3 font-medium uppercase tracking-[0.1em] text-primary dark:text-primary-dark"
        >
          {t('download')}
          <ICDocumentDownload className="inherit h-6 w-6 fill-primary dark:fill-primary-dark" />
        </Link>
      </span>
      <div className="flex w-full gap-x-9">
        <HomeExperienceContext experience={experience!} />
      </div>
    </HomeSection>
  );
}
