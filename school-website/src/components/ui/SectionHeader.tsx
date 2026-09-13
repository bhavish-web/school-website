import clsx from "clsx";
import { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  action?: ReactNode;
}) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-4 md:flex-row md:items-end md:justify-between",
        align === "center" && "md:justify-center md:text-center md:items-center"
      )}
    >
      <div className={clsx("max-w-xl", align === "center" && "mx-auto")}>
        {eyebrow && (
          <p
            className={clsx(
              "eyebrow mb-4",
              align === "center" && "justify-center",
              tone === "dark" ? "text-[var(--color-gold)]" : "text-[var(--color-gold-bright)]"
            )}
          >
            {eyebrow}
          </p>
        )}
        <h2
          className={clsx(
            "heading-tight font-display font-medium text-[2rem] font-medium leading-[1.12] md:text-[2.75rem]",
            tone === "dark" ? "text-[var(--color-ink)]" : "text-white"
          )}
        >
          {title}
        </h2>
        {description && (
          <p
            className={clsx(
              "mt-4 text-[1.05rem] leading-relaxed",
              tone === "dark" ? "text-[var(--color-slate)]" : "text-white/75"
            )}
          >
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
