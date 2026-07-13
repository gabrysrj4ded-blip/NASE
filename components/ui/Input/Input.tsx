"use client";

import styles from "./Input.module.css";

import { cn } from "@/utils";

import { InputProps } from "./Input.types";

export default function Input({
  label,
  error,
  leftIcon,
  rightIcon,
  className,
  ...props
}: InputProps) {
  return (
    <div className={styles.wrapper}>
      {label && (
        <label className={styles.label}>
          {label}
        </label>
      )}

      <div className={cn(styles.inputContainer, className)}>
        {leftIcon && (
          <div className={styles.icon}>
            {leftIcon}
          </div>
        )}

        <input
          className={styles.input}
          {...props}
        />

        {rightIcon && (
          <div className={styles.icon}>
            {rightIcon}
          </div>
        )}
      </div>

      {error && (
        <span className={styles.error}>
          {error}
        </span>
      )}
    </div>
  );
}