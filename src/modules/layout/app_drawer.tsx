'use client';

import useTranslation from 'next-translate/useTranslation';
import { useCallback, useEffect, useState } from 'react';

import { AppNav } from '@/components/app-nav';
import { clientComponent } from '@/utils';

import { ICDown } from '../icons';
import {
  ICGithub,
  ICLinkedin,
  ICMoon,
  ICResume,
  ICSun,
  ICTranslate,
  ICTwitter,
} from '../icons/header';

const SwitchLanguage = clientComponent(
  () => import('@/components/switch_languages')
);
const SwitchThemeMode = clientComponent(
  () => import('@/components/switch_dark_mode')
);
export default function MobileDrawer() {
  const [showDrawer, drawerPopup] = useState(false);
  const { t, lang } = useTranslation('common');

  const openModal = useCallback(() => {
    if (showDrawer) drawerPopup(false);
    else drawerPopup(true);
  }, [showDrawer]);

  useEffect(() => {
    const btn = document.getElementById('drawer-btn');
    btn!.onclick = openModal;
  }, [showDrawer]);

  if (!showDrawer) return <></>;
  return (
    <nav className="absolute top-[75px] z-50 hidden h-screen w-screen flex-col gap-y-4 bg-primary px-4 pt-6 dark:bg-black max-md:flex">
      <AppNav
        href={`/resume?lang=${lang}`}
        icon={ICResume}
        title={t('Header_resume')}
      />
      <AppNav
        href="https://www.linkedin.com/in/ian-mugambi-65893917a/"
        icon={ICLinkedin}
        title={t('Header_resume')}
      />
      <AppNav
        href="https://github.com/Mugambi-Ian"
        icon={ICGithub}
        title={t('Header_resume')}
      />
      <AppNav
        href="https://twitter.com/mugambi_bruv"
        icon={ICTwitter}
        title={t('Header_resume')}
      />
      <span className="relative flex justify-between">
        <button
          className="flex h-12 items-center justify-center gap-x-2 rounded-lg bg-white px-3 dark:bg-black"
          id="swicth-lang-mobile"
        >
          <ICTranslate className="inherit h-6 w-5  fill-primary dark:fill-primary-dark" />
          <ICDown className="inherit h-4 w-4  fill-primary dark:fill-primary-dark" />
        </button>
        <div className="flex h-12 items-center justify-center gap-x-4 rounded-lg bg-white px-3 dark:bg-black">
          <ICMoon className="h-6 w-5" />
          <SwitchThemeMode />
          <ICSun className="h-6 w-5" />
        </div>
      </span>
      <SwitchLanguage
        fixed={false}
        lang={lang}
        id="swicth-lang-mobile"
        onSwitch={openModal}
      />
    </nav>
  );
}
