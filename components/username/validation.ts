export function validateUsername(username: string) {
  const value = username.trim().toLowerCase();

  if (!value)
    return {
      valid: false,
      message: "",
    };

  if (value.length < 4)
    return {
      valid: false,
      message: "Too short",
    };

  if (!/^[a-z0-9_]+$/.test(value))
    return {
      valid: false,
      message: "Invalid characters",
    };

  const reserved = [
    "admin",
    "support",
    "nase",
    "telegram",
    "wallet",
  ];

  if (reserved.includes(value))
    return {
      valid: false,
      message: "Already taken",
    };

  return {
    valid: true,
    message: "Available",
  };
}