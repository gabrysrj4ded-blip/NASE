"use client";

import type { LucideIcon } from "lucide-react";
import clsx from "clsx";

type Props = {
  icon: LucideIcon;
  size?: number;
  className?: string;
};

export default function AppIcon({
  icon: Icon,
  size = 22,
  className,
}: Props) {
  return (
    <div
      className={clsx(
        "relative flex items-center justify-center",
        "h-12 w-12 rounded-[18px]",
        "border border-white/[0.08]",
        "bg-gradient-to-b from-[#1C1C1C] via-[#111111] to-[#090909]",
        "shadow-[0_18px_50px_rgba(0,0,0,.65)]",
        "overflow-hidden",
        className
      )}
    >
      {/* top light */}

      <div className="absolute inset-x-3 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      {/* glow */}

      <div className="absolute top-1 left-1/2 h-8 w-8 -translate-x-1/2 rounded-full bg-white/[0.05] blur-xl" />

      <Icon
        size={size}
        strokeWidth={1.8}
        className="relative z-10 text-white drop-shadow-[0_0_8px_rgba(255,255,255,.15)]"
      />
    </div>
  );
}