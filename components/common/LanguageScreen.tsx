"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

type LanguageCode = "en" | "ru" | "fa";

const LANGUAGE_STORAGE_KEY = "nase-language";

const languages: {
  code: LanguageCode;
  title: string;
  flag: string;
}[] = [
  {
    code: "en",
    title: "English",
    flag: "🇬🇧",
  },
  {
    code: "ru",
    title: "Русский",
    flag: "🇷🇺",
  },
  {
    code: "fa",
    title: "فارسی",
    flag: "🇮🇷",
  },
];

export default function LanguageScreen() {
  const router = useRouter();

  const [selectedLanguage, setSelectedLanguage] =
    useState<LanguageCode | null>(null);

  const handleContinue = () => {
    if (!selectedLanguage) {
      return;
    }

    localStorage.setItem(LANGUAGE_STORAGE_KEY, selectedLanguage);

    router.replace("/welcome");
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="relative z-10 flex w-full max-w-sm flex-col items-center px-8"
      >
        <Image
          src="/images/logo.png"
          alt="NASE logo"
          width={110}
          height={110}
          priority
          className="pointer-events-none select-none"
        />

        <Image
          src="/images/svg/nase-wordmark.svg"
          alt="NASE"
          width={224}
          height={49}
          priority
          className="pointer-events-none mb-8 select-none"
        />

        <p className="mb-10 text-sm uppercase tracking-[4px] text-neutral-400">
          Choose your language
        </p>

        <div className="flex w-full flex-col gap-4">
          {languages.map((language) => {
            const isSelected = selectedLanguage === language.code;

            return (
              <motion.button
                key={language.code}
                type="button"
                onClick={() => setSelectedLanguage(language.code)}
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                animate={{
                  scale: isSelected ? 1.02 : 1,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                }}
                className={`
                  flex
                  items-center
                  justify-between
                  rounded-2xl
                  border
                  px-6
                  py-5
                  transition-colors
                  duration-300
                  ${
                    isSelected
                      ? "border-neutral-400 bg-neutral-800/80"
                      : "border-neutral-800 bg-neutral-900/40 hover:border-neutral-500 hover:bg-neutral-800/50"
                  }
                `}
              >
                <span className="text-3xl">{language.flag}</span>

                <span className="text-lg font-medium text-white">
                  {language.title}
                </span>

                <span
                  className={`
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-full
                    border
                    transition-all
                    duration-300
                    ${
                      isSelected
                        ? "border-white bg-white"
                        : "border-neutral-600 bg-transparent"
                    }
                  `}
                >
                  {isSelected && (
                    <span className="h-2 w-2 rounded-full bg-black" />
                  )}
                </span>
              </motion.button>
            );
          })}
        </div>

        <motion.button
          type="button"
          onClick={handleContinue}
          disabled={!selectedLanguage}
          whileHover={selectedLanguage ? { scale: 1.02 } : undefined}
          whileTap={selectedLanguage ? { scale: 0.98 } : undefined}
          className={`
            mt-8
            w-full
            rounded-2xl
            px-6
            py-4
            text-sm
            font-medium
            uppercase
            tracking-[3px]
            transition-all
            duration-300
            ${
              selectedLanguage
                ? "cursor-pointer bg-white text-black hover:bg-neutral-200"
                : "cursor-not-allowed bg-neutral-900 text-neutral-600"
            }
          `}
        >
          Continue
        </motion.button>
      </motion.div>
    </main>
  );
}