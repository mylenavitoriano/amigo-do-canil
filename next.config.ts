import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
    formats: ["image/webp"], // formatos mais leves
    minimumCacheTTL: 60 * 60 * 24 * 7, // cache de 7 dias
    qualities: [25, 50, 75, 100],
  },
};

export default nextConfig;
