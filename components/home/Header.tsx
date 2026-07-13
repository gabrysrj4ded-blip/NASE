"use client";

import Image from "next/image";
import { Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between">

      {/* Left */}

      <div className="flex items-center gap-4">

        <div className="relative">

          <Image
            src="/images/avatar.png"
            alt="Avatar"
            width={56}
            height={56}
            className="rounded-full object-cover ring-1 ring-white/10"
          />

          <div className="absolute bottom-1 right-1 h-3.5 w-3.5 rounded-full border-2 border-black bg-green-500" />

        </div>

        <div>

          <h1 className="text-[34px] font-semibold tracking-[-1px] text-white">
            Hi, Naomi
          </h1>

          <p className="mt-1 text-sm text-neutral-500">
            Welcome back
          </p>

        </div>

      </div>

      {/* Right */}

      <button
        className="
        relative
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-2xl
        border
        border-white/10
        bg-gradient-to-b
        from-[#181818]
        to-[#0B0B0B]
        "
      >
        <Bell
          size={22}
          strokeWidth={1.8}
          className="text-white"
        />

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
          text-[11px]
          font-semibold
          text-black
          "
        >
          3
        </span>
      </button>

    </header>
  );
}