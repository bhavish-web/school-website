import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost" | "ghostLight";

export function Button({
  href,
  children,
  variant = "primary",
  className,
  onClick,
  type = "button",
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[0.95rem] font-medium tracking-[-0.01em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2";

  const styles: Record<Variant, string> = {
    primary: "bg-[var(--color-brass)] text-white hover:bg-[var(--color-brass-light)]",
    secondary:
      "bg-transparent text-[var(--color-ink)] border border-[var(--color-ink)]/25 hover:border-[var(--color-ink)]/60",
    ghost: "bg-transparent text-[var(--color-ink)] hover:text-[var(--color-brass)] px-0 py-1",
    ghostLight: "bg-transparent text-white/90 hover:text-white px-0 py-1",
  };

  const classes = clsx(base, styles[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
