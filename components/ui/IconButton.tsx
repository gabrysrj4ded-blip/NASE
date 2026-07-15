"use client";

import type { LucideIcon } from "lucide-react";
import AppIcon from "./AppIcon";

type Props = {
  icon: LucideIcon;
  onClick?: () => void;
};

export default function IconButton({
  icon,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="
      transition-all
      duration-300
      hover:scale-[1.04]
      active:scale-[0.96]
      "
    >
      <AppIcon icon={icon} />
    </button>
  );
}