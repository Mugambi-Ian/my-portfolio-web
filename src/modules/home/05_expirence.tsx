import Link from 'next/link';

import type { IWorkExperienceEntity } from '@/graphql/models/resume';
import usePageTranslation from '@/hooks/usePageTranslation';
import { IC_DocumentDownload } from '@/modules/icons';
import { HomeSection } from '@/modules/shared/section';
import { AppTitle } from '@/modules/shared/title';

import { ExperienceContent } from './modules/experience/nav';

interface IProps {
  experience?: IWorkExperienceEntity[];
}

export function HomeExperience({ experience }: IProps) {
  const { t, lang } = usePageTranslation('home', 'Experience');
  return (
    <HomeSection
      id="exp"
      parentClass="bg-secondary dark:bg-secondary-dark"
      className="relative flex gap-y-20 px-12 pb-12 pt-[120px] max-lg:gap-y-8  max-lg:px-3 max-lg:py-9"
    >
      <span className="flex w-full items-center gap-y-8 max-lg:flex-col-reverse max-lg:items-start">
        <AppTitle title={t('title')} number={t('number')} />
        <span className="flex-1 max-lg:hidden" />
        <Link
          href={`/resume/download/${lang}`}
          className="flex gap-x-3 whitespace-nowrap font-medium  uppercase tracking-[0.1em] text-primary dark:text-primary-dark max-lg:hidden max-lg:gap-x-1 max-lg:self-end max-lg:text-sm max-lg:font-normal"
        >
          {t('download')}
          <IC_DocumentDownload className="inherit h-6 w-6 fill-primary dark:fill-primary-dark max-lg:h-5 max-lg:w-5" />
        </Link>
      </span>
      <div className="flex w-full gap-x-9 gap-y-6  max-lg:flex-col max-lg:gap-x-4">
        <ExperienceContent experience={experience!} />
      </div>
    </HomeSection>
  );
}
