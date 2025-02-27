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
}
export function NavLink({
  title,
  icon,
  href,
  hideTitle,
  onPress,
  newTab,
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
      className="flex w-fit items-center gap-x-2 rounded-lg bg-white py-2 pl-2 pr-3 dark:bg-black"
    >
      <span className="flex h-9 w-8 justify-center rounded ">
        <NavIcon className="inherit h-6 w-5 self-center  fill-primary dark:fill-primary-dark" />
      </span>
      {!hideTitle && (
        <p className="text-lg tracking-[0.05em] text-primary dark:text-primary-dark max-sm:text-sm">
          {title}
        </p>
      )}
    </a>
  );
}
