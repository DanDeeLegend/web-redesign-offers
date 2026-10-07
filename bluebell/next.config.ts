import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export: deployable to any host (Vercel, Netlify, cPanel) with no Node server.
  output: "export",
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
