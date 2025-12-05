import type { ReactNode } from "react";

export type CardVariant = "contained" | "outlined" | "flat" | "ghost" | "light" | "faded";
export type CardColor = "primary" | "secondary" | "success" | "warning" | "danger" | "error" | "info" | "default";
export type CardRadius = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "full";

export interface CardProps {
  children?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  variant?: CardVariant;
  color?: CardColor;
  radius?: CardRadius;
  className?: string;
}

