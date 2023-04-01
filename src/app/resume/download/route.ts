import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const { UTILS_URI, PROJECT_URI } = process.env;
export function GET(req: NextRequest) {
  const lang = req.nextUrl.searchParams.get('lang');
  return NextResponse.redirect(
    `${UTILS_URI}/downloadResume?url=${PROJECT_URI}/resume/?lang=${lang}`
  );
}
