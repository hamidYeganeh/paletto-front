import type { ReactNode } from "react";

export type ComboBoxVariant =
  | "contained"
  | "outlined"
  | "flat"
  | "ghost"
  | "light"
  | "faded";
export type ComboBoxColor =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "error"
  | "info"
  | "default";

export interface ComboBoxItem {
  key: string;
  label: ReactNode;
  description?: ReactNode;
  disabled?: boolean;
}

export interface ComboBoxProps {
  label?: ReactNode;
  description?: ReactNode;
  items: ComboBoxItem[];
  inputValue?: string;
  defaultInputValue?: string;
  onInputChange?: (value: string) => void;
  selectedKey?: string | null;
  defaultSelectedKey?: string | null;
  onSelectionChange?: (key: string | null) => void;
  isOpen?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  disabledKeys?: string[];
  isDisabled?: boolean;
  isRequired?: boolean;
  isInvalid?: boolean;
  name?: string;
  autoComplete?: string;
  allowsCustomValue?: boolean;
  allowsEmptyCollection?: boolean;
  defaultFilter?: (text: string, inputValue: string) => boolean;
  variant?: ComboBoxVariant;
  color?: ComboBoxColor;
  className?: string;
}
