'use client';

import { useState } from 'react';

import { LargeHeader } from '../layout/large';
import { IC_MEGAPHONE } from './icons/page';

export function AppNotification() {
  const [close, setClose] = useState(!!localStorage.getItem('notified'));
  if (!close)
    return (
      <section className="notification-backdrop absolute inset-x-0 bottom-0 z-50 flex items-center justify-center bg-[#E6E8E7] dark:bg-[#04140C]">
        <section className="notification-popup flex w-full max-w-7xl  flex-col px-8 pt-6">
          <div className="flex w-full items-center border-b border-b-primary pb-2 text-xl">
            <IC_MEGAPHONE className="inherit fill-primary dark:fill-primary-dark" />
            <h1 className="ml-4 flex-1 text-2xl font-bold capitalize tracking-widest  text-primary dark:border-b-primary-dark dark:text-white max-lg:text-lg">
              Now multilingual and with Dark Mode
            </h1>
            <button
              className="bg-primary px-6 py-2 text-base font-thin tracking-wider text-white dark:bg-primary-dark"
              onClick={() => {
                setClose(true);
                localStorage.setItem('notified', 'true');
              }}
            >
              <p>Close</p>
            </button>
          </div>
          <p className=" py-6 text-lg font-light tracking-wide dark:text-white">
            Use the language switch on the Navigation Menu to switch between
            available languages and the theme switch to change between light and
            dark mode.Try it out here.
          </p>
          <LargeHeader />
          <p className="py-6 text-sm font-thin tracking-widest dark:text-white">
            *Other languages have been used as a proof of concept. Parts may be
            missing or have grammartical errors.
          </p>
        </section>
      </section>
    );
  return <span />;
}
