"use client";

import {
  Gift,
  Send,
  LayoutGrid,
  Megaphone,
} from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "NFT & GIFTS",
    icon: Gift,
  },
  {
    title: "TELEGRAM SERVICES",
    icon: Send,
  },
  {
    title: "OTHER SERVICES",
    icon: LayoutGrid,
  },
  {
    title: "ADVERTISE SERVICES",
    icon: Megaphone,
  },
];

export default function TopProducts() {
  return (
    <section className="mt-8">

      {/* Header */}

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-[22px] font-semibold tracking-wide text-white">
          NASE CENTER
        </h2>

      </div>

      {/* Grid */}

      <div className="grid grid-cols-2 overflow-hidden rounded-[28px] border border-white/10 bg-[#111111]">

        {categories.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.button
              key={item.title}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className={`
                relative
                flex
                aspect-square
                flex-col
                items-center
                justify-center
                gap-4
                transition-colors
                duration-300
                hover:bg-white/[0.03]

                ${
                  index === 0
                    ? "border-b border-r border-white/10"
                    : ""
                }

                ${
                  index === 1
                    ? "border-b border-white/10"
                    : ""
                }

                ${
                  index === 2
                    ? "border-r border-white/10"
                    : ""
                }
              `}
            >
              <Icon
                size={34}
                strokeWidth={2.8}
                className="text-white"
              />

              <span
                className="
                  max-w-[120px]
                  text-center
                  text-[13px]
                  font-bold
                  leading-5
                  tracking-wide
                  text-white
                "
              >
                {item.title}
              </span>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}