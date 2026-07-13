"use client";

import { Search, Mic } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="mt-8">

      <div
        className="
        flex
        h-[64px]
        items-center
        rounded-[24px]
        border
        border-white/8
        bg-gradient-to-b
        from-[#151515]
        via-[#111111]
        to-[#0B0B0B]
        px-6
        transition-all
        duration-300
        "
      >

        {/* Search */}

        <Search
          size={24}
          strokeWidth={2}
          className="text-white"
        />

        <input
          placeholder="Search anything in NASE..."
          className="
          ml-4
          flex-1
          bg-transparent
          text-[17px]
          text-white
          placeholder:text-neutral-500
          outline-none
          "
        />

        <button
          className="
          ml-5
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          "
        >
          <Mic
            size={22}
            strokeWidth={2}
            className="text-white"
          />
        </button>

      </div>

    </div>
  );
}