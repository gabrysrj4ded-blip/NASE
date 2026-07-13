"use client";

import { motion } from "framer-motion";

export default function HeroBanner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="
      relative
      mt-8
      h-[285px]
      overflow-hidden
      rounded-[34px]
      border
      border-white/10
      bg-gradient-to-br
      from-[#161616]
      via-[#0B0B0B]
      to-black
      "
    >
      {/* Soft light */}

      <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/[0.03] blur-3xl" />

      <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-white/[0.015] blur-3xl" />

      {/* Content */}

      <div className="relative flex h-full flex-col justify-between p-8">

        <div>

          <p className="text-xs tracking-[5px] text-neutral-500">
            NASE
          </p>

          <h1 className="mt-5 text-[46px] font-semibold leading-[1.05] text-white">
            All your world.
            <br />
            One NASE.
          </h1>

          <p className="mt-6 max-w-[250px] text-[18px] leading-8 text-neutral-400">
            Everything you need,
            where you need it.
          </p>

        </div>

        <button
          className="
          w-fit
          rounded-full
          border
          border-white/10
          bg-gradient-to-b
          from-[#1A1A1A]
          to-[#0F0F0F]
          px-7
          py-4
          text-sm
          font-medium
          text-white
          transition
          hover:border-white/20
          "
        >
          Explore Now →
        </button>

      </div>
    </motion.section>
  );
}