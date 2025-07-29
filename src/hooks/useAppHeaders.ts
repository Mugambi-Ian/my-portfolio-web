import { cookies, headers } from 'next/headers';

export async function appHeaders() {
  const cookieStore = await cookies();
  const headerStore = await headers();

  const pathName = headerStore.get('path-name');
  const hideHeader = headerStore.get('hide-header');

  const themeFromCookie = cookieStore.get('theme')?.value ?? 'dark';
  const themeFromHeader = headerStore.get('theme') ?? 'dark';

  const darkMode =
    themeFromCookie !== undefined
      ? themeFromCookie === 'dark'
      : themeFromHeader === 'dark';

  return {
    darkMode,
    pathName,
    hideHeader,
  };
}
