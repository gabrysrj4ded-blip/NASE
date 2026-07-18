"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  ChevronRight,
  Crown,
  ShoppingBag,
  Sparkles,
  Star,
} from "lucide-react";

const sellers = [
  {
    id: 1,
    name: "Apple Store",
    initials: "A",
    bannerLabel: "PREMIUM",
    badge: "TOP",
    rating: "4.9",
    sales: "12.4K Sales",
    accent: "from-[#ffb36b] via-[#ff8a3d] to-[#ff5a1f]",
  },
  {
    id: 2,
    name: "Nothing",
    initials: "N",
    bannerLabel: "TRENDING",
    badge: "PRO",
    rating: "4.8",
    sales: "9.8K Sales",
    accent: "from-[#8b5cf6] via-[#6d28d9] to-[#4c1d95]",
  },
  {
    id: 3,
    name: "Sony",
    initials: "S",
    bannerLabel: "FEATURED",
    badge: "TOP",
    rating: "4.9",
    sales: "18.1K Sales",
    accent: "from-[#38bdf8] via-[#0ea5e9] to-[#0369a1]",
  },
];

export default function TopSellers() {
  return (
    <section className="w-full pt-1 pb-1">

      <div className="mb-3 flex items-center justify-between">

        <h2 className="text-[26px] font-black tracking-[-0.04em] text-white">
          TOP SELLERS
        </h2>

        <motion.button
          whileTap={{ scale: 0.96 }}
          className="group flex items-center gap-1 text-[12px] font-bold text-white/45 transition hover:text-white"
        >
          View All

          <ChevronRight
            size={15}
            strokeWidth={2.7}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </motion.button>

      </div>

      <div
        className="
          flex
          gap-4
          overflow-x-auto
          snap-x
          snap-proximity
          pb-2
          pr-2
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        {sellers.map((seller, index) => (
          <motion.article
            key={seller.id}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.985 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 22,
            }}
            className={`
              relative
              h-[295px]
              min-w-[315px]
              snap-start
              overflow-hidden
              rounded-[34px]
              border
              border-white/[0.08]
              bg-gradient-to-b
              from-[#181818]
              via-[#101010]
              to-[#080808]
              shadow-[0_30px_80px_rgba(0,0,0,.55)]
              ${index === 0 ? "ml-0" : ""}
            `}
          >
                        <div
              className={`
                relative
                h-[128px]
                overflow-hidden
                bg-gradient-to-br
                ${seller.accent}
              `}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,.24),transparent_42%)]" />

              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/10 bg-white/[0.06] backdrop-blur-3xl" />

              <div className="absolute left-6 bottom-5">
                <div className="mb-2 flex items-center gap-1.5 text-white/70">
                  <Sparkles size={13} strokeWidth={2.5} />

                  <span className="text-[9px] font-black uppercase tracking-[0.25em]">
                    {seller.bannerLabel}
                  </span>
                </div>

                <p className="text-[18px] font-black leading-tight tracking-[-0.04em] text-white">
                  CURATED FOR
                  <br />
                  NASE MEMBERS
                </p>
              </div>

              <div className="absolute right-5 top-5 rounded-full border border-white/15 bg-black/30 px-3 py-1.5 backdrop-blur-xl">
                <div className="flex items-center gap-1.5">
                  {seller.badge === "TOP" ? (
                    <Crown size={12} strokeWidth={2.6} />
                  ) : (
                    <BadgeCheck size={12} strokeWidth={2.6} />
                  )}

                  <span className="text-[9px] font-black uppercase tracking-[0.22em] text-white">
                    {seller.badge}
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute left-6 top-[95px]">
              <div
                className="
                  flex
                  h-[72px]
                  w-[72px]
                  items-center
                  justify-center
                  rounded-full
                  border-[4px]
                  border-[#101010]
                  bg-gradient-to-br
                  from-white
                  to-white/70
                  text-[20px]
                  font-black
                  tracking-[-0.04em]
                  text-black
                  shadow-[0_18px_40px_rgba(0,0,0,.45)]
                "
              >
                {seller.initials}
              </div>
            </div>

            <div className="px-6 pt-[48px]">

              <div className="flex items-center gap-2">
                <h3 className="truncate text-[20px] font-black tracking-[-0.04em] text-white">
                  {seller.name}
                </h3>

                <BadgeCheck
                  size={17}
                  strokeWidth={2.5}
                  className="shrink-0 fill-[#38bdf8] text-[#38bdf8]"
                />
              </div>

              <p className="mt-2 text-[12px] leading-6 text-white/55">
                Official verified seller with premium support,
                fast shipping and exclusive offers for NASE users.
              </p>

              <div className="mt-4 flex items-center justify-between">

                <div className="flex items-center gap-2">

                  <Star
                    size={15}
                    strokeWidth={2.3}
                    className="fill-[#facc15] text-[#facc15]"
                  />

                  <span className="text-[13px] font-extrabold text-white">
                    {seller.rating}
                  </span>

                </div>

                <div className="flex items-center gap-2 text-white/45">

                  <ShoppingBag
                    size={14}
                    strokeWidth={2.3}
                  />

                  <span className="text-[12px] font-semibold">
                    {seller.sales}
                  </span>

                </div>

              </div>
                            <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="
                  group
                  relative
                  mt-6
                  flex
                  h-[46px]
                  w-full
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  border
                  border-white/[0.08]
                  bg-gradient-to-b
                  from-white
                  to-[#ececec]
                  text-[12px]
                  font-black
                  uppercase
                  tracking-[0.16em]
                  text-black
                  shadow-[0_14px_34px_rgba(0,0,0,.28)]
                "
              >
                <motion.span
                  animate={{
                    x: ["-130%", "220%"],
                  }}
                  transition={{
                    duration: 1.15,
                    repeat: Infinity,
                    repeatDelay: 4.5,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    inset-y-0
                    w-12
                    -skew-x-12
                    bg-white/70
                    blur-md
                  "
                />

                <span className="relative z-10 flex items-center gap-2.5">
                  View Shop

                  <ChevronRight
                    size={15}
                    strokeWidth={2.8}
                  />
                </span>
              </motion.button>

            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}