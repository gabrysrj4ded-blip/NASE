"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Settings,
  User,
  Plus,
} from "lucide-react";
import { useRouter } from "next/navigation";

const USERNAME_STORAGE_KEY = "nase-username";

export default function Header() {
  const router = useRouter();
  const [username, setUsername] = useState("USERNAME");

  useEffect(() => {
    const savedUsername = localStorage.getItem(
      USERNAME_STORAGE_KEY
    )?.trim();

    if (savedUsername) {
      setUsername(savedUsername.toUpperCase());
    }
  }, []);

  const buttonClass = `
    relative
    flex
    h-[46px]
    shrink-0
    items-center
    justify-center
    gap-[3px]
    overflow-hidden
    rounded-2xl
    border
    border-white/[0.10]
    bg-gradient-to-b
    from-[#202020]
    via-[#121212]
    to-[#080808]
    px-2
    text-[13px]
    font-black
    tracking-[-0.2px]
    text-white
    shadow-[0_18px_42px_rgba(0,0,0,.62),inset_0_1px_0_rgba(255,255,255,.12)]
    transition-all
    duration-300
    hover:border-white/[0.18]
  `;

  return (
    <header className="flex w-full items-center">

      {/* Profile */}

      <button
        type="button"
        onClick={() => {}}
        aria-label="Open profile"
        className="flex min-w-0 flex-1 items-center gap-3 text-left"
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

        <div className="min-w-0 flex-1">
          <p
            className="
              text-[8px]
              font-semibold
              uppercase
              leading-none
              tracking-[0.30em]
              text-white/35
            "
          >
            Welcome!
          </p>

          <h1
            className="
              mt-1.5
              truncate
              uppercase
              text-[22px]
              font-extrabold
              leading-none
              tracking-[-0.8px]
              text-white
            "
          >
            {username}
          </h1>
        </div>
      </button>

      {/* Actions */}

      <div className="ml-3 flex shrink-0 items-center gap-[2px]">

        {/* Divider */}

        <div
          className="
            mr-2
            h-10
            w-px
            shrink-0
            bg-gradient-to-b
            from-transparent
            via-white/20
            to-transparent
          "
        />

        {/* Settings */}

        <motion.button
          type="button"
          whileTap={{ scale: 0.97 }}
          onClick={() => router.push("/settings")}
          className={`${buttonClass} w-[78px]`}
        >
          <span className="pointer-events-none absolute inset-x-2 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

          <span className="pointer-events-none absolute left-1/2 top-0 h-8 w-10 -translate-x-1/2 rounded-full bg-white/[0.06] blur-xl" />

          <Settings
            size={20}
            strokeWidth={3}
            className="relative z-10 shrink-0"
          />

          <span className="relative z-10">
            Setting
          </span>
        </motion.button>

        {/* Profile */}

        <motion.button
          type="button"
          whileTap={{ scale: 0.97 }}
          onClick={() => router.push("/profile")}
          className={`${buttonClass} w-[78px]`}
        >
          <span className="pointer-events-none absolute inset-x-2 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

          <span className="pointer-events-none absolute left-1/2 top-0 h-8 w-10 -translate-x-1/2 rounded-full bg-white/[0.06] blur-xl" />

          <User
            size={20}
            strokeWidth={3}
            className="relative z-10 shrink-0"
          />

          <span className="relative z-10">
            Profile
          </span>
        </motion.button>
                {/* Shop */}

        <motion.button
          type="button"
          whileTap={{ scale: 0.97 }}
          onClick={() => router.push("/marketplace")}
          className={`${buttonClass} w-[84px] group`}
        >
          <span className="pointer-events-none absolute inset-x-2 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

          <span className="pointer-events-none absolute left-1/2 top-0 h-8 w-10 -translate-x-1/2 rounded-full bg-white/[0.06] blur-xl" />

          {/* Shine */}

          <motion.span
            aria-hidden="true"
            initial={{
              x: "-220%",
              opacity: 0,
            }}
            animate={{
              x: ["-220%", "260%"],
              opacity: [0, 0.35, 0],
            }}
            transition={{
              duration: 1.15,
              repeat: Infinity,
              repeatDelay: 5,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              -bottom-6
              -top-6
              w-10
              -skew-x-[22deg]
              bg-gradient-to-r
              from-transparent
              via-white/90
              to-transparent
              blur-[7px]
            "
          />

          <Plus
            size={20}
            strokeWidth={3}
            className="relative z-10 shrink-0"
          />

          <span className="relative z-10">
            Shop
          </span>
        </motion.button>

      </div>
    </header>
  );
}