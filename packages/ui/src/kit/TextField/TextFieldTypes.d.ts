import type { ReactNode, ChangeEvent, FocusEvent } from "react";

export type FieldVariant =
  | "contained"
  | "outlined"
  | "flat"
  | "ghost"
  | "light"
  | "faded"
  | "underlined";
export type FieldColor =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "error"
  | "info"
  | "default";
export type FieldSize = "xs" | "sm" | "md" | "lg" | "xl";
export type FieldRadius = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "full";

export interface TextFieldProps {
  label?: ReactNode;
  description?: ReactNode;
  errorMessage?: ReactNode;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  variant?: FieldVariant;
  color?: FieldColor;
  size?: FieldSize;
  radius?: FieldRadius;
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
