import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build output goes to Linux FS to avoid NTFS write restrictions
  distDir: "/tmp/next-build",
};

export default nextConfig;
