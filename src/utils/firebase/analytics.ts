/* eslint-disable @typescript-eslint/naming-convention */
import { logEvent } from 'firebase/analytics';

import { loadClientAnalytics } from './firebase';

export function analytics_log_event(
  type: 'navigate' | 'scroll' | 'click',
  e: string
) {
  const analytics = loadClientAnalytics();
  if (analytics) logEvent(analytics, `${type}_${e}`);
}
