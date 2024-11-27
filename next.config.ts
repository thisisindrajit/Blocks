import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  experimental: {
    scrollRestoration: true,
  },
};

export default nextConfig;
