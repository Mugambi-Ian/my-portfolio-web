import type { ReactNode } from 'react';

export default function PrintLayout({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-white">{children}</div>;
}
