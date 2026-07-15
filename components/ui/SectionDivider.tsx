export default function SectionDivider() {
  return (
    <div className="my-5 flex items-center justify-center">
      <div className="relative h-px w-full overflow-hidden">

        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-transparent
            via-white/16
            to-transparent
          "
        />

        <div
          className="
            absolute left-1/2 top-1/2
            h-px w-40
            -translate-x-1/2 -translate-y-1/2
            bg-white/8
            blur-[2px]
          "
        />

      </div>
    </div>
  );
}