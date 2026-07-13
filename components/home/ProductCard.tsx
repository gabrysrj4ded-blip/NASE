"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ProductCardProps {
  title: string;
  image: string;
  bestPrice: string;
  shops: number;
}

export default function ProductCard({
  title,
  image,
  bestPrice,
  shops,
}: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className="
        w-[182px]
        shrink-0
        snap-start
        overflow-hidden
        rounded-[30px]
        border
        border-white/5
        bg-gradient-to-b
        from-[#141414]
        via-[#101010]
        to-[#0B0B0B]
      "
    >
      {/* Product Image */}

      <div className="relative flex h-[150px] items-center justify-center">

        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className="object-contain select-none"
          draggable={false}
        />

      </div>

      {/* Content */}

      <div className="px-5 pb-6">

        <h3 className="line-clamp-1 text-[17px] font-semibold text-white">
          {title}
        </h3>

        <p className="mt-2 text-sm text-neutral-500">
          {shops} Shops
        </p>

        <div className="mt-5">

          <p className="text-[11px] uppercase tracking-[2px] text-neutral-500">
            Best Price
          </p>

          <p className="mt-1 text-[24px] font-semibold text-white">
            {bestPrice}
          </p>

        </div>

      </div>

    </motion.div>
  );
}