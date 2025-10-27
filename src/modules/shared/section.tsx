import clsx from 'clsx';
import type { FunctionComponent, HTMLAttributes, ReactNode } from 'react';

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

interface ResumeFieldProps {
  title: string;
  children: ReactNode;
  Icon?: FunctionComponent<AppSvgProps>;
  showMargin?: boolean;
  id?: string;
  eyebrow?: string;
  description?: string;
}

function buildSectionId(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function ResumeField({
  Icon,
  title,
  children,
  showMargin,
  id,
  eyebrow,
  description,
}: ResumeFieldProps) {
  const sectionId = id ?? buildSectionId(title);

  return (
    <section
      id={sectionId}
      className="relative mx-auto mt-16 w-full max-w-6xl px-4 sm:px-6"
    >
      <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/60 bg-white/95 px-6 py-8 shadow-[0_35px_90px_-50px_rgba(15,23,42,0.6)] backdrop-blur dark:border-slate-800/60 dark:bg-slate-950/80 sm:p-10">
        <div className="absolute -top-24 right-8 size-48 rounded-full bg-gradient-to-br from-emerald-400/20 via-transparent to-transparent blur-3xl" />
        <div className="absolute -bottom-32 left-14 size-56 rounded-full bg-gradient-to-tr from-sky-500/15 via-transparent to-transparent blur-3xl" />

        <div className="relative flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
          {Icon && (
            <div className="flex size-12 items-center justify-center rounded-2xl border border-emerald-400/40 bg-emerald-400/10 text-emerald-300">
              <Icon className="size-6 fill-current" />
            </div>
          )}
          <div className="flex-1 space-y-2">
            {eyebrow && (
              <p className="text-[11px] uppercase tracking-[0.45em] text-emerald-300">
                {eyebrow}
              </p>
            )}
            <h2 className="font-display text-2xl font-semibold tracking-[-0.01em] text-slate-900 dark:text-white">
              {title}
            </h2>
            {description && (
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {description}
              </p>
            )}
          </div>
        </div>

        <div
          className={clsx(
            'relative mt-6 flex flex-col gap-6 text-sm text-slate-700 dark:text-slate-200',
            showMargin &&
              'border-l border-slate-200/60 pl-6 dark:border-slate-700/60'
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
