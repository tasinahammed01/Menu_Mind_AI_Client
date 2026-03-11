import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mm-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--mm-bg-dark)] hover:ring-1 hover:ring-white/10";

  const styles: Record<ButtonVariant, string> = {
    primary:
      "bg-gradient-to-r from-[var(--mm-primary)] to-[var(--mm-secondary)] text-[var(--mm-text-dark)] shadow-lg hover:shadow-[0_18px_60px_rgba(255,107,53,0.22)] hover:scale-[1.05]",
    secondary:
      "bg-gradient-to-r from-[var(--mm-accent)] to-[#4F46E5] text-[var(--mm-text-light)] shadow-lg hover:shadow-[0_18px_60px_rgba(124,58,237,0.25)] hover:scale-[1.05]",
    ghost:
      "border border-[var(--mm-border)] bg-white/5 text-[var(--mm-text-light)] shadow-md hover:shadow-lg hover:-translate-y-0.5",
  };

  return <button className={cn(base, styles[variant], className)} {...props} />;
}
