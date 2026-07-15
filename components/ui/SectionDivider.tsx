export default function SectionDivider() {
  return (
    <div className="relative my-5 flex items-center justify-center">

      {/* Left line */}

      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-white/4" />

      {/* Center glow */}

      <div className="relative mx-4 flex h-3 w-3 items-center justify-center">

        <div className="absolute h-5 w-5 rounded-full bg-white/[0.05] blur-md" />

        <div className="absolute h-2 w-2 rounded-full bg-white/70 shadow-[0_0_12px_rgba(255,255,255,.65)]" />

      </div>

      {/* Right line */}

      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-white/10 to-white/4" />

    </div>
  );
}