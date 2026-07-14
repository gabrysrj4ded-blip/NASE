"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { useRouter } from "next/navigation";
import FloatingIcons from "./FloatingIcons";
import {
  Bell,
  Bot,
  CircleHelp,
  CreditCard,
  Headphones,
  Heart,
  MessageCircle,
  Package,
  Search,
  Settings,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Store,
  UserRound,
  Users,
  Wallet,
  Wifi,
} from "lucide-react";

import { onboardingSlides } from "@/components/onboarding/data";
import OnboardingCard from "@/components/onboarding/OnboardingCard";

const ONBOARDING_STORAGE_KEY = "nase-onboarding-completed";

const SWIPE_THRESHOLD = 70;

const floatingIcons = [
  // ===== TOP =====
  { Icon: Bot, x: "50%", y: "6%", delay: 0.10, size: 78 },
  { Icon: ShoppingBag, x: "32%", y: "10%", delay: 0.20, size: 66 },
  { Icon: Wallet, x: "68%", y: "10%", delay: 0.30, size: 68 },
  { Icon: Search, x: "40%", y: "16%", delay: 0.40, size: 48 },
  { Icon: Users, x: "60%", y: "16%", delay: 0.50, size: 50 },

  // ===== LEFT =====
  { Icon: Store, x: "16%", y: "28%", delay: 0.25, size: 58 },
  { Icon: CreditCard, x: "12%", y: "44%", delay: 0.35, size: 52 },
  { Icon: ShieldCheck, x: "16%", y: "60%", delay: 0.45, size: 60 },
  { Icon: Settings, x: "22%", y: "78%", delay: 0.55, size: 48 },

  // ===== RIGHT =====
  { Icon: MessageCircle, x: "84%", y: "28%", delay: 0.25, size: 58 },
  { Icon: Bell, x: "88%", y: "44%", delay: 0.35, size: 52 },
  { Icon: Headphones, x: "84%", y: "60%", delay: 0.45, size: 60 },
  { Icon: UserRound, x: "78%", y: "78%", delay: 0.55, size: 48 },

  // ===== BOTTOM =====
  { Icon: Heart, x: "34%", y: "88%", delay: 0.65, size: 46 },
  { Icon: Package, x: "50%", y: "92%", delay: 0.75, size: 56 },
  { Icon: Wifi, x: "66%", y: "88%", delay: 0.85, size: 46 },

  // ===== EXTRA =====
  { Icon: Sparkles, x: "26%", y: "20%", delay: 0.90, size: 40 },
  { Icon: CircleHelp, x: "74%", y: "20%", delay: 1.00, size: 40 },
  { Icon: ShoppingBag, x: "28%", y: "72%", delay: 1.10, size: 40 },
  { Icon: Wallet, x: "72%", y: "72%", delay: 1.20, size: 40 },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 90 : -90,
    opacity: 0,
    scale: 0.96,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -90 : 90,
    opacity: 0,
    scale: 0.96,
  }),
};

export default function WelcomeScreen() {
  const router = useRouter();

  const [[activeIndex, direction], setSlide] = useState<[number, number]>([0, 0]);
  const [isSkipped, setIsSkipped] = useState(false);

  const isLastSlide = activeIndex === onboardingSlides.length - 1;
  const canContinue = isSkipped || isLastSlide;
  const activeSlide = onboardingSlides[activeIndex];

  const floatingItems = useMemo(() => floatingIcons, []);

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
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black px-4 py-6 sm:px-6">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_48%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.045),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.018),transparent_30%,rgba(255,255,255,0.012))]" />

      {/* Floating service icons */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {floatingItems.map(({ Icon, x, y, delay, size }, index) => (
          <motion.div
            key={`${x}-${y}-${index}`}
            initial={{ opacity: 0, scale: 0.75, y: 10 }}
            animate={{
              opacity: [0.14, 0.34, 0.14],
scale: [1, 1.08, 1],
y: [0, -12, 0],
rotate: [-4, 4, -4],
            }}
            transition={{
              delay,
              duration: 5 + index * 0.25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: x,
              top: y,
              width: size,
              height: size,
            }}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[26px] border border-white/10 bg-white/[0.05] shadow-[0_25px_90px_rgba(255,255,255,0.08)] backdrop-blur-2xl"
          >
            <Icon
              className="h-[42%] w-[42%] text-white"
              strokeWidth={1.35}
            />
          </motion.div>
        ))}
      </div>

      {/* Readability layers */}
      <div className="pointer-events-none absolute inset-0 bg-black/25" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black via-black/55 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/55 to-transparent" />

      {/* Skip */}
      <motion.button
        type="button"
        onClick={handleSkip}
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
        className="absolute right-5 top-5 z-30 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-300 backdrop-blur-xl transition-colors duration-300 hover:bg-white/[0.08] sm:right-7 sm:top-7"
      >
        Skip
      </motion.button>

      {/* Centered onboarding stage */}
      <section className="relative z-20 flex w-full max-w-[430px] flex-col items-center justify-center">
        <div className="relative flex w-full items-center justify-center">
          {/* Neighbor card hints */}
          {activeIndex > 0 && (
            <div className="pointer-events-none absolute left-[-10%] top-1/2 hidden h-[76%] w-[28%] -translate-y-1/2 rounded-[30px] border border-white/8 bg-white/[0.025] opacity-40 blur-[0.2px] min-[420px]:block" />
          )}

          {!isLastSlide && (
            <div className="pointer-events-none absolute right-[-10%] top-1/2 hidden h-[76%] w-[28%] -translate-y-1/2 rounded-[30px] border border-white/8 bg-white/[0.025] opacity-40 blur-[0.2px] min-[420px]:block" />
          )}

          <div className="relative w-full overflow-hidden rounded-[36px]">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={activeSlide.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 280, damping: 30 },
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.25, ease: "easeOut" },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.16}
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

        {/* Pagination */}
        <div className="mt-6 flex items-center justify-center gap-2">
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
                className="flex h-5 items-center justify-center"
              >
                <motion.span
                  animate={{
                    width: isActive ? 24 : 6,
                    opacity: isActive ? 1 : 0.35,
                  }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="block h-1.5 rounded-full bg-white"
                />
              </button>
            );
          })}
        </div>

        {/* Continue */}
        <motion.button
          type="button"
          onClick={handleContinue}
          disabled={!canContinue}
          whileHover={canContinue ? { scale: 1.015 } : undefined}
          whileTap={canContinue ? { scale: 0.985 } : undefined}
          animate={{
            opacity: canContinue ? 1 : 0.32,
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className={`mt-6 w-full rounded-2xl px-6 py-4 text-sm font-semibold uppercase tracking-[0.28em] transition-colors duration-300 ${
            canContinue
              ? "cursor-pointer bg-white text-black hover:bg-neutral-200"
              : "cursor-not-allowed border border-white/8 bg-white/[0.04] text-neutral-500"
          }`}
        >
          Continue
        </motion.button>

        <p className="mt-4 text-center text-[10px] uppercase tracking-[0.48em] text-neutral-600">
          Swipe to explore
        </p>
      </section>
    </main>
  );
}