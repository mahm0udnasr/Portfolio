import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  compress: true,
  generateEtags: true,
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
