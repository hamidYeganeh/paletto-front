import type { ReactNode } from "react";

export type AlertVariant = "contained" | "outlined" | "flat" | "ghost" | "light" | "faded";
export type AlertColor = "primary" | "secondary" | "success" | "warning" | "danger" | "error" | "info" | "default";

export interface AlertProps {
  title?: ReactNode;
  description?: ReactNode;
  variant?: AlertVariant;
  color?: AlertColor;
  className?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

