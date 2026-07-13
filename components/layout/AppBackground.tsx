"use client";

import { ReactNode } from "react";

interface AppBackgroundProps {
  children: ReactNode;
}

export default function AppBackground({
  children,
}: AppBackgroundProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Main Background */}
      <div className="absolute inset-0 bg-black" />

      {/* Top Soft Light */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.035),transparent_55%)]" />

      {/* Center Depth */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.018),transparent_72%)]" />

      {/* Bottom Vignette */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#040404] via-[#020202] to-transparent" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
}