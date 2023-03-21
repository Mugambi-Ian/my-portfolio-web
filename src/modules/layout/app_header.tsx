/* eslint-disable tailwindcss/no-custom-classname */
import Link from 'next/link';
import { Fragment } from 'react';

import { SwitchThemeMode } from '@/components/switch-dark-mode';
import { SwitchLanguage } from '@/components/switch-languages';
import usePageTranslation from '@/hooks/usePageTranslation';
import { ICDown } from '@/modules/icons';
import {
  ICDrawer,
  ICGithub,
  ICLinkedin,
  ICLogo,
  ICMoon,
  ICResume,
  ICSun,
  ICTranslate,
  ICTwitter,
} from '@/modules/icons/header';

function MobileHeader() {
  const { t } = usePageTranslation('common', 'Header');
  return (
    <header
      id="mobile-header"
      className="sticky hidden w-full items-center border border-primary bg-primary py-3 pl-5 pr-3 dark:border-primary-dark dark:bg-black max-md:flex"
    >
      <Link href="/" className="flex">
        <ICLogo className="inherit h-9 w-9 fill-white dark:fill-primary-dark" />
      </Link>
      <Link href="/" className="ml-1">
        <h1 className="mx-4 -mt-1 flex text-xl uppercase tracking-[0.32em] text-white dark:text-primary-dark">
          {t('title')}
        </h1>
      </Link>
      <span className="flex-1" />
      <span className="h-8 w-[2px] bg-white dark:bg-primary-dark" />
      <button className="ml-2 flex h-12 w-12 items-center justify-center gap-x-2 rounded-lg dark:bg-black">
        <ICDrawer className="inherit h-6 w-6  fill-white dark:fill-primary-dark" />
      </button>
    </header>
  );
}

function DesktopHeader() {
  const { t, lang } = usePageTranslation('common', 'Header');
  return (
    <Fragment>
      <header
        id="desktop-header"
        className=" max-md:hidde sticky top-0 z-50 mr-[5px] flex w-full max-w-7xl items-center gap-3 self-center bg-[#E1F0FA] px-6 py-7  dark:bg-[#141D0E] max-lg:py-3"
      >
        <Link href={`/?lang=${lang}`} className="flex items-center gap-3">
          <ICLogo className="inherit h-[60px] w-[60px]  fill-primary dark:fill-primary-dark" />
          <h1 className="-mt-2 flex text-xl uppercase tracking-[0.32em] text-primary dark:text-primary-dark max-lg:hidden">
            {t('title')}
          </h1>
        </Link>
        <span className="flex-1" />
        <Link
          href={`/resume?lang=${lang}`}
          replace={true}
          className="flex items-center gap-x-2 rounded-lg bg-white py-2 pl-2 pr-3 dark:bg-black"
        >
          <span className="flex h-9 w-8 justify-center rounded ">
            <ICResume className="inherit h-6 w-5 self-center  fill-primary dark:fill-primary-dark" />
          </span>
          <p className="text-lg tracking-[0.05em] text-primary dark:text-primary-dark">
            {t('resume')}
          </p>
        </Link>
        <span className="h-8 w-[2px] bg-primary dark:bg-primary-dark" />
        <Link
          href="https://www.linkedin.com/in/ian-mugambi-65893917a/"
          className="flex h-12 w-12 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-black"
        >
          <ICLinkedin className="inherit h-6 w-5  fill-primary dark:fill-primary-dark" />
        </Link>
        <Link
          href="https://github.com/Mugambi-Ian"
          className="flex h-12 w-12 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-black"
        >
          <ICGithub className="inherit h-6 w-5  fill-primary dark:fill-primary-dark" />
        </Link>
        <Link
          href="https://twitter.com/mugambi_bruv"
          className="flex h-12 w-12 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-black"
        >
          <ICTwitter className="inherit h-6 w-5  fill-primary dark:fill-primary-dark" />
        </Link>
        <span className="h-8 w-[2px] bg-primary dark:bg-primary-dark" />
        <span className="skip-blur relative flex gap-4">
          <button
            className="flex h-12 items-center justify-center gap-x-2 rounded-lg bg-white px-3 dark:bg-black"
            id="switch-lang"
          >
            <ICTranslate className="inherit h-6 w-5  fill-primary dark:fill-primary-dark" />
            <ICDown className="inherit h-4 w-4  fill-primary dark:fill-primary-dark" />
          </button>
          <div className="flex h-12 items-center justify-center gap-x-4 rounded-lg bg-white px-3 dark:bg-black">
            <ICMoon className="h-6 w-5" />
            <SwitchThemeMode />
            <ICSun className="h-6 w-5" />
          </div>
        </span>
      </header>

      <SwitchLanguage lang={lang} />
    </Fragment>
  );
}

export const Header = () => (
  <Fragment>
    <MobileHeader />
    <DesktopHeader />
  </Fragment>
);
