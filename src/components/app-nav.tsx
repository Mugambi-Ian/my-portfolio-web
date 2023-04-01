import Link from 'next/link';
import type { FunctionComponent } from 'react';

import type { ISVGProps } from '@/utils';
import { withHtmlProps } from '@/utils';

interface IAppNavProps {
  icon: FunctionComponent;
  title: string;
  href: string;
  hideTitle?: boolean;
}
export function AppNav({ title, icon, href, hideTitle }: IAppNavProps) {
  function NavIcon(props: ISVGProps) {
    return withHtmlProps(icon, props);
  }
  return (
    <Link
      href={href}
      aria-label={title}
      className="flex items-center gap-x-2 rounded-lg bg-white py-2 pl-2 pr-3 dark:bg-black"
    >
      <span className="flex h-9 w-8 justify-center rounded ">
        <NavIcon className="inherit h-6 w-5 self-center  fill-primary dark:fill-primary-dark" />
      </span>
      {!hideTitle && (
        <p className="text-lg tracking-[0.05em] text-primary dark:text-primary-dark max-md:text-sm">
          {title}
        </p>
      )}
    </Link>
  );
}
