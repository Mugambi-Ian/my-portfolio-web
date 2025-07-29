import clsx from 'clsx';
import { Fragment } from 'react';

import { IC_Github, IC_Linkedin, IC_Resume } from '../icons/header';
import { NavLink } from '../shared/link';
import NavTheme from './nav_theme';

export function NavThemeSwitch() {
  return (
    <div className="flex h-10 items-center gap-2 rounded-full bg-white px-3 dark:bg-slate-900">
      <span className="text-xs text-slate-700 dark:text-white">Light</span>
      <NavTheme />
      <span className="text-xs text-slate-700 dark:text-white">Dark</span>
    </div>
  );
}

export function LargeHeader({ pathname }: { pathname?: string }) {
  return (
    <Fragment>
      <header
        id="desktop-header"
        className="sticky top-0 z-50 hidden w-full justify-center border-b border-b-gray-300 bg-gradient-to-r from-white to-white shadow-md drop-shadow-xl backdrop-blur-md dark:border-b-transparent dark:from-indigo-900 dark:to-sky-800 sm:flex"
      >
        <div
          className={clsx(
            'flex w-full max-w-7xl items-center justify-between px-6 py-4'
          )}
        >
          <a href="/" className="flex items-center gap-3">
            <h1 className="font-mono text-lg text-sky-800 dark:text-white">
              {"<a href='/'/>"}
            </h1>
          </a>

          <div className="flex items-center gap-4">
            {pathname && (
              <>
                {!pathname.includes('resume') && (
                  <NavLink icon={IC_Resume} title={'Resume'} href={`/resume`} />
                )}
                <NavLink
                  href="https://www.linkedin.com/in/ian-mugambi-65893917a/"
                  icon={IC_Linkedin}
                  title="LinkedIn"
                  hideTitle
                />
                <NavLink
                  href="https://github.com/Mugambi-Ian"
                  icon={IC_Github}
                  title="GitHub"
                  hideTitle
                />
              </>
            )}
            <NavThemeSwitch />
          </div>
        </div>
      </header>
    </Fragment>
  );
}
