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
  const { t, lang } = usePageTranslation('home', 'Experience');
  return (
    <HomeSection
      id="exp"
      className="relative flex gap-y-20 px-12 py-[120px] max-md:gap-y-8  max-md:py-9 max-md:px-3"
      background={
        <span className="absolute h-full w-screen bg-secondary dark:bg-secondary-dark" />
      }
    >
      <span className="flex w-full items-center gap-y-8 max-md:flex-col-reverse max-md:items-start">
        <HomeTitle title={t('title')} number={t('number')} />
        <span className="flex-1 max-md:hidden" />
        <Link
          href={`/resume/download/${lang}`}
          className="flex gap-x-3 whitespace-nowrap  font-medium uppercase tracking-[0.1em] text-primary dark:text-primary-dark max-lg:gap-x-1 max-md:gap-x-2 max-md:self-end max-md:text-sm max-md:font-normal"
        >
          {t('download')}
          <ICDocumentDownload className="inherit h-6 w-6 fill-primary dark:fill-primary-dark max-md:h-5 max-md:w-5" />
        </Link>
      </span>
      <div className="flex w-full gap-x-9 gap-y-6  max-lg:gap-x-4 max-md:flex-col">
        <HomeExperienceContext experience={experience!} />
      </div>
    </HomeSection>
  );
}
