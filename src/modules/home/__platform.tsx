import usePageTranslation from '@/hooks/usePageTranslation';
import {
  IC_Android,
  IC_IPhone,
  IC_Linux,
  IC_Macbook,
  IC_Web,
  IC_Windows,
} from '@/modules/home/icons/platform';

import { HomeSection } from '../shared/section';

function HeaderBG() {
  return (
    <section className="relative z-0 flex w-full max-sm:hidden">
      <img
        id="home_header"
        alt="background"
        src="/assets/images/home/bg_light.svg"
        className="absolute flex w-screen object-contain dark:hidden max-sm:hidden"
      />
      <img
        id="home_header_dark"
        alt="background"
        src="/assets/images/home/bg_dark.svg"
        className="absolute hidden w-screen object-contain dark:flex max-sm:hidden"
      />
    </section>
  );
}

function AppTitle() {
  const { t } = usePageTranslation('home', 'Header');
  return (
    <div className="flex flex-col gap-y-4 px-2.5 max-sm:w-full max-sm:gap-y-6 max-sm:px-0">
      <h1 className="whitespace-pre-line text-2xl font-black uppercase tracking-[0.1em] text-primary dark:text-primary-dark max-sm:text-xl">
        {t('title')}
      </h1>
      <h2 className="whitespace-pre-line text-2xl font-black uppercase tracking-[0.1em] text-black dark:text-white max-sm:text-xl">
        {t('subtitle')}
      </h2>
      <p className="whitespace-pre-line text-base font-normal leading-[160%] tracking-[0.05em] text-black dark:text-white max-sm:text-sm">
        {t('p')}
      </p>
    </div>
  );
}

function Platforms() {
  const { t } = usePageTranslation('home', 'Platform');
  return (
    <ul className="flex h-min w-80 flex-col items-center gap-y-3 rounded-lg bg-white/50 pb-4 dark:bg-black/50 max-sm:w-11/12 max-sm:self-start max-sm:bg-accent max-sm:text-sm max-sm:dark:bg-accent-dark">
      <li className="w-full rounded-t-lg bg-primary p-2.5 text-center text-lg font-medium tracking-[0.02em] text-white dark:bg-solid-dark max-sm:text-base">
        {t('title')}
      </li>
      <li className="flex gap-x-2 max-sm:mt-2">
        <IC_Web className="inherit h-6 w-6 fill-primary dark:fill-primary-dark" />
        <p className="uppercase tracking-[0.05em] text-black dark:text-white">
          {t('web')}
        </p>
      </li>
      <li className="flex gap-x-2">
        <IC_Android className="inherit h-6 w-6 fill-primary dark:fill-primary-dark" />
        <IC_IPhone className="inherit h-6 w-6 fill-primary dark:fill-primary-dark" />
        <p className="uppercase tracking-[0.05em] text-black dark:text-white">
          {t('mobile')}
        </p>
      </li>
      <li className="flex gap-x-2 max-sm:mb-2">
        <IC_Macbook className="inherit h-6 w-6 fill-primary dark:fill-primary-dark" />
        <IC_Windows className="inherit h-6 w-6 fill-primary dark:fill-primary-dark" />
        <IC_Linux className="inherit h-6 w-6 fill-primary dark:fill-primary-dark" />
        <p className="uppercase tracking-[0.05em] text-black dark:text-white">
          {t('desktop')}
        </p>
      </li>
    </ul>
  );
}

export function HomePlatforms() {
  return (
    <HomeSection className="" background={<HeaderBG />}>
      <section className="z-10 flex w-full items-center px-9 py-10 max-sm:flex-col max-sm:gap-y-6 max-sm:px-6 max-sm:pr-4">
        <AppTitle />
        <span className="flex-1" />
        <Platforms />
      </section>
    </HomeSection>
  );
}
