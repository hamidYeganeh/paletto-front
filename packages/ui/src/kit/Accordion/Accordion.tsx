"use client";

import { useState } from "react";
import type { FC } from "react";
import type { AccordionProps } from "./AccordionTypes";
import { AccordionStyles } from "./AccordionStyles";
import { cn } from "../../utils/cn";

const Accordion: FC<AccordionProps> = ({
  items,
  multiple = false,
  expandedKeys,
  defaultExpandedKeys,
  onExpandedChange,
  variant = "light",
  color = "default",
  className,
}) => {
  const [internal, setInternal] = useState<string[]>(defaultExpandedKeys ?? []);
  const keys = expandedKeys ?? internal;

  const toggle = (key: string) => {
    let next: string[];
    if (keys.includes(key)) {
      next = keys.filter((k) => k !== key);
    } else {
      next = multiple ? [...keys, key] : [key];
    }
    setInternal(next);
    onExpandedChange?.(next);
  };

  return (
    <div className={cn(AccordionStyles.root(), className)}>
      {items.map((item) => {
        const isOpen = keys.includes(item.key);
        return (
          <div key={item.key} className={AccordionStyles.item()}>
            <button
              className={AccordionStyles.header({ variant, color })}
              aria-expanded={isOpen}
              onClick={() => toggle(item.key)}
            >
              <span>{item.title}</span>
              <span>{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen ? <div className={AccordionStyles.content()}>{item.content}</div> : null}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;

