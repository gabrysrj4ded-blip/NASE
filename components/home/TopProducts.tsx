"use client";

import Image from "next/image";
import {
  motion,
  PanInfo,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useState } from "react";

type Service = {
  title: string;
  description: string;
  image: string;
};

const services: Service[] = [
  {
    title: "TELEGRAM SERVICES",
    description: "Everything you need for Telegram in one place.",
    image: "/images/categories/telegram.jpg",
  },
  {
    title: "PREMIUM STARS & GIFTS",
    description: "Upgrade your account with Stars and Gifts.",
    image: "/images/categories/premium.jpg",
  },
  {
    title: "NFT",
    description: "Collect and trade digital assets.",
    image: "/images/categories/nft.jpg",
  },
  {
    title: "AI & TOOLS",
    description: "Powerful AI tools for everyday work.",
    image: "/images/categories/ai.jpg",
  },
  {
    title: "FINANCE",
    description: "Wallets, payments and finance.",
    image: "/images/categories/finance.jpg",
  },
  {
    title: "ADVERTISE",
    description: "Promote your products inside NASE.",
    image: "/images/categories/advertise.jpg",
  },
];

const DRAG_LIMIT = 55;

export default function NaseGivesYou() {
  const [current, setCurrent] = useState(0);

  const dragY = useMotionValue(0);

  const previous =
    current === 0
      ? services.length - 1
      : current - 1;

  const next =
    current === services.length - 1
      ? 0
      : current + 1;

  function nextCard() {
    setCurrent((v) =>
      v === services.length - 1 ? 0 : v + 1
    );
  }

  function previousCard() {
    setCurrent((v) =>
      v === 0 ? services.length - 1 : v - 1
    );
  }

  function handleDragEnd(
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) {
    if (info.offset.y < -DRAG_LIMIT) {
      nextCard();
      return;
    }

    if (info.offset.y > DRAG_LIMIT) {
      previousCard();
      return;
    }

    dragY.set(0);
  }

  const currentItem = services[current];
  const previousItem = services[previous];
  const nextItem = services[next];

  return (
    <section className="mt-4">

      <h2
        className="
          mb-3
          text-[22px]
          font-black
          tracking-tight
          text-white
        "
      >
        NASE GIVES YOU
      </h2>

      <div
        className="
          relative
          h-[235px]
          w-full
          overflow-hidden
        "
        style={{
          perspective: "1700px",
        }}
      >
              {/* Previous */}

        <motion.div
          className="absolute left-0 top-0 z-10 w-full"
          animate={{
            y: 18,
            scale: 0.92,
            rotateX: -70,
            opacity: 0.35,
          }}
          transition={{
            type: "spring",
            stiffness: 170,
            damping: 18,
          }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <div className="relative mx-auto h-[155px] w-[96%] overflow-hidden rounded-[28px]">
            <Image
              src={previousItem.image}
              alt={previousItem.title}
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/45" />
          </div>
        </motion.div>

        {/* Current */}

        <motion.div
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={0.16}
          onDragEnd={handleDragEnd}
          className="absolute left-0 top-1/2 z-30 w-full -translate-y-1/2 cursor-grab active:cursor-grabbing"
          style={{
            y: dragY,
            transformStyle: "preserve-3d",
          }}
          whileTap={{
            cursor: "grabbing",
          }}
        >
          <div
            className="
              relative
              mx-auto
              h-[175px]
              w-[98%]
              overflow-hidden
              rounded-[30px]
            "
            style={{
              transform: "translateZ(90px)",
              boxShadow:
                "0 28px 80px rgba(0,0,0,.55)",
            }}
          >
            <Image
              src={currentItem.image}
              alt={currentItem.title}
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            <div className="absolute bottom-5 left-5 right-5">

              <h3
                className="
                  text-[26px]
                  font-black
                  uppercase
                  leading-none
                  tracking-tight
                  text-white
                "
              >
                {currentItem.title}
              </h3>

              <p
                className="
                  mt-2
                  max-w-[80%]
                  text-[13px]
                  leading-5
                  text-zinc-300
                "
              >
                {currentItem.description}
              </p>

            </div>
          </div>
        </motion.div>

        {/* Next */}

        <motion.div
          className="absolute bottom-0 left-0 z-10 w-full"
          animate={{
            y: -18,
            scale: 0.92,
            rotateX: 70,
            opacity: 0.35,
          }}
          transition={{
            type: "spring",
            stiffness: 170,
            damping: 18,
          }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <div className="relative mx-auto h-[155px] w-[96%] overflow-hidden rounded-[28px]">
            <Image
              src={nextItem.image}
              alt={nextItem.title}
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/45" />
          </div>
        </motion.div>

      </div>

    </section>
  );
}