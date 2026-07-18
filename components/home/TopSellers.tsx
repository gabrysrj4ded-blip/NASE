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
    name: "NASE STORE",
    initials: "NS",
    badge: "TOP",
    rating: 4.9,
    sales: "1.2K Sales",
    bannerLabel: "PREMIUM COLLECTION",
    accent: "from-[#2563eb] via-[#1d4ed8] to-[#111827]",
  },
  {
    id: 2,
    name: "PIXEL SHOP",
    initials: "PS",
    badge: "ELITE",
    rating: 5.0,
    sales: "980 Sales",
    bannerLabel: "DIGITAL ESSENTIALS",
    accent: "from-[#059669] via-[#047857] to-[#111827]",
  },
  {
    id: 3,
    name: "NOVA MARKET",
    initials: "NM",
    badge: "VERIFIED",
    rating: 4.8,
    sales: "730 Sales",
    bannerLabel: "NEXT GENERATION",
    accent: "from-[#7c3aed] via-[#5b21b6] to-[#111827]",
  },
  {
    id: 4,
    name: "BLACK HUB",
    initials: "BH",
    badge: "TOP",
    rating: 4.9,
    sales: "2.4K Sales",
    bannerLabel: "LUXURY SELECTION",
    accent: "from-[#ea580c] via-[#c2410c] to-[#111827]",
  },
];

export default function TopSellers() {
  return (
    <section className="w-full pb-1 pt-[2px]">
      <div className="mb-[6px] flex items-center justify-between">
        <h2 className="text-[26px] font-black leading-none tracking-[-0.04em] text-white">
          TOP SELLERS
        </h2>

        <motion.button
          type="button"
          whileTap={{ scale: 0.96 }}
          className="group flex items-center gap-1 text-[12px] font-bold text-white/45 transition-colors duration-300 hover:text-white"
        >
          View All

          <ChevronRight
            size={15}
            strokeWidth={2.6}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </motion.button>
      </div>
            <div
        className="
          -mx-5
          -mt-[2px]
          flex
          snap-x
          snap-mandatory
          gap-4
          overflow-x-auto
          px-5
          pb-1
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        {sellers.map((seller) => (
          <motion.article
            key={seller.id}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.985 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="
              relative
              h-[285px]
              min-w-[310px]
              snap-start
              overflow-hidden
              rounded-[32px]
              border
              border-white/[0.09]
              bg-gradient-to-b
              from-[#181818]
              via-[#101010]
              to-[#080808]
              shadow-[0_26px_70px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.06)]
            "
          >
            <div
              className={`
                relative
                h-[124px]
                overflow-hidden
                bg-gradient-to-br
                ${seller.accent}
              `}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_40%)]" />

              <div className="absolute -right-8 -top-10 h-36 w-36 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-2xl" />

              <div className="absolute bottom-4 left-5">
                <div className="mb-2 flex items-center gap-1.5 text-white/65">
                  <Sparkles size={13} strokeWidth={2.4} />

                  <span className="text-[9px] font-bold uppercase tracking-[0.24em]">
                    {seller.bannerLabel}
                  </span>
                </div>

                <p className="max-w-[180px] text-[17px] font-black leading-tight tracking-[-0.03em] text-white">
                  CURATED FOR
                  <br />
                  NASE MEMBERS
                </p>
              </div>

              <div className="absolute right-5 top-5 rounded-full border border-white/15 bg-black/25 px-3 py-1.5 backdrop-blur-xl">
                <div className="flex items-center gap-1.5">
                  {seller.badge === "TOP" ? (
                    <Crown size={12} strokeWidth={2.6} />
                  ) : (
                    <BadgeCheck size={12} strokeWidth={2.6} />
                  )}

                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white">
                    {seller.badge}
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute left-5 top-[91px]">
              <div
                className="
                  flex
                  h-[70px]
                  w-[70px]
                  items-center
                  justify-center
                  rounded-full
                  border-[4px]
                  border-[#101010]
                  bg-gradient-to-br
                  from-white
                  to-white/65
                  text-[18px]
                  font-black
                  tracking-[-0.04em]
                  text-black
                  shadow-[0_14px_35px_rgba(0,0,0,0.5)]
                "
              >
                {seller.initials}
              </div>
            </div>

            <div className="px-5 pt-[44px]">
              <div className="flex items-center gap-2">
                <h3 className="truncate text-[19px] font-black tracking-[-0.04em] text-white">
                  {seller.name}
                </h3>

                <BadgeCheck
                  size={17}
                  strokeWidth={2.5}
                  className="shrink-0 fill-[#38bdf8] text-[#38bdf8]"
                />
              </div>
                            <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Star
                    size={15}
                    strokeWidth={2.3}
                    className="fill-[#facc15] text-[#facc15]"
                  />

                  <span className="text-[13px] font-extrabold text-white">
                    {seller.rating}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-white/45">
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
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.98 }}
                className="
                  mt-5
                  flex
                  h-[42px]
                  w-full
                  items-center
                  justify-center
                  gap-2.5
                  rounded-[9999px]
                  border
                  border-white/[0.10]
                  bg-gradient-to-b
                  from-white
                  to-[#ececec]
                  text-[12px]
                  font-black
                  uppercase
                  tracking-[0.14em]
                  text-black
                  shadow-[0_10px_24px_rgba(0,0,0,0.28)]
                "
                style={{ borderRadius: "9999px" }}
              >
                View Shop

                <ChevronRight
                  size={15}
                  strokeWidth={2.8}
                />
              </motion.button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}