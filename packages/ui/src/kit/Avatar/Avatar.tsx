"use client";

import { useState } from "react";
import type { FC } from "react";
import type { AvatarProps } from "./AvatarTypes";
import { AvatarStyles } from "./AvatarStyles";
import { cn } from "../../utils/cn";

function initials(name?: string) {
  if (!name) return "";
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join("");
}

const Avatar: FC<AvatarProps> = ({
  src,
  alt,
  name,
  icon,
  variant = "contained",
  color = "default",
  size = "md",
  radius = "full",
  isBordered = false,
  className,
}) => {
  const [error, setError] = useState(false);
  const showFallback = error || !src;

  return (
    <span className={cn(AvatarStyles.base({ variant, color, size, radius, isBordered }), className)}>
      {showFallback ? (
        <span className={AvatarStyles.fallback()}>{icon ?? initials(name)}</span>
      ) : (
        <img
          src={src}
          alt={alt ?? name ?? "avatar"}
          className={AvatarStyles.image({ radius })}
          onError={() => setError(true)}
          draggable={false}
        />
      )}
    </span>
  );
};

export default Avatar;

