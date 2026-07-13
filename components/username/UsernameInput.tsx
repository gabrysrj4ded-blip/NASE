"use client";

import { useEffect, useState } from "react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const placeholders = [
  "alex",
  "shery",
  "designer",
  "traveler",
  "gamer",
  "developer",
];

export default function UsernameInput({
  value,
  onChange,
}: Props) {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    if (value.length > 0) return;

    const timer = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 2200);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholders[placeholderIndex]}
      autoComplete="off"
      spellCheck={false}
      className="
      w-full
      rounded-3xl
      border
      border-white/10
      bg-white/[0.04]
      px-7
      py-5
      text-lg
      text-white
      outline-none
      backdrop-blur-xl
      transition-all
      duration-300
      placeholder:text-neutral-500
      focus:border-white/30
      focus:bg-white/[0.06]
      focus:shadow-[0_0_35px_rgba(255,255,255,0.08)]
      "
    />
  );
}