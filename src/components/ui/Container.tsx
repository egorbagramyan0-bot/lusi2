import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Контентная колонка макета: 1240px по центру плюс боковые поля. */
export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn(
        "mx-auto w-full max-w-[calc(var(--container-site)+var(--gutter)*2)] px-(--gutter)",
        className,
      )}>
      {children}
    </div>
  );
}
