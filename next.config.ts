import type { NextConfig } from "next";

// Statischer Export für GitHub Pages mit Custom Domain (newsim.de), Auslieferung unter der Domain-Root.
const nextConfig: NextConfig = {
  output: "export",
  basePath: "",
  assetPrefix: "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
