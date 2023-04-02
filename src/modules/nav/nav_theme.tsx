'use client';

import { useState } from 'react';

import { Switch } from '../../components/swtich';

export default function NavTheme() {
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
      onChange={(x) => (!x ? toDarkMode() : toLightMode())}
      defaultVal={
        process.browser
          ? document.documentElement.classList.contains('dark')
          : true
      }
    />
  );
}
