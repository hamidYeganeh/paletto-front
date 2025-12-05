"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { FC } from "react";
import type { DropdownProps } from "./DropdownTypes";
import { DropdownStyles } from "./DropdownStyles";
import { cn } from "../../utils/cn";

const Dropdown: FC<DropdownProps> = ({
  trigger,
  items,
  open,
  onOpenChange,
  variant = "flat",
  color = "default",
  className,
}) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = open ?? internalOpen;
  const rootRef = useRef<HTMLDivElement | null>(null);

  const setOpen = useCallback(
    (v: boolean) => {
      setInternalOpen(v);
      onOpenChange?.(v);
    },
    [onOpenChange]
  );

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    if (isOpen) {
      document.addEventListener("mousedown", handler);
      return () => document.removeEventListener("mousedown", handler);
    }
  }, [isOpen, setOpen]);

  return (
    <div ref={rootRef} className={cn(DropdownStyles.root(), className)}>
      <span onClick={() => setOpen(!isOpen)}>{trigger}</span>
      <div
        data-open={isOpen}
        className={DropdownStyles.menu({ variant, color })}
      >
        {items.map((item) => (
          <div
            key={item.key}
            className={DropdownStyles.item()}
            onClick={() => {
              item.onAction?.(item.key);
              setOpen(false);
            }}
          >
            {item.icon ? <span>{item.icon}</span> : null}
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
