import clsx from 'clsx';
import { Fragment } from 'react';

import usePageTranslation from '@/hooks/usePageTranslation';

import { ICDown } from '../icons';
import {
  ICGithub,
  ICHome,
  ICLinkedin,
  ICLogo,
  ICMoon,
  ICResume,
  ICSun,
  ICTranslate,
  ICTwitter,
} from '../icons/header';
import { NavLang } from '../nav/nav_lang';
import { NavLink } from '../nav/nav_link';
import NavTheme from '../nav/nav_theme';

export function NavTranslate({ disabled }: { disabled?: boolean }) {
  return (
    <button
      disabled={disabled}
      className="flex h-12 items-center justify-center gap-x-2 rounded-lg bg-white px-3 dark:bg-black"
      id="switch-lang-desktop"
    >
      <ICTranslate className="inherit h-6 w-5  fill-primary dark:fill-primary-dark" />
      <ICDown className="inherit h-4 w-4  fill-primary dark:fill-primary-dark" />
    </button>
  );
}

export function NavThemeSwitch({ disabled }: { disabled?: boolean }) {
  return (
    <div className="flex h-12 items-center justify-center gap-x-4 rounded-lg bg-white px-3 dark:bg-black">
      <ICSun className="h-6 w-5" />
      <NavTheme disabled={disabled} />
      <ICMoon className="h-6 w-5" />
    </div>
  );
}

export function LargeHeader({ pathname }: { pathname?: string }) {
  const { t, lang } = usePageTranslation('common', 'Header');
  return (
    <Fragment>
      <header
        id="desktop-header"
        className="sticky  top-0 z-50 mr-[5px] flex w-full items-center justify-center bg-[#E1F0FA] dark:bg-[#141D0E] "
      >
        <div
          className={clsx(
            'flex w-full max-w-7xl items-center gap-3 self-center px-6 max-lg:py-3',
            pathname && 'py-7 max-md:hidden',
            !pathname && 'py-3'
          )}
        >
          <div className="flex items-center gap-3">
            <ICLogo
              className={clsx(
                'inherit  fill-primary dark:fill-primary-dark',
                pathname && ' h-[60px] w-[60px]',
                !pathname && 'h-10 w-10'
              )}
            />
            {pathname && (
              <h1 className="-mt-2 flex text-xl uppercase tracking-[0.32em] text-primary dark:text-primary-dark max-lg:hidden">
                {t('title')}
              </h1>
            )}
          </div>
          <span className="flex-1" />
          {pathname && (
            <>
              {pathname.includes('resume') ? (
                <NavLink
                  icon={ICHome}
                  title={t('home')}
                  href={`/?lang=${lang}`}
                />
              ) : (
                <NavLink
                  icon={ICResume}
                  title={t('resume')}
                  href={`/resume/?lang=${lang}`}
                />
              )}
              <span className="h-8 w-[2px] bg-primary dark:bg-primary-dark" />
              <NavLink
                href="https://www.linkedin.com/in/ian-mugambi-65893917a/"
                icon={ICLinkedin}
                title={t('resume')}
                hideTitle={true}
              />
              <NavLink
                href="https://github.com/Mugambi-Ian"
                icon={ICGithub}
                title={t('resume')}
                hideTitle={true}
              />
              <NavLink
                href="https://twitter.com/mugambi_bruv"
                icon={ICTwitter}
                title={t('resume')}
                hideTitle={true}
              />
            </>
          )}
          <span className="h-8 w-[2px] bg-primary dark:bg-primary-dark" />
          <span className="skip-blur relative flex gap-4">
            <NavTranslate />
            <NavThemeSwitch />
          </span>
        </div>
      </header>

      <NavLang lang={lang} fixed={true} id="switch-lang-desktop" />
    </Fragment>
  );
}
