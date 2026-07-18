"use client";

import Image from "next/image";
import {
  motion,
  AnimatePresence,
  PanInfo,
} from "framer-motion";
import {
  ChevronUp,
} from "lucide-react";
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

  const [showHint, setShowHint] = useState(false);

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

      return () => clearTimeout(timeout);
    }

  }, []);

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

    if (info.offset.y < -DRAG_LIMIT) {
      nextCard();
    }

    if (info.offset.y > DRAG_LIMIT) {
      previousCard();
    }

  }

  const currentItem = services[current];
  const previousItem = services[previous];
  const nextItem = services[next];

  return (

    <section className="-mt-2">

      <h2
        className="
          mb-2
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
          h-[205px]
          w-full
          overflow-hidden
        "
        style={{
          perspective: "1700px",
        }}
      >
              {/* Previous Card */}

        <motion.div
          className="absolute left-0 right-0 top-0 z-10"
          animate={{
            y: 12,
            scale: 0.93,
            rotateX: -72,
            opacity: 0.45,
          }}
          transition={{
            duration: 0.45,
          }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <div className="relative mx-auto h-[150px] w-[97%] overflow-hidden rounded-[30px]">
            <Image
              src={previousItem.image}
              alt={previousItem.title}
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/55" />
          </div>
        </motion.div>

        {/* Current Card */}

        <motion.div
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={0.18}
          onDragEnd={handleDragEnd}
          className="absolute left-0 right-0 top-[36%] z-30 -translate-y-1/2"
          whileTap={{
            cursor: "grabbing",
          }}
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

            {/* First Open Hint */}

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

            {/* Vertical Indicator */}

            <div className="absolute right-4 top-1/2 flex -translate-y-1/2 flex-col gap-2">

              {services.map((_, index) => (

                <motion.div
                  key={index}
                  animate={{
                    height:
                      current === index
                        ? 14
                        : 7,
                    width:
                      current === index
                        ? 7
                        : 7,
                    opacity:
                      current === index
                        ? 1
                        : 0.3,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="rounded-full bg-white"
                />

              ))}

            </div>

            {/* Text */}

            <div className="absolute bottom-5 left-5 right-10">

              <h3 className="text-[25px] font-black uppercase leading-none text-white">
                {currentItem.title}
              </h3>

              <p className="mt-2 max-w-[82%] text-[13px] leading-5 text-white/80">
                {currentItem.description}
              </p>

            </div>

          </div>
        </motion.div>

        {/* Next Card */}

        <motion.div
          className="absolute bottom-0 left-0 right-0 z-10"
          animate={{
            y: -12,
            scale: 0.93,
            rotateX: 72,
            opacity: 0.45,
          }}
          transition={{
            duration: 0.45,
          }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <div className="relative mx-auto h-[150px] w-[97%] overflow-hidden rounded-[30px]">
            <Image
              src={nextItem.image}
              alt={nextItem.title}
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/55" />
          </div>
        </motion.div>

      </div>

    </section>

  );

}