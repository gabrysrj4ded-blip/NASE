import { ButtonProps } from "./Button.types";

export default function Button({
  children,
  onClick,
  disabled = false,
  variant = "primary",
  size = "md",
  fullWidth = true,
}: ButtonProps) {
  const variantClasses = {
    primary: "bg-white text-black",

    secondary: "bg-neutral-800 text-white",

    ghost: "bg-transparent border border-neutral-700 text-white",

    danger: "bg-red-600 text-white",
  };

  const sizeClasses = {
    sm: "h-10 px-4 text-sm",

    md: "h-14 px-6 text-base",

    lg: "h-16 px-8 text-lg",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${fullWidth ? "w-full" : ""}
        rounded-[18px]
        font-semibold
        transition-all
        duration-300
        active:scale-95
        disabled:opacity-50
        disabled:cursor-not-allowed
      `}
    >
      {children}
    </button>
  );
}