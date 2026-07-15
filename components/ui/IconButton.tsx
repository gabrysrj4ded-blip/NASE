"use client";

import type { ButtonHTMLAttributes } from "react";
import type { LucideIcon } from "lucide-react";
import clsx from "clsx";

import AppIcon from "./AppIcon";

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
  icon: LucideIcon;
  label: string;
  badge?: string | number;
};

export default function IconButton({
  icon,
  label,
  badge,
  className,
  ...buttonProps
}: Props) {
  return (
    <button
      type="button"
      aria-label={label}
      className={clsx(
        "group relative rounded-[17px] outline-none",
        "transition-transform duration-200 ease-out",
        "hover:scale-[1.035] active:scale-[0.965]",
        "focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
        className,
      )}
      {...buttonProps}
    >
      <AppIcon
        icon={icon}
        className="group-hover:border-white/[0.16] group-hover:shadow-[0_20px_48px_rgba(0,0,0,0.68),inset_0_1px_0_rgba(255,255,255,0.15)]"
      />

      {badge !== undefined && (
        <span
          className="
            absolute -right-1 -top-1 z-20
            flex h-[18px] min-w-[18px] items-center justify-center
            rounded-full border border-black
            bg-white px-1
            text-[9px] font-bold leading-none text-black
            shadow-[0_4px_14px_rgba(0,0,0,0.55)]
          "
        >
          {badge}
        </span>
      )}
    </button>
  );
}