"use client";

import { motion } from "framer-motion";
import {
  Dice5,
  Gift,
  House,
  Grid2x2,
  Wallet,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const items = [
  {
    label: "CASINO",
    href: "/casino",
    icon: Dice5,
  },
  {
    label: "GIFTS",
    href: "/gifts",
    icon: Gift,
  },
  {
    label: "HOME",
    href: "/home",
    icon: House,
    center: true,
  },
  {
    label: "SERVICES",
    href: "/services",
    icon: Grid2x2,
  },
  {
    label: "FINANCE",
    href: "/finance",
    icon: Wallet,
  },
];

export default function BottomNavigation() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div
      className="
        fixed
        inset-x-0
        bottom-0
        z-[100]
        flex
        justify-center
        px-4
        pb-[max(14px,env(safe-area-inset-bottom))]
      "
    >
      <nav
        className="
          relative
          flex
          h-[76px]
          w-full
          max-w-[430px]
          items-center
          justify-between
          overflow-hidden
          rounded-[30px]
          border
          border-white/[0.08]
          bg-[#0b0b0b]/90
          backdrop-blur-3xl
          shadow-[0_-14px_42px_rgba(0,0,0,.55)]
        "
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,.08),transparent_70%)]" />

        <div className="relative z-10 flex w-full items-center justify-between px-3">
          {items.map((item) => {
            const Icon = item.icon;

            const active = pathname === item.href;

            return (
              <motion.button
                key={item.label}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.03 }}
                onClick={() => router.push(item.href)}
                                className={
                  item.center
                    ? `
                      relative
                      -mt-2
                      flex
                      h-[64px]
                      min-w-[92px]
                      flex-col
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-full
                      border
                      border-white/[0.12]
                      bg-gradient-to-b
                      from-[#262626]
                      via-[#151515]
                      to-[#090909]
                      shadow-[0_14px_36px_rgba(0,0,0,.45)]
                    `
                    : `
                      relative
                      flex
                      h-[62px]
                      w-[64px]
                      flex-col
                      items-center
                      justify-center
                      rounded-2xl
                    `
                }
              >
                {item.center && (
                  <>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,.10),transparent_65%)]" />

                    <motion.span
                      animate={{
                        x: ["-140%", "240%"],
                      }}
                      transition={{
                        duration: 1.15,
                        repeat: Infinity,
                        repeatDelay: 5,
                        ease: "easeInOut",
                      }}
                      className="
                        absolute
                        inset-y-0
                        w-10
                        -skew-x-12
                        bg-white/60
                        blur-md
                      "
                    />
                  </>
                )}

                <motion.div
                  animate={{
                    scale: active ? 1.12 : 1,
                    y: active ? -1 : 0,
                  }}
                  transition={{
                    duration: 0.22,
                  }}
                >
                  <Icon
                    size={item.center ? 23 : 20}
                    strokeWidth={2.8}
                    className={
                      active
                        ? "text-white"
                        : "text-white/48"
                    }
                  />
                </motion.div>

                <motion.span
                  animate={{
                    opacity: active ? 1 : 0.58,
                    y: active ? 0 : 1,
                  }}
                  transition={{
                    duration: 0.22,
                  }}
                  className={`
                    mt-1
                    select-none
                    text-center
                    font-black
                    uppercase
                    tracking-[0.14em]
                    ${
                      item.center
                        ? "text-[10px]"
                        : "text-[9px]"
                    }
                    ${
                      active
                        ? "text-white"
                        : "text-white/48"
                    }
                  `}
                               >
                  {item.label}
                </motion.span>
              </motion.button>
            );
          })}
        </div>
        <div
          className="
            pointer-events-none
            absolute
            inset-x-8
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-white/15
            to-transparent
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            inset-x-10
            bottom-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-white/6
            to-transparent
          "
        />
      </nav>
    </div>
  );
} 