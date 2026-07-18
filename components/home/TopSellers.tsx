"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, BadgeCheck, Star } from "lucide-react";

const sellers = [
  {
    id: 1,
    name: "NASE STORE",
    avatar: "/images/sellers/nase-avatar.jpg",
    banner: "/images/sellers/nase-banner.jpg",
    rating: 4.9,
    sales: "1.2K Sales",
    badge: "TOP",
    verified: true,
    buttonColor: "#3B82F6",
  },
  {
    id: 2,
    name: "PIXEL SHOP",
    avatar: "/images/sellers/pixel-avatar.jpg",
    banner: "/images/sellers/pixel-banner.jpg",
    rating: 5.0,
    sales: "980 Sales",
    badge: "ELITE",
    verified: true,
    buttonColor: "#10B981",
  },
  {
    id: 3,
    name: "NOVA MARKET",
    avatar: "/images/sellers/nova-avatar.jpg",
    banner: "/images/sellers/nova-banner.jpg",
    rating: 4.8,
    sales: "730 Sales",
    badge: "VERIFIED",
    verified: true,
    buttonColor: "#8B5CF6",
  },
  {
    id: 4,
    name: "BLACK HUB",
    avatar: "/images/sellers/black-avatar.jpg",
    banner: "/images/sellers/black-banner.jpg",
    rating: 4.9,
    sales: "2.4K Sales",
    badge: "TOP",
    verified: true,
    buttonColor: "#F97316",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.08,
      duration: 0.45,
      ease: "easeOut",
    },
  }),
};

export default function TopSellers() {
  return (<section className="w-full py-1">

  {/* Header */}

  <div className="mb-5 flex items-center justify-between">

    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/40">
        DISCOVER
      </p>

      <h2 className="mt-1 text-[26px] font-black tracking-tight text-white">
        TOP SELLERS
      </h2>
    </div>

    <button
      className="group flex items-center gap-1 text-[13px] font-semibold text-white/55 transition hover:text-white"
    >
      View All

      <ChevronRight
        size={16}
        className="transition group-hover:translate-x-1"
      />
    </button>

  </div>

  {/* Horizontal Cards */}

  <div
    className="
      -mx-5
      flex
      snap-x
      snap-mandatory
      gap-5
      overflow-x-auto
      px-5
      pb-2
      scrollbar-hide
    "
  >

    {sellers.map((seller, index) => (

      <motion.div
        key={seller.id}
        custom={index}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        whileTap={{ scale: 0.98 }}
        className="
          relative
          h-[285px]
          min-w-[310px]
          snap-start
          overflow-hidden
          rounded-[34px]
          border
          border-white/10
          bg-gradient-to-br
          from-[#1b1b1b]
          via-[#111111]
          to-[#070707]
          shadow-[0_30px_80px_rgba(0,0,0,.55)]
        "
      >

        {/* Banner */}

        <div className="relative h-[130px] w-full overflow-hidden">

          <Image
            src={seller.banner}
            alt={seller.name}
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        </div>

        {/* Avatar */}

        <div className="absolute left-6 top-[88px]">

          <div className="relative h-[78px] w-[78px] overflow-hidden rounded-full border-[4px] border-[#0d0d0d] shadow-xl">

            <Image
              src={seller.avatar}
              alt={seller.name}
              fill
              className="object-cover"
            />

          </div>

        </div>

        {/* Badge */}

        <div className="absolute right-5 top-5 rounded-full border border-white/10 bg-black/55 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-white backdrop-blur-xl">

          {seller.badge}

        </div>

        {/* Content */}

        <div className="px-6 pt-12">
                      <div className="flex items-center gap-2">

            <h3 className="text-[21px] font-black tracking-tight text-white">
              {seller.name}
            </h3>

            {seller.verified && (
              <BadgeCheck
                size={18}
                className="fill-sky-500 text-sky-400"
              />
            )}

          </div>

          <div className="mt-4 flex items-center justify-between">

            <div className="flex items-center gap-2">

              <Star
                size={16}
                className="fill-yellow-400 text-yellow-400"
              />

              <span className="text-[14px] font-semibold text-white">
                {seller.rating}
              </span>

            </div>

            <span className="text-[13px] font-medium text-white/55">
              {seller.sales}
            </span>

          </div>

          <motion.button
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              mt-7
              flex
              h-12
              w-full
              items-center
              justify-center
              rounded-2xl
              text-[14px]
              font-bold
              text-white
              shadow-lg
            "
            style={{
              background: seller.buttonColor,
            }}
          >
            View Shop
          </motion.button>

        </div>

      </motion.div>

    ))}

  </div>

</section>
  );
}
export default function TopSellers() {
  return (
    <div className="h-40 bg-red-500 text-white flex items-center justify-center rounded-3xl">
      TOP SELLERS
    </div>
  );
}