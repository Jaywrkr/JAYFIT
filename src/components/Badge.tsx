export function Badge({
  children,
  variant = "outline",
}: {
  children: React.ReactNode;
  variant?: "outline" | "solid";
}) {
  const base =
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide";
  const styles =
    variant === "solid"
      ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white"
      : "border-black/20 text-black/70 dark:border-white/25 dark:text-white/70";
  return <span className={`${base} ${styles}`}>{children}</span>;
}
