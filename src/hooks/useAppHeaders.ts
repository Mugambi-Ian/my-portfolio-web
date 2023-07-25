import { headers } from 'next/headers';

export function useAppHeaders() {
  const headersList = headers();
  const darkMode = headersList.get('dark-mode');
  const pathName = headersList.get('path-name');
  const hideHeader = headersList.get('hide-header');
  return { darkMode, pathName, hideHeader };
}
