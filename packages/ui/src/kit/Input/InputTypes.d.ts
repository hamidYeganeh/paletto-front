import type { ReactNode, ChangeEvent, FocusEvent } from "react";

export type InputVariant = "contained" | "outlined" | "flat" | "ghost" | "light" | "faded" | "underlined";
export type InputColor = "primary" | "secondary" | "success" | "warning" | "danger" | "error" | "info" | "default";
export type InputSize = "xs" | "sm" | "md" | "lg" | "xl";
export type InputRadius = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "full";

export interface InputProps {
  label?: ReactNode;
  description?: ReactNode;
  errorMessage?: ReactNode;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  variant?: InputVariant;
  color?: InputColor;
  size?: InputSize;
  radius?: InputRadius;
  fullWidth?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  className?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  autoComplete?: string;
  id?: string;
  invalid?: boolean;
}

