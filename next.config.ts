import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ver2 лежит внутри репозитория первой версии, поэтому корень для сборки
  // задаём явно — иначе Turbopack поднимется до общего lock-файла.
  turbopack: {
    root: import.meta.dirname,
  },
  images: {
    // 75 по умолчанию заметно мылит тёмные градиенты вроде бархата
    qualities: [75, 90],
  },
};

export default nextConfig;
