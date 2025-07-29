import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const requestHeaders = request.headers;
  requestHeaders.set('path-name', request.url.split('?')[0]!);
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
