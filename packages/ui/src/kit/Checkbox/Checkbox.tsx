"use client";

import { useState } from "react";
import type { ChangeEvent } from "react";
import type { CheckboxProps } from "./CheckboxTypes";
import { CheckboxStyles } from "./CheckboxStyles";
import { cn } from "../../utils/cn";

const Checkbox = ({ label, checked, defaultChecked, onChange, disabled, className }: CheckboxProps) => {
  const [internal, setInternal] = useState<boolean>(defaultChecked ?? false);
  const isControlled = typeof checked === "boolean";
  const value = isControlled ? !!checked : internal;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) setInternal(e.target.checked);
    onChange?.(e);
  };

  return (
    <label className={cn(CheckboxStyles.base(), className)}>
      <input
        type="checkbox"
        checked={value}
        onChange={handleChange}
        disabled={disabled}
        className="peer sr-only"
      />
      <span className={CheckboxStyles.box()} data-checked={value}>
        {value ? <span className={CheckboxStyles.mark()}>✓</span> : null}
      </span>
      {label ? <span className={CheckboxStyles.label()}>{label}</span> : null}
    </label>
  );
};

export default Checkbox;

