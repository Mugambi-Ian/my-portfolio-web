import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export interface IQuery {
  key: string;
  value: string;
}

export function useWebQuery() {
  const router = useRouter();
  const pathname = usePathname();
  const query = useSearchParams();

  const getSection = (section?: string) => {
    let href = section ? `#${section}` : '';
    if (!href && window.location.href.includes('#'))
      href += `#${window.location.href.split('#')[1]}`;
    return href;
  };
  const getParams = (q: IQuery[]) => {
    const all = Array.from(query.entries()).map((x) => ({
      key: x[0],
      value: x[1],
    }));
    all.push(...q);
    const params = new URLSearchParams();
    all.forEach(({ key, value }) => params.set(key, value));
    return params.toString();
  };
  const queryPage = useCallback(
    (q: IQuery[], p?: { section?: string; refresh?: boolean }) => {
      let href = `${pathname}`;
      href += `?${getParams(q)}`;
      router.push(href + getSection(p?.section));
      if (p?.refresh) router.refresh();
    },
    [pathname]
  );

  return { queryPage };
}
