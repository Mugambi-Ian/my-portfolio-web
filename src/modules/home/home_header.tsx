import usePageTranslation from '@/hooks/usePageTranslation';
import {
  ICAndroid,
  ICIPhone,
  ICLinux,
  ICMacbook,
  ICWeb,
  ICWindows,
} from '@/modules/icons/platform';

import HomeSection from './hoc/hoc_section';

function HeaderBG() {
  return (
    <section className="relative z-0 flex w-full max-md:hidden">
      <img
        id="home_header"
        alt="background"
        src="/assets/images/home/bg_light.svg"
        className="absolute flex w-screen object-contain dark:hidden max-md:hidden"
      />
      <img
        id="home_header_dark"
        alt="background"
        src="/assets/images/home/bg_dark.svg"
        className="absolute hidden w-screen object-contain dark:flex max-md:hidden"
      />
    </section>
  );
}

function HomeTitle() {
  const { t } = usePageTranslation('home', 'Header');
  return (
    <div className="flex flex-col gap-y-4 px-2.5 max-sm:w-full max-sm:gap-y-6 max-sm:px-0">
      <h1 className="text-2xl font-black uppercase tracking-[0.1em] text-primary dark:text-primary-dark max-md:text-xl">
        {t('title')}
      </h1>
      <h2 className="whitespace-pre-line text-2xl font-black uppercase tracking-[0.1em] text-black dark:text-white max-md:text-xl">
        {t('subtitle')}
      </h2>
      <p className="whitespace-pre-line text-base font-normal leading-[160%] tracking-[0.05em] text-black dark:text-white max-md:text-sm">
        {t('p')}
      </p>
    </div>
  );
}

function Platforms() {
  const { t } = usePageTranslation('home', 'Platform');
  return (
    <ul className="flex h-min w-80 flex-col items-center gap-y-3 rounded-lg bg-white/50 pb-4 dark:bg-black/50 max-md:text-sm max-sm:w-full max-sm:bg-accent max-sm:dark:bg-accent-dark">
      <li className="w-full rounded-t-lg bg-primary p-2.5 text-center text-lg font-medium tracking-[0.02em] text-white dark:bg-primary-dark max-md:text-base">
        {t('title')}
      </li>
      <li className="flex gap-x-2 max-md:mt-2">
        <ICWeb className="inherit h-6 w-6 fill-primary dark:fill-primary-dark" />
        <p className="uppercase tracking-[0.05em] text-black dark:text-white">
          {t('web')}
        </p>
      </li>
      <li className="flex gap-x-2">
        <ICAndroid className="inherit h-6 w-6 fill-primary dark:fill-primary-dark" />
        <ICIPhone className="inherit h-6 w-6 fill-primary dark:fill-primary-dark" />
        <p className="uppercase tracking-[0.05em] text-black dark:text-white">
          {t('mobile')}
        </p>
      </li>
      <li className="flex gap-x-2 max-md:mb-2">
        <ICMacbook className="inherit h-6 w-6 fill-primary dark:fill-primary-dark" />
        <ICWindows className="inherit h-6 w-6 fill-primary dark:fill-primary-dark" />
        <ICLinux className="inherit h-6 w-6 fill-primary dark:fill-primary-dark" />
        <p className="uppercase tracking-[0.05em] text-black dark:text-white">
          {t('desktop')}
        </p>
      </li>
    </ul>
  );
}

export function HomeHeader() {
  return (
    <HomeSection id="header" className="" background={<HeaderBG />}>
      <section className="z-10 flex w-full items-center py-10 px-9 max-sm:flex-col max-sm:gap-y-6 max-sm:p-6">
        <HomeTitle />
        <span className="flex-1" />
        <Platforms />
      </section>
    </HomeSection>
  );
}
