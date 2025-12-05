import type { ReactNode, ChangeEvent } from "react";

export interface CheckboxProps {
  label?: ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
}

