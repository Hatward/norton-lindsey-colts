import type { NextConfig } from "next";

// Set by the GitHub Actions workflow to "/norton-lindsey-colts" for the
// production build, since the site is served from a GitHub Pages project
// path. Left empty for local dev so `npm run dev` works at "/". Must be
// NEXT_PUBLIC_-prefixed so the same value is inlined into client bundles
// (needed to manually prefix public/ asset paths — next/image does not
// do this automatically for static export).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
