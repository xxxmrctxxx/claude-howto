import type { NextConfig } from "next";

// Static export: the whole academy is a client-side learning app whose
// progress lives in the browser, so it can be hosted on any static server
// (GitHub Pages, Netlify, S3...) without a Node.js backend.
// Set ACADEMY_BASE_PATH when the site is served from a sub-path, e.g.
// "/claude-howto/academy" on GitHub Pages. Empty for local dev and tests.
const basePath = process.env.ACADEMY_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
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
