"use client";

import Image from "next/image";
import { Bell, Headphones } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-2">

      {/* Left */}

      <div className="flex items-center gap-3">

        <div className="relative">

          <Image
            src="/images/avatar.png"
            alt="Avatar"
            width={48}
            height={48}
            className="rounded-full object-cover ring-1 ring-white/10"
          />

          <div className="absolute bottom-0.5 right-0.5 h-3 w-3 rounded-full border-2 border-black bg-green-500" />

        </div>

        <div>

          <p className="text-[11px] font-medium text-neutral-500">
            Welcome back
          </p>

          <h1 className="mt-0.5 text-[22px] font-semibold tracking-[-0.6px] text-white">
            Hi, Naomi
          </h1>

        </div>

      </div>

      {/* Right */}

      <div className="flex items-center gap-3">

        {/* Support */}

        <button
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            border
            border-white/10
            bg-gradient-to-b
            from-[#181818]
            to-[#0B0B0B]
            transition-all
            duration-300
            hover:border-white/20
            hover:bg-[#1b1b1b]
          "
        >
          <Headphones
            size={20}
            strokeWidth={1.8}
            className="text-white"
          />
        </button>

        {/* Notification */}

        <button
          className="
            relative
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            border
            border-white/10
            bg-gradient-to-b
            from-[#181818]
            to-[#0B0B0B]
            transition-all
            duration-300
            hover:border-white/20
            hover:bg-[#1b1b1b]
          "
        >
          <Bell
            size={20}
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
              text-[10px]
              font-semibold
              text-black
            "
          >
            3
          </span>
        </button>

      </div>

    </header>
  );
}