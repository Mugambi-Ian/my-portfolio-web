'use client';

import { useEffect, useState } from 'react';

import { AppCookies } from '@/utils/browser';

import { Switch } from '../../components/swtich';

export default function NavTheme({ disabled }: { disabled?: boolean }) {
  const cookies = AppCookies;
  const [value, setValue] = useState(true);
  const [loaded, setLoaded] = useState(false);
  function load() {
    if (!loaded) {
      document.documentElement.classList.add('animate');
      setLoaded(true);
    }
  }
  function refresh() {
    document.querySelectorAll('span[title="theme-switch"').forEach((b) =>
      (b as HTMLButtonElement).addEventListener('click', () => {
        setValue(document.documentElement.classList.contains('dark'));
        load();
      })
    );
  }
  function sync() {
    document
      .querySelectorAll('span[title="theme-switch"')
      .forEach((b) => (b as HTMLButtonElement).click());
  }
  const toDarkMode = () => {
    document.documentElement.classList.add('dark');
    cookies.save('theme', 'dark');
    sync();
  };

  const toLightMode = () => {
    document.documentElement.classList.remove('dark');
    cookies.save('theme', 'light');
    sync();
  };

  useEffect(() => {
    const theme = cookies.get('theme');
    const isLight = theme === 'light';
    setValue(!isLight);
    refresh();
  }, []);

  return (
    <Switch
      value={value}
      id="theme-switch"
      disabled={disabled}
      onChange={(x) => (x ? toDarkMode() : toLightMode())}
    />
  );
}
