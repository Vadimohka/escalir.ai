import type { NextConfig } from "next";

// The Pages workflow only builds and deploys; local builds keep validation.
const deployOnly = process.env.DEPLOY_ONLY === "true";
// GitHub Pages needs a static export. Server builds opt into the standard Next
// runtime and image optimiser with NEXT_STATIC_EXPORT=false.
const staticExport = process.env.NEXT_STATIC_EXPORT !== "false";

const nextConfig: NextConfig = {
  output: staticExport ? "export" : undefined,
  experimental: { globalNotFound: true },
  trailingSlash: true,
  images: staticExport
    ? { unoptimized: true }
    : { formats: ["image/webp"], minimumCacheTTL: 31_536_000 },
  typescript: { ignoreBuildErrors: deployOnly },
  eslint: { ignoreDuringBuilds: deployOnly },
};

export default nextConfig;
