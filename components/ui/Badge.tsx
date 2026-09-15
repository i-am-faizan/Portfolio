import clsx from "clsx";

export default function Badge({
  children,
  tone = "light",
  className,
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[12px] font-medium",
        tone === "light"
          ? "border-ink/10 bg-ink/[0.03] text-ink-soft"
          : "border-white/15 bg-white/5 text-white/70",
        className
      )}
    >
      <span
        className={clsx(
          "h-1.5 w-1.5 rounded-full",
          tone === "light" ? "bg-violet-500" : "bg-violet-300"
        )}
      />
      {children}
    </span>
  );
}
