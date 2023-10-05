import { cookies, headers } from 'next/headers';

export function useAppHeaders() {
  const cookie = cookies();
  const headersList = headers();
  const pathName = headersList.get('path-name');
  const hideHeader = headersList.get('hide-header');
  const darkMode =
    !cookie.get('theme') || cookie.get('theme')?.value === 'dark';
  return { darkMode, pathName, hideHeader };
}
