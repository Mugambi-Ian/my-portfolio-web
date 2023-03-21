import type { FunctionComponent, HtmlHTMLAttributes } from 'react';

export const getDuration = (d1: Date | number | string, d2?: Date | string) => {
  const date1 = d1 instanceof String ? new Date(d1) : d1;
  const date2 = d2 instanceof String ? new Date(d2) : d2;
  let diffInMs = date1 instanceof Date ? 0 : (date1 as number);
  if (date2)
    diffInMs = Math.abs(new Date(date2).getTime() - new Date(date1).getTime());
  const diffInYears = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 365));
  const diffInMonths = Math.floor(
    (diffInMs % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
  );
  return (
    (diffInYears > 0
      ? `${diffInYears} Year${diffInYears > 1 ? 's' : ''}`
      : '') +
    (diffInMonths > 0
      ? ` ${diffInMonths} Month${diffInMonths > 1 ? 's' : ''}`
      : '')
  );
};

export const parseDate = (date: string) => {
  return new Date(date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
  });
};

export function withHtmlProps<T>(
  C: FunctionComponent,
  p: HtmlHTMLAttributes<T>
) {
  return <C {...p} />;
}

export type ISVGProps = HtmlHTMLAttributes<HTMLOrSVGElement>;
