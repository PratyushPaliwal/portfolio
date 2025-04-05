import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '/portfolio', // Replace with your repo name
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : 'portfolio',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        // Add any other domains you're using
      },
    ],
  },
};

export default nextConfig;
