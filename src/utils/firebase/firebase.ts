import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';

export function loadClientAnalytics() {
  // @ts-expect-error firebase
  if (!window.firebase)
    // @ts-expect-error firebase
    window.firebase = initializeApp({
      appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID
    });
  if (process.env.NEXT_PUBLIC_FIREBASE_APPID)  // @ts-expect-error firebase
    return getAnalytics(window.firebase);
  return undefined;
}
