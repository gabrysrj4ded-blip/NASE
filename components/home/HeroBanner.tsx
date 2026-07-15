"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroBanner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      className="
        relative
        mt-2
        aspect-[16/9]
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        shadow-[0_25px_70px_rgba(0,0,0,.45)]
      "
    >
      <Image
        src="/images/banner.jpg"
        alt="NASE Banner"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
    </motion.section>
  );
}