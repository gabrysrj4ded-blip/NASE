"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const LANGUAGE_STORAGE_KEY = "nase-language";
const ONBOARDING_STORAGE_KEY = "nase-onboarding-completed";
const USERNAME_STORAGE_KEY = "nase-username";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);

      const hasCompletedOnboarding =
        localStorage.getItem(ONBOARDING_STORAGE_KEY) === "true";

      const savedUsername = localStorage.getItem(USERNAME_STORAGE_KEY);

      // First launch → Language
      if (!savedLanguage) {
        router.replace("/language");
        return;
      }

      // Language selected but onboarding not completed
      if (!hasCompletedOnboarding) {
        router.replace("/welcome");
        return;
      }

      // Onboarding completed but username not created
      if (!savedUsername) {
        router.replace("/username");
        return;
      }

      // Everything completed
      // TODO: Replace with "/home" when Home is ready
      router.replace("/home");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black">
      {/* Soft cinematic light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />

      {/* Secondary glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)] opacity-40" />

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Logo */}
        <motion.div
          animate={{
            y: [0, -6, 0],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="drop-shadow-[0_0_70px_rgba(255,255,255,0.20)]"
        >
          <Image
            src="/images/logo.png"
            alt="NASE Logo"
            width={230}
            height={230}
            priority
            className="pointer-events-none select-none"
          />
        </motion.div>

        {/* Wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.8,
            ease: "easeOut",
          }}
          className="mt-6"
        >
          <Image
            src="/images/svg/nase-wordmark.svg"
            alt="NASE"
            width={340}
            height={74}
            priority
            className="pointer-events-none select-none"
          />
        </motion.div>

        {/* Slogan */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.55 }}
          transition={{
            delay: 0.9,
            duration: 1,
            ease: "easeOut",
          }}
          className="mt-4 text-[11px] uppercase tracking-[9px] text-neutral-400"
        >
          ALL IN ONE
        </motion.p>

        {/* Loading */}
        <div className="mt-24 h-[4px] w-44 overflow-hidden rounded-full bg-neutral-900">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2.8,
              ease: "easeInOut",
            }}
            className="h-full rounded-full bg-gradient-to-r from-neutral-200 via-white to-neutral-300"
          />
        </div>
      </motion.div>
    </main>
  );
}