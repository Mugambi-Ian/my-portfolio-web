'use client';

import { useEffect, useState } from 'react';

import { Switch } from '../../components/swtich';

export default function NavTheme({ disabled }: { disabled?: boolean }) {
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
    sync();
  };

  const toLightMode = () => {
    document.documentElement.classList.remove('dark');
    sync();
  };

  useEffect(() => {
    setValue(document.documentElement.classList.contains('dark'));
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
