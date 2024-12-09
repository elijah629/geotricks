import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "geohints.com",
        port: "",
        pathname: "/Sources/**",
      },
    ],
  },
};
export default nextConfig;
