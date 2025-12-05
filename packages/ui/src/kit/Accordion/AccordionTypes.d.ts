import type { ReactNode } from "react";

export type AccordionVariant = "contained" | "outlined" | "flat" | "ghost" | "light" | "faded";
export type AccordionColor = "primary" | "secondary" | "success" | "warning" | "danger" | "error" | "info" | "default";

export interface AccordionItem {
  key: string;
  title: ReactNode;
  content: ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  multiple?: boolean;
  expandedKeys?: string[];
  defaultExpandedKeys?: string[];
  onExpandedChange?: (keys: string[]) => void;
  variant?: AccordionVariant;
  color?: AccordionColor;
  className?: string;
}

