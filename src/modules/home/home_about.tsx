import usePageTranslation from '@/hooks/usePageTranslation';

import HomeSection from './hoc/hoc_section';
import { HomeTitle } from './home_title';

export function HomeAbout() {
  const { t } = usePageTranslation('home', 'About');
  return (
    <HomeSection id="about" className="flex gap-y-2.5 px-9 py-[120px]">
      <HomeTitle title={t('title')} number={t('number')} />
      <div className="flex w-full gap-x-10 px-4">
        <p className="flex-1 whitespace-pre-line text-xl leading-9 tracking-[0.05em] text-black dark:text-white">
          {t('content')}
        </p>
        <div className="relative h-[420px] w-80 rounded-3xl bg-primary dark:bg-primary-dark">
          <span className="absolute left-4 top-4 h-full w-full rounded-3xl border-[2px] border-primary dark:border-primary-dark" />
        </div>
      </div>
    </HomeSection>
  );
}
