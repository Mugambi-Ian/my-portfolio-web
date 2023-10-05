import clsx from 'clsx';
import { Fragment } from 'react';

import usePageTranslation from '@/hooks/usePageTranslation';

import { IC_Down } from '../icons';
import {
  IC_Github,
  IC_Home,
  IC_Linkedin,
  IC_Logo,
  IC_Moon,
  IC_Resume,
  IC_Sun,
  IC_Translate,
} from '../icons/header';
import { NavLink } from '../shared/link';
import { NavLang } from './nav_lang';
import NavTheme from './nav_theme';

export function NavTranslate({ disabled }: { disabled?: boolean }) {
  return (
    <button
      disabled={disabled}
      className="flex h-12 items-center justify-center gap-x-2 rounded-lg bg-white px-3 dark:bg-black"
      title="switch-lang"
    >
      <IC_Translate className="inherit h-6 w-5  fill-primary dark:fill-primary-dark" />
      <IC_Down className="inherit h-4 w-4  fill-primary dark:fill-primary-dark" />
    </button>
  );
}

export function NavThemeSwitch({ disabled }: { disabled?: boolean }) {
  return (
    <div className="flex h-12 items-center justify-center gap-x-4 rounded-lg bg-white px-3 dark:bg-black">
      <IC_Sun className="h-6 w-5" />
      <NavTheme disabled={disabled} />
      <IC_Moon className="h-6 w-5" />
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
            !pathname && 'py-3 max-md:px-2'
          )}
        >
          <div className="flex items-center gap-3">
            <IC_Logo
              className={clsx(
                'inherit  fill-primary dark:fill-primary-dark',
                pathname && ' h-[60px] w-[60px]',
                !pathname && 'h-10 w-10 max-md:hidden'
              )}
            />
            {pathname && (
              <h1 className="-mt-2 flex text-xl uppercase tracking-[0.32em] text-primary dark:text-primary-dark max-lg:hidden">
                {t('title')}
              </h1>
            )}
          </div>
          <span className="flex-1 max-md:hidden" />
          {pathname && (
            <>
              {pathname.includes('resume') ? (
                <NavLink
                  icon={IC_Home}
                  title={t('home')}
                  href={`/?lang=${lang}`}
                />
              ) : (
                <NavLink
                  icon={IC_Resume}
                  title={t('resume')}
                  href={`/resume/?lang=${lang}`}
                />
              )}
              <span className="h-8 w-[2px] bg-primary dark:bg-primary-dark" />
              <NavLink
                href="https://www.linkedin.com/in/ian-mugambi-65893917a/"
                icon={IC_Linkedin}
                title={t('resume')}
                hideTitle={true}
              />
              <NavLink
                href="https://github.com/Mugambi-Ian"
                icon={IC_Github}
                title={t('resume')}
                hideTitle={true}
              />
            </>
          )}
          <span className="h-8 w-[2px] bg-primary dark:bg-primary-dark max-md:hidden" />
          <span
            className={clsx(
              'relative flex justify-between gap-4',
              !pathname && 'max-md:flex-1'
            )}
          >
            <NavTranslate />
            <NavThemeSwitch />
          </span>
        </div>
      </header>

      <NavLang lang={lang} fixed={!!pathname} />
    </Fragment>
  );
}
