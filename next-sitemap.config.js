/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://mugambi-ian.vercel.app',
  generateRobotsTxt: true,
  // OG image route handlers are emitted as routes by the build, but they are
  // images, not pages, and must never be listed as crawlable URLs.
  exclude: [
    '/resume/print',
    '/opengraph-image',
    '/opengraph-image/*',
    '/work/*/opengraph-image',
    '/work/*/opengraph-image/*',
  ],
};
