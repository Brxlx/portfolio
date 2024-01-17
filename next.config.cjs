export default {
  /** @type {import('next').NextConfig} */
  nextConfig: {
    typescript: {
      ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    images: {
      remotePatterns: [],
    },
  },
};
