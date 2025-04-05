import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === 'production';
const repoName = '/portfolio';

const nextConfig: NextConfig = {
  output: 'export',  // Make sure to include this for static export
  basePath: isProduction ? repoName : '',
  assetPrefix: isProduction ? repoName : '',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;