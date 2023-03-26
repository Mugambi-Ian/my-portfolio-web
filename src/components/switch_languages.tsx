/* eslint-disable tailwindcss/no-custom-classname */

'use client';

import clsx from 'clsx';
import i18n from 'i18n.json';
import { useCallback, useEffect, useState } from 'react';

import { useWebQuery } from '@/hooks/useWebQuery';

interface IProps {
  id: string;
  lang: string;
  fixed: boolean;
  onSwitch?: () => void;
}

export default function SwitchLanguage({ id, lang, fixed, onSwitch }: IProps) {
  const { queryPage } = useWebQuery();
  const [changeLangaguge, languagePopup] = useState(false);

  const openModal = useCallback(() => {
    if (changeLangaguge) languagePopup(false);
    else languagePopup(true);
  }, [changeLangaguge]);

  useEffect(() => {
    const btn = document.getElementById(id);
    btn!.onclick = openModal;
    if (fixed) {
      const header = document.getElementById('desktop-header');
      const main = document.getElementsByTagName('main');
      if (changeLangaguge) main[0]?.classList.add('blur-on');
      else main[0]?.classList.remove('blur-on');
      if (changeLangaguge) header?.classList.add('blur-on');
      else header?.classList.remove('blur-on');
    }
  }, [changeLangaguge]);
  if (!changeLangaguge) return <span/>;
  return (
    <nav
      className={clsx(
        'skip-blur flex flex-col gap-2 rounded-lg bg-white dark:bg-black',
        !fixed && 'relative w-full',
        fixed && 'fixed top-[96px] right-6 z-50 w-72'
      )}
      id={id}
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
              'flex w-full items-center whitespace-nowrap rounded-md px-4 py-2 text-sm tracking-[0.05em]',
              current &&
                'bg-accent  font-medium text-primary dark:bg-primary-dark',
              !current &&
                'font-light first-of-type:mt-2 last-of-type:mb-2 dark:text-white'
            )}
            onClick={(e) => {
              e.preventDefault();
              languagePopup(false);
              queryPage([{ key: 'lang', value: loc }], { refresh: true });
              if (onSwitch) onSwitch();
            }}
          >
            {language.of(loc)}
            <span className="flex-1 text-end text-xs">{loc}</span>
          </a>
        );
      })}
    </nav>
  );
}
