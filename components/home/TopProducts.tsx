"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  {
    title: "NFT",
    image: "/images/categories/nft.jpg",
  },
  {
    title: "PREMIUM,\nSTARS & GIFTS",
    image: "/images/categories/premium.jpg",
  },
  {
    title: "TELEGRAM\nSERVICES",
    image: "/images/categories/telegram.jpg",
  },
  {
    title: "AI & TOOLS",
    image: "/images/categories/ai.jpg",
  },
  {
    title: "FINANCE",
    image: "/images/categories/finance.jpg",
  },
  {
    title: "ADVERTISE\nSERVICES",
    image: "/images/categories/advertise.jpg",
  },
];

export default function TopProducts() {
  return (
    <section className="mt-6">

      {/* Header */}

      <div className="mb-4">

        <h2 className="text-[22px] font-black tracking-wide text-white">
          NASE CENTER
        </h2>

        <p className="mt-0.5 text-[13px] text-white/45">
          Explore all NASE services
        </p>

      </div>

      {/* Grid */}

      <div className="grid grid-cols-3 gap-[6px]">

        {categories.map((item) => (

          <motion.button
            key={item.title}
            whileHover={{
              scale: 1.03,
              y: -2,
            }}
            whileTap={{
              scale: 0.98,
            }}
            transition={{
              duration: 0.22,
            }}
            className="
              group
              relative

              h-[155px]

              overflow-hidden
              rounded-[22px]

              border
              border-white/10

              bg-[#111111]

              shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_0_24px_rgba(255,255,255,0.03)]

              transition-all
              duration-300

              hover:border-white/20
              hover:shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_0_45px_rgba(255,255,255,0.07)]
            "
          >

            {/* Image */}

            <motion.div
              whileHover={{
                scale: 1.08,
              }}
              transition={{
                duration: 0.35,
              }}
              className="absolute inset-0"
            >

              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />

            </motion.div>

            {/* Dark Gradient */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black
                via-black/55
                to-transparent
              "
            />

            {/* Premium Glow */}

            <div
              className="
                absolute
                inset-0
                rounded-[22px]
                bg-gradient-to-b
                from-white/[0.05]
                via-transparent
                to-transparent
                opacity-80
                pointer-events-none
              "
            />
                {/* Title */}

            <div
              className="
                absolute
                bottom-3
                left-3
                right-3
                z-10
              "
            >
              <h3
                className="
                  whitespace-pre-line
                  text-left
                  text-[13px]
                  font-black
                  leading-4
                  tracking-wide
                  text-white
                "
              >
                {item.title}
              </h3>
            </div>

          </motion.button>

        ))}

      </div>

    </section>
  );
}        