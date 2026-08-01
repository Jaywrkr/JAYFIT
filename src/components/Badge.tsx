export function Badge({
  children,
  variant = "outline",
}: {
  children: React.ReactNode;
  variant?: "outline" | "solid";
}) {
  const base =
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider";
  const styles =
    variant === "solid"
      ? "bg-accent text-accent-foreground border-accent"
      : "border-border text-muted";
  return <span className={`${base} ${styles}`}>{children}</span>;
}
