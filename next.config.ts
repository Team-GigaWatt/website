import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false, // <-- Add this line here
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;