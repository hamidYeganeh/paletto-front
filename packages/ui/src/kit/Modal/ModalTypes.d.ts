import type { ReactNode } from "react";

export type ModalVariant = "contained" | "outlined" | "flat" | "ghost" | "light" | "faded";
export type ModalColor = "primary" | "secondary" | "success" | "warning" | "danger" | "error" | "info" | "default";
export type ModalSize = "sm" | "md" | "lg" | "xl";
export type ModalRadius = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "full";

export interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onClose?: () => void;
  title?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  closeButton?: boolean;
  closeOnOverlayClick?: boolean;
  variant?: ModalVariant;
  color?: ModalColor;
  size?: ModalSize;
  radius?: ModalRadius;
  fullWidth?: boolean;
  className?: string;
  panelClassName?: string;
  backdropClassName?: string;
}

