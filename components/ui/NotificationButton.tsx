"use client";

import { Bell } from "lucide-react";
import IconButton from "./IconButton";

export default function NotificationButton() {
  return (
    <div className="relative">

      <IconButton icon={Bell} />

      <span
        className="
        absolute
        -right-1
        -top-1
        flex
        h-5
        w-5
        items-center
        justify-center
        rounded-full
        bg-white
        text-[10px]
        font-semibold
        text-black
        "
      >
        3
      </span>

    </div>
  );
}