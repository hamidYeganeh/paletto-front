import type { ReactNode } from "react";

export type TooltipVariant = "contained" | "outlined" | "flat" | "ghost" | "light" | "faded";
export type TooltipColor = "primary" | "secondary" | "success" | "warning" | "danger" | "error" | "info" | "default";

export interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  variant?: TooltipVariant;
  color?: TooltipColor;
  className?: string;
}

