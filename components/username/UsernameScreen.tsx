"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, CircleHelp, Mars, Venus } from "lucide-react";
import { useRouter } from "next/navigation";

import UsernameInput from "./UsernameInput";
import { validateUsername } from "./validation";

type Gender = "male" | "female" | "private";

type GenderOption = {
  value: Gender;
  label: string;
  Icon: typeof Mars;
};

const USERNAME_STORAGE_KEY = "nase-username";
const GENDER_STORAGE_KEY = "nase-gender";

const genderOptions: GenderOption[] = [
  {
    value: "male",
    label: "Male",
    Icon: Mars,
  },
  {
    value: "female",
    label: "Female",
    Icon: Venus,
  },
  {
    value: "private",
    label: "Prefer not\n",
    Icon: CircleHelp,
  },
];

export default function UsernameScreen() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [gender, setGender] = useState<Gender | null>(null);
  const [checking, setChecking] = useState(false);
  const [available, setAvailable] = useState(false);
  const [message, setMessage] = useState("");

  const canContinue = useMemo(
    () => available && gender !== null,
    [available, gender],
  );

  useEffect(() => {
    const normalizedUsername = username.trim();

    if (!normalizedUsername) {
      setChecking(false);
      setAvailable(false);
      setMessage("");
      return;
    }

    setChecking(true);
    setAvailable(false);
    setMessage("");

    const timer = window.setTimeout(() => {
      const result = validateUsername(normalizedUsername);

      setChecking(false);
      setAvailable(result.valid);
      setMessage(result.message);
    }, 700);

    return () => window.clearTimeout(timer);
  }, [username]);

  const handleUsernameChange = (value: string) => {
    setUsername(value.toLowerCase());
  };

  const handleContinue = () => {
    if (!canContinue || !gender) {
      return;
    }

    localStorage.setItem(
      USERNAME_STORAGE_KEY,
      username.trim().toLowerCase(),
    );

    localStorage.setItem(GENDER_STORAGE_KEY, gender);

    router.replace("/home");
  };

  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black px-5 py-8 sm:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_52%)]" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.035),transparent_58%)]" />

      <motion.div
        aria-hidden="true"
        animate={{
          opacity: [0.3, 0.55, 0.3],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute top-[42%] h-72 w-72 rounded-full bg-white/[0.04] blur-[140px]"
      />

      <motion.section
        initial={{
          opacity: 0,
          y: 24,
          scale: 0.985,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="relative z-10 w-full max-w-md"
      >
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
            duration: 0.55,
            ease: "easeOut",
          }}
        >
          <h1 className="text-center text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
            Choose your username
          </h1>

          <p className="mt-4 text-center text-sm whitespace-nowrap text-neutral-400 sm:text-base">
  Your unique identity across the NASE ecosystem
</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.22,
            duration: 0.55,
            ease: "easeOut",
          }}
          className="mt-10"
        >
          <UsernameInput
            value={username}
            onChange={handleUsernameChange}
          />

          <div className="mt-4 flex min-h-8 items-center">
            <AnimatePresence mode="wait" initial={false}>
              {checking && (
                <motion.div
                  key="checking"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.035] px-3 py-1.5 backdrop-blur-xl"
                >
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="h-3.5 w-3.5 rounded-full border border-white/15 border-t-white/70"
                  />

                  <span className="text-xs text-neutral-400">
                    Checking availability
                  </span>
                </motion.div>
              )}

              {!checking && message && (
                <motion.div
                  key={`${available}-${message}`}
                  initial={{ opacity: 0, y: 4, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -4, scale: 0.98 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 backdrop-blur-xl ${
                    available
                      ? "border-white/12 bg-white/[0.06] text-white"
                      : "border-red-400/20 bg-red-400/[0.06] text-red-300"
                  }`}
                >
                  {available && (
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white text-black">
                      <Check size={10} strokeWidth={3} />
                    </span>
                  )}

                  <span className="text-xs">{message}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.34,
            duration: 0.55,
            ease: "easeOut",
          }}
          className="mt-7"
        >
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-medium text-neutral-300">
              Choose your gender
            </h2>

            <span className="text-[10px] uppercase tracking-[0.24em] text-neutral-600">
              Required
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {genderOptions.map(({ value, label, Icon }) => {
              const isSelected = gender === value;

              return (
                <motion.button
                  key={value}
                  type="button"
                  onClick={() => setGender(value)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  animate={{
                    borderColor: isSelected
                      ? "rgba(255,255,255,0.72)"
                      : "rgba(255,255,255,0.10)",
                    backgroundColor: isSelected
                      ? "rgba(255,255,255,0.09)"
                      : "rgba(255,255,255,0.025)",
                  }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="relative flex min-h-32 flex-col items-center justify-center rounded-[26px] border p-4 text-center shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl"
                >
                  <AnimatePresence>
                    {isSelected && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.7 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-white text-black"
                      >
                        <Check size={11} strokeWidth={3} />
                      </motion.span>
                    )}
                  </AnimatePresence>

                  <motion.span
                    animate={{ scale: isSelected ? 1.06 : 1 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035]"
                  >
                    <Icon
                      size={24}
                      strokeWidth={1.55}
                      className="text-white"
                    />
                  </motion.span>

                  <span className="mt-3 whitespace-pre-line text-xs leading-5 text-neutral-200">
                    {label}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        <motion.button
          type="button"
          onClick={handleContinue}
          disabled={!canContinue}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.46,
            duration: 0.55,
            ease: "easeOut",
          }}
          whileHover={canContinue ? { scale: 1.015 } : undefined}
          whileTap={canContinue ? { scale: 0.985 } : undefined}
          className={`mt-9 w-full rounded-3xl px-6 py-5 text-sm font-semibold uppercase tracking-[0.28em] transition-all duration-300 ${
            canContinue
              ? "cursor-pointer bg-white text-black shadow-[0_18px_70px_rgba(255,255,255,0.10)] hover:bg-neutral-200"
              : "cursor-not-allowed border border-white/8 bg-white/[0.035] text-neutral-600"
          }`}
        >
          Continue
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-7 text-center text-[10px] uppercase tracking-[0.52em] text-neutral-600"
        >
         PRIVATE • Secure • Yours
        </motion.p>
      </motion.section>
    </main>
  );
}