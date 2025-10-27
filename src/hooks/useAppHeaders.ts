import { headers } from 'next/headers';

export async function appHeaders() {
  const headerStore = await headers();

  const pathName = headerStore.get('path-name') ?? '/';
  const hideHeader = headerStore.get('hide-header');

  const darkMode = pathName.startsWith('/resume') ? false : true;

  return {
    darkMode,
    pathName,
    hideHeader,
  };
}
