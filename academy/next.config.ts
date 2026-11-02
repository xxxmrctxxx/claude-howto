import type { NextConfig } from "next";

// Static export: the whole academy is a client-side learning app whose
// progress lives in the browser, so it can be hosted on any static server
// (GitHub Pages, Netlify, S3...) without a Node.js backend.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
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
