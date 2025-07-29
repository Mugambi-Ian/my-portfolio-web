/* eslint-disable tailwindcss/no-custom-classname */
import { Fragment } from 'react';

import { appHeaders } from '@/hooks/useAppHeaders';

import { LargeHeader } from '../nav/__large';
import { SmallHeader } from '../nav/__small';

export async function Header({ pathname }: { pathname: string }) {
  const { hideHeader } = await appHeaders();

  return (
    <Fragment>
      {!hideHeader && (
        <>
          <SmallHeader />
          <LargeHeader pathname={pathname} />
        </>
      )}
    </Fragment>
  );
}
