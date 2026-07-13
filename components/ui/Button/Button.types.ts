export type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "danger";

export type ButtonSize =
  | "sm"
  | "md"
  | "lg";

export interface ButtonProps {
  children: React.ReactNode;

  onClick?: () => void;

  disabled?: boolean;

  variant?: ButtonVariant;

  size?: ButtonSize;

  fullWidth?: boolean;
}