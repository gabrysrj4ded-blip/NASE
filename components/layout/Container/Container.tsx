type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({
  children,
}: ContainerProps) {
  return (
    <div
      className="
        w-full
        max-w-md
        mx-auto
        px-6
      "
    >
      {children}
    </div>
  );
}