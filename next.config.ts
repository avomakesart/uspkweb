import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://pub-b7daf0a886e34f2b8c2ab3497bc521f7.r2.dev/**"),
      new URL("https://pub-74a58968a0814f12bf1cecf8c23125ee.r2.dev/**"),
      new URL("https://images.unsplash.com/**"),
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
