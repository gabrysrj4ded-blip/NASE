"use client";

import type { LucideIcon } from "lucide-react";
import clsx from "clsx";

type AppIconSize = "sm" | "md" | "lg";

type Props = {
  icon: LucideIcon;
  size?: AppIconSize;
  className?: string;
  iconClassName?: string;
};

const sizeClasses: Record<AppIconSize, string> = {
  sm: "h-10 w-10 rounded-[14px]",
  md: "h-12 w-12 rounded-[17px]",
  lg: "h-14 w-14 rounded-[20px]",
};

const iconSizes: Record<AppIconSize, number> = {
  sm: 18,
  md: 21,
  lg: 24,
};

export default function AppIcon({
  icon: Icon,
  size = "md",
  className,
  iconClassName,
}: Props) {
  return (
    <div
      className={clsx(
        "relative isolate flex shrink-0 items-center justify-center overflow-hidden",
        "border border-white/[0.09]",
        "bg-gradient-to-b from-[#202020] via-[#121212] to-[#080808]",
        "shadow-[0_18px_42px_rgba(0,0,0,0.62),inset_0_1px_0_rgba(255,255,255,0.12)]",
        "transition-[transform,border-color,box-shadow] duration-300 ease-out",
        sizeClasses[size],
        className,
      )}
    >
      {/* Top glass highlight */}
      <span className="pointer-events-none absolute inset-x-2 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

      {/* Soft internal light */}
      <span className="pointer-events-none absolute left-1/2 top-0 h-8 w-9 -translate-x-1/2 rounded-full bg-white/[0.06] blur-xl" />

      {/* Subtle lower depth */}
      <span className="pointer-events-none absolute inset-x-2 bottom-0 h-px bg-gradient-to-r from-transparent via-black/80 to-transparent" />

      <Icon
        size={iconSizes[size]}
        strokeWidth={2.35}
        className={clsx(
          "relative z-10 text-white/95 drop-shadow-[0_0_8px_rgba(255,255,255,0.13)]",
          iconClassName,
        )}
      />
    </div>
  );
}