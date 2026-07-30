import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Static site — exported to out/ and served by Cloudflare as plain assets. */
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
