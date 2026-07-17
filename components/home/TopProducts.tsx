"use client";

import Image from "next/image";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { useState } from "react";

const services = [
  {
    title: "TELEGRAM SERVICES",
    description: "Everything you need for Telegram in one place.",
    image: "/images/categories/telegram.jpg",
  },
  {
    title: "PREMIUM STARS",
    description: "Premium, Stars and Gifts for your account.",
    image: "/images/categories/premium.jpg",
  },
  {
    title: "NFT",
    description: "Collect, trade and manage digital assets.",
    image: "/images/categories/nft.jpg",
  },
  {
    title: "AI & TOOLS",
    description: "Powerful AI tools for everyday work.",
    image: "/images/categories/ai.jpg",
  },
  {
    title: "FINANCE",
    description: "Payments, wallets and financial services.",
    image: "/images/categories/finance.jpg",
  },
  {
    title: "ADVERTISE",
    description: "Advertising and promotion inside NASE.",
    image: "/images/categories/advertise.jpg",
  },
];

const SWIPE_DISTANCE = 55;

export default function NaseGivesYou() {

  const [current, setCurrent] = useState(0);

  const previous =
    current === 0
      ? services.length - 1
      : current - 1;

  const next =
    current === services.length - 1
      ? 0
      : current + 1;

  function nextCard() {
    setCurrent((prev) =>
      prev === services.length - 1
        ? 0
        : prev + 1
    );
  }

  function previousCard() {
    setCurrent((prev) =>
      prev === 0
        ? services.length - 1
        : prev - 1
    );
  }

  function handleDragEnd(
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) {

    if (info.offset.y < -SWIPE_DISTANCE) {
      nextCard();
    }

    if (info.offset.y > SWIPE_DISTANCE) {
      previousCard();
    }
  }

  const currentItem = services[current];
  const previousItem = services[previous];
  const nextItem = services[next];

  return (

    <section className="mt-3">

      {/* Header */}

      <div className="mb-5">

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

      {/* Wheel */}

      <div
        className="
          relative
          flex
          items-center
          gap-5
        "
        style={{
          perspective: "1800px",
        }}
      >

        {/* LEFT WHEEL */}

        <div
          className="
            relative
            h-[390px]
            w-[145px]
            shrink-0
          "
        >
                  {/* Previous Card */}

          <motion.div
            className="absolute left-0 top-0 h-[120px] w-full overflow-hidden rounded-[26px]"
            animate={{
              y: 0,
              scale: 0.82,
              rotateX: -72,
              z: -180,
              opacity: 0.35,
              filter: "blur(1.5px)",
            }}
            transition={{
              type: "spring",
              stiffness: 140,
              damping: 18,
            }}
          >
            <Image
              src={previousItem.image}
              alt={previousItem.title}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Current Card */}

          <motion.div
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.22}
            onDragEnd={handleDragEnd}
            className="absolute left-0 top-[135px] z-30 h-[145px] w-full cursor-grab overflow-hidden rounded-[28px] active:cursor-grabbing"
            animate={{
              scale: 1,
              rotateX: 0,
              z: 80,
              opacity: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 170,
              damping: 18,
            }}
            style={{
              boxShadow:
                "0 28px 65px rgba(0,0,0,.45)",
            }}
          >
            <Image
              src={currentItem.image}
              alt={currentItem.title}
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
          </motion.div>

          {/* Next Card */}

          <motion.div
            className="absolute bottom-0 left-0 h-[120px] w-full overflow-hidden rounded-[26px]"
            animate={{
              scale: 0.82,
              rotateX: 72,
              z: -180,
              opacity: 0.35,
              filter: "blur(1.5px)",
            }}
            transition={{
              type: "spring",
              stiffness: 140,
              damping: 18,
            }}
          >
            <Image
              src={nextItem.image}
              alt={nextItem.title}
              fill
              className="object-cover"
            />
          </motion.div>

        </div>

        {/* Right Content */}

        <AnimatePresence mode="wait">

          <motion.div
            key={current}
            initial={{
              opacity: 0,
              x: 18,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -18,
            }}
            transition={{
              duration: 0.28,
            }}
            className="flex-1"
          >

            <h3
              className="
                text-[30px]
                font-black
                uppercase
                leading-[1]
                tracking-tight
                text-white
              "
            >
              {currentItem.title}
            </h3>

            <p
              className="
                mt-4
                max-w-[240px]
                text-[14px]
                leading-6
                text-zinc-400
              "
            >
              {currentItem.description}
            </p>

          </motion.div>

        </AnimatePresence>

      </div>

    </section>

  );

}  