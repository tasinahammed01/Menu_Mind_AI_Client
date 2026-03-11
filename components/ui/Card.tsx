import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-[var(--mm-border)] bg-[var(--mm-card)] p-6 shadow-md backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-1 hover:ring-white/10",
        className,
      )}
      {...props}
    />
  );
}
