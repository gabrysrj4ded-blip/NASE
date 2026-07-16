"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Headset, Plus } from "lucide-react";
import { useRouter } from "next/navigation";

import {
  IconButton,
  NotificationButton,
} from "@/components/ui";

const USERNAME_STORAGE_KEY = "nase-username";

export default function Header() {
  const router = useRouter();
  const [username, setUsername] = useState("USERNAME");

  useEffect(() => {
    const savedUsername = localStorage.getItem(USERNAME_STORAGE_KEY)?.trim();

    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  return (
    <header className="flex w-full items-center justify-between gap-2">
      <button
        type="button"
        onClick={() => {}}
        className="flex min-w-0 items-center gap-2.5 text-left"
        aria-label="Open profile"
      >
        <div className="relative shrink-0">
          <Image
            src="/images/avatar.png"
            alt={`${username} profile`}
            width={42}
            height={42}
            priority
            className="h-[42px] w-[42px] rounded-full object-cover ring-1 ring-white/10"
          />

          <span className="absolute bottom-0 right-0 h-[11px] w-[11px] rounded-full border-2 border-black bg-emerald-400" />
        </div>

        <div className="min-w-0">
          <p className="text-[8px] font-semibold uppercase leading-none tracking-[0.28em] text-white/35">
            Welcome!
          </p>

          <h1 className="mt-1.5 max-w-[92px] truncate text-[20px] font-semibold leading-none tracking-[-0.55px] text-white">
            {username}
          </h1>
        </div>
      </button>

      <div className="flex shrink-0 items-center gap-1.5">
        <IconButton
          icon={Headset}
          label="Customer support"
          onClick={() => {}}
        />

        <NotificationButton
          count={3}
          onClick={() => router.push("/notifications")}
        />

        <motion.button
          type="button"
          onClick={() => router.push("/marketplace")}
          whileTap={{ scale: 0.97 }}
          className="
            group
            relative
            flex
            h-12
            min-w-[104px]
            items-center
            justify-center
            gap-2
            overflow-hidden
            rounded-[17px]
            border
            border-white/[0.10]
            bg-gradient-to-b
            from-[#202020]
            via-[#121212]
            to-[#080808]
            px-3.5
            text-[11px]
            font-semibold
            tracking-[-0.1px]
            text-white
            shadow-[0_18px_42px_rgba(0,0,0,0.62),inset_0_1px_0_rgba(255,255,255,0.12)]
            transition-[transform,border-color,box-shadow]
            duration-300
            hover:border-white/[0.17]
            hover:shadow-[0_20px_48px_rgba(0,0,0,0.68),inset_0_1px_0_rgba(255,255,255,0.16)]
          "
          aria-label="Add Shop"
        >
          <span className="pointer-events-none absolute inset-x-3 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

          <span className="pointer-events-none absolute left-1/2 top-0 h-8 w-12 -translate-x-1/2 rounded-full bg-white/[0.055] blur-xl" />

          <motion.span
            aria-hidden="true"
            initial={{ x: "-190%", opacity: 0 }}
            animate={{
              x: ["-190%", "240%"],
              opacity: [0, 0.26, 0],
            }}
            transition={{
              duration: 1.15,
              repeat: Infinity,
              repeatDelay: 5.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              pointer-events-none
              absolute
              -bottom-5
              -top-5
              w-10
              -skew-x-[22deg]
              bg-gradient-to-r
              from-transparent
              via-white/65
              to-transparent
              blur-[5px]
            "
          />

          <Plus
            size={16}
            strokeWidth={2}
            className="relative z-10 shrink-0 text-white/95 drop-shadow-[0_0_7px_rgba(255,255,255,0.14)]"
          />

          <span className="relative z-10 whitespace-nowrap">
            Add Shop
          </span>
        </motion.button>
      </div>
    </header>
  );
}