/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    // Skip TypeScript errors during build
    ignoreBuildErrors: true,
  },
  eslint: {
    // Skip ESLint errors during build
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['image.tmdb.org', 'themoviedb.org'],
  },
}

module.exports = nextConfig
