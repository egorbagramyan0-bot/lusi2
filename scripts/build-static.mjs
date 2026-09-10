/**
 * Сборка статической версии сайта в папку out/.
 *
 * Отдельный скрипт, а не переменная прямо в npm-скрипте: синтаксис
 * `VAR=1 команда` не работает в командной строке Windows, а тянуть ради
 * одного флага зависимость вроде cross-env не хочется.
 */
import { spawnSync } from "node:child_process";

const result = spawnSync("next", ["build"], {
  stdio: "inherit",
  shell: true,
  env: { ...process.env, STATIC_EXPORT: "1" },
});

process.exit(result.status ?? 1);
