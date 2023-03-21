/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextTranslate = require('next-translate-plugin');

module.exports = withBundleAnalyzer({
  ...nextTranslate({
    webpack: (config) => {
      return config;
    },
    experimental: {
      appDir: true,
    },

    eslint: {
      dirs: ['.'],
    },
    poweredByHeader: false,
    trailingSlash: true,
    basePath: '',
    // The starter code load resources from `public` folder with `router.basePath` in React components.
    // So, the source code is "basePath-ready".
    // You can remove `basePath` if you don't need it.
    reactStrictMode: true,
  }),
});
