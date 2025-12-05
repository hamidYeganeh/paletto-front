import type { ReactNode } from "react";

export type AvatarVariant =
  | "contained"
  | "outlined"
  | "flat"
  | "ghost"
  | "light"
  | "faded";
export type AvatarColor =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "error"
  | "info"
  | "default";
export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";
export type AvatarRadius = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "full";

export interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  icon?: ReactNode;
  variant?: AvatarVariant;
  color?: AvatarColor;
  size?: AvatarSize;
  radius?: AvatarRadius;
  isBordered?: boolean;
  className?: string;
}

