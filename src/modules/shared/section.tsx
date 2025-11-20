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
      className="flex flex-col gap-4 border-t border-slate-200 pt-8 text-slate-900 first:border-t-0 first:pt-0"
    >
      <div className="flex items-start gap-4">
        {Icon && (
          <span className="flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 print:border-slate-500 print:bg-transparent">
            <Icon className="size-5" />
          </span>
        )}
        <div>
          {eyebrow && (
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-500">
              {eyebrow}
            </p>
          )}
          <h2 className="font-display text-xl font-semibold tracking-tight text-slate-900">
            {title}
          </h2>
        </div>
      </div>
      {description && (
        <p className="mt-1 text-sm leading-relaxed text-slate-600 print:text-slate-900">
          {description}
        </p>
      )}
      <div
        className={clsx(
          'flex flex-col gap-5 text-sm leading-relaxed text-slate-800',
          showMargin &&
            'divide-y divide-slate-200 [&>*:first-child]:pt-0 [&>*]:pt-5'
        )}
      >
        {children}
      </div>
    </section>
  );
}
