'use client';

import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import { NavLink } from '@/modules/shared/link';

import {
  IC_Github,
  IC_Home,
  IC_Linkedin,
  IC_Moon,
  IC_Resume,
  IC_Sun,
} from '../icons/header';
import NavTheme from './nav_theme';

export default function NavDrawer() {
  const pathname = usePathname();
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
    <nav className="absolute top-[75px] z-50 flex h-screen w-screen flex-col gap-6 bg-gradient-to-b from-sky-600 to-indigo-600 px-6 pt-8 text-white dark:from-indigo-800 dark:to-sky-800">
      {pathname.includes('resume') ? (
        <NavLink
          icon={IC_Home}
          href={`/`}
          title={'Home'}
          onPress={switchModal}
          className="flex items-center gap-3 text-lg font-semibold hover:underline"
        />
      ) : (
        <NavLink
          href={`/resume`}
          icon={IC_Resume}
          title={'Resume'}
          onPress={switchModal}
          className="flex items-center gap-3 text-lg font-semibold hover:underline"
        />
      )}

      <NavLink
        newTab
        icon={IC_Linkedin}
        title={'Linked In'}
        href="https://www.linkedin.com/in/ian-mugambi-65893917a/"
        className="flex items-center gap-3 text-lg font-semibold hover:underline"
      />

      <NavLink
        newTab
        icon={IC_Github}
        title={'Github'}
        href="https://github.com/Mugambi-Ian"
        className="flex items-center gap-3 text-lg font-semibold hover:underline"
      />

      <div className="mt-auto flex w-full items-center justify-center">
        <div className="flex h-12 items-center gap-4 rounded-full bg-white/20 px-4 backdrop-blur-md dark:bg-white/10">
          <IC_Sun className="size-5" />
          <NavTheme />
          <IC_Moon className="size-5" />
        </div>
      </div>
    </nav>
  );
}
