"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type Props = {
  badge: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  active: boolean;
};

export default function OnboardingCard({
  badge,
  title,
  description,
  Icon,
  active,
}: Props) {
  return (
    <motion.div
      animate={{
        scale: active ? 1 : 0.92,
        opacity: active ? 1 : 0.45,
      }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
      className="
      w-full
      rounded-[34px]
      border
      border-white/10
      bg-white/[0.045]
      backdrop-blur-3xl
      px-8
      py-10
      shadow-[0_40px_120px_rgba(0,0,0,.65)]
      "
    >
      {/* Badge */}

      <div
        className="
        inline-flex
        rounded-full
        border
        border-white/10
        bg-white/5
        px-4
        py-2
        text-[11px]
        uppercase
        tracking-[3px]
        text-neutral-300
        "
      >
        {badge}
      </div>

      {/* Icon */}

      <div
        className="
        mt-8
        flex
        h-20
        w-20
        items-center
        justify-center
        rounded-[26px]
        border
        border-white/10
        bg-white/5
        "
      >
        <Icon
          size={38}
          strokeWidth={1.6}
          className="text-white"
        />
      </div>

      {/* Title */}

      <h1
        className="
        mt-10
        whitespace-pre-line
        text-4xl
        font-semibold
        leading-tight
        tracking-[-1px]
        text-white
        "
      >
        {title}
      </h1>

      {/* Description */}

      <p
        className="
        mt-6
        text-[15px]
        leading-8
        text-neutral-400
        "
      >
        {description}
      </p>
    </motion.div>
  );
}