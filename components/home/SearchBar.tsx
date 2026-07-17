"use client";

import Image from "next/image";
import { Mic } from "lucide-react";

export default function SearchBar() {
  return (
    <div>
      <div
        className="
          flex
          h-12
          items-center
          rounded-[18px]
          border
          border-white/[0.08]
          bg-gradient-to-b
          from-[#1A1A1A]
          via-[#111111]
          to-[#090909]
          px-[10px]
          shadow-[0_14px_38px_rgba(0,0,0,.35)]
          transition-all
          duration-300
          hover:border-white/[0.14]
        "
      >
        {/* NASE Logo */}

        <Image
          src="/images/logo.png"
          alt="NASE"
          width={18}
          height={18}
          priority
          className="h-[18px] w-[18px] shrink-0 object-contain"
        />

        {/* Input */}

        <input
          placeholder="Search in NASE..."
          className="
            ml-3
            flex-1
            bg-transparent
            text-[14px]
            font-medium
            text-white
            placeholder:text-white/35
            outline-none
          "
        />

        {/* Voice */}

        <button
          className="
            ml-2
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            transition-colors
            duration-300
            hover:bg-white/5
          "
        >
          <Mic
            size={20}
            strokeWidth={3}
            className="text-white/80"
          />
        </button>
      </div>
    </div>
  );
}