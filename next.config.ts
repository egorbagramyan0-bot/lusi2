import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 75 по умолчанию заметно мылит тёмные градиенты вроде бархата
    qualities: [75, 90],
  },
};

export default nextConfig;
