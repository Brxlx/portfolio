/* eslint-disable no-undef */

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'source.unsplash.com',
        protocol: 'https',
      },
    ],
  },
};

module.exports = nextConfig;
