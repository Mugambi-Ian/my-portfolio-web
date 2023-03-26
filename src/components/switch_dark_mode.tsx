'use client';

import { useState } from 'react';

import { Switch } from './swtich';

export default function SwitchThemeMode() {
  const [loaded, setLoaded] = useState(false);

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
      onChange={(x) => (x ? toDarkMode() : toLightMode())}
      defaultVal={!document.documentElement.classList.contains('dark')}
    />
  );
}
