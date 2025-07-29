'use client';

import { useEffect, useState } from 'react';

import { analytics_log_event } from '@/utils/firebase/analytics';

import { NavThemeSwitch } from '../nav/__large';
import { IC_MEGAPHONE } from './icons/page';

export function AppNotification(props:{hide?:boolean}) {
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    const isNotified = localStorage.getItem('notified');
    if (!isNotified && !props.hide) setShouldShow(true);
  }, []);

  const handleClose = () => {
    localStorage.setItem('notified', 'true');
    analytics_log_event('click', 'close_notification');
    setShouldShow(false);
  };

  if (!shouldShow) return null;

  return (
    <section className="fixed inset-0 z-50 backdrop-blur-sm ">
      <section className="absolute inset-x-0 bottom-6 mx-auto w-[90%] max-w-4xl rounded-2xl border border-sky-300 bg-gradient-to-br from-sky-50 to-sky-100 p-6 shadow-xl dark:border-indigo-600 dark:from-slate-800 dark:to-slate-900">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <IC_MEGAPHONE className="size-7 text-sky-600 dark:text-sky-400" />
            <h1 className="text-xl font-extrabold uppercase tracking-widest text-sky-800 dark:text-sky-100">
              Dark Mode
            </h1>
          </div>
          <button
            onClick={handleClose}
            className="-mt-2 rounded bg-sky-600 px-4 py-1 text-sm font-medium  text-white hover:bg-sky-700 dark:bg-indigo-600 dark:hover:bg-indigo-700"
          >
            Close
          </button>
        </div>
        <div className="flex w-full gap-x-2 pt-4">
          <p className="flex-1 py-2 text-base text-slate-700 dark:text-slate-300">
            Use the theme switch to toggle between light and dark mode. Try it
            out!
          </p>
          <NavThemeSwitch />
        </div>
      </section>
    </section>
  );
}
