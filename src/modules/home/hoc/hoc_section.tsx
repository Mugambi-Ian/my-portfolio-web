import clsx from 'clsx';
import type { HTMLAttributes, ReactNode } from 'react';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
  background?: ReactNode;
  children: JSX.Element[] | JSX.Element;
}

export default function HomeSection({
  id,
  children,
  className,
  background,
}: IProps) {
  return (
    <section className="relative flex w-full flex-col self-center" id={id}>
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
