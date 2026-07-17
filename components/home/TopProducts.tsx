"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  {
    title: "TELEGRAM\nSERVICES",
    image: "/images/categories/telegram.jpg",
  },
  {
    title: "PREMIUM,\nSTARS & GIFTS",
    image: "/images/categories/premium.jpg",
  },
  {
    title: "NFT",
    image: "/images/categories/nft.jpg",
  },
  {
    title: "FINANCE",
    image: "/images/categories/finance.jpg",
  },
  {
    title: "AI & TOOLS",
    image: "/images/categories/ai.jpg",
  },
  {
    title: "ADVERTISE\nSERVICES",
    image: "/images/categories/advertise.jpg",
  },
];

export default function TopProducts() {
  return (
    <section className="mt-8">

      {/* Header */}

      <div className="mb-5">

        <h2 className="text-[22px] font-black tracking-wide text-white">
          NASE CENTER
        </h2>

        <p className="mt-1 text-[13px] text-white/45">
          Explore all NASE services
        </p>

      </div>

      {/* Cards */}

      <div className="grid grid-cols-2 gap-[6px]">

        {categories.map((item) => (

          <motion.button
            key={item.title}
            whileHover={{
              scale: 1.03,
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
              aspect-square
              overflow-hidden
              rounded-[24px]

              border
              border-white/10

              bg-[#111111]

              shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_0_30px_rgba(255,255,255,0.03)]

              transition-all
              duration-300

              hover:border-white/15
              hover:shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_0_45px_rgba(255,255,255,0.06)]
            "
          >

            {/* Background Image */}

            <motion.div
              className="absolute inset-0"
              whileHover={{
                scale: 1.08,
              }}
              transition={{
                duration: 0.35,
              }}
            >

              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />

            </motion.div>

            {/* Black Fade */}

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
                        {/* Glow */}

            <div
              className="
                absolute
                inset-0
                rounded-[24px]
                bg-gradient-to-b
                from-white/[0.04]
                via-transparent
                to-transparent
                opacity-70
                pointer-events-none
              "
            />

            {/* Title */}

            <div
              className="
                absolute
                bottom-4
                left-4
                right-4
                z-10
              "
            >
              <h3
                className="
                  whitespace-pre-line
                  text-left
                  text-[15px]
                  font-black
                  leading-5
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