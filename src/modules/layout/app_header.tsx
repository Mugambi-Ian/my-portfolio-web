/* eslint-disable tailwindcss/no-custom-classname */
import Link from 'next/link';
import { Fragment } from 'react';

import { AppNav } from '@/components/app-nav';
import SwitchThemeMode from '@/components/switch_dark_mode';
import usePageTranslation from '@/hooks/usePageTranslation';
import { ICDown } from '@/modules/icons';
import {
  ICDrawer,
  ICGithub,
  ICLinkedin,
  ICLogo,
  ICMoon,
  ICSun,
  ICTranslate,
  ICTwitter,
} from '@/modules/icons/header';
import { clientComponent } from '@/utils';

import ResumeLink from './app_resume';

const MobileDrawer = clientComponent(() => import('./app_drawer'));
const SwitchLanguage = clientComponent(
  () => import('@/components/switch_languages')
);
function MobileHeader() {
  const { t } = usePageTranslation('common', 'Header');
  return (
    <Fragment>
      <header
        id="mobile-header"
        className="sticky hidden w-full items-center border border-primary bg-primary py-3 pl-5 pr-3 dark:border-primary-dark dark:bg-black max-md:flex"
      >
        <Link href="/" className="flex items-center gap-x-4" aria-label="home">
          <ICLogo className="inherit h-9 w-9 fill-white dark:fill-primary-dark" />
          <h1 className="mx-2 ml-1  flex uppercase tracking-[0.32em] text-white dark:text-primary-dark max-[420px]:text-xs ">
            {t('title')}
          </h1>
        </Link>
        <span className="flex-1" />
        <span className="h-8 w-[2px] bg-white dark:bg-primary-dark" />
        <button
          className="ml-2 flex h-12 w-12 items-center justify-center gap-x-2 rounded-lg dark:bg-black"
          id="drawer-btn"
          aria-label="Open drawer"
        >
          <ICDrawer className="inherit h-6 w-6  fill-white dark:fill-primary-dark" />
        </button>
      </header>
      <MobileDrawer />
    </Fragment>
  );
}
function DesktopHeader() {
  const { t, lang } = usePageTranslation('common', 'Header');
  return (
    <Fragment>
      <header
        id="desktop-header"
        className="sticky  top-0 z-50 mr-[5px] flex w-full items-center justify-center bg-[#E1F0FA] dark:bg-[#141D0E] "
      >
        <div className="flex  w-full max-w-7xl items-center gap-3 self-center px-6 py-7 max-lg:py-3 max-md:hidden">
          <Link
            href={`/?lang=${lang}`}
            className="flex items-center gap-3"
            aria-label="home"
          >
            <ICLogo className="inherit h-[60px] w-[60px]  fill-primary dark:fill-primary-dark" />
            <h1 className="-mt-2 flex text-xl uppercase tracking-[0.32em] text-primary dark:text-primary-dark max-lg:hidden">
              {t('title')}
            </h1>
          </Link>
          <span className="flex-1" />
          <ResumeLink dTitle={t('download')} rTitle={t('resume')} />
          <span className="h-8 w-[2px] bg-primary dark:bg-primary-dark" />
          <AppNav
            href="https://www.linkedin.com/in/ian-mugambi-65893917a/"
            icon={ICLinkedin}
            title={t('resume')}
            hideTitle={true}
          />
          <AppNav
            href="https://github.com/Mugambi-Ian"
            icon={ICGithub}
            title={t('resume')}
            hideTitle={true}
          />
          <AppNav
            href="https://twitter.com/mugambi_bruv"
            icon={ICTwitter}
            title={t('resume')}
            hideTitle={true}
          />
          <span className="h-8 w-[2px] bg-primary dark:bg-primary-dark" />
          <span className="skip-blur relative flex gap-4">
            <button
              className="flex h-12 items-center justify-center gap-x-2 rounded-lg bg-white px-3 dark:bg-black"
              id="switch-lang-desktop"
            >
              <ICTranslate className="inherit h-6 w-5  fill-primary dark:fill-primary-dark" />
              <ICDown className="inherit h-4 w-4  fill-primary dark:fill-primary-dark" />
            </button>
            <div className="flex h-12 items-center justify-center gap-x-4 rounded-lg bg-white px-3 dark:bg-black">
              <ICSun className="h-6 w-5" />
              <SwitchThemeMode />
              <ICMoon className="h-6 w-5" />
            </div>
          </span>
        </div>
      </header>

      <SwitchLanguage lang={lang} fixed={true} id="switch-lang-desktop" />
    </Fragment>
  );
}

export const Header = () => (
  <Fragment>
    <MobileHeader />
    <DesktopHeader />
  </Fragment>
);
