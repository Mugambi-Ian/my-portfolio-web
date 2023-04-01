import console from 'console';
import { NextResponse } from 'next/server';

export function middleware(request: Request) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-url', request.url);
  console.log(request.url, 'dksdkj');

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
