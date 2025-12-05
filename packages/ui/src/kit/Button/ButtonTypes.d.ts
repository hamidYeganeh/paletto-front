import type { ReactNode, ElementType, MouseEvent } from "react";

export type ButtonVariant = "contained" | "outlined" | "flat" | "ghost" | "light" | "faded" | "shadow";
export type ButtonColor = "primary" | "secondary" | "success" | "warning" | "danger" | "default" | "error" | "info";
export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";
export type ButtonRadius = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "full";

export interface ButtonProps {
  children?: ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  radius?: ButtonRadius;
  disabledRipple?: boolean;
  className?: string;
  fullWidth?: boolean;
  disabledAnimation?: boolean;
  disableAnimation?: boolean;
  loading?: boolean;
  spinnerPlacement?: "start" | "end" | "center";
  spinner?: ReactNode;
  isIconOnly?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  as?: ElementType;
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  id?: string;
  name?: string;
  value?: string | number;
  ariaBusy?: boolean;
  ariaLabel?: string;
}
