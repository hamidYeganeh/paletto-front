import type { ReactNode } from "react";

export type DropdownVariant = "contained" | "outlined" | "flat" | "ghost" | "light" | "faded";
export type DropdownColor = "primary" | "secondary" | "success" | "warning" | "danger" | "error" | "info" | "default";

export interface DropdownItem {
  key: string;
  label: ReactNode;
  icon?: ReactNode;
  onAction?: (key: string) => void;
}

export interface DropdownProps {
  trigger: ReactNode;
  items: DropdownItem[];
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  variant?: DropdownVariant;
  color?: DropdownColor;
  className?: string;
}

