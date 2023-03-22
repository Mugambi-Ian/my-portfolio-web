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
    reactStrictMode: true,
    images: {
      domains: ['my-portfolio-cms-bucket.s3.eu-central-1.amazonaws.com'],
    },
  }),
});
