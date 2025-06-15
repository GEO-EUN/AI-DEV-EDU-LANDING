const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/AI-DEV-EDU-LANDING' : '',
  assetPrefix: isProd ? '/AI-DEV-EDU-LANDING/' : '',
}

export default nextConfig
