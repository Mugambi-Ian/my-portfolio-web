/* eslint-disable no-console */

const { UTILS_URI } = process.env;
export async function GET() {
  const path = `${UTILS_URI}?lang=en?time=${new Date().getTime()}`;
  const data = await fetch(path, {
    cache: 'no-store',
  });
  console.log(path);

  const buff = await data.arrayBuffer();
  const res = new Response(buff);
  res.headers.set('Cache-Control', 'no-cache');
  res.headers.set('Content-Type', 'application/pdf');
  res.headers.set(
    'Content-Disposition',
    'attachment; filename="mugambi\'s_resume.pdf"'
  );
  res.headers.set('Content-Length', `${buff.byteLength}`);
  return res;
}
