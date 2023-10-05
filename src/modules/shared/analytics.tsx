'use client';

import { useEffect } from 'react';

import { analytics_log_event } from '@/utils/firebase/analytics';

export function AnalyticEvent({
  type,
  title,
}: {
  title: string;
  type: 'navigate' | 'scroll';
}) {
  useEffect(() => {
    analytics_log_event(type, title);
  }, []);
  return <></>;
}
