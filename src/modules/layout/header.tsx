/* eslint-disable tailwindcss/no-custom-classname */
import { Fragment } from 'react';

import { useAppHeaders } from '@/hooks/useAppHeaders';

import { LargeHeader } from '../nav/__large';
import { SmallHeader } from '../nav/__small';

export function Header({ pathname }: { pathname: string }) {
  const { hideHeader } = useAppHeaders();
  return (
    <Fragment>
      {!hideHeader && (
        <Fragment>
          <SmallHeader />
          <LargeHeader pathname={pathname} />
        </Fragment>
      )}
    </Fragment>
  );
}
