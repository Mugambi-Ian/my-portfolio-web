import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const req = request.nextUrl.clone();
  const { href } = request.nextUrl;
  const localeRegex = /\/(en|sw-ke|zh-cn)\/?/g;
  const match = localeRegex.exec(href);

  if (match && !req.searchParams.get('lang')) {
    req.searchParams.set('lang', match[1]!);
    return NextResponse.redirect(
      new URL(req.href.replaceAll(`/${match[1]}/`, ''))
    );
  }
  const requestHeaders = request.headers;
  requestHeaders.set('path-name', request.url.split('?')[0]!);
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
