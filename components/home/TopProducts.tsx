"use client";

import Image from "next/image";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { useState } from "react";

const banners = [
  {
    title: "TELEGRAM SERVICES",
    image: "/images/categories/telegram.jpg",
  },
  {
    title: "PREMIUM • STARS • GIFTS",
    image: "/images/categories/premium.jpg",
  },
  {
    title: "NFT",
    image: "/images/categories/nft.jpg",
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
    title: "ADVERTISE SERVICES",
    image: "/images/categories/advertise.jpg",
  },
];

const DRAG_THRESHOLD = 55;

export default function NaseGivesYou() {
  const [current, setCurrent] = useState(0);

  const previous =
    current === 0 ? banners.length - 1 : current - 1;

  const next =
    current === banners.length - 1 ? 0 : current + 1;

  function paginate(direction: number) {
    if (direction > 0) {
      setCurrent((prev) =>
        prev === banners.length - 1 ? 0 : prev + 1
      );
    } else {
      setCurrent((prev) =>
        prev === 0 ? banners.length - 1 : prev - 1
      );
    }
  }

  function handleDragEnd(
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) {
    if (info.offset.x < -DRAG_THRESHOLD) {
      paginate(1);
    }

    if (info.offset.x > DRAG_THRESHOLD) {
      paginate(-1);
    }
  }

  return (
    <section className="mt-3 w-full">

      {/* Header */}

      <div className="mb-3 px-1">

        <h2
          className="
            text-[22px]
            font-black
            tracking-tight
            text-white
          "
        >
          NASE GIVES YOU
        </h2>

      </div>

      {/* Carousel */}

      <div className="relative overflow-hidden">

        {/* Left Preview */}

        <motion.div
          className="
            absolute
            left-[-48%]
            top-0
            z-0
            h-[190px]
            w-[82%]
            overflow-hidden
            rounded-[28px]
            opacity-50
          "
          animate={{
            scale: 0.92,
          }}
          transition={{
            duration: 0.45,
          }}
        >
          <Image
            src={banners[previous].image}
            alt={banners[previous].title}
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/30" />
        </motion.div>

        {/* Right Preview */}

        <motion.div
          className="
            absolute
            right-[-48%]
            top-0
            z-0
            h-[190px]
            w-[82%]
            overflow-hidden
            rounded-[28px]
            opacity-50
          "
          animate={{
            scale: 0.92,
          }}
          transition={{
            duration: 0.45,
          }}
        >
          <Image
            src={banners[next].image}
            alt={banners[next].title}
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
                {/* Main Banner */}

        <AnimatePresence mode="wait">

          <motion.div
            key={current}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.35}
            onDragEnd={handleDragEnd}
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
            }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 24,
            }}
            className="
              relative
              z-10
              mx-auto
              h-[190px]
              w-[82%]
              cursor-grab
              active:cursor-grabbing
            "
          >

            <div
              className="
                relative
                h-full
                overflow-hidden
                rounded-[28px]
                shadow-[0_22px_50px_rgba(0,0,0,.42)]
              "
            >

              <Image
                src={banners[current].image}
                alt={banners[current].title}
                fill
                priority
                className="object-cover"
              />

              {/* Bottom Gradient */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/90
                  via-black/20
                  to-transparent
                "
              />

              {/* Premium Overlay */}

              <div
                className="
                  absolute
                  inset-0
                  rounded-[28px]
                  border
                  border-white/10
                  bg-white/[0.02]
                "
              />

              {/* Title */}

              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  right-5
                "
              >

                <h3
                  className="
                    text-left
                    text-[18px]
                    font-black
                    uppercase
                    tracking-wide
                    text-white
                  "
                >
                  {banners[current].title}
                </h3>

              </div>

            </div>

          </motion.div>

        </AnimatePresence>

        {/* Indicator */}

        <div className="mt-5 flex items-center justify-center gap-2">

          {banners.map((_, index) => (

            <motion.div
              key={index}
              animate={{
                width: current === index ? 34 : 8,
                opacity: current === index ? 1 : 0.35,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                h-[6px]
                rounded-full
                bg-white
              "
            />

          ))}

        </div>

      </div>
          </section>
  );
}