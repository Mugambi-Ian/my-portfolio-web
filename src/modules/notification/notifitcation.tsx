'use client';

import useTranslation from 'next-translate/useTranslation';
import { useEffect, useState } from 'react';

import { analytics_log_event } from '@/utils/firebase/analytics';

import { LargeHeader } from '../nav/__large';
import { IC_MEGAPHONE } from './icons/page';

export function AppNotification() {
  const { t } = useTranslation('common');
  const [close, setClose] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setClose(!!localStorage.getItem('notified'));
    }, 750);
  }, []);

  if (!close)
    return (
      <section className="notification-backdrop  absolute inset-0 z-50 flex items-center justify-center bg-[#E6E8E7] dark:bg-[#04140C]">
        <section className="notification-popup flex w-full max-w-7xl  flex-col px-8 pt-6 max-md:px-3">
          <div className="flex w-full items-center border-b border-b-primary pb-2 text-xl">
            <IC_MEGAPHONE className="inherit fill-primary dark:fill-primary-dark max-md:hidden" />
            <h1 className="ml-4 flex-1 text-2xl font-bold capitalize tracking-widest text-primary dark:border-b-primary-dark  dark:text-white max-lg:text-lg max-md:ml-0 max-md:text-base">
              {t('Notification_title')}
            </h1>
            <button
              className="bg-primary px-6 py-2 text-base font-black tracking-wider text-white dark:bg-primary-dark max-md:px-3"
              onClick={() => {
                setClose(true);
                analytics_log_event('click', 'close_notification');
                localStorage.setItem('notified', 'true');
              }}
            >
              <p>{t('Notification_exit')}</p>
            </button>
          </div>
          <p className=" py-6 text-lg font-light tracking-wide dark:text-white">
            {t('Notification_message')}
          </p>
          <LargeHeader />
          <p className="py-6 text-sm font-thin tracking-widest dark:text-white">
            {t('Notification_disclaimer')}
          </p>
        </section>
      </section>
    );
  return <span />;
}
