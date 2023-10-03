/* eslint-disable tailwindcss/no-custom-classname */
import { Fragment } from 'react';

import { useAppHeaders } from '@/hooks/useAppHeaders';

import { LargeHeader } from './large';
import { ModalHeader } from './modal';

export function Header({ pathname }: { pathname: string }) {
  const { hideHeader } = useAppHeaders();
  return (
    <Fragment>
      {!hideHeader && (
        <Fragment>
          <ModalHeader />
          <LargeHeader pathname={pathname} />
        </Fragment>
      )}
    </Fragment>
  );
}
