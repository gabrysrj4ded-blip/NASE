type ScreenProps = {
  children: React.ReactNode;
};

export default function Screen({
  children,
}: ScreenProps) {
  return (
    <main
      className="
        min-h-screen
        bg-black
        text-white
      "
    >
      {children}
    </main>
  );
}