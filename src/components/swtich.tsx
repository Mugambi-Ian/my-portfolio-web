'use client';

import clsx from 'clsx';
import { useState } from 'react';

interface IProps {
  onChange?: (x: boolean) => void;
  defaultVal?: boolean;
}

export function Switch({ onChange, defaultVal }: IProps) {
  const [active, setActive] = useState(defaultVal);

  return (
    <button
      className={clsx('switch', active && 'active')}
      onClick={() => {
        setActive(!active);
        if (onChange) onChange(!!active);
      }}
    />
  );
}
