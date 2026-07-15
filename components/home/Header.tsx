"use client";

import Image from "next/image";
import { Headset } from "lucide-react";

import {
  IconButton,
  NotificationButton,
} from "@/components/ui";

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-2">
      {/* Profile */}
      <div className="flex min-w-0 items-center gap-3">
        <div className="relative shrink-0">
          <Image
            src="/images/avatar.png"
            alt="Naomi profile"
            width={44}
            height={44}
            priority
            className="h-11 w-11 rounded-full object-cover ring-1 ring-white/10"
          />

          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-black bg-emerald-400" />
        </div>

        <div className="min-w-0">
          <h1 className="truncate text-[21px] font-semibold leading-none tracking-[-0.65px] text-white">
            Hi, Naomi
          </h1>

          <p className="mt-1.5 text-[9px] font-medium uppercase tracking-[0.24em] text-white/35">
            Welcome!
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex shrink-0 items-center gap-2.5">
        <IconButton
          icon={Headset}
          label="Customer support"
          onClick={() => {
            // Support route or modal goes here.
          }}
        />

        <NotificationButton
          count={3}
          onClick={() => {
            // Notification route or panel goes here.
          }}
        />
      </div>
    </header>
  );
}