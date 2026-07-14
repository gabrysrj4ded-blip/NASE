"use client";

import { useState } from "react";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Bot,
  Gift,
  Headphones,
  MessageCircle,
  Package,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Wallet,
} from "lucide-react";

import { onboardingSlides } from "@/components/onboarding/data";
import OnboardingCard from "@/components/onboarding/OnboardingCard";

const ONBOARDING_STORAGE_KEY = "nase-onboarding-completed";
const SWIPE_THRESHOLD = 70;

const serviceTiles = [
  {
    id: "wallet",
    label: "Wallet",
    Icon: Wallet,
    left: "7%",
    top: "18%",
    delay: 0,
    duration: 8.5,
    rotate: -2,
  },
  {
    id: "market",
    label: "Market",
    Icon: ShoppingBag,
    left: "76%",
    top: "14%",
    delay: 0.4,
    duration: 9.5,
    rotate: 2,
  },
  {
    id: "ai",
    label: "AI",
    Icon: Bot,
    left: "42%",
    top: "5%",
    delay: 0.8,
    duration: 10,
    rotate: -1,
  },
  {
    id: "chat",
    label: "Chat",
    Icon: MessageCircle,
    left: "84%",
    top: "35%",
    delay: 0.2,
    duration: 8,
    rotate: 2,
  },
  {
    id: "search",
    label: "Search",
    Icon: Search,
    left: "4%",
    top: "40%",
    delay: 0.65,
    duration: 9,
    rotate: -2,
  },
  {
    id: "gifts",
    label: "Gifts",
    Icon: Gift,
    left: "11%",
    top: "73%",
    delay: 0.35,
    duration: 9.2,
    rotate: 2,
  },
  {
    id: "orders",
    label: "Orders",
    Icon: Package,
    left: "72%",
    top: "78%",
    delay: 0.9,
    duration: 10.2,
    rotate: -2,
  },
  {
    id: "support",
    label: "Support",
    Icon: Headphones,
    left: "84%",
    top: "58%",
    delay: 0.55,
    duration: 8.8,
    rotate: 2,
  },
  {
    id: "security",
    label: "Secure",
    Icon: ShieldCheck,
    left: "27%",
    top: "88%",
    delay: 0.15,
    duration: 9.8,
    rotate: -1,
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
    scale: 0.975,
    filter: "blur(5px)",
  }),

  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
  },

  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
    scale: 0.975,
    filter: "blur(5px)",
  }),
};

type ServiceTileProps = {
  label: string;
  Icon: typeof Wallet;
  left: string;
  top: string;
  delay: number;
  duration: number;
  rotate: number;
};

function ServiceTile({
  label,
  Icon,
  left,
  top,
  delay,
  duration,
  rotate,
}: ServiceTileProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 8,
        scale: 0.92,
      }}
      animate={{
        opacity: 1,
        y: [0, -7, 0],
        rotate: [rotate, rotate * -1, rotate],
        scale: [1, 1.025, 1],
      }}
      transition={{
        opacity: {
          delay: 0.15 + delay,
          duration: 0.7,
          ease: "easeOut",
        },
        y: {
          delay,
          duration,
          repeat: Infinity,
          ease: "easeInOut",
        },
        rotate: {
          delay,
          duration: duration + 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        },
        scale: {
          delay,
          duration: duration + 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      style={{ left, top }}
      className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
    >
      <div className="relative flex h-[52px] w-[52px] items-center justify-center overflow-hidden rounded-[17px] border border-white/[0.09] bg-gradient-to-b from-white/[0.105] via-white/[0.055] to-white/[0.025] shadow-[0_14px_44px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl sm:h-[58px] sm:w-[58px] sm:rounded-[19px]">
        <div className="pointer-events-none absolute inset-x-2 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

        <div className="pointer-events-none absolute left-1/2 top-0 h-8 w-10 -translate-x-1/2 rounded-full bg-white/[0.06] blur-xl" />

        <Icon
          className="relative z-10 h-[46%] w-[46%] text-white/90 drop-shadow-[0_0_9px_rgba(255,255,255,0.22)]"
          strokeWidth={1.65}
        />
      </div>

      <span className="text-[8px] font-medium tracking-[0.03em] text-white/45 sm:text-[9px]">
        {label}
      </span>
    </motion.div>
  );
}

export default function WelcomeScreen() {
  const router = useRouter();

  const [[activeIndex, direction], setSlide] = useState<[number, number]>([
    0,
    0,
  ]);

  const [isSkipped, setIsSkipped] = useState(false);

  const isLastSlide = activeIndex === onboardingSlides.length - 1;
  const canContinue = isSkipped || isLastSlide;
  const activeSlide = onboardingSlides[activeIndex];

  const goToSlide = (nextIndex: number, nextDirection: number) => {
    if (nextIndex < 0 || nextIndex >= onboardingSlides.length) {
      return;
    }

    setSlide([nextIndex, nextDirection]);
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const swipeDistance = info.offset.x;
    const swipeVelocity = info.velocity.x;

    if (
      (swipeDistance < -SWIPE_THRESHOLD || swipeVelocity < -500) &&
      !isLastSlide
    ) {
      goToSlide(activeIndex + 1, 1);
      return;
    }

    if (
      (swipeDistance > SWIPE_THRESHOLD || swipeVelocity > 500) &&
      activeIndex > 0
    ) {
      goToSlide(activeIndex - 1, -1);
    }
  };

  const handleBack = () => {
    router.push("/language");
  };

  const handleSkip = () => {
    localStorage.setItem(ONBOARDING_STORAGE_KEY, "true");

    setIsSkipped(true);
    setSlide([onboardingSlides.length - 1, 1]);
  };

  const handleContinue = () => {
    if (!canContinue) {
      return;
    }

    localStorage.setItem(ONBOARDING_STORAGE_KEY, "true");
    router.replace("/username");
  };

  return (
    <main className="relative isolate flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-black px-4 pb-6 pt-20 sm:px-6 sm:pb-8 sm:pt-24">
      {/* Deep black base */}
      <div className="pointer-events-none absolute inset-0 -z-30 bg-black" />

      {/* Moving ambient light */}
      <motion.div
        aria-hidden="true"
        animate={{
          x: ["-16%", "12%", "-16%"],
          y: ["-8%", "8%", "-8%"],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-[-18%] top-[-10%] -z-20 h-[54vh] w-[54vh] rounded-full bg-white/[0.045] blur-[100px]"
      />

      <motion.div
        aria-hidden="true"
        animate={{
          x: ["14%", "-10%", "14%"],
          y: ["12%", "-8%", "12%"],
          scale: [1.08, 0.96, 1.08],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-[-20%] right-[-22%] -z-20 h-[60vh] w-[60vh] rounded-full bg-white/[0.035] blur-[120px]"
      />

      {/* Soft central glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-20 h-[62vh] w-[88vw] max-w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-[90px]" />

      {/* Fine texture */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.13] [background-image:radial-gradient(rgba(255,255,255,0.22)_0.55px,transparent_0.55px)] [background-size:7px_7px]" />

      {/* Floating application icons */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-[5] overflow-hidden"
      >
        {serviceTiles.map((tile) => (
          <ServiceTile
            key={tile.id}
            label={tile.label}
            Icon={tile.Icon}
            left={tile.left}
            top={tile.top}
            delay={tile.delay}
            duration={tile.duration}
            rotate={tile.rotate}
          />
        ))}
      </div>

      {/* Readability overlays */}
      <div className="pointer-events-none absolute inset-0 -z-[4] bg-black/28" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-[3] h-40 bg-gradient-to-b from-black via-black/75 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-[3] h-44 bg-gradient-to-t from-black via-black/80 to-transparent" />

      {/* Header controls */}
      <motion.button
        type="button"
        onClick={handleBack}
        aria-label="Back to language selection"
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.15,
          duration: 0.5,
          ease: "easeOut",
        }}
        className="absolute left-4 top-5 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.09] bg-white/[0.045] text-white/75 shadow-[0_12px_35px_rgba(0,0,0,0.55)] backdrop-blur-xl transition-colors duration-300 hover:bg-white/[0.08] hover:text-white sm:left-6 sm:top-7"
      >
        <ArrowLeft className="h-[17px] w-[17px]" strokeWidth={1.7} />
      </motion.button>

      <motion.button
        type="button"
        onClick={handleSkip}
        initial={{ opacity: 0, x: 8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.5,
          ease: "easeOut",
        }}
        className="absolute right-4 top-5 z-40 rounded-full border border-white/[0.09] bg-white/[0.045] px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.25em] text-white/65 shadow-[0_12px_35px_rgba(0,0,0,0.55)] backdrop-blur-xl transition-colors duration-300 hover:bg-white/[0.08] hover:text-white sm:right-6 sm:top-7"
      >
        Skip
      </motion.button>

      {/* Main onboarding area */}
      <section className="relative z-20 flex w-full max-w-[420px] flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative w-full"
        >
          {/* Top status */}
          <div className="mb-4 flex items-center justify-center gap-2">
            <Sparkles
              className="h-3.5 w-3.5 text-white/35"
              strokeWidth={1.5}
            />

            <span className="text-[9px] font-medium uppercase tracking-[0.38em] text-white/35">
              All in one
            </span>
          </div>

          {/* Neighbor card previews */}
          {activeIndex > 0 && (
            <div className="pointer-events-none absolute left-[-5%] top-[55%] hidden h-[70%] w-[22%] -translate-y-1/2 rounded-[30px] border border-white/[0.055] bg-white/[0.018] opacity-55 blur-[0.3px] min-[410px]:block" />
          )}

          {!isLastSlide && (
            <div className="pointer-events-none absolute right-[-5%] top-[55%] hidden h-[70%] w-[22%] -translate-y-1/2 rounded-[30px] border border-white/[0.055] bg-white/[0.018] opacity-55 blur-[0.3px] min-[410px]:block" />
          )}

          {/* Main card frame */}
          <div className="relative overflow-hidden rounded-[34px] border border-white/[0.085] bg-gradient-to-b from-white/[0.07] via-white/[0.025] to-white/[0.018] p-[1px] shadow-[0_32px_100px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-[24px]">
            <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            <div className="relative h-[520px] sm:h-[560px] w-full overflow-hidden rounded-[33px] bg-black/35">
              <AnimatePresence
                initial={false}
                custom={direction}
                mode="wait"
              >
                <motion.div
                  key={activeSlide.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: {
                      type: "spring",
                      stiffness: 300,
                      damping: 32,
                      mass: 0.82,
                    },
                    opacity: {
                      duration: 0.18,
                    },
                    scale: {
                      duration: 0.25,
                      ease: "easeOut",
                    },
                    filter: {
                      duration: 0.2,
                    },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.14}
                  onDragEnd={handleDragEnd}
                  className="cursor-grab touch-pan-y active:cursor-grabbing"
                >
                  <OnboardingCard
                    badge={activeSlide.badge}
                    title={activeSlide.title}
                    description={activeSlide.description}
                    Icon={activeSlide.icon}
                    active
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Pagination */}
        <div className="mt-5 flex h-6 items-center justify-center gap-2">
          {onboardingSlides.map((slide, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={slide.id}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() =>
                  goToSlide(index, index > activeIndex ? 1 : -1)
                }
                className="flex h-6 items-center justify-center"
              >
                <motion.span
                  animate={{
                    width: isActive ? 26 : 6,
                    opacity: isActive ? 0.95 : 0.25,
                  }}
                  transition={{
                    duration: 0.28,
                    ease: "easeOut",
                  }}
                  className="block h-1.5 rounded-full bg-white"
                />
              </button>
            );
          })}
        </div>

        {/* Continue button */}
        <motion.button
          type="button"
          onClick={handleContinue}
          disabled={!canContinue}
          whileHover={canContinue ? { scale: 1.012 } : undefined}
          whileTap={canContinue ? { scale: 0.985 } : undefined}
          animate={{
            opacity: canContinue ? 1 : 0.38,
          }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
          className={`group relative mt-4 w-full overflow-hidden rounded-[18px] px-6 py-[17px] text-[12px] font-semibold uppercase tracking-[0.3em] transition-colors duration-300 ${
            canContinue
              ? "cursor-pointer bg-white text-black shadow-[0_18px_60px_rgba(255,255,255,0.12)] hover:bg-neutral-200"
              : "cursor-not-allowed border border-white/[0.07] bg-white/[0.035] text-white/30"
          }`}
        >
          {canContinue && (
            <span className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent" />
          )}

          <span className="relative z-10">Continue</span>
        </motion.button>

        {/* Swipe guide */}
        <div className="mt-4 flex items-center justify-center gap-3">
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-white/15" />

          <p className="text-center text-[8px] font-medium uppercase tracking-[0.45em] text-white/25">
            Swipe to explore
          </p>

          <div className="h-px w-8 bg-gradient-to-l from-transparent to-white/15" />
        </div>
      </section>
    </main>
  );
}