'use client';

import { usePathname } from 'next/navigation';
import useTranslation from 'next-translate/useTranslation';
import { useCallback, useEffect, useState } from 'react';

import { NavLink } from '@/modules/shared/link';

import { IC_Down } from '../icons';
import {
  IC_Github,
  IC_Home,
  IC_Linkedin,
  IC_Moon,
  IC_Resume,
  IC_Sun,
  IC_Translate,
} from '../icons/header';
import { NavLang } from './nav_lang';
import NavTheme from './nav_theme';

export default function NavDrawer() {
  const pathname = usePathname();
  const { t, lang } = useTranslation('common');
  const [showDrawer, drawerPopup] = useState(false);

  const switchModal = useCallback(() => {
    if (showDrawer) drawerPopup(false);
    else drawerPopup(true);
  }, [showDrawer]);

  useEffect(() => {
    const btn = document.getElementById('drawer-btn');
    setTimeout(() => {
      btn!.onclick = switchModal;
    }, 750);
  }, [showDrawer]);

  if (!showDrawer) return <></>;
  return (
    <nav className="absolute top-[75px] z-50 hidden h-screen w-screen flex-col gap-y-4 bg-primary px-4 pt-6 dark:bg-black max-md:flex">
      {pathname.includes('resume') && (
        <NavLink
          icon={IC_Home}
          href={`/${lang}`}
          title={t('Drawer_home')}
          onPress={switchModal}
        />
      )}
      {!pathname.includes('resume') && (
        <NavLink
          href={`/resume/?lang=${lang}`}
          icon={IC_Resume}
          title={t('Drawer_resume')}
          onPress={switchModal}
        />
      )}
      <NavLink
        newTab={true}
        icon={IC_Linkedin}
        title={t('Drawer_linkedIn')}
        href="https://twitter.com/mugambi_bruv"
      />
      <NavLink
        newTab={true}
        icon={IC_Github}
        title={t('Drawer_github')}
        href="https://github.com/Mugambi-Ian"
      />
      <span className="relative flex justify-between">
        <button
          className="flex h-12 items-center justify-center gap-x-2 rounded-lg bg-white px-3 dark:bg-black"
          title="switch-lang"
        >
          <IC_Translate className="inherit h-6 w-5  fill-primary dark:fill-primary-dark" />
          <IC_Down className="inherit h-4 w-4  fill-primary dark:fill-primary-dark" />
        </button>
        <div className="flex h-12 items-center justify-center gap-x-4 rounded-lg bg-white px-3 dark:bg-black">
          <IC_Sun className="h-6 w-5" />
          <NavTheme />
          <IC_Moon className="h-6 w-5" />
        </div>
      </span>
      <NavLang fixed={false} lang={lang} />
    </nav>
  );
}
