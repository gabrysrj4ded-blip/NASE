import styles from "./Card.module.css";

import { cn } from "@/utils";

import { CardProps } from "./Card.types";

export default function Card({
  children,
  className,
}: CardProps) {
  return (
    <div className={cn(styles.card, className)}>
      {children}
    </div>
  );
}