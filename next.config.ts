import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    const immutable = [
      { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
    ];

    // Next route matchers don't support regex groups, so list common extensions explicitly.
    const staticAssetSources = [
      "/:path*.svg",
      "/:path*.png",
      "/:path*.jpg",
      "/:path*.jpeg",
      "/:path*.gif",
      "/:path*.webp",
      "/:path*.avif",
      "/:path*.ico",
      "/:path*.woff",
      "/:path*.woff2",
      "/:path*.ttf",
      "/:path*.otf",
    ];

    return [
      ...staticAssetSources.map((source) => ({ source, headers: immutable })),
      // Next build output (already cached by Next/Vercel, but kept explicit)
      { source: "/_next/static/:path*", headers: immutable },
    ];
  },
};

export default nextConfig;
