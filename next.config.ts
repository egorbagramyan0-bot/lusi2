import type { NextConfig } from "next";

/**
 * Статическая выгрузка включается переменной STATIC_EXPORT=1
 * (см. npm run build:static). Нужна для обычного хостинга, где нет Node
 * и файлы просто кладутся на диск.
 *
 * В этом режиме оптимизатор картинок недоступен — он серверный, — поэтому
 * next/image отдаёт файлы как есть. Кадры в public/images уже подготовлены
 * под свои размеры, так что смотрится это правильно, но весит больше:
 * телефон получит те же файлы, что и десктоп.
 */
const isStaticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(isStaticExport ? { output: "export" as const } : {}),
  images: isStaticExport
    ? { unoptimized: true }
    : {
        // 75 по умолчанию заметно мылит тёмные градиенты вроде бархата
        qualities: [75, 90],
      },
};

export default nextConfig;
