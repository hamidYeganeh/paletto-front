import type { ReactNode } from "react";

export type TabsVariant = "contained" | "outlined" | "flat" | "ghost" | "light" | "faded";
export type TabsColor = "primary" | "secondary" | "success" | "warning" | "danger" | "error" | "info" | "default";
export type TabsSize = "sm" | "md" | "lg";

export interface TabItem {
  key: string;
  title: ReactNode;
  content: ReactNode;
}

export interface TabsProps {
  items: TabItem[];
  selectedKey?: string;
  defaultKey?: string;
  onSelectionChange?: (key: string) => void;
  variant?: TabsVariant;
  color?: TabsColor;
  size?: TabsSize;
  className?: string;
}

