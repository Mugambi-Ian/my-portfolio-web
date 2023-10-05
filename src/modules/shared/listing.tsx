import type { FunctionComponent, ReactNode } from 'react';

import type { AppSvgProps } from '@/utils';

interface IProps {
  title: string;
  description: string;
  children?: ReactNode;
  Icon: FunctionComponent<AppSvgProps>;
}

export function ListingCard({ description, Icon, title, children }: IProps) {
  return (
    <div className="flex flex-1 flex-col items-center gap-3 rounded-2xl bg-primary px-4 pb-6 dark:bg-[#030F09]">
      <div className="my-8 flex h-48 w-48 items-center justify-center rounded-full bg-white/80 dark:bg-primary-dark/[0.13]">
        <Icon className="inherit my-8  fill-primary dark:fill-primary-dark" />
      </div>
      <span className="h-[2px] w-36 bg-white" />
      <h1 className="whitespace-nowrap text-xl font-medium tracking-[0.05em] text-white max-lg:text-base">
        {title}
      </h1>
      <span className="h-[2px] w-36 bg-white" />
      {description && (
        <p className="w-full text-center text-xs font-light tracking-[0.025em] text-white">
          {description}
        </p>
      )}
      {children && children}
    </div>
  );
}
