import type { FunctionComponent, ReactNode } from 'react';
import { Fragment } from 'react';

import type { ISVGProps } from '@/utils';
import { withHtmlProps } from '@/utils';

interface IProps {
  title: string;
  icon: FunctionComponent;
  children: ReactNode;
  showMargin?: boolean;
}

export function ResumeField({ icon, title, children, showMargin }: IProps) {
  function FieldIcon(props: ISVGProps) {
    return withHtmlProps(icon, props);
  }
  return (
    <Fragment>
      <span
        className="my-4 h-px w-full max-w-7xl self-center"
        id={title.replace(' ', '_').toLowerCase()}
      />
      <div className="flex w-full  max-w-7xl flex-col gap-y-3 self-center px-8 dark:text-white max-md:px-4 lg:flex-row lg:gap-x-6 lg:gap-y-0">
        <div className="flex basis-1/5">
          <FieldIcon className="inherit h-5 w-5 fill-solid dark:fill-secondary-dark" />
          <h5 className="ml-4 flex-1 whitespace-nowrap text-sm font-semibold tracking-wide text-primary dark:text-primary-dark ">
            {title}
          </h5>
          {showMargin && (
            <span className="relative hidden h-full w-4 flex-col items-center self-center lg:flex">
              <span className="h-full w-[2px] bg-accent dark:bg-accent-dark" />
              <span className="absolute h-3 w-3 rounded-2xl bg-primary dark:bg-primary-dark" />
            </span>
          )}
        </div>
        <div className="flex basis-4/5 flex-col">{children}</div>
      </div>
    </Fragment>
  );
}
