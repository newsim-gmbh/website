import type { NextConfig } from "next";

// Statischer Export für GitHub Pages (Project Page unter /website/).
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/website",
  assetPrefix: "/website/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
