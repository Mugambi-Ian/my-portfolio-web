'use client';

import { usePathname } from 'next/navigation';
import useTranslation from 'next-translate/useTranslation';
import { useCallback, useEffect, useState } from 'react';

import { NavLink } from '@/modules/nav/nav_link';
import { clientComponent } from '@/utils';

import { ICDown } from '../icons';
import {
  ICGithub,
  ICHome,
  ICLinkedin,
  ICMoon,
  ICResume,
  ICSun,
  ICTranslate,
  ICTwitter,
} from '../icons/header';

const NavLang = clientComponent(() => import('@/modules/nav/nav_lang'));
const NavTheme = clientComponent(() => import('@/modules/nav/nav_theme'));
export default function NavDrawer() {
  const [showDrawer, drawerPopup] = useState(false);
  const { t, lang } = useTranslation('common');
  const pathname = usePathname();

  const switchModal = useCallback(() => {
    if (showDrawer) drawerPopup(false);
    else drawerPopup(true);
  }, [showDrawer]);

  useEffect(() => {
    const btn = document.getElementById('drawer-btn');
    btn!.onclick = switchModal;
  }, [showDrawer]);

  if (!showDrawer) return <></>;
  return (
    <nav className="absolute top-[75px] z-50 hidden h-screen w-screen flex-col gap-y-4 bg-primary px-4 pt-6 dark:bg-black max-md:flex">
      {pathname.includes('resume') && (
        <NavLink
          icon={ICHome}
          href={`/${lang}`}
          title={t('Drawer_home')}
          onPress={switchModal}
        />
      )}
      {!pathname.includes('resume') && (
        <NavLink
          href={`/resume/${lang}`}
          icon={ICResume}
          title={t('Drawer_resume')}
          onPress={switchModal}
        />
      )}
      <NavLink
        newTab={true}
        icon={ICLinkedin}
        title={t('Drawer_linkedIn')}
        href="https://twitter.com/mugambi_bruv"
      />
      <NavLink
        newTab={true}
        icon={ICGithub}
        title={t('Drawer_github')}
        href="https://github.com/Mugambi-Ian"
      />
      <NavLink
        newTab={true}
        icon={ICTwitter}
        title={t('Drawer_twitter')}
        href="https://twitter.com/mugambi_bruv"
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
          <ICSun className="h-6 w-5" />
          <NavTheme />
          <ICMoon className="h-6 w-5" />
        </div>
      </span>
      <NavLang
        fixed={false}
        lang={lang}
        id="swicth-lang-mobile"
        onSwitch={switchModal}
      />
    </nav>
  );
}
