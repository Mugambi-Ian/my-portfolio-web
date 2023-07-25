import type { NextRequest } from 'next/server';

const { UTILS_URI, PROJECT_URI } = process.env;
export async function GET(req: NextRequest) {
  const lang = req.nextUrl.searchParams.get('lang');
  const data = await fetch(
    `${UTILS_URI}/downloadResume?url=${PROJECT_URI}/resume/${lang}?time=${new Date().getTime()}`,
    {
      cache: 'no-store',
    }
  );
  const buff = await data.arrayBuffer();
  const res = new Response(buff);
  res.headers.set('Cache-Control', 'no-cache');
  res.headers.set('Content-Type', 'application/pdf');
  res.headers.set(
    'Content-Disposition',
    'attachment; filename="mugambis_resume.pdf"'
  );
  res.headers.set('Content-Length', `${buff.byteLength}`);
  return res;
}
