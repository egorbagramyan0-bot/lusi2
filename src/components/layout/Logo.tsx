import { cn } from "@/lib/cn";

/**
 * Фирменный знак LUSI WEDDING · EVENT DECOR.
 *
 * Рисуется маской из /logo.png, поэтому окрашивается текущим цветом текста.
 * Само изображение декоративное — название страницы читает screen reader
 * из скрытой подписи.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <>
      <span aria-hidden className={cn("logo-mask block", className)} />
      <span className="sr-only">LUSI Wedding — event decor</span>
    </>
  );
}
