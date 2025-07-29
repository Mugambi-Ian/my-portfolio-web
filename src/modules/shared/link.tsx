import type { FunctionComponent } from 'react';

import type { AppSvgProps } from '@/utils';
import { withHtmlProps } from '@/utils';

interface INavLinkProps {
  icon: FunctionComponent;
  title: string;
  href: string;
  hideTitle?: boolean;
  onPress?: () => void;
  newTab?: boolean;
  className?: string;
}
export function NavLink({
  title,
  icon,
  href,
  hideTitle,
  onPress,
  newTab,
  className,
}: INavLinkProps) {
  function NavIcon(props: AppSvgProps) {
    return withHtmlProps(icon, props);
  }
  return (
    <a
      href={href}
      rel="noreferrer"
      aria-label={title}
      onClick={onPress || undefined}
      target={newTab ? '_blank' : '_self'}
      className={
        className ??
        'flex w-fit items-center gap-x-2 rounded-lg bg-white py-2 pl-2 pr-3 ring-1 ring-blue-600 dark:bg-black dark:ring-blue-600'
      }
    >
      <span className="flex size-9 justify-center rounded">
        <NavIcon className="inherit m-auto h-6 w-5 fill-blue-800  pl-1 dark:fill-blue-600" />
      </span>
      {!hideTitle && (
        <p className="text-lg tracking-wider text-blue-800 dark:text-blue-600 max-sm:text-sm">
          {title}
        </p>
      )}
    </a>
  );
}
