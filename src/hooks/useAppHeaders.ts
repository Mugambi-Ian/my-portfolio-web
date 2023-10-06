import { cookies, headers } from 'next/headers';

export function useAppHeaders() {
  const cookie = cookies();
  const header = headers();
  const pathName = header.get('path-name');
  const hideHeader = header.get('hide-header');
  const darkMode = !cookie.get('theme')
    ? header.get('theme') === 'dark'
    : cookie.get('theme')?.value === 'dark';
  return { darkMode, pathName, hideHeader };
}
