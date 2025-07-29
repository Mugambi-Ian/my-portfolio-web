import { Fragment } from 'react';

import NavDrawer from '@/modules/nav/__drawer';

import { IC_Drawer } from '../icons/header';

export function SmallHeader() {
  return (
    <Fragment>
      <header
        id="mobile-header"
        className="sticky top-0 z-50 flex w-full items-center justify-between bg-gradient-to-r from-sky-600 to-indigo-600 px-4 py-6 text-white dark:from-indigo-800 dark:to-sky-700 sm:hidden"
      >
        <div className="flex items-center gap-3">
          <h1 className="text-base uppercase tracking-widest">
            {'<MY_PORTFOLIO/>'}
          </h1>
        </div>
        <button
          id="drawer-btn"
          aria-label="Open drawer"
          className="flex size-10 items-center justify-center rounded-full bg-white/10"
        >
          <IC_Drawer className="size-6 fill-white" />
        </button>
      </header>
      <NavDrawer />
    </Fragment>
  );
}
