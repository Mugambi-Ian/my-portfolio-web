import clsx from 'clsx';
import type { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
import { Fragment } from 'react';

import type { AppSvgProps } from '@/utils';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  children: ReactNode;
  parentClass?: string;
  showMargin?: boolean;
  background?: ReactNode;
  Icon?: FunctionComponent<AppSvgProps>;
}

export function HomeSection({
  id,
  children,
  className,
  parentClass,
  background,
}: IProps) {
  return (
    <section
      className={clsx('relative flex w-full flex-col self-center', parentClass)}
      id={id}
    >
      {background && background}
      <section
        className={clsx(
          'flex w-full max-w-7xl flex-col self-center',
          className
        )}
      >
        {children}
      </section>
    </section>
  );
}

interface IProps {}

export function ResumeField({ Icon, title, children, showMargin }: IProps) {
  return (
    <Fragment>
      <span
        className="my-3 h-px w-full max-w-7xl self-center"
        id={title?.replace(' ', '_').toLowerCase()}
      />
      <div className="my-4 flex  w-full max-w-7xl flex-col gap-y-3 self-center px-8 dark:text-white max-sm:px-4 lg:flex-row lg:gap-x-6 lg:gap-y-0">
        <div className="flex basis-1/5">
          {Icon && (
            <Icon className="inherit h-5 w-5 fill-solid dark:fill-secondary-dark" />
          )}
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
