/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  eslint: {
    // Linting runs in `npm test` (next lint over src); the type-aware airbnb
    // config is too slow to repeat inside every build.
    ignoreDuringBuilds: true,
    dirs: ['src'],
  },
  poweredByHeader: false,
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
});
