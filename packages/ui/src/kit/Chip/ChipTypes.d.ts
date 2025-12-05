import type { ReactNode } from "react";

export type ChipVariant = "contained" | "outlined" | "flat" | "ghost" | "light" | "faded";
export type ChipColor = "primary" | "secondary" | "success" | "warning" | "danger" | "error" | "info" | "default";
export type ChipSize = "sm" | "md" | "lg";

export interface ChipProps {
  children?: ReactNode;
  variant?: ChipVariant;
  color?: ChipColor;
  size?: ChipSize;
  className?: string;
}

