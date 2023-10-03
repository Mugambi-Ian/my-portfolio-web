import { Fragment } from 'react';

import usePageTranslation from '@/hooks/usePageTranslation';

import { ICDrawer, ICLogo } from '../icons/header';
import NavDrawer from '../nav/nav_drawer';

export function ModalHeader() {
  const { t } = usePageTranslation('common', 'Header');
  return (
    <Fragment>
      <header
        id="mobile-header"
        className="sticky hidden w-full items-center border border-primary bg-primary py-3 pl-5 pr-3 dark:border-primary-dark dark:bg-black max-md:flex"
      >
        <div className="flex items-center gap-x-4" aria-label="home">
          <ICLogo className="inherit h-9 w-9 fill-white dark:fill-primary-dark" />
          <h1 className="mx-2 ml-1  flex uppercase tracking-[0.32em] text-white dark:text-primary-dark max-[420px]:text-xs ">
            {t('title')}
          </h1>
        </div>
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
      <NavDrawer />
    </Fragment>
  );
}
