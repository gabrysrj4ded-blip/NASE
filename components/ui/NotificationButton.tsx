"use client";

import { Bell } from "lucide-react";

import IconButton from "./IconButton";

type Props = {
  count?: number;
  onClick?: () => void;
};

export default function NotificationButton({
  count = 3,
  onClick,
}: Props) {
  return (
    <IconButton
      icon={Bell}
      label="Notifications"
      badge={count}
      onClick={onClick}
    />
  );
}