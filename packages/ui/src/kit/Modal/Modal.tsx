"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import type { ModalProps } from "./ModalTypes";
import { ModalStyles } from "./ModalStyles";
import { cn } from "../../utils/cn";

const Modal = (props: ModalProps) => {
  const {
    open,
    onOpenChange,
    onClose,
    title,
    children,
    footer,
    closeButton = true,
    closeOnOverlayClick = true,
    variant = "contained",
    color = "primary",
    size = "md",
    radius = "md",
    fullWidth,
    className,
    panelClassName,
    backdropClassName,
  } = props;

  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onOpenChange(false);
        onClose?.();
      }
    };
    document.addEventListener("keydown", onKey);
    panelRef.current?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onOpenChange, onClose]);

  if (!open) return null;

  const overlay = (
    <div
      className={cn(ModalStyles.backdrop(), backdropClassName)}
      onClick={() => {
        if (closeOnOverlayClick) {
          onOpenChange(false);
          onClose?.();
        }
      }}
    />
  );

  const panel = (
    <div className={ModalStyles.container()}>
      <div
        ref={panelRef}
        tabIndex={-1}
        className={cn(
          ModalStyles.panel({ variant, color, size, radius }),
          fullWidth ? "w-full" : undefined,
          panelClassName,
          className
        )}
        role="dialog"
        aria-modal
      >
        {closeButton ? (
          <button
            type="button"
            className={ModalStyles.closeButton()}
            onClick={() => {
              onOpenChange(false);
              onClose?.();
            }}
            aria-label="Close"
          >
            ×
          </button>
        ) : null}
        {title ? <div className={ModalStyles.header()}>{title}</div> : null}
        <div className={ModalStyles.body()}>{children}</div>
        {footer ? <div className={ModalStyles.footer()}>{footer}</div> : null}
      </div>
    </div>
  );

  return createPortal(
    <>
      {overlay}
      {panel}
    </>,
    document.body
  );
};

export default Modal;
