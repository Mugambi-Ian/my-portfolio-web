/* eslint-disable no-param-reassign */
/* eslint-disable tailwindcss/no-custom-classname */

'use client';

import clsx from 'clsx';
import i18n from 'i18n.json';
import { useCallback, useEffect, useState } from 'react';

import { analytics_log_event } from '@/utils/firebase/analytics';

interface IProps {
  lang: string;
  fixed: boolean;
}

export function NavLang({ lang, fixed }: IProps) {
  const [changeLangaguge, languagePopup] = useState(false);

  const openModal = useCallback(() => {
    analytics_log_event('click', 'switch_theme');
    if (changeLangaguge) languagePopup(false);
    else languagePopup(true);
  }, [changeLangaguge]);

  useEffect(() => {
    const btn = document.querySelectorAll<HTMLButtonElement>(
      `button[title="switch-lang"]`
    );
    btn!.forEach((b) => {
      b.addEventListener('click', openModal);
    });
    if (fixed) {
      const header = document.getElementById('desktop-header');
      const main = document.getElementsByTagName('main');
      if (changeLangaguge) main[0]?.classList.add('blur-on');
      else main[0]?.classList.remove('blur-on');
      if (changeLangaguge) header?.classList.add('blur-on');
      else header?.classList.remove('blur-on');
    }
  }, [changeLangaguge]);
  if (!changeLangaguge) return <span />;
  return (
    <nav
      className={clsx(
        'skip-blur flex max-w-xs flex-col gap-2 self-end rounded-lg bg-white dark:bg-black max-md:max-w-none',
        !fixed && 'relative w-full',
        fixed && 'fixed right-6 top-[96px] z-[500] w-72'
      )}
    >
      {i18n.locales.map((loc, i) => {
        const language = new Intl.DisplayNames([lang], {
          type: 'language',
        });
        const current = lang === loc;
        return (
          <a
            href={`?lang=${loc}`}
            key={loc + i}
            className={clsx(
              'flex w-full  items-center whitespace-nowrap rounded-md px-4 py-2 text-sm tracking-[0.05em]',
              current &&
                'bg-accent  font-medium text-primary dark:bg-primary-dark',
              !current &&
                'font-light first-of-type:mt-2 last-of-type:mb-2 dark:text-white'
            )}
          >
            {language.of(loc)}
            <span className="flex-1 text-end text-xs">{loc}</span>
          </a>
        );
      })}
    </nav>
  );
}
