import Cookies from 'universal-cookie';

export const isClient = typeof window !== 'undefined';
export const isServer = typeof window === 'undefined';

export const AppCache = {
  value: (key: string) => (isClient ? sessionStorage.getItem(key) : key),
  remove: (key: string) => (isClient ? sessionStorage.removeItem(key) : key),
  update: (key: string, value: string) =>
    isClient ? sessionStorage.setItem(key, value) : key,
};

export const AppStore = {
  value: <T>(key: string) => {
    if (isServer) return null;
    // @ts-expect-error
    return window[key] as T;
  },
  update: (key: string, value: any) => {
    if (isServer) return null;
    // @ts-expect-error
    window[key] = value;
    return true;
  },
  remove: (key: string) => {
    if (isServer) return null;
    // @ts-expect-error
    return delete window[key];
  },
};

export const AppCookies = {
  save(t: string, s: string) {
    if (isClient) {
      const cookies = new Cookies(document.cookie, {
        path: '/',
        secure: true,
        sameSite: true,
      });
      cookies.set(t, s);
    }
  },
  get(t: string) {
    if (isClient) {
      const cookies = new Cookies(document.cookie, {
        path: '/',
        secure: true,
        sameSite: true,
      });
      return cookies.get(t);
    }
    return undefined;
  },
};
