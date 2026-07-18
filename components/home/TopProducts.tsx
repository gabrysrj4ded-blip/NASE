"use client";

import Image from "next/image";
import {
  motion,
  AnimatePresence,
  PanInfo,
} from "framer-motion";
import { ChevronUp } from "lucide-react";
import {
  useEffect,
  useState,
} from "react";

const HINT_KEY = "nase-wheel-hint";

const services = [
  {
    title: "TELEGRAM SERVICES",
    description: "Everything you need for Telegram in one place.",
    image: "/images/categories/telegram.jpg",
  },
  {
    title: "PREMIUM STARS",
    description: "Upgrade your account with Telegram Premium.",
    image: "/images/categories/premium.jpg",
  },
  {
    title: "NFT",
    description: "Collect and trade digital assets.",
    image: "/images/categories/nft.jpg",
  },
  {
    title: "AI TOOLS",
    description: "Powerful AI tools inside NASE.",
    image: "/images/categories/ai.jpg",
  },
  {
    title: "FINANCE",
    description: "Wallets, payments and finance.",
    image: "/images/categories/finance.jpg",
  },
  {
    title: "ADVERTISE",
    description: "Advertise your products inside NASE.",
    image: "/images/categories/advertise.jpg",
  },
];

const DRAG_LIMIT = 55;

export default function NaseGivesYou() {

  const [current, setCurrent] = useState(0);

  const [direction, setDirection] = useState(0);

  const [showHint, setShowHint] =
    useState(false);

  useEffect(() => {

    const viewed =
      localStorage.getItem(HINT_KEY);

    if (!viewed) {

      setShowHint(true);

      localStorage.setItem(
        HINT_KEY,
        "true"
      );

      const timeout =
        setTimeout(() => {

          setShowHint(false);

        }, 3500);

      return () =>
        clearTimeout(timeout);

    }

  }, []);

  function nextCard() {

    setDirection(-1);

    setCurrent((prev) =>
      prev === services.length - 1
        ? 0
        : prev + 1
    );

  }

  function previousCard() {

    setDirection(1);

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

    if (info.offset.y < -DRAG_LIMIT) {
      nextCard();
    }

    if (info.offset.y > DRAG_LIMIT) {
      previousCard();
    }

  }

  const currentItem =
    services[current];

  const cardVariants = {

    enter: (direction: number) => ({
      y:
        direction > 0
          ? -70
          : 70,
      opacity: 0,
      scale: 0.96,
    }),

    center: {
      y: 0,
      opacity: 1,
      scale: 1,
    },

    exit: (direction: number) => ({
      y:
        direction > 0
          ? 70
          : -70,
      opacity: 0,
      scale: 0.96,
    }),

  };
    return (

    <section className="-mt-2">

      <h2
        className="
          mb-[2px]
          translate-y-[3px]
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
          h-[190px]
          w-full
          overflow-hidden
        "
      >

        <AnimatePresence
          custom={direction}
          mode="wait"
        >

          <motion.div
            key={current}
            custom={direction}
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.32,
              ease: [0.22, 1, 0.36, 1],
            }}
            drag="y"
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={0.18}
            onDragEnd={handleDragEnd}
            whileTap={{
              cursor: "grabbing",
            }}
            className="absolute inset-0"
          >

            <div
              className="
                relative
                mx-auto
                h-[170px]
                w-[98%]
                overflow-hidden
                rounded-[32px]
              "
              style={{
                boxShadow:
                  "0 24px 70px rgba(0,0,0,.55)",
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

              <AnimatePresence>

                {showHint && (

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: [-2, -12, -2],
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.9,
                      repeat: 3,
                    }}
                    className="absolute left-1/2 top-5 -translate-x-1/2"
                  >

                    <ChevronUp
                      size={26}
                      strokeWidth={1.8}
                      className="text-white"
                    />

                  </motion.div>

                )}

              </AnimatePresence>

              <div className="absolute right-4 top-1/2 flex -translate-y-1/2 flex-col gap-2">

                {services.map((_, index) => (

                  <motion.div
                    key={index}
                    animate={{
                      height:
                        current === index
                          ? 14
                          : 7,
                      opacity:
                        current === index
                          ? 1
                          : 0.3,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="w-[7px] rounded-full bg-white"
                  />

                ))}

              </div>

              <div className="absolute bottom-5 left-3 right-10">

                <h3 className="text-[25px] font-black uppercase leading-none text-white">
                  {currentItem.title}
                </h3>

                <p className="mt-2 max-w-[88%] text-[13px] leading-5 text-white/80">
                  {currentItem.description}
                </p>

              </div>

            </div>

          </motion.div>

        </AnimatePresence>

      </div>

    </section>

  );

}
