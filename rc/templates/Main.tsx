import type { ReactNode } from 'react';
import { Fragment } from 'react';

import { AppHeader } from '@/modules/header/AppHeader';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <Fragment>
    <AppHeader />
    {props.meta}
    <main className="flex h-full w-full flex-col px-8 lg:px-0">
      {props.children}
    </main>
  </Fragment>
);

export { Main };
