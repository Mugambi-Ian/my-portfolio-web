'use client';

import { useState } from 'react';

import { Switch } from '../../components/swtich';

export default function NavTheme() {
  const [loaded, setLoaded] = useState(false);
  if (document === undefined) return <></>;

  const load = () => {
    if (!loaded) {
      document.documentElement.classList.add('animate');
      setLoaded(true);
    }
  };
  const toDarkMode = () => {
    document.documentElement.classList.add('dark');
    load();
  };

  const toLightMode = () => {
    document.documentElement.classList.remove('dark');
    load();
  };

  return (
    <Switch
      onChange={(x) => (!x ? toDarkMode() : toLightMode())}
      defaultVal={!document.documentElement.classList.contains('dark')}
    />
  );
}
