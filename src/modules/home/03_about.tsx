import usePageTranslation from '@/hooks/usePageTranslation';

import { HomeSection } from '../shared/section';
import { AppTitle } from '../shared/title';

export function HomeAbout() {
  const { t } = usePageTranslation('home', 'About');
  return (
    <HomeSection
      parentClass="bg-white dark:bg-black sticky max-sm:relative -top-24 max-sm:top-0"
      className="flex gap-y-2.5 px-9 py-[120px] max-sm:px-2 max-sm:py-9"
    >
      <AppTitle title={t('title')} number={t('number')} />
      <div className="flex w-full gap-x-10 px-4">
        <p className="flex-1 whitespace-pre-line leading-9 tracking-[0.05em] text-black dark:text-white max-lg:text-lg max-sm:text-justify  max-sm:text-sm max-sm:leading-6">
          {t('content')}
        </p>
        <div className="relative h-[420px] w-80 rounded-3xl bg-primary dark:bg-primary-dark max-lg:hidden">
          <span className="absolute left-4 top-4 h-full w-full rounded-3xl border-[2px] border-primary dark:border-primary-dark" />
        </div>
      </div>
    </HomeSection>
  );
}
