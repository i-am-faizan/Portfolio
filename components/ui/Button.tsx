import { ReactNode } from "react";
import Magnetic from "@/components/animations/Magnetic";
import clsx from "clsx";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  icon?: ReactNode;
  target?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className,
  icon,
  target,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 rounded-[10px] text-[14px] font-medium tracking-[-0.01em] transition-colors duration-300";
  const styles =
    variant === "primary"
      ? "bg-ink text-surface hover:bg-violet-700"
      : "bg-transparent text-ink border border-ink/15 hover:border-ink/35";

  return (
    <Magnetic strength={0.25}>
      <a
        href={href}
        target={target}
        rel={target ? "noopener noreferrer" : undefined}
        className={clsx(base, styles, className)}
      >
        {children}
        {icon}
      </a>
    </Magnetic>
  );
}
